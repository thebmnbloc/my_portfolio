// app/api/contact/route.ts
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const result = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['bioralak46@email.com'],
      subject: `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}

---
Sent via biormalual.vercel.app contact form
      `.trim(),
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 580px; margin: 0 auto; padding: 20px; color: #1e293b;">
          <h2 style="color: #1e40af; margin-bottom: 16px;">New Contact Form Submission</h2>
          <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
          <hr style="border: 1px solid #e2e8f0; margin: 20px 0;" />
          <h3 style="margin: 16px 0 8px; color: #334155;">Message:</h3>
          <div style="white-space: pre-wrap; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</div>
          <hr style="border: 1px solid #e2e8f0; margin: 24px 0 16px;" />
          <p style="color: #64748b; font-size: 14px;">
            Sent from <a href="https://biormalual.vercel.app" style="color: #64748b;">biormalual.vercel.app</a> • 
            ${new Date().toLocaleString()}
          </p>
        </div>
      `,
      replyTo: email,  // camelCase – this should now work without error
    });

    // Narrow the types here
    if (result.error) {
      console.error('Resend send error:', result.error);
      return NextResponse.json(
        { error: result.error.message || 'Failed to send email' },
        { status: 500 }
      );
    }

    // At this point, result.data is guaranteed non-null (TS knows this)
    if (!result.data) {
      // Rare edge case, but safe
      return NextResponse.json({ error: 'No response from email service' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: result.data.id });  // Return the email ID if useful
  } catch (err) {
    console.error('Unexpected API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}