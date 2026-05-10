import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Profile() {
    const [data, setData] = useState({});

    const fullname = localStorage.getItem("patientName");

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/profile/${fullname}/`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-100">

            <div className="w-64 bg-blue-400 text-white p-5">
                <h2 className="text-2xl font-bold text-black mb-8">EverMed</h2>

                <ul>
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

            <div className="flex-1 flex justify-center items-center">
                <div className="bg-white p-8 rounded-xl shadow w-full max-w-md">

                    <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
                        My Profile
                    </h2>

                    <p><b>Name:</b> {data.fullname}</p>
                    <p><b>Age:</b> {data.age}</p>
                    <p><b>Gender:</b> {data.gender}</p>
                    <p><b>Blood Group:</b> {data.bloodgroup}</p>
                    <p><b>Phone:</b> {data.phone}</p>
                    <p><b>Address:</b> {data.address}</p>

                </div>
            </div>
        </div>

    );
}