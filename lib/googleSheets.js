import { google } from 'googleapis';

// Google Sheets configuration
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = 'Contact Forms';

// Create Google Sheets client
const createSheetsClient = () => {
    try {
        // Parse the service account key from environment variable
        let serviceAccountKey;

        if (!process.env.GOOGLE_SERVICE_ACCOUNT_KEY && !process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64) {
            throw new Error('Either GOOGLE_SERVICE_ACCOUNT_KEY or GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 environment variable must be set');
        }

        // Try base64 encoded key first if available
        if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64) {
            try {
                const decodedKey = Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64, 'base64').toString('utf-8');
                serviceAccountKey = JSON.parse(decodedKey);
            } catch (base64Error) {
                console.error('Failed to parse base64 encoded service account key:', base64Error.message);
                throw new Error('Invalid base64 encoded service account key');
            }
        } else {
            try {
                // Try to parse as JSON directly
                serviceAccountKey = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
            } catch (parseError) {
                console.error('Failed to parse GOOGLE_SERVICE_ACCOUNT_KEY as JSON:', parseError.message);
                console.log('Raw value length:', process.env.GOOGLE_SERVICE_ACCOUNT_KEY?.length);
                console.log('First 100 chars:', process.env.GOOGLE_SERVICE_ACCOUNT_KEY?.substring(0, 100));

                // Try to handle common formatting issues
                let cleanedKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY.trim();

                // Remove any surrounding quotes if present
                if ((cleanedKey.startsWith('"') && cleanedKey.endsWith('"')) ||
                    (cleanedKey.startsWith("'") && cleanedKey.endsWith("'"))) {
                    cleanedKey = cleanedKey.slice(1, -1);
                }

                // Replace escaped quotes and newlines
                cleanedKey = cleanedKey.replace(/\\"/g, '"').replace(/\\n/g, '\n');

                try {
                    serviceAccountKey = JSON.parse(cleanedKey);
                } catch (secondParseError) {
                    throw new Error(`Invalid JSON in GOOGLE_SERVICE_ACCOUNT_KEY: ${secondParseError.message}. Please check the format of your service account key.`);
                }
            }
        }

        // Validate the service account key has required fields
        const requiredFields = ['type', 'project_id', 'private_key_id', 'private_key', 'client_email', 'client_id', 'auth_uri', 'token_uri'];
        const missingFields = requiredFields.filter(field => !serviceAccountKey[field]);

        if (missingFields.length > 0) {
            throw new Error(`Service account key is missing required fields: ${missingFields.join(', ')}`);
        }

        const auth = new google.auth.GoogleAuth({
            credentials: serviceAccountKey,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        return google.sheets({ version: 'v4', auth });
    } catch (error) {
        console.error('Error creating Google Sheets client:', error);
        throw new Error('Failed to initialize Google Sheets client');
    }
};

// Initialize the spreadsheet with headers if it doesn't exist
export const initializeSpreadsheet = async () => {
    try {
        const sheets = createSheetsClient();
        
        // Check if the sheet exists
        const spreadsheet = await sheets.spreadsheets.get({
            spreadsheetId: SPREADSHEET_ID,
        });
        
        const sheetExists = spreadsheet.data.sheets.some(
            sheet => sheet.properties.title === SHEET_NAME
        );
        
        if (!sheetExists) {
            // Create the sheet
            await sheets.spreadsheets.batchUpdate({
                spreadsheetId: SPREADSHEET_ID,
                requestBody: {
                    requests: [{
                        addSheet: {
                            properties: {
                                title: SHEET_NAME,
                            },
                        },
                    }],
                },
            });
        }
        
        // Check if headers exist
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: `${SHEET_NAME}!A1:I1`,
        });

        if (!response.data.values || response.data.values.length === 0) {
            // Add headers
            await sheets.spreadsheets.values.update({
                spreadsheetId: SPREADSHEET_ID,
                range: `${SHEET_NAME}!A1:I1`,
                valueInputOption: 'RAW',
                requestBody: {
                    values: [[
                        'Timestamp',
                        'Name',
                        'Email',
                        'Service',
                        'Budget',
                        'Message',
                        'Status',
                        'IP Address',
                        'User Agent'
                    ]],
                },
            });
        }
        
        return true;
    } catch (error) {
        console.error('Error initializing spreadsheet:', error);
        throw error;
    }
};

