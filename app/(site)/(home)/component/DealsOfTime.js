"use client";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Button } from "@/app/component/common/button";
import { Tooltip } from "antd";

const DealsOfTime = () => {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    let targetDate = localStorage.getItem("countdownTarget");

    // If no countdown exists, set one for 30 days from now
    if (!targetDate) {
      targetDate = (Date.now() + 30 * 24 * 60 * 60 * 1000).toString();
      localStorage.setItem("countdownTarget", targetDate);
    }

    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = parseInt(targetDate) - now;

      if (difference <= 0) {
        localStorage.removeItem("countdownTarget");
        return { d: 0, h: 0, m: 0, s: 0 };
      }

      return {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / (1000 * 60)) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="container lg:mt-[150px] md:mt-[120px] mt-[60px]">
      <div className="md:grid md:grid-cols-2 flex flex-col-reverse items-center md:gap-4 lg:gap-8 xl:gap-10 bg-white rounded-2xl overflow-hidden">
        {/* Left Content */}
        <div className="p-4 mb-8 md:mb-0">
          <h2 className="text-3xl lg:text-4xl font-bold text-textNormal mb-4">
            Deals of the Month
          </h2>
          <Tooltip title={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."} className="text-description mb-6 line-clamp-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </Tooltip>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 justify-between gap-4 mb-8">
            {[
              { label: "Days", value: timeLeft.d },
              { label: "Hours", value: timeLeft.h },
              { label: "Mins", value: timeLeft.m },
              { label: "Secs", value: timeLeft.s },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 text-textNormal rounded-xl shadow-md hover:shadow-xl transition"
              >
                <span className="text-xl sm:text-2xl font-bold">{item.value}</span>
                <span className="text-xs sm:text-sm mt-1">{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            text="View All Products"
            href="/shop"
            icon={<FaArrowRightLong />}
          />
        </div>

        {/* Right Side Image */}
        <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-[#F3F4F6]">
          <Image
            src="/DealsOfMonthImage.png"
            alt="Deals Of The Month"
            width={900}
            height={900}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DealsOfTime;
