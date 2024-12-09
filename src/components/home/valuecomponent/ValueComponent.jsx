import React from "react";
import enText from "../../../translationText/en.json";
import Button from "../../button/Button";

const ValueComponent = () => {
  return (
    <div className="section-m custom-container">
      <h1 className="section-title">
        {enText.value["our"]}{" "}
        <span className="text-secondary-dark">{enText.value["value"]}</span>
      </h1>
      <p className="mt-5 section-subtitle">{enText.value.sub_tilte}</p>
      <div className="cards-container mt-14 flex gap-12 flex-col">
        
        {/* Card 1 */}
        <div className="value-card flex-1 flex gap-5 lg:gap-10 max-md:flex-col  justify-between">
          <div className="flex lg:gap-7 gap-3 flex-1 max-sm:flex-wrap items-center">
            <img
              src="https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1688967799%2FContractor%2Findividual_fgyqqo.png&w=384&q=75"
              alt=""
              className="w-[179px] h-[160px]  max-sm:mx-auto object-cover mb-4"
            />
            <div>
              <h3 className="font-semibold text-[27px] leading-[42px] text-secondary-dark">
                {enText.value["card-1_title"]}
              </h3>

              <p className="text-[18px] max-w-[300px] font-medium text-secondary-light mt-[10px]">
                {enText.value["card-1_SubTitle"]}
              </p>
            </div>
          </div>

          <div className="icons-container flex-1 ">
            <ul className=" ml-auto">
              <li className="flex items-start gap-3 text-sm mb-3">
                <img
                  src="/assets/svg/value/card1/list1.svg"
                  alt="Icon 1"
                  className="w-[30px] h-[30px]"
                />
                <span className="text-lg font-medium text-secondary-light">
                  {enText.value["card-1_point1"]}
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm mb-3">
                <img
                  src="/assets/svg/value/card1/list2.svg"
                  alt="Icon 2"
                  className="w-[30px] h-[30px]"
                />
                <span className="text-lg font-medium text-secondary-light">
                  {enText.value["card-1_point2"]}
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm mb-3">
                <img
                  src="/assets/svg/value/card1/list3.svg"
                  alt="Icon 3"
                  className="w-[30px] h-[30px]"
                />
                <span className="text-lg font-medium text-secondary-light">
                  {enText.value["card-1_point3"]}
                </span>
              </li>
            </ul>
            <div className="mt-6 max-sm:ml-auto max-md:flex justify-end">
              <Button text={"Buy Material"} />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="value-card flex-1 flex gap-5 lg:gap-10 max-md:flex-col  flex-row-reverse justify-between">
          <div className="flex lg:gap-7 gap-3  flex-1 max-sm:flex-wrap flex-row-reverse items-center">
            <img
              src="https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1688967799%2FContractor%2Fcompany_iimg05.png&w=384&q=75"
              alt=""
              className="w-[179px] h-[160px] max-sm:mx-auto object-cover mb-4"
            />
            <div>
              <h3 className="font-semibold text-[27px] leading-[42px] text-secondary-dark">
                {enText.value["card-2_title"]}
              </h3>

              <p className="text-[18px] max-w-[300px] font-medium text-secondary-light mt-[10px]">
                {enText.value["card-2_SubTitle"]}
              </p>
            </div>
          </div>

          <div className="icons-container flex-1 mt-[10px]">
            <ul>
              <li className="flex items-start gap-3 text-sm mb-3">
                <img
                  src="/assets/svg/value/card2/list1.svg"
                  alt="Icon 1"
                  className="w-[30px] h-[30px]"
                />
                <span className="text-lg font-medium text-secondary-light">
                  {enText.value["card-2_point1"]}
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm mb-3">
                <img
                  src="/assets/svg/value/card2/list2.svg"
                  alt="Icon 2"
                  className="w-[30px] h-[30px]"
                />
                <span className="text-lg font-medium text-secondary-light">
                  {enText.value["card-2_point2"]}
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm mb-3">
                <img
                  src="/assets/svg/value/card2/list3.svg"
                  alt="Icon 3"
                  className="w-[30px] h-[30px]"
                />
                <span className="text-lg font-medium text-secondary-light">
                  {enText.value["card-2_point3"]}
                </span>
              </li>
            </ul>
            <div className="mt-6 max-sm:ml-auto max-md:flex justify-end">

              <Button text={"Contact with Us"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueComponent;
