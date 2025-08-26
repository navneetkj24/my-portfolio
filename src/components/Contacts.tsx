"use client";

import "../styles/contact.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        emailjs.sendForm(
            "service_75i0uwk",   // your EmailJS Service ID
            "template_90fi0sk", // your EmailJS Template ID
            form.current,
            "huxnD5V2leGf51a2S" // your EmailJS Public Key
        )
            .then(() => {
                setStatus("success");
                form.current?.reset();
            })
            .catch(() => {
                setStatus("error");
            });
    };

    return (
        <section className="contact-section">
            <div className="contact-card">
                <h2>Contact Me</h2>
                <p className="intro-text">
                    I'm always open to new opportunities and collaborations. Reach out to me using the form or the links below.
                </p>

                <div className="contact-container">
                    {/* Left Column: Contact Info */}
                    <div className="contact-info">
                        <p><strong>Email:</strong> <a href="mailto:navneet.kjt@gmail.com">navneet.kjt@gmail.com</a></p>
                        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/navneetkaurj/" target="_blank">linkedin.com/in/navneetkaurj</a></p>
                        <p><strong>GitHub:</strong> <a href="https://github.com/navneetkj24" target="_blank">github.com/navneetkj24</a></p>
                    </div>

                    {/* Right Column: Contact Form */}
                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <div className="form-row">
                            <div>
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" required />
                            </div>
                   
                            
                        </div>
                        <div>
                        <div>
                            <label htmlFor="title">Subject</label>
                            <input type="text" id="title" name="title" placeholder="Subject / Title" required />
                        </div>
                        </div>
                        <div>
                            <label htmlFor="time">Best Time to Contact</label>
                            <input type="text" id="time" name="time" placeholder="e.g. 9am - 5pm" required />
                        </div>

                        <div>
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" name="message" placeholder="Write your message here..." rows={5} required></textarea>
                        </div>

                        <button type="submit">📨 Send Message</button>

                        {status === "success" && <p className="success-msg">✅ Message sent successfully!</p>}
                        {status === "error" && <p className="error-msg">❌ Failed to send. Please try again.</p>}
                    </form>
                </div>
            </div>
        </section>
    );
}
