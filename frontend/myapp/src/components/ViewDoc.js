import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ViewDoctors() {
    const [doctors, setDoctors] = useState([]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            alert("Please fill all required fields");
            return;
        }

        alert("Thank you! Your message has been sent.");

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    };

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/viewdoctors/")
            .then((res) => {
                setDoctors(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-100">

            <div className="w-64 bg-blue-400 text-white p-5">
                <h2 className="text-2xl font-bold text-black mb-8">EverMed</h2>

                <ul >
                    <Link to="/patient">
                        <li className="hover:bg-blue-600 p-2 rounded text-white font-semibold cursor-pointer">
                            Dashboard
                        </li>
                    </Link>
                    <Link to="/viewdoc">
                        <li className="hover:bg-blue-600 p-2 rounded text-white font-semibold cursor-pointer">
                            View Doctors
                        </li>
                    </Link>

                    <Link to="/book-appointment">
                        <li className="hover:bg-blue-600 p-2 rounded text-white font-semibold cursor-pointer">
                            Book Appointment
                        </li>
                    </Link>
                    <Link to="/profile">
                        <li className="hover:bg-blue-600 p-2 rounded text-white font-semibold cursor-pointer">
                            Profile
                        </li>
                    </Link>
                </ul>
            </div>

            <div className="p-6 flex-1">
                <h2 className="text-2xl font-bold mb-6">Available Doctors</h2>

                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    <div className="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-6 w-full">
                        {doctors.map((doc) => (
                            <div
                                key={doc.id}
                                className="bg-white rounded-xl shadow p-4 flex items-center gap-4 w-full"
                            >
                                <img
                                    src={doc.image}
                                    alt="doctor"
                                    className="w-16 h-16 rounded-full object-cover"
                                />

                                <div>
                                    <h3 className="text-lg font-semibold text-blue-700">
                                        {doc.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {doc.specialization}
                                    </p>
                                    <p className="text-green-600 text-sm">Available</p>

                                    <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded-lg text-sm hover:bg-blue-700">
                                        Book Appointment
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="w-full lg:w-96 bg-white p-8 rounded-2xl shadow-lg shrink-0 lg:sticky lg:top-6">
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