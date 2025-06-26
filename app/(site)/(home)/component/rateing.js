"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useRef } from "react";
import RateingCard from "./rateingCard";

const ratings = [
  {
    "id": 1,
    "rating": 4.5,
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem .",
    "title": "Leslie Alexander",
    "profession": "Model",
    "image": "/Rating/image1.png"
  },
  {
    "id": 2,
    "rating": 3.8,
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem .",
    "title": "Jacob Jones",
    "profession": "Co-Founder",
    "image": "/Rating/image2.png"
  },
  {
    "id": 3,
    "rating": 5.0,
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem .",
    "title": "Jenny Wilson",
    "profession": "Fashion Designer",
    "image": "/Rating/image3.png"
  },
  {
    "id": 4,
    "rating": 4.5,
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem .",
    "title": "Leslie Alexander",
    "profession": "Model",
    "image": "/Rating/image1.png"
  },
]
export default function Rateing() {
  const swiperRef = useRef(null);
  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };
  return (
    <div className="bg-[#FAFAFB] py-5 sm:py-7 lg:py-10 xl:py-[50px] mt-[50px] md:mt-[100px] px-4">
      <div className="relative container px-4">
        <div className="flex justify-between items-center mb-5 md:mb-10">
        <h1 className="title">
          What our Customer say’s
        </h1>
        <div className="flex gap-3">
          <button
            onClick={handlePrevSlide}
            className="w-9 h-9 rounded-full border border-cardBorder text-textNormal flex items-center justify-center hover:bg-bgNormal hover:text-white transition"
          >
            <FaArrowLeft className="text-sm sm:text-base" />
          </button>
          <button
            onClick={handleNextSlide}
            className="w-9 h-9 rounded-full border border-cardBorder text-textNormal flex items-center justify-center hover:bg-bgNormal hover:text-white transition"
          >
            <FaArrowRight className="text-sm sm:text-base" />
          </button>
        </div>
      </div>
        <Swiper
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            540: { slidesPerView: 2, spaceBetween: 10 },
            968: { slidesPerView: 3, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 16 },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="_rateing_card _hero_pagination"
        >
          {ratings.map((ratings, idx) => (
            <SwiperSlide key={idx} className="bg-white hover:bg-cardBg rounded-lg p-[30px] border border-cardBorder hover:border-bgNormal shadow-sm hover:shadow-md shadow-textMain hover:shadow-textMain transition duration-300 ease-in-out mt-4 mb-10">
              <RateingCard ratings={ratings}></RateingCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
