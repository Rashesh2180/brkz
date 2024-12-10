import React from 'react'
import entxt from "../../../translationText/en.json";
import Button from '../../button/Button';


const Banner = () => {
    const bannerTxt = entxt.bnpl.banner;
    const common = entxt.common;

  return (
    <div className=' py-20  bg-primary'>
        <h1 className=' section-title !text-white max-w-[800px] mx-auto'>{bannerTxt.title}</h1>
        <div className=' mt-10 flex justify-center  items-center'>
            <Button text={common.apply} bgcolor='secondary-dark'/>

        </div>
      
    </div>
  )
}

export default Banner
