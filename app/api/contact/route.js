import clientPromise from "@/lib/mongodb";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request) {
  try {
    const body = await request.json();

    // Save message to MongoDB
    const client = await clientPromise;
    const db = client.db("bitlinks");

    await db.collection("messages").insertOne({
      name: body.name,
      email: body.email,
      message: body.message,
      createdAt: new Date(),
    });

    // Send Email Notification
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ishwarir2004@gmail.com", // Your email
      subject: "New BitLinks Contact Form Message",

      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${body.name}</p>

        <p><strong>Email:</strong> ${body.email}</p>

        <p><strong>Message:</strong></p>

        <p>${body.message}</p>
      `,
    });

    console.log("EMAIL DATA:", data);
    console.log("EMAIL ERROR:", error);

    if (error) {
      return Response.json({
        success: false,
        error: true,
        message: error.message,
      });
    }

    return Response.json({
      success: true,
      error: false,
      message: "Message sent successfully!",
    });

  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return Response.json(
      {
        success: false,
        error: true,
        message: error.message,
      },
      { status: 500 }
    );
  }
}