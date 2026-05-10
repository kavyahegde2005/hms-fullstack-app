import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Register() {
    const [fullname, setFullname] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [bloodgroup, setBloodgroup] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8000/api/register/", {
                fullname: fullname,
                age: age,
                gender: gender,
                bloodgroup: bloodgroup,
                phone: phone,
                address: address,
                password: password,
                confirmPassword: confirmPassword
            });

            console.log(response.data);
            localStorage.setItem("patientName", response.data.fullname);
            localStorage.setItem("patientId", response.data.id);
            localStorage.setItem("patientPhone", response.data.phone);
            localStorage.setItem("patientAddress", response.data.address);
            localStorage.setItem("patientAge", response.data.age);
            localStorage.setItem("patientGender", response.data.gender);
            localStorage.setItem("patientBloodgroup", response.data.bloodgroup);
            localStorage.setItem("user_phone", response.data.phone);
            alert("Registration successful!");
            navigate("/login");

        } catch (error) {
            console.error(error);
            const msg = error.response?.data ? JSON.stringify(error.response.data) : error.message;
            alert("Registration failed: " + msg);
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

                <div className="w-full flex items-center justify-center p-6">

                    <div className="w-full max-w-md bg-white/20 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/30">

                        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
                            Register
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full p-3 rounded-lg bg-white/70 border outline-none"
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                            />

                            <input
                                type="number"
                                placeholder="Age"
                                className="w-full p-3 rounded-lg bg-white/70 border"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />

                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-full p-3 rounded-lg bg-white/70 border"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />

                            <select
                                className="w-full p-3 rounded-lg bg-white/70 border"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <option value="">Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>

                            <input
                                type="text"
                                placeholder="Address"
                                className="w-full p-3 rounded-lg bg-white/70 border"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />

                            <input
                                type="text"
                                placeholder="Blood Group"
                                className="w-full p-3 rounded-lg bg-white/70 border"
                                value={bloodgroup}
                                onChange={(e) => setBloodgroup(e.target.value)}
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full p-3 rounded-lg bg-white/70 border"
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full p-3 rounded-lg bg-white/70 border"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />

                            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                                Register
                            </button>

                            <p className="text-sm text-center text-gray-700">
                                Already have an account?{" "}
                                <Link to="/login" className="text-blue-600 font-semibold">
                                    Login
                                </Link>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
