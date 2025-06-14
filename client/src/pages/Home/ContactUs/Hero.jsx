import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div
      className="relative h-[50vh] primColor flex flex-col space-y-4 items-center justify-center"
      style={{
        background: 'linear-gradient(to bottom, #09814A 0%, rgba(255, 255, 255, 0.8) 100%)',
      }}
    >
      <div class="flex items-center justify-center w-full flex-wrap gap-4">
        <Link class="inline-block text-xs  tracking-tight bg-clip-text text-emerald-900 font-semibold" to="/">Home</Link>
        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="8" viewbox="0 0 4 8" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.50225 0.5L0 0.98755L2.95244 4L0.0073503 7.0051L0.50225 7.5L4.00225 4L0.50225 0.5Z" fill="#19191B"></path>
        </svg>
        <Link class="inline-block text-xs font-semibold tracking-tight bg-clip-text text-emerald-900" to="/contact-us">Contact Us</Link>
      </div>
      <h1 className="relative text-emerald-900 text-4xl md:text-5xl font-bold text-center inline-block px-4 sm:px-0" >
        Have any Queries?
      </h1>
      <p className="relative text-emerald-700 text-center px-4 sm:px-0">
        Feel free to reach out to us with any questions or concerns you may have. We're here to help!
      </p>
    </div>
  );
}

export default Hero;  