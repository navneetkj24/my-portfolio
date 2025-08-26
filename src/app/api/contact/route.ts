import nodemailer from "nodemailer";

export async function POST(request: Request) {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
        return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    // Configure your email transporter
    const transporter = nodemailer.createTransport({
        service: "Gmail", // or any other service
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER, // your email to receive messages
            subject: `New message from ${name}`,
            text: message,
            html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
        });

        return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
    }
}
