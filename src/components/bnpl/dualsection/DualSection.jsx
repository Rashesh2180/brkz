import React, { useState } from "react";
import entxt from "../../../translationText/en.json";

const DualSection = () => {
  const dualTxt = entxt.bnpl.payment;
  const data = dualTxt.cards;

  const [selectedTab, setSelectedTab] = useState(0);

  const images = [
    "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1728926256%2Fhome%2Fpay_in_two_uvu1fe.png&w=640&q=75", // Image for first tab
    "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1728926256%2Fhome%2Fpay_in_three_asp0si.png&w=640&q=75", // Image for second tab
    "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1728926256%2Fhome%2Fpay_in_four_giblzn.png&w=640&q=75" // Image for third tab
  ];

  return (
    <div className="py-20 custom-container">
      <h2 className="section-title">{dualTxt.title_1}</h2>
      <p className="section-subtitle">{dualTxt.sub_tilte}</p>

      <div className="mt-14 flex max-md:flex-col gap-12 items-center justify-center">
        <div className="flex-1">
          <div className="flex flex-col gap-5 cursor-pointer">
            {data &&
              data.map((ele, index) => (
                <div
                  key={index}
                  className="flex gap-10 items-start"
                  onClick={() => setSelectedTab(index)} 
                >
                  <div className="flex flex-col gap-2 items-center">
                    <div className="h-14 w-14 rounded-full bg-[#f5f5f5] flex justify-center items-center">
                      <div
                        className={`h-10 w-10 rounded-full ${
                          selectedTab === index ? "bg-primary" : "bg-[#e0e0e0]"
                        }`}
                      ></div>
                    </div>
                    <div className={` h-20 w-1 ${selectedTab === index ? "bg-primary" : "bg-[#f5f5f5]"}`}></div>
                  </div>
                  <div className="mt-3">
                    <h1 className="text-xl font-semibold text-secondary-dark">
                      {ele.title}
                    </h1>
                    <p className="mt-5 text-base text-secondary-light font-medium">
                      {ele.sub_tilte}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="flex-1 h-[450px]">
          {images[selectedTab] && (
            <div className="bg-[#f4f6f7] p-8 rounded-lg h-full flex justify-center items-center">
              <img
                src={images[selectedTab]} 
                className="object-cover h-auto w-full"
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DualSection;
