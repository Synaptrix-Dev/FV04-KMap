import React from 'react'

function Stats() {
    return (
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
                class="rounded-2xl py-10 px-10 xl:py-16 xl:px-20 bg-green-50 border-green-200 border flex items-center justify-between flex-col gap-16 lg:flex-row">
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
                            >Expert Consultants
                            </span>
                        </div>
                        <div class="block">
                            <div
                                class="font-manrope font-bold text-4xl text-emerald-600 mb-3 text-center lg:text-left"
                            >
                                975+
                            </div>
                            <span class="text-gray-900 text-center block lg:text-left"
                            >Active Clients
                            </span>
                        </div>
                        <div class="block">
                            <div
                                class="font-manrope font-bold text-4xl text-emerald-600 mb-3 text-center lg:text-left"
                            >
                                724+
                            </div>
                            <span class="text-gray-900 text-center block lg:text-left"
                            >Projects Delivered</span
                            >
                        </div>
                        <div class="block">
                            <div
                                class="font-manrope font-bold text-4xl text-emerald-600 mb-3 text-center lg:text-left"
                            >
                                89+
                            </div>
                            <span class="text-gray-900 text-center block lg:text-left"
                            >Orders in Queue</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
