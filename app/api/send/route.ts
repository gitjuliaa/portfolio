export const runtime = 'edge'; // This must stay at the very top

import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/ui/email-template';

// Use the placeholder trick to bypass the build-time check
const apiKey = process.env.RESEND_API_KEY || 're_placeholder_for_build';
const resend = new Resend(apiKey);
const fromEmail = "onboarding@resend.dev";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email } = body;

    if (!email || !name) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Contact Form Submission',
      react: await EmailTemplate({ firstName: name }),
    });

    return NextResponse.json({ data, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Resend Error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}