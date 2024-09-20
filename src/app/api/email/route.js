import { EmailTemplate } from '../../../../components/EmailTemplate/email';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend("re_FAiZUw98_5gqbyBpUYC9cqNPSc7DCpvmg");

export async function POST(req) {
  try {
    const { name, email, message, phone } = await req.json();

    const data = await resend.emails.send({
      from: 'contact@sysjini.in', // Use a verified domain or the default Resend address
      to: 'contact@sysjini.in',
      subject: `Lead mail - ${name}`,
      react: EmailTemplate({ name, email, phone, message })
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}