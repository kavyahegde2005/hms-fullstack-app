import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
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

            <div className="relative bg-blue-100 px-10 py-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
                <div className="max-w-xl z-10">
                    <h2 className="text-5xl font-bold text-gray-800 leading-tight">
                        Your Partner In Health <br /> and Wellness
                    </h2>
                    <p className="mt-6 text-gray-600">
                        Efficient hospital management system improving patient care, records, and operations.

                    </p>
                    <Link to="https://www.drlogy.com/plus/faq/what-is-hospital-management-system-wikipedia?srsltid=AfmBOop6woJkgIStLJcHDX4-6gYhjw6yfofBE2kZFST6coinABOrK1AP">
                        <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full shadow hover:bg-blue-700">
                            LEARN MORE
                        </button>
                    </Link>
                </div>

                <div className="relative mt-12 md:mt-0 z-10">
                    <img
                        src="https://pngimg.com/uploads/doctor/doctor_PNG16043.png"
                        alt="doctor"
                        className="relative w-[280px] md:w-[420px] object-contain z-10 drop-shadow-xl"
                    />
                </div>

                <div className="absolute w-[300px] h-[300px] bg-blue-300 rounded-full top-10 right-0 opacity-20"></div>
                <div className="absolute w-[250px] h-[250px] bg-blue-200 rounded-full bottom-0 left-0 opacity-20"></div>

                <div className="absolute top-1/3 left-1/2 text-blue-400 text-2xl">+</div>
                <div className="absolute bottom-20 right-1/3 text-blue-300 text-3xl">+</div>

            </div>


        </div>
    )
}