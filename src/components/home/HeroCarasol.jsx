import React from "react";
import enText from "../../translationText/en.json";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";

const HeroCarasol = () => {
  const commonTxt = enText.common;
  const sliderTxt1 = enText.slide_1;
  const sliderTxt2 = enText.slide_2;
  const sliderTxt3 = enText.slide_3;
  const sliderTxt4 = enText.slide_4;
  const sliderTxt5 = enText.slide_5;

  const data = [
    {
      id: 1,
      title_1: `${sliderTxt1.title_1}`,
      title_2: `${sliderTxt1.title_2}`,
      btn_name: `${commonTxt.learn_more}`,
      img: "/assets/images/herocarsol/herocarsol_1.png",
      href:""
    },
    {
      id: 2,
      title_1: `${sliderTxt2.title_1}`,
      title_2: `${sliderTxt2.title_2}`,
      img: "/assets/images/herocarsol/herocarasol_2.webp",
      btn_1:"/assets/images/logos/applelogo.png",
      btn_2:"/assets/images/logos/playstorelogo.png",
      href:""
    },
    {
      id: 3,
      title_1: `${sliderTxt3.title_1}`,
      title_2: `${sliderTxt3.title_2}`,
      btn_name: `${commonTxt.buy_now}`,
      img: "/assets/images/herocarsol/herocarasol_3.webp",
       href:""
    },
    {
      id: 4,
      title_1: `${sliderTxt4.title_1}`,
      title_2: `${sliderTxt4.title_2}`,
      btn_name: `${commonTxt.buy_now}`,
      img: "/assets/images/herocarsol/herocarsol_4.webp",
       href:""
    },
    {
      id: 5,
      title_1: `${sliderTxt5.title_1}`,
      title_2: `${sliderTxt5.title_2}`,
      btn_name: `${commonTxt.buy_now}`,
      img: "/assets/images/herocarsol/herocarsol_5.webp",
       href:""
    },
  ];
  return (
    <div className=" min-h-screen flex  justify-center items-center  max-sm:px-3 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.length > 0 &&
          data.map((ele) => (
            <SwiperSlide key={ele.id}>
             <div>
                 <div className="max-w-[950px] pt-20 mx-auto flex flex-col justify-center items-center gap-8">
              <h1 className="   text-center text-[62px] font-semibold text-secondary-dark leading-[77px]">
                {ele.title_1} <span className=" text-custom-orange">{ele.title_2}</span>
              </h1>
              <div className=" w-[100px] h-1 bg-[#b3c8cb] rounded-[25.1922px]" >

              </div>
              {
                ele.btn_name ? <Button text={ele.btn_name}/> : (
                    <div className="flex items-center gap-5">
                    
                    <NavLink>
                        <img src="/assets/images/logos/applelogo.png" alt="" className=" h-14 w-[200px] object-cover" />
                    </NavLink>
                    <NavLink>
                        <img src="/assets/images/logos/playstorelogo.png" alt="" className=" h-14 w-[200px] object-cover" />
                    </NavLink>

                    </div>
                )
              }
              </div>
              <img src={ele.img} className=" h-full w-full object-cover" alt="" />
             </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default HeroCarasol;
