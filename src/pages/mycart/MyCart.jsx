import React from 'react';
import entxt from "../../translationText/en.json";

const MyCart = () => {
  const cartxt = entxt.mycarttxt;
  
  return (
    <div className='min-h-[calc(100vh-84px)] flex justify-center items-center'>
      <div className='max-w-[500px] flex flex-col justify-center items-center w-full mx-auto p-5 h-full'>
        <h1 className='section-title'>{cartxt.mycart}</h1>
        <div className=' mt-10 h-[250px] mx-auto '>
        <img src="/assets/svg/cart/cart.svg" alt="" className=' w-full h-full' />
        </div>
        <div className=' section-subtitle mt-5'>
            {cartxt.nodata }

        </div>
        <p className=' text-center text-base text-secondary-light  mt-5 font-semibold'>{cartxt.detail}</p>
     
      </div>
    </div>
  );
};

export default MyCart;
