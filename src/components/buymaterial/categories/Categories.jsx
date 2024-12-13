import React from "react";
import entxt from "../../../translationText/en.json";
const Categories = () => {
  const catagoriestxt = entxt.buymaterial.categories;
  const common = entxt.common;
  const data = [
    { id: 1, name: "ALSAFWA" },
    { id: 2, name: "ARABIAN CEMENT" },
    { id: 3, name: "ARABIAN" },
    { id: 4, name: "CITY" },
    { id: 5, name: "EASTERN CEMENT " },
    { id: 6, name: "HAIL" },
    { id: 6, name: "LOCAL" },
    { id: 6, name: "NAJRAN" },
    { id: 6, name: "NORTHERN CEMENT" },
    { id: 6, name: "QASSIM" },
    { id: 6, name: "RIYADH" },
    { id: 6, name: "SAUDI CEMENT" },
  ];
  return (
    <div className=" my-10">
      <div className=" flex justify-between items-center">
        <h1 className=" font-semibold text-base text-light-gray">
          {catagoriestxt.title}
        </h1>
        <button className=" text-primary text-sm capitalize font-semibold">
          {common.seeall}
        </button>
      </div>
      <div className=" mt-5 flex  gap-3 items-center overflow-x-auto">
        {data &&
          data.map((ele) => (
            <button
              key={ele.id}
              className=" shrink-0 text-xs text-primary font-medium border-primary hover:bg-secondary-dark hover:text-white hover:border-secondary-dark border px-3 py-2 rounded-full"
            >
              {ele.name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Categories;
