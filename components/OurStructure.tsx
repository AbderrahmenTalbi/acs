import React from "react";

export const OurStructure: React.FC = () => {
    return (
        <div className="slide flex items-center justify-center h-full bg-white px-6 md:px-16 py-40">
            <div className="max-w-6xl w-full flex flex-col items-center">
                {/* Header */}
                <div className="flex items-center gap-4 mb-12 justify-center">
                    <img src="/favicon.svg" alt="ACS Logo" className="w-16 h-16" />
                    <h2 className="text-5xl font-bold text-orange-500 text-center">
                        Our Structure
                    </h2>
                </div>

                {/* Core Team */}
                <div className="bg-orange-500 text-white px-8 py-4 rounded-lg text-center font-bold text-xl shadow-lg mb-8">
                    Core Team
                </div>

                {/* Departments */}
                <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
                    {/* Tech & Development */}
                    <div className="bg-gray-50 border border-orange-300 px-6 py-4 rounded-lg text-center flex-1 max-w-xs shadow-md">
                        <h3 className="font-bold text-lg mb-2 text-orange-500">Tech & Development</h3>
                        <p className="text-sm text-gray-600">Building the Future.</p>
                    </div>

                    {/* Design & Media */}
                    <div className="bg-gray-50 border border-orange-300 px-6 py-4 rounded-lg text-center flex-1 max-w-xs shadow-md">
                        <h3 className="font-bold text-lg mb-2 text-orange-500">Design & Media</h3>
                        <p className="text-sm text-gray-600">Visualizing the Vision.</p>
                    </div>

                    {/* Partnerships & Outreach */}
                    <div className="bg-gray-50 border border-orange-300 px-6 py-4 rounded-lg text-center flex-1 max-w-xs shadow-md">
                        <h3 className="font-bold text-lg mb-2 text-orange-500">Partnerships & Outreach</h3>
                        <p className="text-sm text-gray-600">Building Bridges & Opportunities.</p>
                    </div>
                </div>

                {/* Expanded Department Descriptions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8 justify-items-center w-full max-w-4xl">

                    <div className="bg-gray-50 px-4 py-3 rounded text-center text-base border border-gray-200 font-semibold shadow-sm w-full">
                        <span className="text-orange-500">◆</span> Building the Future
                    </div>

                    <div className="bg-gray-50 px-4 py-3 rounded text-center text-base border border-gray-200 font-semibold shadow-sm w-full">
                        <span className="text-orange-500">◆</span> Visualizing the Vision
                    </div>

                    <div className="bg-gray-50 px-4 py-3 rounded text-center text-base border border-gray-200 font-semibold shadow-sm w-full">
                        <span className="text-orange-500">◆</span> Nurturing Potential
                    </div>

                    <div className="bg-gray-50 px-4 py-3 rounded text-center text-base border border-gray-200 font-semibold shadow-sm w-full">
                        <span className="text-orange-500">◆</span> Connecting Communities
                    </div>
                </div>
            </div>
        </div>
    );
};
