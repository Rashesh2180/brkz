import React from "react";
import enText from "../../../translationText/en.json"; 

const ReviewsComponent = () => {
  const { title, reviews,title_1 } = enText.reviews_section; 

  return (
   <div className=" py-14 bg-[#f8f8f8] section-m">
     <div className=" custom-container overflow-x-hidden ">
      <h2 className=" section-title text-secondary-dark">{title} <span className=" text-secondary-dark">{title_1}</span></h2>

      <div className="reviews-container mt-24 flex gap-10 animate-slide brands-slider ">
        {reviews.map((review) => (
          <div key={review.id} className="review-card max-w-[480px] flex flex-col  shrink-0  bg-primary-light p-[60px] rounded-[20px]  ">

            <p className="mt-2 text-[30px] italic  text-center text-secondary-dark">{review.review}</p>
            <h3 className="reviewer-name text-[32px] text-secondary-dark text-center font-bold mt-5">{review.reviewer_name}</h3>
            <p className=" mt-5 text-light-gray text-[30px] text-center">{review.position}</p>



         
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default ReviewsComponent;
