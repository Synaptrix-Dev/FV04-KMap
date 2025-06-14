import React, { useRef, useEffect, useState } from 'react';

const projectsData = [
    {
        id: 1,
        code: 'KMAP-001',
        price: '$2,999,000',
        description: 'A software that develops products for software developers and developments.',
        coverImage: 'https://nammafamilybuilder.com/wp-content/uploads/2022/02/Farm-land-for-sale.jpg',
        status: 'sold',
    },
    {
        id: 2,
        code: 'KMAP-002',
        price: '$59,99,000',
        description: 'A software that develops products for software developers and developments.',
        coverImage: 'https://midwestfarmco.com/wp-content/uploads/2022/01/Purchasing-farmland-Midwest.jpg',
        status: 'available',
    },
    {
        id: 3,
        code: 'KMAP-003',
        price: '$57,77,000',
        description: 'A software that develops products for software developers and developments.',
        coverImage: 'https://thumbs.dreamstime.com/b/young-eggplants-grow-field-vegetable-rows-agriculture-farming-farmlands-landscape-agricultural-land-120398754.jpg',
        status: 'available',
    },
    {
        id: 4,
        code: 'KMAP-004',
        price: '$2,999,000',
        description: 'A software that develops products for software developers and developments.',
        coverImage: 'https://img.freepik.com/premium-photo/generative-ai-farm-landscape-agricultural-fields-beautiful-countryside-country-road_93150-2591.jpg',
        status: 'sold',
    },
    {
        id: 5,
        code: 'KMAP-005',
        price: '$2,999,000',
        description: 'A software that develops products for software developers and developments.',
        coverImage: 'https://www.brutonknowles.co.uk/wp-content/uploads/2025/03/iStock-861958560.jpg',
        status: 'sold',
    },
];

function BulletinAds() {
    const carouselRef = useRef(null);
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isGsapLoaded, setIsGsapLoaded] = useState(false);
    const [cardsPerView, setCardsPerView] = useState(3);

    // Get current screen size and update cards per view
    const updateCardsPerView = () => {
        if (typeof window !== 'undefined') {
            const width = window.innerWidth;
            let newCardsPerView;
            if (width >= 1024) {
                newCardsPerView = 3; // lg and xl
            } else if (width >= 768) {
                newCardsPerView = 2; // md
            } else {
                newCardsPerView = 1; // sm and smaller
            }
            
            if (newCardsPerView !== cardsPerView) {
                setCardsPerView(newCardsPerView);
                setCurrentIndex(0); // Reset to first slide on screen size change
            }
        }
    };

    const maxIndex = Math.max(0, projectsData.length - cardsPerView);

    useEffect(() => {
        // Set initial cards per view
        updateCardsPerView();

        // Handle window resize
        const handleResize = () => {
            updateCardsPerView();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [cardsPerView]);

    useEffect(() => {
        // Load GSAP
        const loadGSAP = () => {
            if (window.gsap) {
                setIsGsapLoaded(true);
                return;
            }

            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
            script.onload = () => {
                setIsGsapLoaded(true);
            };
            script.onerror = () => {
                console.error('Failed to load GSAP');
            };
            document.head.appendChild(script);
        };

        loadGSAP();
    }, []);

    const slideToIndex = (index) => {
        if (!isGsapLoaded || !carouselRef.current || !containerRef.current) return;

        let targetIndex = index;
        const currentMaxIndex = Math.max(0, projectsData.length - cardsPerView);

        // Handle infinite scrolling
        if (index > currentMaxIndex) {
            targetIndex = 0;
        } else if (index < 0) {
            targetIndex = currentMaxIndex;
        }

        // Calculate translation based on container width and cards per view
        const containerWidth = containerRef.current.offsetWidth;
        const slideWidth = containerWidth / cardsPerView;
        const translateX = -(targetIndex * slideWidth);

        window.gsap.to(carouselRef.current, {
            x: translateX,
            duration: 0.4,
            ease: "power2.out"
        });

        setCurrentIndex(targetIndex);
    };

    const nextSlide = () => {
        slideToIndex(currentIndex + 1);
    };

    const prevSlide = () => {
        slideToIndex(currentIndex - 1);
    };

    return (
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
             <div className="text-center space-y-2 mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-light primText">
                    Last Added <span className="font-bold">Ads</span>
                </h1>
                <p className="text-slate-600 font-light text-sm sm:text-base max-w-4xl mx-auto">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nisi non nostrum
                    rerum earum officiis explicabo ad debitis! Quaerat optio sunt ipsam tenetur sapiente
                    nesciunt nihil, quia impedit architecto cum.
                </p>
            </div>

            <div className="relative">
                {/* Carousel Container */}
                <div 
                    ref={containerRef}
                    className="overflow-hidden"
                >
                    <div
                        ref={carouselRef}
                        className="flex"
                    >
                        {projectsData.map((project) => (
                            <div
                                key={project.code}
                                className="flex-shrink-0 px-2"
                                style={{
                                    width: `${100 / cardsPerView}%`
                                }}
                            >
                                <div className="flex flex-col h-full bg-white border border-gray-200 rounded-xl">
                                    <div className="h-48 sm:h-52 relative rounded-t-xl overflow-hidden">
                                        <img
                                            src={project.coverImage}
                                            alt={`${project.code} cover`}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                        <span className={`absolute top-3 left-3 sm:top-4 sm:left-4 capitalize text-white text-xs font-semibold px-2 py-1 rounded ${project.status === 'sold' ? 'bg-red-600' : 'bg-green-600'
                                            }`}>
                                            {project.status}
                                        </span>
                                    </div>
                                    <div className="p-3 sm:p-4 md:p-6 flex-grow">
                                        <span className="block mb-1 text-xs font-semibold uppercase text-blue-600">
                                            {project.code}
                                        </span>
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{project.price}</h3>
                                        <p className="mt-2 sm:mt-3 text-gray-500 text-sm">{project.description}</p>
                                    </div>
                                    <div className="mt-auto flex border-t border-gray-200">
                                        <div className="w-full py-2 sm:py-3 px-3 sm:px-4 inline-flex justify-center items-center gap-x-2 text-xs sm:text-sm font-medium rounded-b-xl bg-white text-gray-800 hover:bg-gray-50 transition-colors duration-200 cursor-not-allowed opacity-60">
                                            View Details
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Controls Below Cards */}
                <div className="flex justify-center items-center gap-4 mt-8">
                    {/* Previous Button */}
                    <button
                        onClick={prevSlide}
                        className="bg-slate-100 border border-slate-200 text-slate-900 h-10 w-10 sm:h-10 sm:w-10 rounded-full cursor-pointer flex items-center justify-center hover:bg-slate-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        aria-label="Previous slide"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex gap-2">
                        {Array.from({ length: maxIndex + 1 }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => slideToIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-200 focus:outline-none ${index === currentIndex
                                        ? 'bg-blue-600 w-6'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="bg-slate-100 border border-slate-200 text-slate-900 h-10 w-10 sm:h-10 sm:w-10 rounded-full cursor-pointer flex items-center justify-center hover:bg-slate-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        aria-label="Next slide"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BulletinAds;