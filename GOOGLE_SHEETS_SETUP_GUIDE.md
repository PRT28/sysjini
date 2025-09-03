# 📊 Google Sheets Integration & Admin Panel Setup Guide

This guide will help you set up Google Sheets integration to store contact form submissions and create a secure admin panel to view them.

## 🚀 Quick Overview

The system now:
- ✅ Saves all contact form submissions to Google Sheets
- ✅ Sends emails to prithviraj.tiwari@sysjini.in
- ✅ Provides a secure admin panel at `/admin`
- ✅ Allows viewing, filtering, and managing submissions
- ✅ Updates submission status (New, Read, Replied)

## 📋 Step 1: Google Cloud Setup

### 1.1 Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Click "New Project" or select existing project
3. Give it a name like "Sysjini Contact Form"
4. Note the Project ID

### 1.2 Enable Google Sheets API
1. In Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google Sheets API"
3. Click on it and press "Enable"

### 1.3 Create Service Account
1. Go to "IAM & Admin" > "Service Accounts"
2. Click "Create Service Account"
3. Name: "Sysjini Contact Form Service"
4. Description: "Service account for contact form submissions"
5. Click "Create and Continue"
6. Skip role assignment (click "Continue")
7. Click "Done"

### 1.4 Generate Service Account Key
1. Click on the created service account
2. Go to "Keys" tab
3. Click "Add Key" > "Create new key"
4. Select "JSON" format
5. Click "Create" - this downloads the JSON file
6. Keep this file secure!

## 📊 Step 2: Google Sheets Setup

### 2.1 Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "Sysjini Contact Forms"
4. Copy the Sheet ID from URL (between `/d/` and `/edit`)
   - Example: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`

### 2.2 Share Sheet with Service Account
1. In your Google Sheet, click "Share"
2. Add the service account email (found in the JSON file as `client_email`)
3. Give it "Editor" permissions
4. Click "Send"

## 🔧 Step 3: Environment Configuration

### 3.1 Update .env.local
Copy `.env.example` to `.env.local` and fill in:

```env
# Gmail Configuration
EMAIL_USER=prithvi.raj@sysjini.in
EMAIL_PASSWORD=your-gmail-app-password

# Google Sheets Configuration
GOOGLE_SHEET_ID=your-sheet-id-from-url
GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"your-project",...}

# Admin Panel
ADMIN_PASSWORD=your-secure-admin-password

NODE_ENV=development
```

### 3.2 Service Account Key Setup
1. Open the downloaded JSON file
2. Copy the ENTIRE JSON content
3. Paste it as the value for `GOOGLE_SERVICE_ACCOUNT_KEY`
4. Make sure it's on one line with proper escaping

Example:
```env
GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"sysjini-contact","private_key_id":"abc123","private_key":"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n","client_email":"sysjini-contact@sysjini-contact.iam.gserviceaccount.com","client_id":"123456789","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token"}
```

## 🔐 Step 4: Admin Panel Access

### 4.1 Set Admin Password
Choose a secure password and set it in `.env.local`:
```env
ADMIN_PASSWORD=YourSecurePassword123!
```

### 4.2 Access Admin Panel
1. Go to `http://localhost:3000/admin`
2. Enter your admin password
3. Access the dashboard at `http://localhost:3000/admin/dashboard`

## 📊 Step 5: Install Dependencies

```bash
npm install googleapis
```

## 🧪 Step 6: Test the Setup

### 6.1 Test Contact Form
1. Go to your contact page
2. Fill out and submit the form
3. Check that:
   - Email is sent to prithviraj.tiwari@sysjini.in
   - User receives auto-reply
   - Submission appears in Google Sheets
   - No errors in console

### 6.2 Test Admin Panel
1. Go to `/admin`
2. Login with your admin password
3. Verify you can see the submission
4. Test status updates (New → Read → Replied)

## 📋 Features of the Admin Panel

### Dashboard Features:
- ✅ **Statistics Overview**: Total, New, Read, Replied, Recent (30 days)
- ✅ **Contact List**: Paginated list of all submissions
- ✅ **Status Management**: Update submission status
- ✅ **Contact Details**: View full message content
- ✅ **Email Integration**: Direct "Reply via Email" links
- ✅ **Real-time Updates**: Refresh data automatically
- ✅ **Secure Authentication**: Password-protected access

### Contact Information Stored:
- Timestamp
- Name
- Email
- Subject
- Message
- Status (New/Read/Replied)
- IP Address
- User Agent

## 🔒 Security Features

### Authentication:
- Simple password-based authentication
- Token stored in localStorage
- API endpoints protected with Bearer token
- Automatic logout on invalid token

### Data Protection:
- Service account with minimal permissions
- Environment variables for sensitive data
- HTTPS recommended for production
- No sensitive data in client-side code

## 🚀 Production Deployment

### Before Going Live:
1. ✅ Set strong admin password
2. ✅ Use HTTPS for admin panel
3. ✅ Verify Google Sheets permissions
4. ✅ Test email delivery
5. ✅ Monitor Google Sheets quota limits

### Environment Variables for Production:
```env
EMAIL_USER=prithvi.raj@sysjini.in
EMAIL_PASSWORD=production-app-password
GOOGLE_SHEET_ID=production-sheet-id
GOOGLE_SERVICE_ACCOUNT_KEY=production-service-account-json
ADMIN_PASSWORD=production-admin-password
NODE_ENV=production
```

## 📊 Google Sheets Structure

The system automatically creates a sheet with these columns:
- **Timestamp**: When the form was submitted
- **Name**: Contact's name
- **Email**: Contact's email address
- **Subject**: Message subject
- **Message**: Full message content
- **Status**: New/Read/Replied
- **IP Address**: Submitter's IP
- **User Agent**: Browser information

## 🛠️ Troubleshooting

### Common Issues:

1. **"Service Account Key Invalid"**
   - Check JSON format in environment variable
   - Ensure no line breaks in the JSON
   - Verify service account has access to the sheet

2. **"Sheet Not Found"**
   - Verify GOOGLE_SHEET_ID is correct
   - Check that service account email has access to the sheet
   - Ensure Google Sheets API is enabled

3. **"Authentication Failed" (Admin)**
   - Check ADMIN_PASSWORD in environment variables
   - Clear localStorage and try again
   - Verify password matches exactly

4. **"Permission Denied"**
   - Share the Google Sheet with service account email
   - Give "Editor" permissions to service account
   - Check service account key is valid

## ✅ Success Indicators

Your system is working correctly when:
- ✅ Contact forms save to Google Sheets
- ✅ Emails are sent successfully
- ✅ Admin panel shows submissions
- ✅ Status updates work in admin panel
- ✅ No errors in browser console
- ✅ Google Sheets updates in real-time

---

**Your contact form system with Google Sheets integration and admin panel is now ready!** 🎉
