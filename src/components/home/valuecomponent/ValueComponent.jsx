import React from "react";
import enText from "../../../translationText/en.json";
import Button from "../../button/Button";

const ValueComponent = () => {
  const valueData = [
    {
      id: 1,
      title: enText.value["card-1_title"], 
      sub_title: enText.value["card-1_SubTitle"], 
      points: [
        enText.value["card-1_point1"],
        enText.value["card-1_point2"],
        enText.value["card-1_point3"],
      ],
      icons: [
        "/assets/svg/value/card1/list1.svg",
        "/assets/svg/value/card1/list2.svg",
        "/assets/svg/value/card1/list3.svg",
      ],
      img: "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1688967799%2FContractor%2Findividual_fgyqqo.png&w=384&q=75", // Example image path
    },
    {
      id: 2,
      title: enText.value["card-2_title"], 
      sub_title: enText.value["card-2_SubTitle"], 
      points: [
        enText.value["card-2_point1"],
        enText.value["card-2_point2"],
        enText.value["card-2_point3"],
      ],
      icons: [
        "/assets/svg/value/card2/list1.svg",
        "/assets/svg/value/card2/list2.svg",
        "/assets/svg/value/card2/list3.svg",
      ],
      img: "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1688967799%2FContractor%2Fcompany_iimg05.png&w=384&q=75", // Example image path
    },
  ];

  return (
    <div className="section-m custom-container">
      <h1 className="section-title">
        {enText.value["our"]}{" "}
        <span className="text-secondary-dark">{enText.value["value"]}</span>
      </h1>
      <p className="mt-5 section-subtitle">{enText.value.sub_tilte}</p>
      <div className="cards-container  mt-12 flex gap-12 max-lg:flex-col">
        {valueData.map((item) => (
          <div
            key={item.id}
            className="value-card flex-1 p-9 border rounded-[20px] border-primary"
          >
            <div className="flex gap-7  max-sm:flex-wrap items-center">
              <img
                src={item.img}
                alt=""
                className="w-[179px] h-[160px] mx-auto object-cover mb-4"
              />
              <div>
                <h3 className="font-semibold text-[27px] leading-[42px] text-secondary-dark">
                  {item.title}
                </h3>

                <p className="text-[18px] font-medium text-secondary-light mt-[10px]">
                  {item.sub_title}
                </p>
              </div>
            </div>

            <div className="icons-container mt-[10px] mb-6">
              <ul>
                {item.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm mb-3"
                  >
                    <img
                      src={item.icons[index]}
                      alt={`Icon ${index + 1}`}
                      className="w-[30px] h-[30px]"
                    />
                    <span className="text-lg font-medium text-secondary-light">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          <div className=" max-sm:mx-auto max-sm:flex justify-center">
          {item.id === 1 ? (
              <Button text={"Buy Material"} /> 
            ) : item.id === 2 ? (
              <Button text={"Contact with Us"} /> 
            ) : null}
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValueComponent;
