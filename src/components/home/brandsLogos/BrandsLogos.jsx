import React from "react";
import enText from "../../../translationText/en.json";

const data = [
  {
    id: 1,
    img: "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1677155716%2FBrands%2520Bar%2Fizomaks_uysczi.png&w=256&q=75",
  },
  {
    id: 2,
    img: "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1677155717%2FBrands%2520Bar%2Fsaveto_agjzbe.png&w=256&q=75",
  },
  {
    id: 3,
    img: "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1677155717%2FBrands%2520Bar%2Fwacker_ljr5f2.png&w=256&q=75",
  },
  {
    id: 4,
    img: "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1677155717%2FBrands%2520Bar%2Fneproplast_dwpxve.png&w=256&q=75",
  },
  {
    id: 5,
    img: "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1692078758%2FBrands%2520Bar%2Fsika_ko7mor.png&w=256&q=75",
  },
  {
    id: 6,
    img: "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1692078758%2FBrands%2520Bar%2Fwatani_steel_e3wze4.png&w=256&q=75",
  },
  {
    id: 7,
    img: "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1692078758%2FBrands%2520Bar%2Fstoraenso_mcrf4z.png&w=256&q=75",
  },
  {
    id: 8,
    img: "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1692078759%2FBrands%2520Bar%2Fqassim_cement_jx6eck.png&w=256&q=75",
  },
  {
    id: 9,
    img: "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1692078760%2FBrands%2520Bar%2Fal_tilal_steel_company_raseav.png&w=256&q=75",
  },
  {
    id: 10,
    img: "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1692078760%2FBrands%2520Bar%2Fbin_dajam_steel_bcox2e.png&w=256&q=75",
  },
  {
    id: 11,
    img: "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1677155717%2FBrands%2520Bar%2Fyamama_cement_vc1h8o.png&w=256&q=75",
  },
  {
    id: 12,
    img: "https://brkz.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdtbk6u1pb%2Fimage%2Fupload%2Fv1677155717%2FBrands%2520Bar%2Friyadh_wcddsf.png&w=256&q=75",
  },
];

const BrandsLogos = () => {
  const commonTxt = enText.common;

  return (
    <section className="py-16 text-center bg-[hsla(0,0%,96%,.8)] section-m overflow-x-hidden">
      <h1 className="section-title">
        {commonTxt.brands}{" "}
        <span className="text-secondary-dark !font-black">
          {commonTxt.onboard}
        </span>
      </h1>
      <div className="mt-[60px] overflow-hidden relative">
        <div className="brands-slider flex animate-slide">
          {data.length > 0 &&
            data.map((ele) => (
              <img
                key={ele.id}
                src={ele.img}
                alt=""
                className="h-[60px] object-cover mx-5 px-7  "
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsLogos;
