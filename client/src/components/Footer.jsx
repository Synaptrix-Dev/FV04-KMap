import React from 'react'
import logo from '../assets/logoWhite.png'

function Footer() {
    return (
        <footer class="w-full primColor mt-12">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                    <div class="col-span-full mb-10 lg:col-span-4 lg:mb-0">
                        <a href="https://pagedone.io/" class="flex justify-center lg:justify-start">
                            <img src={logo} alt="err" className='w-52' />
                        </a>
                        <p class="py-8 text-sm text-gray-200 lg:max-w-xs text-center lg:text-left">Trusted in more than 100 countries & 5 million customers. Have any query ?</p>
                        <a href="javascript:;" class="py-2.5 px-5 font-bold h-9 block w-fit bg-green-200 rounded-full shadow-sm text-xs text-green-800 mx-auto transition-all  duration-500 lg:mx-0">
                            Contact us
                        </a>
                    </div>

                  
                    <div class="lg:mx-auto text-left">
                        <h4 class="text-lg text-gray-200 font-medium mb-7">Pages</h4>
                        <ul class="text-sm  transition-all duration-500">
                            <li class="mb-6"><a href="javascript:;" class="text-gray-200">Search Lands</a></li>
                            <li class="mb-6"><a href="javascript:;" class="text-gray-200">Ads</a></li>
                            <li class="mb-6"><a href="javascript:;" class="text-gray-200">Subscriptions</a></li>
                            <li class="mb-6"><a href="javascript:;" class="text-gray-200">Contact</a></li>
                        </ul>
                    </div>

                    <div class="lg:mx-auto text-left">
                        <h4 class="text-lg text-gray-200 font-medium mb-7">Terns</h4>
                        <ul class="text-sm  transition-all duration-500">
                            <li class="mb-6"><a href="javascript:;" class="text-gray-200">Privacy Policy</a></li>
                            <li class="mb-6"><a href="javascript:;" class="text-gray-200">Terms & Conditions</a></li>
                        </ul>
                    </div>

                </div>

                <div class="py-7 border-t border-gray-200">
                    <div class="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                        <span class="text-sm text-gray-200 ">©<a href="https://pagedone.io/">kmap.si</a> 2025, All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
