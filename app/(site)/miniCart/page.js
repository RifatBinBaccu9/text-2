"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { RiDeleteBinLine, RiShoppingBag2Line } from "react-icons/ri";

const MiniCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartRef = useRef(null);

  const toggleCart = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const cartItems = new Array(3).fill({
    title: "Girls Pink Moana Printed Dress",
    price: "$80.00",
    size: "S",
    image: "/rifat.jpeg",
  });

  return (
    <div className="relative mini_cart">
      <RiShoppingBag2Line
        onClick={toggleCart}
        className="text-black hover:text-[#7ABBDE] cursor-pointer select-none"
      />

      {isOpen && (
        <div
          ref={cartRef}
          className="  absolute border-2 border-[#D96936] -right-[10px] sm:right-0 top-[33px] sm:top-[40px] main_cart w-[250px] sm:w-[300px] md:w-[352px] p-3 md:p-5 z-50 rounded-[10px] bg-white flex flex-col"
        >
          <h2 className="text-sm md:text-base font-normal font-jost text-[#131118] mb-[20px]">
            You have {cartItems.length} items in your cart
          </h2>

          {/* Scrollable section for cart items */}
          <div className="  pr-1 h-[200px] overflow-y-auto">
            {cartItems.map((item, index) => (
              <div key={index}>
                <div className="flex flex-row items-center gap-[10px] sm:gap-[15px]">
                  <div className="w-[60px] sm:w-[70px] h-[60px] sm:h-[70px] bg-[#A4A1AA0D] flex justify-center items-center">
                    <Image
                      src={item.image}
                      alt="cart"
                      width={900}
                      height={900}
                      className="w-[35px] sm:w-[41px] h-[30px] sm:h-[36px]"
                    />
                  </div>
                  <div>
                    <h1 className="text-xs sm:text-sm font-normal font-jost text-[#131118]">
                      {item.title}
                    </h1>
                    <div className="text-xs sm:text-sm font-bold font-jost text-[#131118] my-[5px]">
                      1 x {item.price}
                    </div>
                    <div className="flex flex-row items-center justify-between">
                      <span className="text-xs sm:text-sm font-normal font-jost text-[#131118]">
                        Size: {item.size}
                      </span>
                      <RiDeleteBinLine className="text-[#FF7262] text-base sm:text-lg cursor-pointer" />
                    </div>
                  </div>
                </div>
                <hr className="my-3 sm:my-5 h-[1px] bg-[#A4A1AA33]" />
              </div>
            ))}
          </div>

          {/* Subtotal and buttons (fixed at bottom) */}
          <div className="mt-auto pt-4 border-t border-[#A4A1AA33]">
            <div className="flex justify-between text-sm sm:text-base font-semibold md:font-bold mb-4">
              <span className="font-jost text-[#131118]">Subtotal</span>
              <span className="font-jost text-[#131118]">$240.00</span>
            </div>
            <button className="text-sm sm:text-base font-jost font-normal p-2 sm:p-3 w-full border border-[#131118] rounded-[10px] mb-3">
              View Cart
            </button>
            <Link
              href="/orderShop/checkout"
              className=" block text-center text-sm sm:text-base font-jost font-normal p-2 sm:p-3 w-full border border-[#131118] rounded-[10px] text-white bg-[#131118]"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiniCart;
