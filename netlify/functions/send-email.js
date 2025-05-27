import nodemailer from "nodemailer";

export async function handler(event) {
  const { name, email, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "youremail@gmail.com",
      pass: "your_app_password",
    },
  });

  const mailOptions = {
    from: email,
    to: "youremail@gmail.com",
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to send email",
        error: err.message,
      }),
    };
  }
}
