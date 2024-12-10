import React from 'react'
import enText from "../../../translationText/en.json";

const HowWork = () => {
    const work = enText.about.values;

  return (
    <div className='bg-[#f4f6f7] py-20'>
        <div className='custom-container'>
            <h1 className='small-title text-center'>{work.title}</h1>
            <h1 className='section-title text-center'>
                <span className='text-secondary-dark'>{work.how}</span> {work.subtitle}
            </h1>

            <div className='mt-14 grid md:grid-cols-2 gap-10 place-content-center place-items-center'>
                {
                    work.card.map((ele, index) => (
                        <div 
                            className={`flex flex-col mx-auto justify-center items-center gap-5 ${index === work.card.length - 1 ? 'md:col-span-2' : ''}`}
                        >
                            <img src={ele.img} alt="" className='h-24 w-24' />
                            <h2 className='my-1 text-xl font-semibold text-secondary-light'>{ele.title}</h2>
                            <p className='text-lg text-secondary-light text-center max-w-[500px] mx-auto'>{ele.sub_title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default HowWork;
