import { google } from 'googleapis';

// Google Sheets configuration
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = 'Contact Forms';

// Create Google Sheets client
const createSheetsClient = () => {
    try {
        // Parse the service account key from environment variable
        const serviceAccountKey = {
                "type": "service_account",
                "project_id": "nimble-gate-336504",
                "private_key_id": "1a502ade0ecac391801dad9ab4aaab7afe052cf5",
                "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCnbTXqhTdfjubR\nFjWZzO+8yMkZf3CvhuTneFw9eA20vr3eIFVCXJh6eNoolFx8lZjHqmn5RH8ZA05c\nTyibE7rY7lfLHNOhymqzAWy3QOBdLQHIhQNkMu05gxQjSHXe5WrOVlihM8rroFJg\nskfQxrqarvi2hWjVAtEF9poyMQroHRbjKyKpdrcSuqIcZRDrsm/wPqfxpkFXL2N2\nQ90R/n467lOgl+quu78Uc0ZDsE5n3xf2pFKXlQVA7RwGB3IGVI6ya4xSzk7gaQpa\n4SpXxPvdhMOS6eda2Vd82jifRxXqWo9L1Ltv8O9MobzhMRCCNjzLYRRjJrq8KURR\nk3aYbXqbAgMBAAECggEABRDYlp1d0WGkWa41vU74KOVrB9SHI5lcG5e4bPt7qOeJ\nOURIoB+ujhBSJ0krrhvHiem2tCVCQMepG0FakHOIUXyO6SU1Mrv0/qIdrgoANTpo\nx3WWZoPlEUjp3iCKpHhiO93rEkNcFUUo85godKv6NqiAUP+xJwvqYXyIRqEOsXrY\n/gvQt1XOpzvKwGqEu298mUiRMwgJugUzAcXbbCf/wk8vPSLwjFKns+XEep0KPUae\nylc5FFDQ0e2cGxP/rLpBby2rT/YkYaNg/Y71GZfaH3JKpBCHb6JHoN+fGsFOHOhF\nvXPHEyYy89fsPuP06jBNtEXzDGbfOC2QOXiSm8wY+QKBgQDq6iBIQ1o4jKt6isYs\nGGofafxVzLjhwWzmACq2mn75MfXSAHrZWJSgx1h4YXBGFsbNFYHrmBkjYJk7lUe9\n0ia8QckuPZNd76c7XJCYvOXu/FLiYqkfr/e0A4HvrPvMg5cPWrDnAA3lI9FV/xhz\n9zdJB+BrYh9ZKj+qmUjx0ViX2QKBgQC2dFgi6aQAYwPujukZv5D6x+gwaibu9Vqs\n0PeNNw7lr0Y9jDzWrS0s9jHmiwhm3SxWboxj4yyVHaUy4gr+mBkHvQ5KOGqHKdYW\n6SYd/RDgfN95KKvpgbwhK3qkmkBx546BnrTr5IXdqhE/z6xSKXtvBg5JELtnZtl5\ntneB2pPxkwKBgQDnkudB9UtSJbHBOl5DB8pNr3A1sHus6L2OOinhGooC47I9U4XH\nDmBt4jWfbgZ8wWU2tHX/pk9ZpZdIuk8fm7Pdr0hAUikc1+vWQ9izCLvuDEU0sCei\nehhIF5EWkUMjh7D5TODIxy/ra5SoHrGfV9vjHWWo1fCrOE/MwBC9eS7JeQKBgBS/\nDfaKUpeoqp3Jqj+/RKD/citvJpYtV+4mpL9t70e2smn1NEXE00o1hF8OmBn6NDxv\nvY7uGfeqs0oh4dYpPU9f8+wEljhgTXO1dxwZ1n1wNYj1UvbuRZIP+5YT5BgPmGis\nvy3DgmU+HVAAMTv2c46gRaeRO336d+gbE2O0kvX5AoGBALTiKy6ljgJYrstnmcaM\n2HEcncraoTutz2TeO4IrOWH14ipjpcepGWfLgT9YArdiP/GgGi0JQC3DeUmK3V+O\nR6ELM6aNIWsP7noPwKmhr+UDnlLyfyp5HlkgB0tJAQ9nANempt0A3PgAe3h4LKCt\nGq52J68wxQrehEYhtNpaNNZt\n-----END PRIVATE KEY-----\n",
                "client_email": "contact-form@nimble-gate-336504.iam.gserviceaccount.com",
                "client_id": "104781419807791669086",
                "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                "token_uri": "https://oauth2.googleapis.com/token",
                "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
                "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/contact-form%40nimble-gate-336504.iam.gserviceaccount.com",
                "universe_domain": "googleapis.com"
            };

        
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
            range: `${SHEET_NAME}!A1:H1`,
        });
        
        if (!response.data.values || response.data.values.length === 0) {
            // Add headers
            await sheets.spreadsheets.values.update({
                spreadsheetId: SPREADSHEET_ID,
                range: `${SHEET_NAME}!A1:H1`,
                valueInputOption: 'RAW',
                requestBody: {
                    values: [[
                        'Timestamp',
                        'Name',
                        'Email',
                        'Subject',
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
        
        // Prepare row data
        const rowData = [
            new Date().toISOString(), // Timestamp
            contactData.name,
            contactData.email,
            contactData.subject,
            contactData.message,
            'New', // Status
            clientIP,
            userAgent
        ];
        
        // Append the data to the sheet
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: `${SHEET_NAME}!A:H`,
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
            range: `${SHEET_NAME}!A:H`,
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
        
        // Update the status column (column F)
        await sheets.spreadsheets.values.update({
            spreadsheetId: SPREADSHEET_ID,
            range: `${SHEET_NAME}!F${rowNumber}`,
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
