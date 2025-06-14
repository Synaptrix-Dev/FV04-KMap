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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isGsapLoaded, setIsGsapLoaded] = useState(false);
    const [cardsPerView, setCardsPerView] = useState(3);

    // Determine cards per view based on screen size
    const updateCardsPerView = () => {
        if (typeof window !== 'undefined') {
            const width = window.innerWidth;
            if (width >= 1024) {
                setCardsPerView(3); // lg and xl
            } else if (width >= 768) {
                setCardsPerView(2); // md
            } else {
                setCardsPerView(1); // sm and smaller
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
            // Reset to valid index if current index is out of bounds
            setCurrentIndex(prev => {
                const newMaxIndex = Math.max(0, projectsData.length - cardsPerView);
                return prev > newMaxIndex ? 0 : prev;
            });
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
        if (!isGsapLoaded || !carouselRef.current) return;

        let targetIndex = index;
        const currentMaxIndex = Math.max(0, projectsData.length - cardsPerView);

        // Handle infinite scrolling
        if (index > currentMaxIndex) {
            targetIndex = 0;
        } else if (index < 0) {
            targetIndex = currentMaxIndex;
        }

        // Calculate the exact pixel offset based on card width + gap
        const cardWidth = carouselRef.current.children[0]?.offsetWidth || 0;
        const gap = 16; // 1rem = 16px gap
        const translateX = -(targetIndex * (cardWidth + gap));

        window.gsap.to(carouselRef.current, {
            x: translateX,
            duration: 0.5,
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
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900">
                    Available <span className="font-bold">Bulletin</span> Ads
                </h1>
                <p className="text-slate-600 font-light text-sm sm:text-base max-w-4xl mx-auto">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nisi non nostrum
                    rerum earum officiis explicabo ad debitis! Quaerat optio sunt ipsam tenetur sapiente
                    nesciunt nihil, quia impedit architecto cum.
                </p>
            </div>

            <div className="relative">
                {/* Carousel Container */}
                <div className="overflow-hidden">
                    <div
                        ref={carouselRef}
                        className="flex gap-1"
                    >
                        {projectsData.map((project) => (
                            <div
                                key={project.code}
                                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                            >
                                <div className="flex flex-col w-[96%] h-full bg-white border border-gray-200 rounded-xl">
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
                <div className="flex justify-center items-center gap-2 mt-8">
                    {/* Previous Button */}
                    <button
                        onClick={prevSlide}
                         className="bg-slate-100 border border-slate-200 text-slate-900 h-10 w-10 sm:h-10 sm:w-10 rounded-full cursor-pointer flex items-center justify-center"
                        aria-label="Previous slide"
                    >
                         <i className="fa-solid fa-arrow-left text-sm sm:text-base"></i>
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                           className="bg-slate-100 border border-slate-200 text-slate-900 h-10 w-10 sm:h-10 sm:w-10 rounded-full cursor-pointer flex items-center justify-center"
                        aria-label="Next slide"
                    >
                         <i className="fa-solid fa-arrow-right text-sm sm:text-base"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BulletinAds;