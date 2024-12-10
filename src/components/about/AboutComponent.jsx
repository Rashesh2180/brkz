import React from 'react'
import Hero from '../../components/about/hero/Hero'
import TeamGallery from './teamgallery/TeamGallery'
import Invenstors from './investors/Invenstors'
import HowWork from './howwork/HowWork'
import Approve from './approve/Approve'
import Features from './features/Features'
import Location from './location/Location'
import Banner from './banner/Banner'

const AboutComponent = () => {
  return (
    <div>
      <Hero/>
      <TeamGallery/>
      <Invenstors/>
      <HowWork/>
      {/* <Approve/> */}
      <Features/>
      <Location/>
      <Banner/>
      
    </div>
  )
}

export default AboutComponent
