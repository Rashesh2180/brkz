import React from "react";
import enText from "../../../translationText/en.json";
import Button from "../../button/Button";

const Banner = () => {
  const bannerTxt = enText.about.banner;
  const commonTxt = enText.common;
  return (
    <div className=" bg-primary py-20 flex flex-col justify-center items-center  relative">
      <div className=" z-50">
        <h1 className=" !text-white  section-title ">
          {bannerTxt.title1}
        </h1>
        <h1 className=" !text-secondary-dark  section-title  ">
          {bannerTxt.title2}
        </h1>
        <h1 className=" !text-white  section-title  ">
          {bannerTxt.title3}
        </h1>
        <p className=" mt-10 selection-subtitle text-center !text-white">
          {bannerTxt.subtitle}
        </p>
        <div className=" mt-10 flex justify-center items-center gap-10">
          <button className=" border border-white cursor-pointer rounded-full px-8 py-3 text-xl font-bold text-white">
            {commonTxt.contact_us}
          </button>
          <button className="   bg-secondary-dark cursor-pointer rounded-full px-8 py-3 text-xl font-bold text-white">
            {commonTxt.start}
          </button>
        </div>
      </div>
      {/* <img
        src="https://res.cloudinary.com/dtbk6u1pb/image/upload/v1708066736/About%20Us/joinBg_ucvtj3.png"
        className=" absolute  top-0  left-0  right-0 w-full max-md:hidden h-full"
        alt=""
      /> */}
    </div>
  );
};

export default Banner;
