import Breadcrumb from "@/app/component/common/breadcrumb";
import { Button } from "@/app/component/common/button";
import Image from "next/image";
import React from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

const Checkout = () => {
  const page = [
    { title: "Home", link: "/" },
    { title: "Checkout", link: "#" },
  ];
  return (
    <div className="header_top">
      <Breadcrumb title={"Checkout"} page={page} />

      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-[40px] xl:gap-[80px] my-8 md:my-[72px]">
        <div className="lg:col-span-2">
          <ul className="hidden md:grid grid-cols-6 items-center gap-5 text-sm md:text-base font-jost font-normal text-[#131118] py-4 border-b border-[#c7c7c9]">
            <li className="col-span-3">Products</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Subtotal</li>
          </ul>

          {[1, 2, 3].map((item, index) => (
            <ul
              key={index}
              className="grid grid-cols-1 md:grid-cols-6 gap-4 py-5 border-b border-[#c7c7c9]"
            >
              <li className="md:col-span-3 flex gap-[10px]">
                <Image
                  src="/rifat_Mias.jpg"
                  alt="checkout"
                  width={900}
                  height={900}
                  className="w-[51px] h-[46px] rounded-[4px]"
                />
                <div>
                  <h1 className="text-sm md:text-base font-jost font-bold text-[#131118]">
                    Girls Pink Moana Printed Dress
                  </h1>
                  <p className="text-sm md:text-base font-jost text-[#131118]">
                    Size: S
                  </p>
                </div>
              </li>

              <li className="md:flex hidden items-center text-sm md:text-base font-jost text-[#131118]">
                $80.00
              </li>

              <li className="flex md:flex items-center gap-[10px] p-1 sm:p-2 lg:p-[10px] border border-[#c7c7c9] rounded-lg w-fit">
                <IoIosRemove className="text-xl md:text-2xl cursor-pointer" />
                <span className="text-sm md:text-base font-jost text-[#131118]">
                  1
                </span>
                <IoIosAdd className="text-xl md:text-2xl cursor-pointer" />
              </li>

              <li className="flex items-center justify-between gap-[10px] md:justify-start">
                <span className="text-sm md:text-base font-jost text-[#131118]">
                  $80.00
                </span>
                <RiDeleteBin6Line className="text-base sm:text-lg lg:text-xl text-[#FF7262] cursor-pointer" />
              </li>
            </ul>
          ))}
        </div>

        {/* Coupon Component */}
        <div className="border border-[#c7c7c9] p-5 rounded-[4px] h-fit">
      <div className="flex items-center justify-between pb-4 border-b border-[#A4A1AA33]">
        <span className="text-base font-jost font-bold text-[#131118]">
          Subtotal
        </span>
        <span className="text-base font-jost font-bold text-[#131118]">
          $240.00
        </span>
      </div>

      <p className="text-[12px] font-jost text-[#131118] mt-[18px]">
        Enter Discount Code
      </p>

      <div className="flex flex-row gap-2 sm:gap-0 items-center rounded-[10px] p-1 sm:p-2 border border-[#c7c7c9] mt-[5px]">
        <input
          type="text"
          placeholder="FLAT50"
          className="w-full pl-2 outline-none text-base font-jost"
        />
        <button className="w-fit text-sm lg:text-base font-jost px-4 py-2 lg:py-1 xl:py-2 rounded-[6px] text-[#fff] bg-[#174A9B] hover:bg-[#123A7A] transition-colors duration-300 cursor-pointer">
          Apply
        </button>
      </div>

      <div className="flex items-center justify-between text-base font-jost text-[#131118] py-4 border-b border-[#A4A1AA33]">
        <span>Delivery Charge</span>
        <span>$10</span>
      </div>

      <div className="flex items-center justify-between text-base font-jost font-bold text-[#131118] mt-4">
        <p>Grand Total</p>
        <p>$250.00</p>
      </div>

      <Button text={"Proceed to Checkout"} href={"/orderShop/shippingaddress"} className="!w-full !mt-4 !flex !justify-center"/>
    </div>
      </div>
    </div>
  );
};

export default Checkout;
