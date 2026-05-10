import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            alert("Please fill all required fields");
            return;
        }

        alert("Thank you! Your message has been sent.");
        navigate("/contact");

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    };

    return (
        <div className="w-full min-h-screen font-sans">

            <div className="flex justify-between items-center px-10 py-4 bg-white">
                <h1 className="text-3xl font-bold text-blue-600">
                    EverMed <span className="text-gray-700">Hospital</span>
                </h1>
                <div className="hidden md:flex gap-8 text-gray-700 font-medium">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/register">Register</a>
                    <a href="/login">Login</a>
                </div>
            </div>

            <div className="w-full min-h-screen bg-gray-50">


                <div className="bg-blue-100 py-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
                        Contact EverMed Hospital
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-xl mx-auto">
                        We are here to help you. Reach out for appointments, queries, or emergencies.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">

                    <div>
                        <h2 className="text-2xl font-bold text-blue-700 mb-6">
                            Get in Touch
                        </h2>

                        <div className="space-y-6 text-gray-600">
                            <p>📍 <span className="font-medium">Address:</span> EverMed Hospital, Jayanagar 4th Block, Bangalore, India</p>
                            <p>📞 <span className="font-medium">Phone:</span> +91 9876543210</p>
                            <p>📧 <span className="font-medium">Email:</span> evermed235@gmail.com</p>
                            <p>🕒 <span className="font-medium">Working Hours:</span> 24/7 Emergency Services</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg">

                        <h2 className="text-2xl font-bold text-blue-700 mb-6">
                            Send Message
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 border rounded-lg outline-none"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 border rounded-lg outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full p-3 border rounded-lg outline-none"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />

                            <textarea
                                placeholder="Your Message"
                                rows="4"
                                className="w-full p-3 border rounded-lg outline-none"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>

                            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
}