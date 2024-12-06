import React from 'react'
import HeroCarasol from '../../components/home/HeroCarasol'
import BrandsLogos from '../../components/home/brandsLogos/BrandsLogos'
import KeyFeatures from '../../components/home/keyfeature/KeyFeatures'
import Couner from '../../components/home/counter/Couner'
import ValueComponent from '../../components/home/valuecomponent/ValueComponent'
import ReviewsComponent from '../../components/home/review/ReviewsComponent'
import Banner from '../../components/home/banner/Banner'

const Home = () => {
  return (
    <div>
      <HeroCarasol/>
      <BrandsLogos/>
      <KeyFeatures/>
      <Couner/>
      <ValueComponent/>
      <ReviewsComponent/>
      <Banner/>
      
    </div>
  )
}

export default Home
