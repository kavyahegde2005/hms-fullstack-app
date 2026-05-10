import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/login/", {
                fullname: fullName,
                password: password,
                phone: phone,
                role: role
            });

            console.log(response.data);
            localStorage.setItem("doctorName", fullName);
            alert("Login successful!");
            if (role === "Doctor") {
                navigate("/doctor");
            } else {
                navigate("/patient");
            }

        } catch (error) {
            console.error(error);
            const msg = error.response?.data ? JSON.stringify(error.response.data) : error.message;
            alert("Login failed: " + msg);
        }
    }
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
            <div
                className="min-h-screen w-full flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://www.shutterstock.com/image-photo/blurred-background-hospital-interior-medical-600nw-2714031697.jpg')",
                }}
            >

                <div className="w-full max-w-md bg-white/20 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/30">

                    <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
                        Login
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
                            <button
                                type="button"
                                onClick={() => setRole("Doctor")}
                                className={`flex-1 py-2 rounded-lg ${role === "Doctor"
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-600"
                                    }`}
                            >
                                Doctor
                            </button>

                            <button
                                type="button"
                                onClick={() => setRole("Patient")}
                                className={`flex-1 py-2 rounded-lg ${role === "Patient"
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-600"
                                    }`}
                            >
                                Patient
                            </button>
                        </div>



                        <input
                            type="text"
                            placeholder="Full Name or Phone Number"
                            className="w-full p-3 rounded-lg bg-white/70 border outline-none"
                            value={fullName || phone}
                            onChange={(e) => setFullName(e.target.value) || setPhone(e.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 rounded-lg bg-white/70 border outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                            Login
                        </button>

                        <p className="text-sm text-center text-gray-700">
                            Don’t have an account?{" "}
                            <Link to="/register" className="text-blue-600 font-semibold">
                                Register
                            </Link>
                        </p>



                    </form>
                </div>
            </div>
        </div>
    );
}