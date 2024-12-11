import React from "react";
import enText from "../../../translationText/en.json"; // Importing the JSON data
import Button from "../../button/Button";

const Banner = () => {
  const { title, subtitle } = enText.banner;
  const common = enText.common

  return (
    <div className="bg-primary relative">
      <div className="custom-container pl-20 py-20">
        <h1 className="text-white text-4xl font-bold max-w-[800px] ">{title} {subtitle}</h1>
       <div className=" mt-10">
       <Button bgcolor="secondary-dark" text={common.buy_material}/>
       </div>
      </div>

      <img
        src="https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1695814102%2Fhome%2Frebar_kqxlop.png&w=828&q=75"
        className="absolute top-0 right-0 w-[388px] h-[277px] max-sm:hidden"
        alt=""
      />
    </div>
  );
};

export default Banner;
