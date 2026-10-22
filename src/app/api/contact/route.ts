
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { email, phone, whatsapp, message } = await request.json();

    if (
    typeof email !== "string" ||
    typeof phone !== "string" ||
    typeof whatsapp !== "string" ||
    typeof message !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
    !phone.trim() ||
    phone.length > 25 ||
    whatsapp.length > 25 ||
    !message.trim() ||
    email.length > 254 ||
    message.length > 10000
    ) {
    return NextResponse.json(
        { error: "Please complete all required fields correctly." },
        { status: 400 }
    );
    }
    const user = process.env.GMAIL_USER;
    const password = process.env.GMAIL_APP_PASSWORD;
    const recipient = process.env.CONTACT_EMAIL;

    if (!user || !password || !recipient) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass: password.replace(/\s/g, ""),
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to: recipient,
      replyTo: email.trim(),
      subject: "New Portfolio Contact Message",
     text: [
        "New Portfolio Contact Message",
        "",
        `Email Address: ${email.trim()}`,
        `Phone Number: ${phone.trim()}`,
        `WhatsApp Number: ${whatsapp.trim() || "Not provided"}`,
        "",
        "Message:",
        message.trim(),
        ].join("\n"),
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Contact email error:", error);

    return NextResponse.json(
      { error: "Unable to send your message. Please try again." },
      { status: 500 }
    );
  }
}
