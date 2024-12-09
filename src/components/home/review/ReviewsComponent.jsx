import React, { useState } from "react";
import enText from "../../../translationText/en.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, A11y } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ReviewsComponent = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const { title, reviews, title_1 } = enText.reviews_section;

  return (
    <div className=" py-14 bg-[#f8f8f8] section-m">
      <div className=" custom-container overflow-x-hidden ">
        <h2 className=" section-title text-secondary-dark">
          {title} <span className=" text-secondary-dark">{title_1}</span>
        </h2>
       <div className=" flex gap-5 justify-end mt-10 mb-5">
       <button
          onClick={() => swiperRef?.slidePrev()}
          className="sm:h-10 sm:w-10 h-8 w-8 xl-2:w-12 xl-2:h-12 bg-primary border border-primary shrink-0 rounded-full flex justify-center items-center"
        >
          <FaArrowLeft className=" text-white" />
        </button>
        <button
          onClick={() => swiperRef?.slideNext()}
          className="sm:h-10 sm:w-10 h-8 w-8 xl-2:w-12 xl-2:h-12 bg-primary shrink-0 border border-primary rounded-full flex justify-center items-center"
        >
          <FaArrowRight className=" text-white" />
        </button>
       </div>

        <div className=" ">
          <Swiper
            onSwiper={setSwiperRef}
            modules={[Navigation, A11y]}
            className="!py-5 !px-2 w-full !mx-auto blog-swiper"
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className=" !h-auto">
                <div className="review-card max-w-[540px] gap-5 flex flex-col  h-full shrink-0  bg-primary-light p-10 rounded-[20px]  ">
                  <p className="mt-2 text-[30px] italic  text-center text-white">
                    {review.review}
                  </p>
                  <div className=" mt-auto">
                    <h3 className="reviewer-name text-[32px] text-secondary-dark text-center font-bold ">
                      {review.reviewer_name}
                    </h3>
                    <p className="  text-white text-[30px] text-center">
                      {review.position}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ReviewsComponent;
