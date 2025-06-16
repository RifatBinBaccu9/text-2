"use client";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Button } from "@/app/component/common/button";

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
      <div className="grid md:grid-cols-2 items-center gap-10 bg-white rounded-2xl overflow-hidden">
        {/* Left Content */}
        <div className="p-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-textNormal mb-4">
            Deals of the Month
          </h2>
          <p className="text-description mb-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>

          {/* Countdown Timer */}
          <div className="flex flex-wrap gap-4 sm:gap-6 mb-8">
            {[
              { label: "Days", value: timeLeft.d },
              { label: "Hours", value: timeLeft.h },
              { label: "Mins", value: timeLeft.m },
              { label: "Secs", value: timeLeft.s },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 text-textNormal rounded-xl shadow-md hover:shadow-xl transition"
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
        <div className="w-full h-full bg-[#F3F4F6]">
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
