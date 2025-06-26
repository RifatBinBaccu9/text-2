"use client";

import React from "react";
import Image from "next/image";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from "@/app/component/common/button";
import Link from "next/link";

const Checkout = () => {

  return (
    <div className=" bg-white">
    
    <h1 className="text-3xl font-semibold text-textNormal">Check Out</h1>
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Left Section - Cart Items */}
        <div className="lg:col-span-2 border border-cardBorder rounded-md px-3">
          {/* Table Header */}
          <ul className="hidden md:grid grid-cols-6 items-center gap-5 text-sm md:text-base font-jost text-textNormal py-4 border-b border-cardBorder">
            <li className="col-span-3">Products</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Subtotal</li>
          </ul>

          {/* Cart Items */}
          {[1, 2, 3].map((item, index) => (
            <ul
              key={index}
              className="grid grid-cols-1 md:grid-cols-6 gap-4 py-5 border-b border-cardBorder"
            >
              <li className="md:col-span-3 flex gap-3 items-start">
                <Image
                  src="/rifat_Mias.jpg"
                  alt="checkout"
                  width={900}
                  height={900}
                  className="w-[50px] h-[50px] rounded-md object-cover border"
                />
                <div>
                  <Link href={`//shop`} className="text-sm md:text-base font-jost font-semibold text-textNormal hover:text-bgNormal">
                    Girls Pink Moana Printed Dress
                  </Link>
                  <p className="text-sm text-description">Size: S</p>
                </div>
              </li>

              <li className="hidden md:flex items-center text-sm text-textNormal">
                $80.00
              </li>

              <li className="flex items-center gap-2 p-2 border border-cardBorder rounded-lg w-fit">
                <IoIosRemove className="text-xl text-textNormal cursor-pointer" />
                <span className="text-sm text-textNormal">1</span>
                <IoIosAdd className="text-xl text-textNormal cursor-pointer" />
              </li>

              <li className="flex items-center justify-between gap-3 md:justify-start">
                <span className="text-sm text-textNormal">$80.00</span>
                <RiDeleteBin6Line className="text-lg text-bgNormal cursor-pointer hover:text-bgHover transition" />
              </li>
            </ul>
          ))}
        </div>

        {/* Right Section - Summary */}
        <div className="border border-cardBorder bg-cardBg p-5 rounded-md h-fit shadow-sm">
          {/* Subtotal */}
          <div className="flex items-center justify-between pb-4 border-b border-cardBorder">
            <span className="text-base font-jost font-bold text-textNormal">
              Subtotal
            </span>
            <span className="text-base font-jost font-bold text-textNormal">
              $240.00
            </span>
          </div>

          {/* Discount Input */}
          <p className="text-xs text-textNormal mt-4">Enter Discount Code</p>
          <div className="flex gap-2 items-center mt-2 p-1 border border-cardBorder rounded-md">
            <input
              type="text"
              placeholder="FLAT50"
              className="w-full text-sm text-textNormal bg-transparent outline-none px-2"
            />
            <button className="text-sm px-4 py-1 rounded-md text-white bg-bgNormal hover:bg-bgHover transition">
              Apply
            </button>
          </div>

          {/* Delivery Charge */}
          <div className="flex items-center justify-between text-sm text-textNormal py-4 border-b border-cardBorder">
            <span>Delivery Charge</span>
            <span>$10.00</span>
          </div>

          {/* Grand Total */}
          <div className="flex items-center justify-between text-base font-bold text-textNormal mt-4">
            <span>Grand Total</span>
            <span>$250.00</span>
          </div>

          {/* Checkout Button */}
          <Button
            text="Proceed to Checkout"
            href="/orderShop/shippingaddress"
            className="!w-full !mt-4 !flex !justify-center bg-bgNormal hover:bg-bgHover text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
