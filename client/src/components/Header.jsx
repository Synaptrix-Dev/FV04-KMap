import React, { useState, useEffect } from 'react'
import logoScrolled from '../assets/logo.png'
import logo from '../assets/logoWhite.png'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full fixed top-0 left-0 right-0 border-b border-white/10 shadow-sm transition-all duration-300 ${isScrolled ? 'bg-white/30 backdrop-blur-md' : 'bg-transparent backdrop-blur-sm'}`}>
            <nav className="relative max-w-7xl w-full md:flex md:items-center md:justify-between md:gap-3 mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex items-center justify-between">
                    <a className={`flex-none font-semibold text-xl ${isScrolled ? 'text-slate-50' : 'text-slate-50'} focus:outline-none focus:opacity-80`} href="#" aria-label="Brand">
                        <img src={isScrolled ? logo : logo} alt="Brand Logo" className='w-auto h-12' />
                    </a>

                    <div className="md:hidden">
                        <button 
                            type="button" 
                            className={`hs-collapse-toggle relative size-9 flex justify-center items-center text-sm font-semibold rounded-lg border ${isScrolled ? 'border-slate-800/50 text-slate-50' : 'border-white/50 text-slate-50'} hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none`} 
                            id="hs-base-header-collapse" 
                            aria-expanded="true" 
                            aria-controls="hs-base-header" 
                            aria-label="Toggle navigation" 
                            data-hs-collapse="#hs-base-header"
                        >
                            <svg className="hs-collapse-open:hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" x2="21" y1="6" y2="6" />
                                <line x1="3" x2="21" y1="12" y2="12" />
                                <line x1="3" x2="21" y1="18" y2="18" />
                            </svg>
                            <svg className="hs-collapse-open:block shrink-0 hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </div>
                <div id="hs-base-header" className="hs-collapse overflow-hidden transition-all duration-300 basis-full grow block" aria-labelledby="hs-base-header-collapse">
                    <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                        <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center md:justify-end gap-0.5 md:gap-1">
                            <a className={`p-2 flex items-center text-sm ${isScrolled ? 'text-slate-50' : 'text-slate-50'} focus:outline-none`} href="#" aria-current="page">
                                <svg className="shrink-0 size-4 me-3 md:me-2 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                </svg>
                                Home
                            </a>
                            <a className={`p-2 flex items-center text-sm ${isScrolled ? 'text-slate-50' : 'text-slate-50'} hover:text-slate-50 focus:outline-none`} href="#">
                                <svg className="shrink-0 size-4 me-3 md:me-2 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                                Lands
                            </a>
                            <a className={`p-2 flex items-center text-sm ${isScrolled ? 'text-slate-50' : 'text-slate-50'} hover:text-slate-50 focus:outline-none`} href="#">
                                <svg className="shrink-0 size-4 me-3 md:me-2 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 12h.01" />
                                    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                                    <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                                    <rect width="20" height="14" x="2" y="6" rx="2" />
                                </svg>
                                Subscriptions
                            </a>
                            <a className={`p-2 flex items-center text-sm ${isScrolled ? 'text-slate-50' : 'text-slate-50'} hover:text-slate-50 focus:outline-none`} href="#">
                                <svg className="shrink-0 size-4 me-3 md:me-2 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                                    <path d="M18 14h-8" />
                                    <path d="M15 18h-5" />
                                    <path d="M10 6h8v4h-8V6Z" />
                                </svg>
                                Contact
                            </a>
                            <div className="relative flex flex-wrap items-center gap-x-1.5 md:ps-2.5 mt-1 md:mt-0 md:ms-1.5 before:block before:absolute before:top-1/2 before:-start-px before:w-px before:h-4 before:bg-white/30 before:-translate-y-1/2">
                                <a className={`p-2 w-full flex items-center text-sm ${isScrolled ? 'text-slate-50' : 'text-slate-50'} hover:text-slate-50 focus:outline-none`} href="#">
                                    <svg className="shrink-0 size-4 me-3 md:me-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header