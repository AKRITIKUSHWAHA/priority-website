import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Phone number must be at least 6 digits"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Zod Validation
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message, honeypot } = validationResult.data;

    // 2. Honeypot Anti-Spam Check
    if (honeypot && honeypot.trim().length > 0) {
      // Spam bot detected -> reject silently
      return NextResponse.json(
        { success: true, message: "Message received" },
        { status: 200 }
      );
    }

    // 3. Log Contact Submission for Server Logs
    console.log("[CONTACT_API_SUBMISSION]", {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      subject,
      message,
    });

    // 4. (Pluggable Email Integration for Resend or Nodemailer)
    /*
    if (process.env.RESEND_API_KEY) {
      // Send email via Resend
      // await resend.emails.send({ ... });
    } else if (process.env.SMTP_HOST) {
      // Send email via Nodemailer
      // await transporter.sendMail({ ... });
    }
    */

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been received by Priority Hauliers dispatch.",
    });
  } catch (error) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
