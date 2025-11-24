"use client";

import React, { useState, useEffect } from "react";

export const MemberTriumphs: React.FC = () => {
    const [imageSrc, setImageSrc] = useState("ctf-djazair.jpg");
    const [fade, setFade] = useState(false); // controls fade animation

    // Function to change image with fade
    const changeImage = (newSrc: string) => {
        setFade(true); // start fade out
        setTimeout(() => {
            setImageSrc(newSrc); // change image
            setFade(false); // fade in
        }, 300); // duration matches transition
    };

    // Automatic toggle every 6 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            changeImage(imageSrc === "ctf-djazair.jpg" ? "ict.png" : "ctf-djazair.jpg");
        }, 6000);

        return () => clearInterval(interval);
    }, [imageSrc]);

    return (
        <div className="slide flex flex-col items-center justify-center h-full bg-white px-6 md:px-16 py-12">
            <div className="max-w-6xl w-full">
                {/* Header */}
                <div className="flex items-center gap-4 mb-12 justify-center">
                    <img src="favicon.svg" alt="ACS Logo" className="w-16 h-16" />
                    <h2 className="text-5xl font-bold text-orange-500 text-center">
                        Member Triumphs
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image with fade */}
                    <div className="bg-gray-200 h-[400px] w-full rounded-xl flex items-center justify-center text-gray-500 font-semibold text-xl border border-gray-300 shadow-xl overflow-hidden relative">
                        <img
                            key={imageSrc}
                            src={imageSrc}
                            alt="winners"
                            className={`w-full h-full object-cover transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"
                                }`}
                        />
                    </div>

                    {/* Achievements */}
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 h-full shadow-lg">
                        <h3 className="text-3xl font-bold mb-6 text-orange-500">
                            Individual & Team Accomplishments
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* CTF El-Djazair - clickable */}
                            <div
                                className="text-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm cursor-pointer"
                                onClick={() => changeImage("ctf-djazair.jpg")}
                            >
                                <div className="text-4xl mb-2">🏆</div>
                                <p className="font-semibold text-gray-900 text-lg">
                                    CTF El-Djazair
                                </p>
                                <p className="text-sm text-orange-600 font-bold">1st & 2nd Place</p>
                            </div>

                            {/* Huawei ICT 2025 - clickable */}
                            <div
                                className="text-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm cursor-pointer"
                                onClick={() => changeImage("ict.png")}
                            >
                                <div className="text-4xl mb-2">🌐</div>
                                <p className="font-semibold text-gray-900 text-lg">
                                    Huawei ICT 2025
                                </p>
                                <p className="text-sm text-orange-600 font-bold">Grand Prize Winners</p>
                            </div>

                            {/* BlackHat MEA */}
                            <div className="text-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm col-span-2 max-w-xs mx-auto">
                                <div className="text-4xl mb-2">🎯</div>
                                <p className="font-semibold text-gray-900 text-lg">BlackHat MEA</p>
                                <p className="text-sm text-orange-600 font-bold">2025 Qualifiers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
