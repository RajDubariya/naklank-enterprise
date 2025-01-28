import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function getEmailTemplate(formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Inquiry</title>
  <style>
    :root {
      --text-dark: #000000;
      --text-light: #666666;
      --bg-white: #ffffff;
      --bg-light: #f5f5f5;
      --border: #e0e0e0;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: var(--text-dark);
      background-color: var(--bg-light);
      margin: 0;
      padding: 20px;
    }
    
    .container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      background-color: var(--bg-white);
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }
    
    .header {
      text-align: center;
      padding-bottom: 30px;
      margin-bottom: 30px;
    }
    
    .header h1 {
      font-size: 28px;
      color: var(--text-dark);
      margin: 0;
      font-weight: 700;
      letter-spacing: -0.5px;
    }
    
    .content {
      padding: 0 10px;
    }
    
    .field-group {
      margin: 20px 0;
      padding: 15px;
      border-radius: 8px;
      transition: background-color 0.3s ease;
    }
    
    .field-group:hover {
      background-color: var(--bg-light);
    }
    
    .field-label {
      display: block;
      font-size: 14px;
      font-weight: 600;
      color: var(--text-dark);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }
    
    .field-value {
      font-size: 16px;
      color: var(--text-dark);
      word-break: break-word;
    }
    
    .message-content {
      background-color: var(--bg-light);
      padding: 20px;
      border-radius: 8px;
      border: 1px solid var(--border);
      margin-top: 10px;
      white-space: pre-wrap;
      position: relative;
    }
    
    .message-content::before {
      content: '"';
      position: absolute;
      top: -10px;
      left: 20px;
      font-size: 40px;
      color: var(--text-light);
      opacity: 0.2;
    }
    
    .timestamp {
      font-size: 12px;
      color: var(--text-light);
      text-align: right;
      margin-top: 5px;
    }

    @media (max-width: 480px) {
      body {
        padding: 10px;
      }
      
      .container {
        padding: 20px;
      }
      
      .field-group {
        padding: 10px;
      }
      
      .header h1 {
        font-size: 24px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Inquiry</h1>
    </div>
    <div class="content">
      <div class="field-group">
        <span class="field-label">Name</span>
        <div class="field-value">${formData.name}</div>
      </div>
      
      <div class="field-group">
        <span class="field-label">Email</span>
        <div class="field-value">${formData.email}</div>
      </div>
      
      <div class="field-group">
        <span class="field-label">Contact Number</span>
        <div class="field-value">${formData.phone}</div>
      </div>
      
      <div class="field-group">
        <span class="field-label">Message</span>
        <div class="message-content">${formData.message}</div>
      </div>
      
      <div class="timestamp">
        Received At: ${new Date().toLocaleString()}
      </div>
    </div>
  </div>
</body>
</html>
  `;
}

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: "New Inquiry",
      html: getEmailTemplate(formData),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
