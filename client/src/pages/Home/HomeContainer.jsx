import React from 'react'
import LandingPage from './LandingPage'
import Features from './Features'
import Stats from './Stats'
import AdsList from './AdsList'

function HomeContainer() {
    return (
        <div className='space-y-16'>
            <LandingPage />
            <Features />
            <Stats />
            <AdsList />
        </div>
    )
}

export default HomeContainer
