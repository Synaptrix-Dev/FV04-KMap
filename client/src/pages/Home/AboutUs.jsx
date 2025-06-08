import React from 'react'
import AboutBG from '../../assets/about.avif'

function AboutUs() {
    return (
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto" >
            <div className="aspect-w-16 aspect-h-7">
                <img className="w-full object-cover rounded-xl" src={AboutBG} alt="Features Image" />
            </div>



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
                            <i class="fa-regular fa-map-location-dot mt-1 text-2xl primText"></i>
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
                            <i class="fa-regular fa-gavel mt-1 text-2xl primText"></i>
                            <div className="grow">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Auctions
                                </h3>
                                <p className="mt-1 text-gray-600">
                                    Regularly updated information on public real estate auctions so you don't miss any opportunities.
                                </p>
                            </div>
                        </div>

                        {/* Icon Block */}
                        <div className="flex gap-x-5">
                            <i class="fa-regular fa-users mt-1 text-2xl primText"></i>
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
        </div >
    )
}

export default AboutUs
