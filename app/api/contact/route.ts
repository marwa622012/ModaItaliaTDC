import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


const TO_EMAIL = "marwaali.n2012@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, topic, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      // في وضع التجربة (قبل ما توثقي دومين) لازم الـ from يكون onboarding@resend.dev
      from: "Moda Italia Website <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `New contact form message: ${topic || "General inquiry"}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New message from the website</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Company:</strong> ${escapeHtml(company || "-")}</p>
          <p><strong>Topic:</strong> ${escapeHtml(topic || "-")}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}

// حماية بسيطة من HTML injection في الإيميل
function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
