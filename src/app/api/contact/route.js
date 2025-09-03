import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { addContactToSheet } from '../../../../lib/googleSheets';

// Email configuration
const createTransporter = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });
};

// Auto-reply email template

// Auto-reply template
const createAutoReplyTemplate = (name, service, budget) => {
    // Format service name
    const serviceMap = {
        'web-development': 'Web & Mobile Development',
        'digital-marketing': 'Digital Marketing & SEO',
        'design-branding': 'Design & Branding',
        'ecommerce': 'E-commerce Solutions',
        'cloud-devops': 'Cloud & DevOps',
        'ui-ux': 'UI/UX Consulting'
    };
    const serviceName = serviceMap[service] || service;

    // Format budget
    const budgetText = budget ? `₹${parseInt(budget).toLocaleString('en-IN')}` : 'To be discussed';
    return {
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Thank you for contacting Sysjini</title>
                <style>
                    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; }
                    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
                    .header { background: linear-gradient(135deg, #10b981, #059669); padding: 30px; text-align: center; }
                    .header h1 { color: #ffffff; margin: 0; font-size: 28px; font-weight: 600; }
                    .content { padding: 40px 30px; }
                    .content h2 { color: #1f2937; font-size: 24px; margin-bottom: 20px; }
                    .content p { color: #4b5563; line-height: 1.6; margin-bottom: 20px; font-size: 16px; }
                    .cta-button { display: inline-block; background: linear-gradient(135deg, #10b981, #059669); color: #ffffff; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 20px 0; }
                    .footer { background-color: #f3f4f6; padding: 20px 30px; text-align: center; }
                    .footer p { color: #6b7280; font-size: 14px; margin: 5px 0; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>🙏 Thank You!</h1>
                    </div>
                    
                    <div class="content">
                        <h2>Hi ${name},</h2>
                        <p>Thank you for reaching out to <strong>Sysjini</strong>! I've personally received your message and appreciate you taking the time to contact us.</p>

                        <div style="background-color: #f0fdf4; border-left: 4px solid #10b981; padding: 20px; margin: 20px 0; border-radius: 8px;">
                            <h3 style="color: #065f46; margin: 0 0 10px 0; font-size: 18px;">Your Inquiry Details:</h3>
                            <p style="margin: 5px 0; color: #047857;"><strong>Service:</strong> ${serviceName}</p>
                            <p style="margin: 5px 0; color: #047857;"><strong>Budget Range:</strong> ${budgetText}</p>
                        </div>

                        <p>I will review your inquiry and get back to you within <strong>24 hours</strong>. I'm excited to learn more about your project and explore how we can help bring your digital vision to life.</p>
                        
                        <p>In the meantime, feel free to:</p>
                        <ul style="color: #4b5563; line-height: 1.8;">
                            <li>Explore our <a href="https://sysjini.in/services" style="color: #10b981;">services</a></li>
                            <li>Check out our <a href="https://sysjini.in/blogs" style="color: #10b981;">latest blog posts</a></li>
                            <li>Follow us on social media for updates</li>
                        </ul>
                        
                        <a href="https://sysjini.in" class="cta-button">Visit Our Website</a>
                    </div>
                    
                    <div class="footer">
                        <p><strong>Best regards,<br/>Prithviraj Tiwari<br/>Founder & CEO, Sysjini</strong></p>
                        <p>📧 prithvi.raj@sysjini.in | 📞 +91 7500269270</p>
                        <p>🌐 www.sysjini.in</p>
                    </div>
                </div>
            </body>
            </html>
        `,
        text: `
Hi ${name},

Thank you for reaching out to Sysjini! I've personally received your message and appreciate you taking the time to contact us.

Your Inquiry Details:
- Service: ${serviceName}
- Budget Range: ${budgetText}

I will review your inquiry and get back to you within 24 hours. I'm excited to learn more about your project and explore how we can help bring your digital vision to life.

In the meantime, feel free to:
- Explore our services: https://sysjini.in/services
- Check out our latest blog posts: https://sysjini.in/blogs
- Follow us on social media for updates

Best regards,
Prithviraj Tiwari
Founder & CEO, Sysjini

📧 prithvi.raj@sysjini.in | 📞 +91 7500269270
🌐 www.sysjini.in
        `
    };
};

// Validation and email functions

// Validation function
const validateFormData = (data) => {
    const { name, email, service, budget, message } = data;
    const errors = [];

    if (!name || name.trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        errors.push('Please provide a valid email address');
    }

    if (!service || service.trim().length === 0) {
        errors.push('Please select a service');
    }

    // Validate service is one of the allowed values
    const allowedServices = [
        'web-development',
        'digital-marketing',
        'design-branding',
        'ecommerce',
        'cloud-devops',
        'ui-ux'
    ];
    if (service && !allowedServices.includes(service)) {
        errors.push('Please select a valid service');
    }

    // Budget validation (optional but if provided should be valid)
    if (budget) {
        const budgetNum = parseInt(budget);
        if (isNaN(budgetNum) || budgetNum < 20000 || budgetNum > 500000) {
            errors.push('Budget must be between ₹20,000 and ₹5,00,000');
        }
    }

    // Message is now optional, but if provided should have minimum length
    if (message && message.trim().length > 0 && message.trim().length < 10) {
        errors.push('Message must be at least 10 characters long if provided');
    }

    return errors;
};

// Main API handler
export async function POST(request) {
    try {
        const formData = await request.json();
        
        // Validate form data
        const validationErrors = validateFormData(formData);
        if (validationErrors.length > 0) {
            return NextResponse.json(
                { success: false, errors: validationErrors },
                { status: 400 }
            );
        }
        
        const { name, email, service, budget } = formData;

        // Save to Google Sheets first
        try {
            await addContactToSheet(formData, request);
            console.log('Contact saved to Google Sheets successfully');
        } catch (sheetError) {
            console.error('Failed to save to Google Sheets:', sheetError);
            // Continue with email sending even if sheets fails
        }

        // Create transporter
        const transporter = createTransporter();

        // Verify transporter
        await transporter.verify();

        // Email template for auto-reply only
        const autoReplyTemplate = createAutoReplyTemplate(name, service, budget);

        // Send auto-reply to user from prithvi.raj@sysjini.in
        const userMailOptions = {
            from: `"Prithviraj Tiwari - Sysjini" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Thank you for contacting Sysjini - We\'ll be in touch soon!',
            html: autoReplyTemplate.html,
            text: autoReplyTemplate.text,
        };

        // Send auto-reply email using Nodemailer
        const userResult = await transporter.sendMail(userMailOptions);

        console.log('Auto-reply sent:', userResult.messageId);
        
        return NextResponse.json({
            success: true,
            message: 'Your message has been sent successfully! We\'ll get back to you within 24 hours.',
            messageId: userResult.messageId
        });
        
    } catch (error) {
        console.error('Email sending error:', error);
        
        return NextResponse.json(
            { 
                success: false, 
                message: 'Sorry, there was an error sending your message. Please try again or contact us directly.',
                error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
            },
            { status: 500 }
        );
    }
}

// Handle other HTTP methods
export async function GET() {
    return NextResponse.json(
        { message: 'Contact API endpoint. Use POST to send messages.' },
        { status: 405 }
    );
}
