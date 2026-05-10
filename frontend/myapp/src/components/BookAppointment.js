import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function GetAppointment() {
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const navigate = useNavigate();

    const patientName = localStorage.getItem("doctorName");

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/available-doctors/")
            .then((res) => setDoctors(res.data))
            .catch((err) => console.log(err));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://127.0.0.1:8000/api/book-appointment/",
                {
                    patient_name: patientName,
                    doctor: selectedDoctor,
                    date: date,
                    time: time,
                }
            );

            alert("Appointment Booked Successfully!");
            navigate("/patient");
        } catch (err) {
            console.log(err);
            alert("Error booking appointment");
        }
    };
    return (
        <div className="flex min-h-screen bg-gray-100">

            <div className="w-64 bg-blue-400 text-white p-5">
                <h2 className="text-2xl font-bold text-black mb-8">EverMed</h2>

                <ul>
                    <Link to="/patient">
                        <li className="hover:bg-blue-600 p-2 rounded font-semibold cursor-pointer">
                            Dashboard
                        </li>
                    </Link>

                    <Link to="/viewdoc">
                        <li className="hover:bg-blue-600 p-2 rounded font-semibold cursor-pointer">
                            View Doctors
                        </li>
                    </Link>

                    <Link to="/book-appointment">
                        <li className="hover:bg-blue-600 p-2 rounded font-semibold cursor-pointer">
                            Book Appointment
                        </li>
                    </Link>

                    <Link to="/profile">
                        <li className="hover:bg-blue-600 p-2 rounded font-semibold cursor-pointer">
                            Profile
                        </li>
                    </Link>
                </ul>
            </div>

            <div className="flex-1 flex justify-center items-center">

                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

                    <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
                        Book Appointment
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <select
                            className="w-full p-3 border rounded-lg"
                            value={selectedDoctor}
                            onChange={(e) => setSelectedDoctor(e.target.value)}
                            required
                        >
                            <option value="">Select Doctor</option>
                            {doctors.map((doc) => (
                                <option key={doc.id} value={doc.id}>
                                    {doc.name} ({doc.specialization})
                                </option>
                            ))}
                        </select>

                        <input
                            type="date"
                            className="w-full p-3 border rounded-lg"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />

                        <input
                            type="time"
                            className="w-full p-3 border rounded-lg"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                        />

                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                            Book Appointment
                        </button>


                    </form>
                </div>
            </div>
        </div>
    );
}