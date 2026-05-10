import React from "react";

export default function About() {
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
                <div className="relative bg-blue-100 py-20 px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
                        About EverMed Hospital
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Committed to Excellence in Healthcare. We provide world-class
                        medical services with compassion, innovation, and trust.
                    </p>
                </div>


                <div className="max-w-6xl mx-auto px-6 py-16">

                    <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
                        EverMed Hospital is dedicated to providing exceptional healthcare
                        services with compassion and care. Our facility is equipped with
                        modern technology and experienced professionals to ensure the best
                        treatment for every patient.
                    </p>


                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="bg-white p-6 rounded-2xl shadow text-center">
                            <h3 className="text-xl font-semibold text-blue-600 mb-2">History</h3>
                            <p className="text-gray-600 text-sm">
                                Established in 2004, EverMed has served thousands of patients
                                with dedication and trust.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow text-center">
                            <h3 className="text-xl font-semibold text-blue-600 mb-2">Mission</h3>
                            <p className="text-gray-600 text-sm">
                                Our mission is to provide patient-centered healthcare with
                                excellence in diagnosis and treatment.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow text-center">
                            <h3 className="text-xl font-semibold text-blue-600 mb-2">Values</h3>
                            <p className="text-gray-600 text-sm">
                                Compassion, integrity, and innovation are the core values we
                                follow in every service we provide.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}