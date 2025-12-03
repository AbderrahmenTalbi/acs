"use client";

import React, { useState, useEffect } from "react";

export const AchievementGallery: React.FC = () => {
    const [imageSrc, setImageSrc] = useState("ctf-djazair.jpg");
    const [fade, setFade] = useState(false);

    const changeImage = (newSrc: string) => {
        setFade(true);
        setTimeout(() => {
            setImageSrc(newSrc);
            setFade(false);
        }, 300);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            changeImage(imageSrc === "ctf-djazair.jpg" ? "ict.png" : "ctf-djazair.jpg");
        }, 6000);

        return () => clearInterval(interval);
    }, [imageSrc]);

    const memberProjects = [
        {
            title: "Ahmed's Python Game",
            description: "A simple 2D platformer built from scratch in Python.",
            emoji: "🎮",
            image: "python-game.png",
        },
        {
            title: "Sarah's Arduino Robot",
            description: "Autonomous line-following robot using Arduino.",
            emoji: "🤖",
            image: "arduino-robot.png",
        },
        {
            title: "IoT Weather Station",
            description: "Real-time weather monitoring project with sensors.",
            emoji: "🌤️",
            image: "iot-weather.png",
        },
    ];

    return (
        <div className="slide flex flex-col items-center justify-center h-full bg-white px-6 md:px-16 py-12">
            <div className="max-w-6xl w-full">
                {/* Header */}
                <div className="flex flex-col items-center gap-4 mb-16">
                    <img src="favicon.svg" alt="ACS Logo" className="w-16 h-16" />
                    <h2 className="text-5xl font-bold text-orange-500 text-center">
                        Achievement Gallery
                    </h2>
                    <p className="text-center text-gray-700 max-w-2xl mt-2">
                        Explore memorable achievements and real projects built by our members — showing that anyone can succeed!
                    </p>
                </div>

                {/* Success Stories */}
                <h3 className="text-3xl font-bold mb-6 text-orange-500 text-center">Success Stories</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    {/* Image with fade */}
                    <div className="bg-gray-200 h-[400px] w-full rounded-xl flex items-center justify-center text-gray-500 font-semibold text-xl border border-gray-300 shadow-xl overflow-hidden relative">
                        <img
                            key={imageSrc}
                            src={imageSrc}
                            alt="achievement"
                            className={`w-full h-full object-cover transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}
                        />
                    </div>

                    {/* Achievements Cards */}
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 h-full shadow-lg">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Clickable cards */}
                            <div className="text-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm cursor-pointer"
                                onClick={() => changeImage("ctf-djazair.jpg")}>
                                <div className="text-4xl mb-2">🏆</div>
                                <p className="font-semibold text-gray-900 text-lg">CTF El-Djazair</p>
                                <p className="text-sm text-orange-600 font-bold">1st & 2nd Place</p>
                            </div>

                            <div className="text-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm cursor-pointer"
                                onClick={() => changeImage("ict.png")}>
                                <div className="text-4xl mb-2">🌐</div>
                                <p className="font-semibold text-gray-900 text-lg">Huawei ICT 2025</p>
                                <p className="text-sm text-orange-600 font-bold">Grand Prize Winners</p>
                            </div>

                            <div className="text-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm col-span-2 max-w-xs mx-auto">
                                <div className="text-4xl mb-2">🎯</div>
                                <p className="font-semibold text-gray-900 text-lg">BlackHat MEA</p>
                                <p className="text-sm text-orange-600 font-bold">2025 Qualifiers</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Member Projects */}
                {/* <h3 className="text-3xl font-bold mb-6 text-orange-500 text-center">Member Projects</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {memberProjects.map((project, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all">
                            <div className="text-5xl mb-4 text-center">{project.emoji}</div>
                            <h4 className="font-bold text-lg mb-2 text-center">{project.title}</h4>
                            <p className="text-gray-700 text-sm text-center">{project.description}</p>
                            <img src={project.image} alt={project.title} className="mt-4 rounded-lg w-full h-40 object-cover" />
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    );
};
