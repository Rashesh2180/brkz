import React from "react";
import enText from "../../../translationText/en.json";
const Couner = () => {
  const counterData = [
    {
      id: 1,
      title: enText.counter.title_1, // Access 'Available'
      sub_title: enText.counter.sub_title_1, // Access 'SKUs'
      img: "/assets/svg/counter/counter1.svg",
      count:"7000"
    },
    {
      id: 2,
      title: enText.counter.title_2, // Access 'Issued'
      sub_title: enText.counter.sub_title_2,
      img: "/assets/svg/counter/counter2.svg",
      count:"1.73",
      billion:enText.counter.billion,
      sar:enText.counter.sar

      // Access 'RFQs'
    },
    {
      id: 3,
      title: enText.counter.title_3, // Access 'Issued'
      sub_title: enText.counter.sub_title_3, // Access 'RFQs'
      img: "/assets/svg/counter/counter3.svg",
       count:"1000"
    },
  ];
  return (
    <div className=" bg-primary section-m  py-32">
      <section className="custom-container  ">
        <div className="flex justify-between  flex-wrap max-md:justify-center gap-7">
          {counterData.map((item) => (
            <div key={item.id} className="counter-card flex flex-col items-center gap-5 ">
                <img src={item.img} alt="" className=" h-[60px] w-[60px]" />
                <h1 className=" text-3xl lg:text-[50px] font-bold text-white "> <span className=" text-white mr-2">{item.sar}</span> {item.count}  {item.billion} +</h1>
              <h3 className="  text-2xl lg:text-[30px] text-secondary-dark">{item.title} <span className=" font-bold">{item.sub_title}</span></h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Couner;
