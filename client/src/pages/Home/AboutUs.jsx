import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import about1 from '../../assets/about (1).jpg';
import about2 from '../../assets/about (2).jpg';
import about3 from '../../assets/about (3).jpg';
import about4 from '../../assets/about (4).jpg';
import about5 from '../../assets/about (5).jpg';
import about6 from '../../assets/about (6).jpg';
import about7 from '../../assets/about (7).jpg';
import about8 from '../../assets/about (8).jpg';
import about9 from '../../assets/about (9).jpg';
import about10 from '../../assets/about (10).jpg';
import about11 from '../../assets/about (11).jpg';
import about12 from '../../assets/about (12).jpg';
import about13 from '../../assets/about (13).jpg';
import about14 from '../../assets/about (14).jpg';
import about15 from '../../assets/about (15).jpg';
import about16 from '../../assets/about (16).jpg';
import about17 from '../../assets/about (17).jpg';
import about18 from '../../assets/about (18).jpg';
import about19 from '../../assets/about (19).jpg';
import about20 from '../../assets/about (20).jpg';
import about21 from '../../assets/about (21).jpg';
import about22 from '../../assets/about (22).jpg';
import about23 from '../../assets/about (23).jpg';
import about24 from '../../assets/about (24).jpg';

function AboutUs() {
  const images = [
    about1, about2, about3, about4, about5, about6, about7, about8, about9, about10,
    about11, about12, about13, about14, about15, about16, about17, about18, about19,
    about20, about21, about22, about23, about24,
    'https://via.placeholder.com/1200x600?text=Fallback+Image' // Fallback for debugging
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const imageElements = slider.querySelectorAll('img');

    // Initialize GSAP: set all images to opacity 0 except the first
    gsap.set(imageElements, { opacity: 0 });
    if (imageElements[0]) {
      gsap.set(imageElements[0], { opacity: 1 });
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;

        if (imageElements[prevIndex] && imageElements[nextIndex]) {
          // Fade out current image
          gsap.to(imageElements[prevIndex], {
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
          });

          // Fade in next image
          gsap.to(imageElements[nextIndex], {
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
          });
        }

        return nextIndex;
      });
    }, 1000); // Change image every 1 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-1">
          <h2 className="font-light text-2xl md:text-3xl">
            Discover Agricultural Land, Real Estate, and Auctions Effortlessly with <span className='font-bold primText'>Kmap.si</span>
          </h2>
          <p className="mt-2 md:mt-4 text-gray-500">
            Welcome to Kmap.si! We are a company that, with innovative solutions and dedication, wants to make it easier to find agricultural land, real estate and auctions in Slovenia. Our mission is to enable everyone to quickly and easily find the right information about land and real estate - all in one place.
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            <div className="flex gap-x-5">
              <i className="fa-regular fa-map-location-dot mt-1 text-2xl primText"></i>
              <div className="grow">
                <h3 className="text-lg font-semibold text-gray-800">
                  Search for land and real estate on an interactive map
                </h3>
                <p className="mt-1 text-gray-600">
                  Exact locations of all ads, allowing you to review them in a clear and transparent way.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5">
              <i className="fa-regular fa-gavel mt-1 text-2xl primText"></i>
              <div className="grow">
                <h3 className="text-lg font-semibold text-gray-800">
                  Auctions
                </h3>
                <p className="mt-1 text-gray-600">
                  Regularly updated information on public real estate auctions so you don’t miss any opportunities.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5">
              <i className="fa-regular fa-users mt-1 text-2xl primText"></i>
              <div className="grow">
                <h3 className="text-lg font-semibold text-gray-800">
                  Opportunity for everyone
                </h3>
                <p className="mt-1 text-gray-600">
                  Our platform is intended for both land seekers and owners who want to sell or highlight their property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={sliderRef}
        className="w-full h-96 relative overflow-hidden rounded-xl"
        style={{ minHeight: '300px' }}
      >
        {images.length > 0 ? (
          images.map((image, index) => (
            <img
              key={index}
              className="w-full h-full object-cover absolute top-0 left-0"
              src={image}
              alt={`Features Image ${index + 1}`}
              onError={(e) => {
                console.error(`Failed to load image ${index + 1}: ${image}`);
                e.target.src = 'https://via.placeholder.com/1200x600?text=Image+Failed';
              }}
            />
          ))
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-xl">
            No Images Available
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutUs;