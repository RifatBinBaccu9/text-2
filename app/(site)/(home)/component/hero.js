"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const data = [
  { id: 2, image: "/hero2.jpg" },
  { id: 1, image: "/hero1.jpg" },
  { id: 3, image: "/hero2.jpg" },
];

const Hero = () => {
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
    <div className="container mt-[50px] sm:mt-[80px] lg:mt-[116px] w-full max-h-[400px] grid grid-cols-4 gap-4">
      {/* Left side - Main Swiper */}
      <div className="col-span-3 relative">
        <Swiper
          loop={true}
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="_hero_pagination w-full h-[400px] rounded-xl overflow-hidden"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className="!h-[400px] relative">
              <Image
                src={item.image}
                alt={`Slide ${item.id}`}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div className="absolute bottom-5 right-5 flex items-center justify-end gap-4 z-40">
          <button
            className="bg-bgNormal hover:bg-bgHover text-white hover:text-textHover border border-[#FADADD] shadow-md hover:shadow-lg px-4 py-2 rounded-lg transition duration-300"
            onClick={handlePrevSlide}
          >
            <FaArrowLeft className="text-sm" />
          </button>
          <button
            className="bg-bgNormal hover:bg-bgHover text-white hover:text-textHover border border-[#FADADD] shadow-md hover:shadow-lg px-4 py-2 rounded-lg transition duration-300"
            onClick={handleNextSlide}
          >
            <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>

      {/* Right side - Static images */}
      <div className="h-[400px] grid grid-rows-2 gap-4">
        <Image
          src="/ds1.jpg"
          alt="Right Image 1"
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-xl"
        />
        <Image
          src="/ds2.webp"
          alt="Right Image 2"
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
