import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Avatar from '../../assets/avatar.png';

function Testimonial() {
    const testimonials = [
        {
            id: 1,
            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus repellat aperiam quam consequatur eligendi totam vitae iusto mollitia esse.",
            name: "Akorn Veesle",
            title: "CEO Lufthansa Corp",
            avatar: Avatar,
        },
        {
            id: 2,
            quote: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            name: "Jane Doe",
            title: "CTO Tech Corp",
            avatar: Avatar,
        },
        {
            id: 3,
            quote: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
            name: "John Smith",
            title: "Founder Startup Inc",
            avatar: Avatar,
        },
        {
            id: 4,
            quote: "Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.",
            name: "Emily Johnson",
            title: "Product Manager",
            avatar: Avatar,
        },
        {
            id: 5,
            quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            name: "Michael Brown",
            title: "Lead Developer",
            avatar: Avatar,
        },
        {
            id: 6,
            quote: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            name: "Sarah Wilson",
            title: "Marketing Director",
            avatar: Avatar,
        },
        {
            id: 7,
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            name: "David Lee",
            title: "Operations Manager",
            avatar: Avatar,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonialsPerPage = 3;
    const maxIndex = Math.ceil(testimonials.length / testimonialsPerPage) - 1;
    const testimonialRef = useRef(null);

    // GSAP Animation
    const animateTestimonials = (direction) => {
        const cards = testimonialRef.current.querySelectorAll('.testimonial-card');
        gsap.fromTo(
            cards,
            {
                x: direction === 'next' ? '100%' : '-100%',
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out',
                stagger: 0.2,
            }
        );
    };

    // Navigation handlers
    const handlePrev = () => {
        setCurrentIndex((prev) => {
            const newIndex = prev === 0 ? maxIndex : prev - 1;
            animateTestimonials('prev');
            return newIndex;
        });
    };

    const handleNext = () => {
        setCurrentIndex((prev) => {
            const newIndex = prev === maxIndex ? 0 : prev + 1;
            animateTestimonials('next');
            return newIndex;
        });
    };

    // Auto-slide every 3 seconds
    useEffect(() => {
        const autoSlide = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(autoSlide); // Cleanup on unmount
    }, [currentIndex]);

    // Trigger animation on index change
    useEffect(() => {
        animateTestimonials('next');
    }, [currentIndex]);

    const visibleTestimonials = testimonials.slice(
        currentIndex * testimonialsPerPage,
        (currentIndex + 1) * testimonialsPerPage
    );

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center">
                <div className="text-center space-y-2">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-light primText">
                        Loved by <span className="font-bold">people</span> around the globe
                    </h1>
                    <p className="text-slate-600 font-light text-sm sm:text-base max-w-4xl mx-auto">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nisi non nostrum
                        rerum earum officiis explicabo ad debitis! Quaerat optio sunt ipsam tenetur sapiente
                        nesciunt nihil, quia impedit architecto cum.
                    </p>
                </div>

                <div className="relative mt-10" ref={testimonialRef}>
                    <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                        <div className="mx-auto h-full w-full max-w-5xl rounded-3xl opacity-30 blur-lg filter"></div>
                    </div>

                    <div className="relative mx-auto grid max-w-lg grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 lg:gap-10">
                        {visibleTestimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="testimonial-card flex flex-col overflow-hidden rounded-xl border border-slate-200 h-96"
                            >
                                <div className="flex flex-1 flex-col justify-between bg-slate-50 p-6 lg:px-7 lg:py-8">
                                    <div className="flex-1">
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className="h-5 w-5 text-orange-500"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>

                                        <blockquote className="mt-8 flex-1">
                                            <p className="font-[400] text-lg italic text-blue-900">
                                                "{testimonial.quote}"
                                            </p>
                                        </blockquote>
                                    </div>

                                    <div className="mt-8 flex items-center">
                                        <img
                                            className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                        />
                                        <div className="ml-4">
                                            <p className="text-base font-bold text-blue-900">{testimonial.name}</p>
                                            <p className="mt-0.5 text-sm text-gray-500">{testimonial.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full flex justify-center space-x-6 sm:space-x-8 items-center mt-4 sm:mt-6">
                    <button
                        onClick={handlePrev}
                        className="bg-slate-100 border border-slate-200 text-slate-900 h-10 w-10 sm:h-12 sm:w-12 rounded-full cursor-pointer flex items-center justify-center disabled:opacity-50"
                        disabled={currentIndex === 0}
                    >
                        <i className="fa-solid fa-arrow-left text-sm sm:text-base"></i>
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-slate-100 border border-slate-200 text-slate-900 h-10 w-10 sm:h-12 sm:w-12 rounded-full cursor-pointer flex items-center justify-center disabled:opacity-50"
                        disabled={currentIndex === maxIndex}
                    >
                        <i className="fa-solid fa-arrow-right text-sm sm:text-base"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;