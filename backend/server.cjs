// backend/server.js
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "connex1622@gmail.com",
    pass: "LSU@1622",
  },
});

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;
  const mailOptions = {
    from: email,
    to: "connex1622@gmail.com",
    subject: `New Contact Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: "Email failed to send" });
    } else {
      res.status(200).json({ message: "Email sent successfully!" });
    }
  });
});

app.listen(5000, () => {
  console.log("Backend server running on http://localhost:5000");
});
