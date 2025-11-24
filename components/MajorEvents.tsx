import React from "react";

export const MajorEvents: React.FC = () => {
    return (
        <div className="slide flex flex-col items-center justify-center h-full bg-white px-6 md:px-16 py-12">
            <div className="max-w-6xl w-full">
                {/* Header */}
                <div className="flex items-center gap-4 mb-12 justify-center">
                    <img src="logo.png" alt="ACS Logo" className="w-16 h-16" />
                    <h2 className="text-5xl font-bold text-orange-500 text-center">
                        Major Events
                    </h2>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Events Column */}
                    <div className="space-y-8">
                        <div className="bg-orange-50 p-8 rounded-xl border border-orange-200 shadow-lg">
                            <div className="text-orange-500 text-4xl font-bold mb-2">01</div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">IngeHack CTF</h3>
                            <ul className="space-y-2 text-gray-700 list-inside list-disc ml-4">
                                <li>100+ attendees</li>
                                <li>3 major sponsorships secured</li>
                                <li>Massive impact on cybersecurity interest</li>
                            </ul>
                        </div>
                        <div className="bg-orange-50 p-8 rounded-xl border border-orange-200 shadow-lg">
                            <div className="text-orange-500 text-4xl font-bold mb-2">02</div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Jisr Numuw Ideathon</h3>
                            <ul className="space-y-2 text-gray-700 list-inside list-disc ml-4">
                                <li>60 attendees</li>
                                <li>Community building focus</li>
                                <li>Ideas & plans for Jisr Numuw initiative</li>
                            </ul>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="bg-gray-200 h-[500px] w-full rounded-xl flex items-center justify-center text-gray-500 font-semibold text-xl border border-gray-300 shadow-xl overflow-hidden">
                        <img src="jisr.jpg" alt="Jisr Numuw" className="object-cover w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};
