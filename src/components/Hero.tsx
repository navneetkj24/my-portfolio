//import "../styles/hero.css";
"use client";

import Image from "next/image";
//import "../styles/hero.css";

export default function Hero() {
    return (
        <section id="hero" className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-6">
            {/* Left side text */}
            <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-4">Hi, I'm Navneet Kaur 👋</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Software Developer & IT Infrastructure Specialist
                </p>
                
            </div>

            {/* Right side image */}
            <div className="flex-1 flex justify-center">
                <Image
                    src="/profile.jpg"   // put inside public/profile.jpg
                    alt="Profile Picture"
                    width={350}
                    height={350}
                    className="rounded-full shadow-lg"
                />
            </div>
        </section>
    );
}
