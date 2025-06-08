import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

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
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRefs = useRef([]);
    const timerRef = useRef(null);
    const cardsPerRow = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    const totalSlides = Math.ceil(projectsData.length / cardsPerRow);

    const nextSlide = () => {
        setCurrentIndex((prev) => {
            const newIndex = (prev + 1) % totalSlides;
            animateSlides(prev, newIndex);
            return newIndex;
        });
        resetAutoSlide();
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => {
            const newIndex = prev === 0 ? totalSlides - 1 : prev - 1;
            animateSlides(prev, newIndex);
            return newIndex;
        });
        resetAutoSlide();
    };

    const animateSlides = (oldIndex, newIndex) => {
        const oldSlide = slideRefs.current[oldIndex];
        const newSlide = slideRefs.current[newIndex];

        gsap.to(oldSlide, {
            x: newIndex > oldIndex ? '-100%' : '100%',
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
        });

        gsap.fromTo(
            newSlide,
            { x: newIndex > oldIndex ? '100%' : '-100%', opacity: 0 },
            { x: '0%', opacity: 1, duration: 0.5, ease: 'power2.out' }
        );
    };

    const resetAutoSlide = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        timerRef.current = setInterval(nextSlide, 3000);
    };

    useEffect(() => {
        slideRefs.current.forEach((slide, index) => {
            if (index !== 0) {
                gsap.set(slide, { x: '100%', opacity: 0 });
            } else {
                gsap.set(slide, { x: '0%', opacity: 1 });
            }
        });

        resetAutoSlide();

        return () => clearInterval(timerRef.current);
    }, []);

    const slides = [];
    for (let i = 0; i < projectsData.length; i += cardsPerRow) {
        slides.push(projectsData.slice(i, i + cardsPerRow));
    }

    return (
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center space-y-2 mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-light primText">
                    Available <span className="font-bold">Bulletin</span> Ads
                </h1>
                <p className="text-slate-600 font-light text-sm sm:text-base max-w-4xl mx-auto">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nisi non nostrum
                    rerum earum officiis explicabo ad debitis! Quaerat optio sunt ipsam tenetur sapiente
                    nesciunt nihil, quia impedit architecto cum.
                </p>
            </div>

            <div className="relative max-w-full overflow-hidden">
                <div className="relative h-auto min-h-[400px] sm:min-h-[450px]">
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            ref={(el) => (slideRefs.current[slideIndex] = el)}
                            className="absolute top-0 left-0 w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                            style={{ opacity: 0 }}
                        >
                            {slide.map((project) => (
                                <div
                                    key={project.code}
                                    className="flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl"
                                >
                                    <div className="h-48 sm:h-52 relative rounded-t-xl overflow-hidden">
                                        <img
                                            src={project.coverImage}
                                            alt={`${project.code} cover`}
                                            className="w-full h-full object-cover"
                                        />
                                        <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-green-600 capitalize text-white text-xs font-semibold px-2 py-1 rounded">
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
                                    <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
                                        <Link
                                            to="#"
                                            className="w-full py-2 sm:py-3 px-3 sm:px-4 inline-flex justify-center items-center gap-x-2 text-xs sm:text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50"
                                        >
                                            View Details
                                        </Link>
                                        <Link
                                            to="#"
                                            className="w-full py-2 sm:py-3 px-3 sm:px-4 inline-flex justify-center items-cente
System: rs gap-x-2 text-xs sm:text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50"
                                        >
                                            Buy Now
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full flex justify-center space-x-6 sm:space-x-8 items-center mt-4 sm:mt-6'>
                <button
                    onClick={prevSlide}
                    className="bg-slate-100 border border-slate-200 text-slate-900 h-10 w-10 sm:h-12 sm:w-12 rounded-full cursor-pointer flex items-center justify-center"
                >
                    <i className="fa-solid fa-arrow-left text-sm sm:text-base"></i>
                </button>
                <button
                    onClick={nextSlide}
                    className="bg-slate-100 border border-slate-200 text-slate-900 h-10 w-10 sm:h-12 sm:w-12 rounded-full cursor-pointer flex items-center justify-center"
                >
                    <i className="fa-solid fa-arrow-right text-sm sm:text-base"></i>
                </button>
            </div>
        </div>
    );
}

export default BulletinAds;