import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// ⚠️ CONFIGURE YOUR EMAIL ADDRESS HERE ⚠️
const RECIPIENT_EMAIL = 'emonterrubio@gmail.com'; // Replace with your actual email address

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, subject, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate API key is set
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set in environment variables');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    // Send email using Resend
    const emailResult = await resend.emails.send({
      from: 'onboarding@resend.dev', // You can change this to your verified domain in Resend
      to: RECIPIENT_EMAIL,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Submission from edmonterrubio.com</h2>
        <p><strong>From:</strong> ${firstName} ${lastName} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email, // This allows you to reply directly to the sender
    });

    // Log the result for debugging
    console.log('Email sent successfully:', emailResult);

    // Check if email was sent successfully
    if (emailResult.error) {
      console.error('Resend API error:', emailResult.error);
      return NextResponse.json(
        { 
          error: 'Failed to send email',
          details: emailResult.error.message || 'Unknown Resend error',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Form submitted successfully', emailId: emailResult.data?.id },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorName = error instanceof Error ? error.name : 'Error';
    
    console.error('Error processing contact form:', error);
    console.error('Error details:', {
      message: errorMessage,
      name: errorName,
    });
    
    // Return more detailed error information
    return NextResponse.json(
      { 
        error: 'Failed to process form submission',
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}
