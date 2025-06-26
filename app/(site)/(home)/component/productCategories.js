"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ProductCateCard from "./productCateCard";

const shopCategoriesData = [
  { id: 1, image: "/image1.png", title: "Allen Solly" },
  { id: 2, image: "/image2.png", title: "Puma" },
  { id: 3, image: "/image3.png", title: "Nike" },
  { id: 4, image: "/image4.png", title: "Levi's" },
  { id: 5, image: "/image5.png", title: "H&M" },
  { id: 6, image: "/image6.png", title: "Zara" },
  { id: 7, image: "/image7.png", title: "Gucci" },
  { id: 8, image: "/image8.png", title: "Adidas" },
  { id: 9, image: "/image9.png", title: "Bata" },
  { id: 10, image: "/image10.png", title: "Raymond" },
];

export default function ProductCategories() {
  const swiperRef = useRef(null);

  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextSlide = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="relative container mt-[50px] md:mt-[100px] px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-5 md:mb-10">
        <h1 className="title">
          Shop by Categories
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

      {/* Swiper */}
      <Swiper
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 12 },
          480: { slidesPerView: 3, spaceBetween: 12 },
          768: { slidesPerView: 3, spaceBetween: 16 },
          1024: { slidesPerView: 4, spaceBetween: 16 },
          1280: { slidesPerView: 5, spaceBetween: 16 },
        }}
        modules={[Navigation]}
      >
        {shopCategoriesData.map((category) => (
          <SwiperSlide key={category.id}>
            <ProductCateCard category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
