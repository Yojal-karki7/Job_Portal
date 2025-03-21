import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './shared/HeroSection'
import CategoryCarousel from './shared/CategoryCarousel'
import LatestJobs from './shared/LatestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'

const Home = () => {
  useGetAllJobs()
  return (
    <div>
        <Navbar />
        <HeroSection />
         <CategoryCarousel />
        <LatestJobs />
        <Footer /> 
    </div>
  )
}

export default Home