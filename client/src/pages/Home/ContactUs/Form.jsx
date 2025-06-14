import React from 'react'
import { Link } from "react-router-dom";

function Form() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-24 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
            {/* <!-- Card --> */}
            <div className="flex flex-col border border-slate-200 rounded-xl p-4 sm:p-6 lg:p-8">
                <h2 className="mb-6 sm:mb-8 text-lg sm:text-xl font-semibold text-gray-800 ">
                    Fill in the form
                </h2>

                <form>
                    <div className="grid gap-4">
                        {/* <!-- Grid --> */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label
                                    htmlFor="hs-firstname-contacts-1"
                                    className="sr-only"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="hs-firstname-contacts-1"
                                    id="hs-firstname-contacts-1"
                                    className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    placeholder="First Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="hs-lastname-contacts-1" className="sr-only">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="hs-lastname-contacts-1"
                                    id="hs-lastname-contacts-1"
                                    className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>
                        {/* <!-- End Grid --> */}

                        <div>
                            <label htmlFor="hs-email-contacts-1" className="sr-only">
                                Email
                            </label>
                            <input
                                type="email"
                                name="hs-email-contacts-1"
                                id="hs-email-contacts-1"
                                autoComplete="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                placeholder="Email"
                            />
                        </div>

                        <div>
                            <label htmlFor="hs-phone-number-1" className="sr-only">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                name="hs-phone-number-1"
                                id="hs-phone-number-1"
                                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                placeholder="Phone Number"
                            />
                        </div>

                        <div>
                            <label htmlFor="hs-about-contacts-1" className="sr-only">
                                Details
                            </label>
                            <textarea
                                id="hs-about-contacts-1"
                                name="hs-about-contacts-1"
                                rows="4"
                                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                placeholder="Details"
                            ></textarea>
                        </div>
                    </div>
                    {/* <!-- End Grid --> */}

                    <div className="mt-4 grid">
                        <button
                            type="submit"
                            className="relative group inline-block w-full py-2 sm:py-3 px-4 sm:px-5 text-center text-xs sm:text-sm font-semibold text-white rounded bg-gradient-to-tl from-green-600 to-emerald-600 border border-green-700 shadow overflow-hidden transition duration-300 hover:bg-purple-800 focus:ring focus:ring-purple-800"
                        >
                            <div className="absolute top-0 right-full w-full h-full bg-slate-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                            <span className="relative z-10">Send Inquiry</span>
                        </button>
                    </div>

                    <div className="mt-3 text-center">
                        <p className="text-xs sm:text-sm text-gray-500">
                            We'll get back to you in 1-2 business days.
                        </p>
                    </div>
                </form>
            </div>
            {/* <!-- End Card --> */}

            <div className="divide-y divide-gray-200">
                {/* <!-- Icon Block --> */}
                <div className="flex gap-x-4 sm:gap-x-7 py-4 sm:py-6">
                    <svg
                        className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1.5 text-gray-800"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <path d="M12 17h.01" />
                    </svg>
                    <div className="grow">
                        <h3 className="font-semibold text-sm sm:text-base">
                            Knowledgebase
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-gray-500">
                            We're here to help with any questions or code.
                        </p>
                        <Link
                            className="mt-2 inline-flex items-center gap-x-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                            to="/"
                        >
                            Contact support
                            <svg
                                className="shrink-0 size-2 sm:size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
                {/* <!-- End Icon Block --> */}

                {/* <!-- Icon Block --> */}
                <div className="flex gap-x-4 sm:gap-x-7 py-4 sm:py-6">
                    <svg
                        className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1.5 text-gray-800"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                        <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                    </svg>
                    <div className="grow">
                        <h3 className="font-semibold text-sm sm:text-base text-gray-800">
                            FAQ
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-gray-500">
                            Search our FAQ for answers to anything you might ask.
                        </p>
                        <Link
                            className="mt-2 inline-flex items-center gap-x-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                            to="/"
                        >
                            Visit FAQ
                            <svg
                                className="shrink-0 size-2 sm:size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
                {/* <!-- End Icon Block --> */}

                {/* <!-- Icon Block --> */}
                <div className="flex gap-x-4 sm:gap-x-7 py-4 sm:py-6">
                    <svg
                        className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1.5 text-gray-800"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m7 11 2-2-2-2" />
                        <path d="M11 13h4" />
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    </svg>
                    <div className="grow">
                        <h3 className="font-semibold text-sm sm:text-base text-gray-800">
                            Developer APIs
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-gray-500">
                            Check out our development quickstart guide.
                        </p>
                        <Link
                            className="mt-2 inline-flex items-center gap-x-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                            to="/"
                        >
                            Contact sales
                            <svg
                                className="shrink-0 size-2 sm:size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
                {/* <!-- End Icon Block --> */}

                {/* <!-- Icon Block --> */}
                <div class=" flex gap-x-4 sm:gap-x-7 py-4 sm:py-6">
                    <svg
                        class="shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1.5 text-gray-800"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                        <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                    </svg>
                    <div class="grow">
                        <h3 class="font-semibold text-sm sm:text-base text-gray-800">
                            Contact us by email
                        </h3>
                        <p class="mt-1 text-xs sm:text-sm text-gray-500">
                            If you wish to write us an email instead please use
                        </p>
                        <Link
                            class="mt-2 inline-flex items-center gap-x-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                            to="#"
                            onClick={(e) => {
                                e.preventDefault(); // Prevents navigation within the app
                                window.location.href = "mailto:example@site.com";
                            }}
                        >
                            example@site.com
                        </Link>
                    </div>
                </div>
                {/* <!-- End Icon Block --> */}
            </div>
        </div>
    )
}

export default Form
