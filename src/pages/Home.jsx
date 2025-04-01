import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Home/Banner'
import OurOfferings from '../components/Home/OurOfferings'
import DroneMarketplace from '../components/Home/DroneMarketplace'
import VendorOnboarding from '../components/Home/VendorOnboarding'
import DroneJobs from '../components/Home/DroneJobs'
import DroneTraining from '../components/Home/DroneTraining'
import DroneService from '../components/Home/DroneService'
import { Testimonials } from '../components/Home/Testimonials'
import { WhyChooseDronePlanet } from '../components/Home/WhyChooseDronePlanet'
import { BlogResources } from '../components/Home/BlogResources'
import NewsletterSubscription from '../components/Home/NewsletterSubscription'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <OurOfferings/>
    <DroneMarketplace/>
    <VendorOnboarding/>
    <DroneJobs/>
    <DroneTraining/>
    <DroneService/>
    <Testimonials/>
    <WhyChooseDronePlanet/>
    <BlogResources/>
    <NewsletterSubscription/>
    <Footer/>
    </>
  )
}

export default Home