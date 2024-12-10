import React from "react";
import entxt from "../../../translationText/en.json";

const HowWork = () => {
  const common = entxt.common;
  const worktxt = entxt.bnpl.work;

  const data = worktxt.cards;

  return (
    <div className="bg-[#f4f6f7] py-20">
      <h2 className="section-title">{common.Howwork}</h2>
      <p className="section-subtitle">{worktxt.sub_tilte}</p>

      <div className="flex custom-container flex-wrap mx-auto justify-center gap-5">
        {
          data && (
            data.map((ele, index) => (
              <div key={ele.id} className="bg-white px-6 max-w-[300px] py-10 rounded-lg mt-14 relative flex flex-col gap-5 items-center">
                
                {index === 0 && (
                  <img
                    src="/assets/svg/bnpl/works/apply_online_k1foyy.svg" 
                    alt=""
                    className="h-24 w-24 object-contain"
                  />
                )}
                {index === 1 && (
                  <img
                    src="/assets/svg/bnpl/works/get_approved_sxgsfk.svg" 
                    alt=""
                    className="h-24 w-24 object-contain"
                  />
                )}
                {index === 2 && (
                  <img
                    src="/assets/svg/bnpl/works/use_credit_ixgqnt.svg" 
                    alt=""
                    className="h-24 w-24 object-contain"
                  />
                )}
                {index === 3 && (
                  <img
                    src="/assets/svg/bnpl/works/pay_in_installments_sf98pa.svg" 
                    alt=""
                    className="h-24 w-24 object-contain"
                  />
                )}

                <h2 className="text-lg font-semibold text-center text-secondary-light">{ele.title}</h2>
                <p className="text-light-gray text-center text-base">{ele.sub_tilte}</p>

                {/* Circle centered inside the card */}
                <div className="absolute  h-14 w-14 -bottom-6 flex justify-center items-center bg-white shadow-xl rounded-full translate-x-[10%] ">
                 <div className=" h-10 w-10 rounded-full bg-secondary-dark flex font-semibold text-lg text-white justify-center items-center">
                    {ele.id}

                 </div>
                </div>
              </div>
            ))
          )
        }
      </div>
    </div>
  );
};

export default HowWork;
