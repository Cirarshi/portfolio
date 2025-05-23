import React, { useState } from "react";
import PageNav from "../components/PageNav";
import Styles from "./About.module.css";

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
        className="space-y-4 p-4 max-w-md mx-auto bg-white rounded-xl shadow-md"
      >
        <h2 className="text-xl font-bold">Contact Me</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Send
        </button>
        <p>{status}</p>
      </form>
    </div>
  );
}

export default Contact;
