import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function PatientDashboard() {
    const [patientName, setPatientName] = useState("");
    const [patientId, setPatientId] = useState("");
    const [doctorCount, setDoctorCount] = useState(0);
    const [appointmentCount, setAppointmentCount] = useState(0);
    const [prescriptionCount, setPrescriptionCount] = useState(0);

    useEffect(() => {

        const name = localStorage.getItem("doctorName") || "Patient";
        setPatientName(name);

        const id = "PAT" + Math.floor(100000 + Math.random() * 900000);
        setPatientId(id);

        axios.get("http://127.0.0.1:8000/api/doctor-count/")
            .then(res => setDoctorCount(res.data.count))
            .catch(err => console.log(err));

        axios.get("http://127.0.0.1:8000/api/appointment-count/")
            .then(res => setAppointmentCount(res.data.count))
            .catch(err => console.log(err));

        axios.get("http://127.0.0.1:8000/api/prescription-count/")
            .then(res => setPrescriptionCount(res.data.count))
            .catch(err => console.log(err));


    }, []);

    return (
        <div className="flex min-h-screen bg-gray-100">

            <div className="w-64 bg-blue-400 text-white p-5">
                <h2 className="text-2xl font-bold text-black mb-8">EverMed</h2>

                <ul>
                    <li className="hover:bg-blue-600 p-2 rounded text-white font-semibold cursor-pointer">
                        Dashboard
                    </li>
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


            <div className="flex-1">


                <div className="bg-white shadow p-4 flex justify-between items-center">
                    <h2 className="text-xl font-semibold">
                        Welcome, {patientName} 👋
                    </h2>

                </div>

                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">


                        <div className="bg-blue-100 p-5 rounded-xl shadow flex justify-between items-center">
                            <div>
                                <p className="text-gray-600 text-sm">YOUR PATIENT ID</p>
                                <h2 className="text-xl font-bold text-blue-700 mt-1">
                                    {patientId}
                                </h2>
                                <p className="text-xs text-gray-500 mt-1">
                                    Keep this ID safe for your records.
                                </p>
                            </div>
                            <div className="bg-white p-2 rounded-full shadow cursor-pointer">
                                📋
                            </div>
                        </div>


                        <div className="bg-green-100 p-5 rounded-xl shadow">
                            <div className="flex items-center gap-2 text-green-700 text-xl">
                                📅
                            </div>
                            <h2 className="text-xl font-bold mt-2">{appointmentCount}</h2>
                            <p className="text-gray-600 text-sm">Appointments</p>
                            <p className="text-xs text-gray-500">This Month</p>
                        </div>


                        <div className="bg-purple-100 p-5 rounded-xl shadow">
                            <div className="flex items-center gap-2 text-purple-700 text-xl">
                                👨‍⚕️
                            </div>
                            <h2 className="text-xl font-bold mt-2">{doctorCount}</h2>
                            <p className="text-gray-600 text-sm">Available Doctors</p>
                            <p className="text-xs text-gray-500">Today</p>
                        </div>


                        <div className="bg-orange-100 p-5 rounded-xl shadow">
                            <div className="flex items-center gap-2 text-orange-700 text-xl">
                                📄
                            </div>
                            <h2 className="text-xl font-bold mt-2">{prescriptionCount}</h2>
                            <p className="text-gray-600 text-sm">Prescriptions</p>
                            <p className="text-xs text-gray-500">Active</p>
                        </div>

                    </div>

                </div>
                <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
                    For healthy life
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-pink-600 mb-2">
                            🥗 Healthy Diet
                        </h2>
                        <p className="text-gray-600 text-sm">
                            Eat a balanced diet rich in fruits, vegetables, proteins, and whole grains.
                            Avoid processed foods and stay hydrated.
                        </p>
                    </div>


                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-blue-600 mb-2">
                            🏃 Regular Exercise
                        </h2>
                        <p className="text-gray-600 text-sm">
                            Engage in at least 30 minutes of physical activity daily like walking,
                            jogging, yoga, or gym workouts to stay fit.
                        </p>
                    </div>


                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-purple-600 mb-2">
                            😴 Proper Sleep
                        </h2>
                        <p className="text-gray-600 text-sm">
                            Ensure 7-8 hours of quality sleep every night to improve mental and
                            physical health.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-orange-600 mb-2">
                            🧠 Mental Health
                        </h2>
                        <p className="text-gray-600 text-sm">
                            Practice meditation, reduce stress, and take breaks to maintain good
                            mental well-being.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-green-600 mb-2">
                            💧 Stay Hydrated
                        </h2>
                        <p className="text-gray-600 text-sm">
                            Drink at least 2-3 liters of water daily to keep your body hydrated
                            and functioning properly.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-brown mb-2">
                            🩺 Regular Checkups
                        </h2>
                        <p className="text-gray-600 text-sm">
                            Visit doctors regularly for health checkups and early detection of
                            diseases.
                        </p>
                    </div>

                </div>
            </div>
        </div >
    );
}