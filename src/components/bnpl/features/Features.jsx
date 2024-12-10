import React from "react";
import entxt from "../../../translationText/en.json";

const Features = () => {
  const featurTxt = entxt.bnpl.feature;
  const data = featurTxt.cards;
  return (
    <div className=" py-20">
      <h2 className="section-title">{featurTxt.title_1}</h2>
      <p className="section-subtitle">{featurTxt.sub_tilte}</p>

      <div className="flex custom-container gap-10 mx-auto max-md:flex-wrap justify-center">
        {data &&
          data.map((ele, index) => (
            <div
              key={ele.id}
              className="bg-white px-6  py-10 rounded-lg mt-14 relative flex flex-col gap-5 items-center"
            >
              {index === 0 && (
                <img
                  src="/assets/svg/bnpl/feature/purchase_power_vixg61.svg"
                  alt=""
                  className="h-36 w-36 object-contain"
                />
              )}
              {index === 1 && (
                <img
                    src="/assets/svg/bnpl/feature/improve_cashflow_ql49aj.svg"
                  alt=""
                  className="h-36 w-36 object-contain"
                />
              )}
              {index === 2 && (
                <img
                src="/assets/svg/bnpl/feature/quick_material_access_xlj7zo.svg"

                  alt=""
                  className="h-36 w-36 object-contain"
                />
              )}
             

              <div className=" my-5 bg-secondary-dark h-[4px] w-[80px] rounded-full"></div>

              <h2 className="text-3xl font-semibold text-center text-secondary-light">
                {ele.title}
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Features;
