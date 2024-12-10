import React from 'react'
import enText from "../../../translationText/en.json";


const Approve = () => {
  const approveTxt = enText.about.approve;
  return (
    <div className=' py-20'>
     <div className=' custom-container'>
     <h1 className=' section-title'>{approveTxt.proud}</h1>
      <h1 className=' section-title !text-secondary-dark !leading-10'>{approveTxt.vendor}</h1>
      <div className=' mt-16 flex gap-5 justify-around '>

      </div>
     </div>

      
    </div>
  )
}

export default Approve
