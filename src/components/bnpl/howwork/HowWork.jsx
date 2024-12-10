import React from 'react'
import entxt from "../../../translationText/en.json";

const HowWork = () => {
  const common = entxt.common;

  return (
    <div className=' bg-[#f4f6f7] py-20'>
        <h2 className={`section-title`}>
            {common.Howwork}
          </h2>
      
    </div>
  )
}

export default HowWork
