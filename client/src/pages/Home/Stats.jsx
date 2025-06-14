import React from 'react'

function Stats() {
    return (
        <div class="w-full bg-green-50 ">
            <div
                class="max-w-7xl mx-auto py-10 px-10 xl:py-16 xl:px-20 flex items-center justify-between flex-col gap-16 lg:flex-row">
                <div class="w-full lg:w-60">
                    <h2
                        class="text-4xl font-light text-gray-900 mb-4 text-center lg:text-left"
                    >
                        Our <span className='font-bold'>Stats</span>
                    </h2>
                    <p class="text-sm text-gray-500 leading-6 text-center lg:text-left">
                        We help you to unleash the power within your business
                    </p>
                </div>
                <div class="w-full lg:w-4/5">
                    <div
                        class="flex flex-col flex-1 gap-10 lg:gap-0 lg:flex-row lg:justify-between"
                    >
                        <div class="block">
                            <div
                                class="font-manrope font-bold text-4xl text-emerald-600 mb-3 text-center lg:text-left"
                            >
                                260+
                            </div>
                            <span class="text-gray-900 text-center block lg:text-left"
                            >Active Users
                            </span>
                        </div>
                        <div class="block">
                            <div
                                class="font-manrope font-bold text-4xl text-emerald-600 mb-3 text-center lg:text-left"
                            >
                                975+
                            </div>
                            <span class="text-gray-900 text-center block lg:text-left"
                            >Active Ads
                            </span>
                        </div>
                        <div class="block">
                            <div
                                class="font-manrope font-bold text-4xl text-emerald-600 mb-3 text-center lg:text-left"
                            >
                                724+
                            </div>
                            <span class="text-gray-900 text-center block lg:text-left"
                            >Ads Successfull</span
                            >
                        </div>
                        <div class="block">
                            <div
                                class="font-manrope font-bold text-4xl text-emerald-600 mb-3 text-center lg:text-left"
                            >
                                89+
                            </div>
                            <span class="text-gray-900 text-center block lg:text-left"
                            >Ads in Planning</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
