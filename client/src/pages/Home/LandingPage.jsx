import React from 'react';
import Features from './Features'
function LandingPage() {
    return (
        <div>
            <div className="relative min-h-screen flex items-center justify-center">
                {/* Background Video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/bgHero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Black Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

                {/* Content */}
                <div className=" max-w-6xl relative z-20 text-center text-white px-4">
                    <h1 className="text-5xl font-bold mb-4 leading-tight">
                        Vsa kmetijska zemljišča in zemljišča sodnih dražb na enem mestu
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                        Z interaktivnim zemljevidom, prebrskajte aktualna  kmetijska zemljišča, dražbe in druge nepremičnine ter poiščite svojo naslednjo priložnost
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="primColor text-white font-semibold py-2 px-6 rounded-lg border-none cursor-pointer transition-colors duration-300 hover:bg-blue-700">
                            View Subscriptions
                        </button>
                        <button className="bg-transparent text-white font-semibold py-2 px-6 border-2 border-white rounded-lg cursor-pointer transition-all duration-300 hover:bg-white hover:text-black">
                            Search Lands
                        </button>
                    </div>
                </div>
            </div>
            <Features></Features>
        </div>
    );
}

export default LandingPage;