import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logoWhite.png';

function Footer() {
    const location = useLocation(); // Get current route

    // Define the routes where the footer should be visible
    const visibleRoutes = ['/', '/pricing-plans', '/search-lands', '/contact-us'];

    // Check if the current route is one of the visible routes
    const shouldShowFooter = visibleRoutes.includes(location.pathname);

    // Conditionally render the footer
    if (!shouldShowFooter) {
        return null; // Don't render the footer if the route is not in visibleRoutes
    }

    return (
        <footer className="w-full primColor mt-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                    <div className="col-span-full mb-10 lg:col-span-4 lg:mb-0">
                        <a href="https://pagedone.io/" className="flex justify-center lg:justify-start">
                            <img src={logo} alt="Brand Logo" className="w-52" />
                        </a>
                        <p className="pt-8 text-sm text-gray-200 lg:max-w-xs text-center lg:text-left">
                            Trusted in more than 100 countries & 5 million customers. Have any query ?
                        </p>
                        <p className="pt-2 text-sm text-gray-200 lg:max-w-xs text-center lg:text-left">
                            info@kmap.si
                        </p>
                        <p className="py-2 text-sm text-gray-200 lg:max-w-xs text-center lg:text-left">
                          +365 123 456 7890
                        </p>
                        <a
                            href="javascript:;"
                            className="py-2.5 px-5 font-bold h-9 block w-fit bg-green-200 rounded-full shadow-sm text-xs text-green-800 mx-auto transition-all duration-500 lg:mx-0"
                        >
                            Contact us
                        </a>
                    </div>

                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg text-gray-200 font-medium mb-7">Pages</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6">
                                <a href="javascript:;" className="text-gray-200">
                                    Search Lands
                                </a>
                            </li>
                            <li className="mb-6">
                                <a href="javascript:;" className="text-gray-200">
                                    Ads
                                </a>
                            </li>
                            <li className="mb-6">
                                <a href="javascript:;" className="text-gray-200">
                                    Subscriptions
                                </a>
                            </li>
                            <li className="mb-6">
                                <a href="javascript:;" className="text-gray-200">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg text-gray-200 font-medium mb-7">Terms</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6">
                                <a href="javascript:;" className="text-gray-200">
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="mb-6">
                                <a href="/" className="text-gray-200">
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="py-7 border-t border-gray-200">
                    <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                        <span className="text-sm text-gray-200">
                            ©<a href="https://pagedone.io/">kmap.si</a> 2025, All rights reserved.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;