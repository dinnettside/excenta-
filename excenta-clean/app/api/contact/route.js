import nodemailer from 'nodemailer';

export async function POST(request) {
  console.log('📧 Contact form API called');
  
  try {
    const body = await request.json();
    const { name, email, phone, message, company } = body;
    
    console.log('📝 Form data received:', { name, email, phone: phone || 'not provided', hasMessage: !!message });

    // Simple spam check - honeypot field
    if (company) {
      console.log('🚫 Spam detected via honeypot field');
      return Response.json({ error: 'Spam detected' }, { status: 400 });
    }

    // Validate required fields
    if (!name || !email || !message) {
      console.log('❌ Missing required fields:', { hasName: !!name, hasEmail: !!email, hasMessage: !!message });
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Log environment variables (safely)
    console.log('🔧 SMTP Config:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER ? 'set' : 'missing',
      pass: process.env.SMTP_PASS ? 'set' : 'missing',
      to: process.env.CONTACT_TO,
      from: process.env.CONTACT_FROM
    });

    // Create transporter for One.com SMTP
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    console.log('📬 Transporter created, attempting to send email...');

    // Email content
    const htmlMessage = `
      <h2>Ny henvendelse fra Excenta.no</h2>
      <p><strong>Navn:</strong> ${name}</p>
      <p><strong>E-post:</strong> ${email}</p>
      ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
      <p><strong>Melding:</strong></p>
      <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
        ${message.replace(/\n/g, '<br>')}
      </div>
    `;

    // Send email
    const info = await transporter.sendMail({
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_TO,
      subject: `Ny henvendelse fra ${name}`,
      html: htmlMessage,
    });

    console.log('✅ Email sent successfully! Message ID:', info.messageId);

    return Response.json({ success: true, messageId: info.messageId });

  } catch (error) {
    console.error('❌ Error in contact API:', error);
    return Response.json({ error: 'Failed to send email', details: error.message }, { status: 500 });
  }
}
