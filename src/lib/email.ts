import nodemailer from 'nodemailer';

// Create Gmail SMTP transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || '',
    pass: process.env.GMAIL_APP_PASSWORD || '',
  },
});

// Verify connection on startup
transporter.verify((error) => {
  if (error) {
    console.error('Email configuration error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

interface PurchaseEmailData {
  to: string;
  customerName: string;
  sessionId: string;
}

// Send purchase confirmation with download link
export async function sendPurchaseConfirmation(data: PurchaseEmailData): Promise<boolean> {
  const downloadUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/download?session=${data.sessionId}`;
  
  const mailOptions = {
    from: `"Lattice" <${process.env.GMAIL_USER}>`,
    to: data.to,
    subject: 'Your AI Career Acceleration Pack is Ready!',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #334155; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0ea5e9, #d946ef); padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .header h1 { color: white; margin: 0; font-size: 24px; }
          .content { background: #ffffff; padding: 30px; border: 1px solid #e2e8f0; }
          .button { display: inline-block; background: linear-gradient(135deg, #0ea5e9, #d946ef); color: white; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 20px 0; }
          .footer { text-align: center; padding: 20px; color: #94a3b8; font-size: 14px; }
          .info-box { background: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 15px; margin: 20px 0; border-radius: 4px; }
          .item-list { background: #f8fafc; padding: 15px; border-radius: 6px; margin: 15px 0; }
          .item-list li { margin: 8px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome to Lattice!</h1>
          </div>
          <div class="content">
            <p>Hi ${data.customerName || 'there'},</p>
            <p>Thank you for purchasing the <strong>AI Career Acceleration Pack</strong>! Your career transformation starts now.</p>
            
            <div style="text-align: center;">
              <a href="${downloadUrl}" class="button">Download Your Pack</a>
            </div>
            
            <div class="item-list">
              <strong>What's included in your pack:</strong>
              <ul>
                <li>✅ 50+ AI Career Prompts (ChatGPT, Claude, Gemini)</li>
                <li>✅ 10 AI-Optimized Resume Templates</li>
                <li>✅ Cover Letter Generator Prompt Kit</li>
                <li>✅ Interview Preparation System</li>
                <li>✅ Salary Negotiation Scripts</li>
                <li>✅ LinkedIn Optimization Guide</li>
              </ul>
            </div>
            
            <div class="info-box">
              <strong>💡 Pro Tip:</strong> Start with the resume templates first — they're designed to pass ATS systems and catch recruiters' attention instantly.
            </div>
            
            <p>Need help? Reply to this email and our team will assist you.</p>
            
            <p>Best regards,<br><strong>The Lattice Team</strong></p>
          </div>
          <div class="footer">
            <p>© 2026 Lattice. All rights reserved.</p>
            <p>You received this email because you made a purchase at Lattice.</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `Welcome to Lattice!\n\nHi ${data.customerName || 'there'},\n\nThank you for purchasing the AI Career Acceleration Pack!\n\nDownload your pack here: ${downloadUrl}\n\nWhat's included:\n- 50+ AI Career Prompts\n- 10 AI-Optimized Resume Templates\n- Cover Letter Generator Prompt Kit\n- Interview Preparation System\n- Salary Negotiation Scripts\n- LinkedIn Optimization Guide\n\nBest regards,\nThe Lattice Team`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Purchase confirmation sent to ${data.to}`);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

// Send notification to admin on new purchase
export async function sendAdminNotification(data: { customerEmail: string; sessionId: string; amount: number }): Promise<boolean> {
  const mailOptions = {
    from: `"Lattice System" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `🎉 New Purchase! - $${(data.amount / 100).toFixed(2)}`,
    html: `
      <h2>New Purchase Notification</h2>
      <p><strong>Customer:</strong> ${data.customerEmail}</p>
      <p><strong>Amount:</strong> $${(data.amount / 100).toFixed(2)}</p>
      <p><strong>Session ID:</strong> ${data.sessionId}</p>
      <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending admin notification:', error);
    return false;
  }
}
