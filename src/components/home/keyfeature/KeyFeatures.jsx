import React from "react";
import enText from "../../../translationText/en.json";

const KeyFeatures = () => {
  const keyFeatureTxt = enText.key_feature;
  const data = [
    {
      id: 1,
      title: keyFeatureTxt["card-1_title"],  
      sub_title: keyFeatureTxt["card-1_SubTitle"],  
      img: "/assets/svg/keyfeature/card1.svg", 
    },
    {
      id: 2,
      title: keyFeatureTxt["card-2_title"],  
      sub_title: keyFeatureTxt["card-2_SubTitle"],  
      img: "/assets/svg/keyfeature/card2.svg", 
    },
    {
      id: 3,
      title: keyFeatureTxt["card-3_title"],  
      sub_title: keyFeatureTxt["card-3_SubTitle"],  
      img: "/assets/svg/keyfeature/card3.svg", 
    },
    {
      id: 4,
      title: keyFeatureTxt["card-4_title"],  
      sub_title: keyFeatureTxt["card-4_SubTitle"],  
      img: "/assets/svg/keyfeature/card4.svg",
    },
  ];
  return (
    <section className="section-m custom-container ">
      <h1 className="section-title">
        {keyFeatureTxt.key}{" "}
        <span className="text-secondary-dark">{keyFeatureTxt.feature} </span>
      </h1>
      <p className=" mt-5 section-subtitle">{keyFeatureTxt.sub_tilte}</p>
      <div className=" mt-24 flex xl:gap-20 gap-10 max-lg:flex-col w-full">
      <div className=" flex-[5]">
      <div className=" w-full lg:max-w-[562px] flex flex-col gap-5">
        {data.length > 0 && (
          data.map((ele) => (
            <div key={ele.id} className=" p-[26px] flex gap-5 hover:bg-primary-light rounded-xl">
              <div className=" h-11 w-11 p-[6px] shrink-0 rounded-[9px] bg-[rgba(0,149,169,.07)]">
              <img src={ele.img} alt="" className=" h-[31px] w-[31px] feature-image" />
              </div>
             <div>
             <h2 className=" text-[30px] text-secondary-dark font-semibold leading-9">{ele.title}</h2>
             <p className=" text-[19px] leading-8 font-medium text-secondary-light">{ele.sub_title}</p>
             </div>

              
            </div>
          ))
        )}
        </div>
      </div>
        <div className=" flex-[7] ">
          <img
            src="https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1697039295%2Fhome%2Fkey_features_hzxfg0.webp&w=3840&q=75"
            alt=""
            className=" object-cover"
            height={655}
          />
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
