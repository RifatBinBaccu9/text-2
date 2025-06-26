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
    <div className="container lg:h-[400px] mt-[65px] sm:mt-[96px] md:mt-[98px] lg:mt-[116px] w-full grid lg:grid-cols-4 grid-cols-1 sm:gap-4 gap-2">
      {/* Left side - Main Swiper */}
      <div className="lg:col-span-3 relative">
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
          className="_hero_pagination w-full rounded-xl overflow-hidden"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Image
                src={item.image}
                alt={`Slide ${item.id}`}
                width={1000}
                height={1000}
                className="w-full lg:h-[400px] md:h-[350px] sm:h-[300px] h-[200px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div className="absolute bottom-5 right-5 hidden sm:flex items-center justify-end gap-4 z-40">
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
      <div className="grid lg:grid-cols-1 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-2">
        <Image
          src="/ds1.jpg"
          alt="Right Image 1"
          width={1000}
          height={1000}
          className="w-full h-[192px] rounded-xl"
        />
        <Image
          src="/ds2.webp"
          alt="Right Image 2"
          width={1000}
          height={1000}
          className="w-full h-[192px] rounded-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
