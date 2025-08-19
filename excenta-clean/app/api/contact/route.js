import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, company } = body;

    // Simple spam check - honeypot field
    if (company) {
      return Response.json({ error: 'Spam detected' }, { status: 400 });
    }

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

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
    await transporter.sendMail({
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_TO,
      subject: `Ny henvendelse fra ${name}`,
      html: htmlMessage,
      replyTo: email,
    });

    return Response.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { error: 'Failed to send email' }, 
      { status: 500 }
    );
  }
}
