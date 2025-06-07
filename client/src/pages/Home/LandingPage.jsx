import React from 'react';

function LandingPage() {
    return (
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
            <div className="max-w-6xl relative z-20 text-center text-white px-4 md:px-6 sm:px-4">
                <h1 className="text-4xl md:text-6xl sm:text-4xl font-bold mb-4 leading-tight md:leading-snug sm:leading-snug">
                    Vsa kmetijska zemljišča in zemljišča sodnih dražb na enem mestu
                </h1>
                <p className="text-lg md:text-base sm:text-sm max-w-2xl mx-auto mb-8 leading-relaxed md:leading-relaxed sm:leading-relaxed">
                    Z interaktivnim zemljevidom, prebrskajte aktualna kmetijska zemljišča, dražbe in druge nepremičnine ter poiščite svojo naslednjo priložnost
                </p>
                <div className="flex flex-col sm:flex-col md:flex-row justify-center gap-4 sm:gap-2">
                    <button className="primColor text-white font-semibold py-2 px-6 rounded-lg border-none cursor-pointer transition-colors duration-300 hover:bg-blue-700 sm:text-sm sm:py-1.5 sm:px-4">
                        View Subscriptions
                    </button>
                    <button className="bg-transparent text-white font-semibold py-2 px-6 border-2 border-white rounded-lg cursor-pointer transition-all duration-300 hover:bg-white hover:text-black sm:text-sm sm:py-1.5 sm:px-4">
                        Search Lands
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;