// Add contact form submission to Google Sheets
export const addContactToSheet = async (contactData, request = null) => {
    try {
        const sheets = createSheetsClient();
        
        // Initialize spreadsheet if needed
        await initializeSpreadsheet();
        
        // Get client IP and user agent
        const clientIP = request?.headers?.get('x-forwarded-for') || 
                        request?.headers?.get('x-real-ip') || 
                        'Unknown';
        const userAgent = request?.headers?.get('user-agent') || 'Unknown';
        
        // Format budget value
        const formatBudget = (budget) => {
            if (!budget) return 'Not specified';
            const budgetNum = parseInt(budget);
            return `₹${budgetNum.toLocaleString('en-IN')}`;
        };

        // Format service value
        const formatService = (service) => {
            const serviceMap = {
                'web-development': 'Web & Mobile Development',
                'digital-marketing': 'Digital Marketing & SEO',
                'design-branding': 'Design & Branding',
                'ecommerce': 'E-commerce Solutions',
                'cloud-devops': 'Cloud & DevOps',
                'ui-ux': 'UI/UX Consulting'
            };
            return serviceMap[service] || service || 'Not specified';
        };

        // Prepare row data
        const rowData = [
            new Date().toISOString(), // Timestamp
            contactData.name,
            contactData.email,
            formatService(contactData.service), // Service instead of subject
            formatBudget(contactData.budget), // Budget
            contactData.message || 'No message provided',
            'New', // Status
            clientIP,
            userAgent
        ];

        // Append the data to the sheet
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: `${SHEET_NAME}!A:I`,
            valueInputOption: 'RAW',
            insertDataOption: 'INSERT_ROWS',
            requestBody: {
                values: [rowData],
            },
        });
        
        console.log('Contact added to Google Sheets:', response.data.updates);
        return response.data;
        
    } catch (error) {
        console.error('Error adding contact to Google Sheets:', error);
        throw error;
    }
};

// Get all contacts from Google Sheets
export const getContactsFromSheet = async (limit = 100) => {
    try {
        const sheets = createSheetsClient();
        
        // Get data from the sheet
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: `${SHEET_NAME}!A:I`,
        });
        
        const rows = response.data.values || [];
        
        if (rows.length === 0) {
            return [];
        }
        
        // Skip header row and convert to objects
        const headers = rows[0];
        const contacts = rows.slice(1, limit + 1).map((row, index) => {
            const contact = {};
            headers.forEach((header, i) => {
                contact[header.toLowerCase().replace(' ', '_')] = row[i] || '';
            });
            contact.row_number = index + 2; // +2 because we skip header and arrays are 0-indexed
            return contact;
        });
        
        return contacts.reverse(); // Show newest first
        
    } catch (error) {
        console.error('Error getting contacts from Google Sheets:', error);
        throw error;
    }
};

// Update contact status in Google Sheets
export const updateContactStatus = async (rowNumber, status) => {
    try {
        const sheets = createSheetsClient();
        
        // Update the status column (column G)
        await sheets.spreadsheets.values.update({
            spreadsheetId: SPREADSHEET_ID,
            range: `${SHEET_NAME}!G${rowNumber}`,
            valueInputOption: 'RAW',
            requestBody: {
                values: [[status]],
            },
        });
        
        console.log(`Contact status updated to ${status} for row ${rowNumber}`);
        return true;
        
    } catch (error) {
        console.error('Error updating contact status:', error);
        throw error;
    }
};

// Get contact statistics from Google Sheets
export const getContactStats = async () => {
    try {
        const contacts = await getContactsFromSheet(1000); // Get more for stats
        
        const total = contacts.length;
        const newCount = contacts.filter(c => c.status === 'New').length;
        const readCount = contacts.filter(c => c.status === 'Read').length;
        const repliedCount = contacts.filter(c => c.status === 'Replied').length;
        
        // Get contacts from last 30 days
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const recentContacts = contacts.filter(c => {
            const contactDate = new Date(c.timestamp);
            return contactDate > thirtyDaysAgo;
        }).length;
        
        return {
            total,
            new: newCount,
            read: readCount,
            replied: repliedCount,
            recent: recentContacts,
        };
        
    } catch (error) {
        console.error('Error getting contact stats:', error);
        return {
            total: 0,
            new: 0,
            read: 0,
            replied: 0,
            recent: 0,
        };
    }
};

// Test Google Sheets connection
export const testSheetsConnection = async () => {
    try {
        const sheets = createSheetsClient();
        
        const response = await sheets.spreadsheets.get({
            spreadsheetId: SPREADSHEET_ID,
        });
        
        return {
            success: true,
            title: response.data.properties.title,
            sheetCount: response.data.sheets.length,
        };
        
    } catch (error) {
        console.error('Error testing Google Sheets connection:', error);
        return {
            success: false,
            error: error.message,
        };
    }
};
