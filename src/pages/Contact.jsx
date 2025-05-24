import React, { useState } from "react";
import PageNav from "../components/PageNav";
import Styles from "./About.module.css";
import Style2 from "./Contact.module.css";
import Footer from "../components/footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "98.utkarsh.kapoor@gmail.com",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      setStatus(result.message);
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message");
    }
  };

  return (
    <div style={{ padding: "1.5rem" }} className={Styles.background}>
      <PageNav />
      <form
        onSubmit={handleSubmit}
        className={Style2.contactForm}
        style={{ justifyContent: "center" }}
      >
        <h2>Drop your message</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          onChange={handleChange}
        />
        <button type="submit">Send</button>
        <p>{status}</p>
      </form>
      <Footer />
    </div>
  );
}

export default Contact;
