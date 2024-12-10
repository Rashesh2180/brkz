import React from "react";
import enText from "../../../translationText/en.json";
import { FaLocationDot } from "react-icons/fa6";

const Location = () => {
  const locationTxt = enText.about.location;
  return (
    <div className=" py-20  bg-[#f4f6f7]">
      <div className="flex flex-col justify-center custom-container mx-auto">
        <div className=" flex justify-between gap-5 max-md:flex-col  items-center">
          <div className=" flex flex-col flex-1 items-start">
            <h1 className=" section-title !text-start !leading-10">{locationTxt["title-1"]}</h1>
            <h1 className=" section-title !text-start">{locationTxt["title-2"]}</h1>

            <div className="  mt-20">
              <div className=" flex gap-3 !text-start items-center">
                <FaLocationDot className=" text-secondary-dark text-2xl" />
                <div className=" !mx-0 section-subtitle">
                  {locationTxt.sub_tilte}
                </div>
              </div>
              <p className=" mt-5 !max-w-[450px] !text-lg !text-start section-subtitle ">
                {locationTxt.address}
              </p>
            </div>
          </div>
          <div className=" flex-1">
            <img
              src="https://res.cloudinary.com/dtbk6u1pb/image/upload/v1710394668/About%20Us/mapMob_lthudd.png"
              alt=""
              className=" h-[500px] w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
