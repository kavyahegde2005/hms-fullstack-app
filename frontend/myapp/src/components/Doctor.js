import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function DoctorDashboard() {

    const doctorName = localStorage.getItem("doctorName");

    const [patientId, setPatientId] = useState("");

    const handleSearch = () => {
        if (!patientId) {
            alert("Enter Patient ID");
            return;
        }
        alert("Searching for Patient ID: " + patientId);
    };

    return (
        <div className="min-h-screen flex" >

            <div className="w-64 bg-blue-400 shadow-lg p-6 hidden md:block">
                <h2 className="text-2xl font-bold text-black mb-8">
                    EverMed
                </h2>

                <ul className="space-y-4">
                    <Link to="/doctor">
                        <li className="hover:bg-blue-600 p-3 rounded-lg text-white font-semibold cursor-pointer">
                            Dashboard
                        </li>
                    </Link>

                    <Link to="/patients">
                        <li className="p-3 hover:bg-blue-600 rounded-lg text-white font-semibold cursor-pointer">
                            Patients List
                        </li>
                    </Link>

                    <Link to="/appointments">
                        <li className="p-3 hover:bg-blue-600 rounded-lg text-white font-semibold cursor-pointer">
                            Appointments
                        </li>
                    </Link>

                    <Link to="/suggestions">
                        <li className="p-3 hover:bg-blue-600 rounded-lg text-white font-semibold cursor-pointer">
                            Suggestions
                        </li>
                    </Link>
                </ul>
            </div>

            <div className="flex-1">

                <div className="flex justify-between items-center bg-white px-8 py-4 shadow">


                    <h1 className="text-xl font-semibold text-gray-700">
                        Doctor Dashboard
                    </h1>

                    <div className="text-blue-600 font-semibold">
                        Welcome, Dr. {doctorName}
                    </div>
                </div>


                <div className="p-8 text-center justify-center">
                    <div className="bg-blue-200 p-6 rounded-xl shadow-md max-w-2xl text-center justify-center">

                        <h2 className="text-lg font-semibold mb-4 text-gray-700">
                            Search Patient by ID
                        </h2>

                        <div className="flex gap-4 text-center justify-center">
                            <input
                                type="text"
                                placeholder="Enter Patient ID..."
                                className="flex-1 p-3 border rounded-lg outline-none"
                                value={patientId}
                                onChange={(e) => setPatientId(e.target.value)}
                            />

                            <button
                                onClick={handleSearch}
                                className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700"
                            >
                                Search
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}