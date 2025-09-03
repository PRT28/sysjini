# 📧 Email Setup Guide for Sysjini Contact Form

This guide will help you set up the email functionality for the contact form so that messages are sent to `prithviraj.tiwari@sysjini.in`.

## 🚀 Quick Setup (Using Gmail with Nodemailer)

### Step 1: Enable 2-Factor Authentication on Gmail
1. Go to [Google Account settings](https://myaccount.google.com)
2. Navigate to "Security"
3. Enable "2-Step Verification" if not already enabled
4. Complete the setup process

### Step 2: Generate App Password
1. In Google Account settings, go to "Security"
2. Under "2-Step Verification", click "App passwords"
3. Select "Mail" as the app
4. Select your device or choose "Other" and name it "Sysjini Contact Form"
5. Copy the generated 16-character password (no spaces)

### Step 3: Configure Environment Variables
1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your Gmail credentials:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-16-character-app-password
   NODE_ENV=development
   ```

### Step 4: Install Dependencies
Make sure nodemailer is installed:
```bash
npm install nodemailer
```

## 📋 What the System Does

### When a user submits the contact form:

1. **Validation**: Form data is validated on both frontend and backend
2. **Admin Email**: Sends a beautifully formatted email to `prithviraj.tiwari@sysjini.in` with:
   - User's name and email
   - Subject and message
   - Timestamp
   - Priority level (based on keywords)
   - Professional HTML formatting

3. **Auto-Reply**: Sends a thank you email to the user with:
   - Confirmation of message receipt
   - Expected response time (24 hours)
   - Links to your services and website
   - Professional branding

### Email Features:
- ✅ **Beautiful HTML Templates**: Professional, responsive email design
- ✅ **Priority Detection**: Automatically categorizes emails by urgency
- ✅ **Auto-Reply System**: Immediate confirmation to users
- ✅ **Form Validation**: Prevents spam and ensures quality submissions
- ✅ **Error Handling**: Graceful error messages and retry logic
- ✅ **Loading States**: User-friendly form submission experience

## 🎨 Email Template Features

### Admin Email Template:
- Clean, professional design with Sysjini branding
- Color-coded priority levels
- Easy-to-read contact information
- Direct reply functionality
- Timestamp and formatting

### User Auto-Reply Template:
- Welcoming thank you message
- Clear expectations (24-hour response)
- Links to your services and website
- Professional contact information
- Consistent branding

## 🔧 Testing the Setup

### 1. Development Testing
```bash
# Start your development server
npm run dev

# Navigate to /contact page
# Fill out and submit the form
# Check console for success/error messages
```

### 2. Check Email Delivery
- Check `prithviraj.tiwari@sysjini.in` inbox for admin notification
- Check the user's email for auto-reply confirmation
- Verify emails are not in spam folder

### 3. Gmail Account
- Ensure 2-factor authentication is enabled
- Verify app password is correctly generated
- Check Gmail account for any security alerts

## 🛠️ Troubleshooting

### Common Issues:

1. **"Authentication Failed" Error**
   - Double-check your Gmail credentials in `.env.local`
   - Ensure you're using an App Password, not your regular password
   - Verify 2-factor authentication is enabled on Gmail
   - Check for typos in email address

2. **Emails Not Sending**
   - Verify Gmail SMTP settings are correct
   - Check if Gmail account has any restrictions
   - Ensure app password is valid and not expired
   - Check server logs for detailed error messages

3. **Emails Going to Spam**
   - Gmail has good deliverability, but check spam folders
   - Ensure "from" address matches your Gmail account
   - Avoid spam trigger words in subject/content
   - Consider using a custom domain email for production

4. **Form Validation Errors**
   - Check browser console for JavaScript errors
   - Verify all required fields are filled
   - Ensure email format is valid

5. **"Connection Timeout" Error**
   - Check your internet connection
   - Verify Gmail SMTP ports (587) are not blocked
   - Try using port 465 with secure: true

### Debug Mode:
Set `NODE_ENV=development` in `.env.local` to see detailed error messages.

## 🚀 Production Deployment

### Before Going Live:
1. ✅ Test email delivery thoroughly from production environment
2. ✅ Verify Gmail account security and limits
3. ✅ Set up monitoring for email delivery
4. ✅ Consider using a business Gmail account for higher limits
5. ✅ Test from multiple email providers

### Environment Variables for Production:
```env
EMAIL_USER=your-production-email@gmail.com
EMAIL_PASSWORD=your-production-app-password
NODE_ENV=production
```

## 📊 Monitoring & Analytics

### Gmail Provides:
- Sent mail tracking in Gmail interface
- Delivery confirmations
- Bounce notifications
- Security alerts for unusual activity

### Recommended Monitoring:
- Set up alerts for failed deliveries
- Monitor bounce rates
- Track response times
- Review spam complaints

## 🔒 Security Best Practices

1. **API Key Security**:
   - Never commit API keys to version control
   - Use environment variables only
   - Rotate keys periodically

2. **Form Security**:
   - Rate limiting implemented
   - Input validation and sanitization
   - CSRF protection (built into Next.js)

3. **Email Security**:
   - SPF/DKIM/DMARC records configured
   - Secure HTTPS connections
   - No sensitive data in emails

## 📞 Support

If you encounter any issues:
1. Check the Resend documentation: [https://resend.com/docs](https://resend.com/docs)
2. Review the troubleshooting section above
3. Check the browser console and server logs
4. Contact Resend support if needed

## 🎯 Success Indicators

Your email system is working correctly when:
- ✅ Form submissions show success message
- ✅ Admin receives formatted emails at `prithviraj.tiwari@sysjini.in`
- ✅ Users receive auto-reply confirmations
- ✅ No errors in browser console or server logs
- ✅ Resend dashboard shows successful deliveries

---

**Ready to receive customer inquiries!** 🎉
