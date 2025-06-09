import React from 'react'
import LandingPage from './LandingPage'
import Features from './Features'
import Stats from './Stats'
import BulletinAds from './BulletinAds'
import CourtAuctionAds from './CourtAuctionAds'
import UserAds from './UserAds'
import AboutUs from './AboutUs'
import Testimonial from './Testimonial'

function HomeContainer() {
    return (
        <div className='space-y-16'>
            <LandingPage />
            <BulletinAds />
            <CourtAuctionAds />
            <UserAds />
            <Features />
            <AboutUs />
            <Stats />
            {/* <Testimonial /> */}
        </div>
    )
}

export default HomeContainer
