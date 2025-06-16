"use client";
import Breadcrumb from "@/app/component/common/breadcrumb";
import { Button } from "@/app/component/common/button";
import { Modal } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { IoDocumentTextOutline, IoHome } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";

const ReviewYourOrder = ({click}) => {
  const page = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Review Your Order",
      link: "/orderShop/reviewYourOrder",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="header_top">
      <Breadcrumb title={"Review Your Order"} page={page} />

      <div className=" container lg:grid grid-cols-3 justify-between gap-[80px] my-8 md:my-[72px]">
        {/* left side */}
        <div className="col-span-3 lg:col-span-2">
          <div className="flex flex-row items-center justify-between gap-[10px] px-2">
            <div className="bg-[#131118] p-2 md:p-[10px] rounded-[8px] flex justify-center items-center">
              <IoHome className="text-white text-lg md:text-xl" />
            </div>
            <div className="w-full border border-dashed border-[#131118]"></div>
            <div className="bg-[#131118] p-2 md:p-[10px]  rounded-[8px] flex justify-center items-center">
              <MdOutlinePayment className="text-[#fff] text-lg md:text-xl" />
            </div>
            <div className="w-full border border-dashed border-[#131118]"></div>
            <div className="bg-[#131118] p-2 md:p-[10px]  rounded-[8px] flex justify-center items-center">
              <IoDocumentTextOutline className="text-[#fff] text-lg md:text-xl" />
            </div>
          </div>

          <div className="flex flex-row items-center justify-between gap-4 text-sm md:text-base font-normal font-jost">
            <span>Address</span>
            <span>Payment Method</span>
            <span>Review</span>
          </div>

          {/* Add a new address */}
          <div className="mt-[30px]">
            <h1 className="order_shop_subTitle">
              Estimated delivery: 22 Feb 2022
            </h1>

            <div className="mt-[30px]">
              <div>
                {[1, 2, 3, 4].map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center gap-[10px] pb-5 border-b border-[#A4A1AA33] mb-5"
                  >
                    <div className="w-[79px] h-[79px] flex justify-center items-center bg-[#A4A1AA0D] rounded-[4px]">
                      <Image
                        src="/rifat_mias.jpg"
                        alt="checkout"
                        width={1000}
                        height={1000}
                        className="w-[57px] h-[52px]"
                      />
                    </div>

                    <div className="flex flex-col gap-[5px]">
                      <h1 className="text-sm md:text-base font-jost font-bold text-[#131118]">
                        Girls Pink Moana Printed Dress
                      </h1>
                      <span className="text-sm md:text-base font-jost font-normal text-[#131118]">
                        $80.00
                      </span>
                      <span className="text-sm md:text-base font-jost font-normal text-[#131118]">
                        Size: Regular
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h1 className="order_shop_subTitle">Shipping Address</h1>

                <div className="flex flex-row items-center justify-between gap-4 pb-5 border-b border-[#A4A1AA33] mt-5">
                  <div>
                    <h1 className="text-sm md:text-lg font-jost font-bold text-[#131118]">
                      Robert Fox
                    </h1>
                    <p className="text-xs md:text-base font-jost font-normal text-[#131118] mt-[10px]">
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </p>
                  </div>
                  <div className="w-8 md:w-10 h-8 md:h-10 flex justify-center items-center bg-[#A4A1AA1A] rounded-[10px]">
                    <FiEdit className="text-[#131118] text-lg md:text-2xl" />
                  </div>
                </div>
              </div>

              <div>
                <h1 className="order_shop_subTitle">Payment Method</h1>

                <div className="flex flex-row items-center justify-between gap-4 pb-5 border-b border-[#A4A1AA33] mt-5">
                  <div>
                    <h1 className="text-sm md:text-lg font-jost font-bold text-[#131118]">
                      Debit Card (.... .... .... ..89)
                    </h1>
                  </div>
                  <div className="w-8 md:w-10 h-8 md:h-10 flex justify-center items-center bg-[#A4A1AA1A] rounded-[10px]">
                    <FiEdit className="text-[#131118] text-lg md:text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
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
        
              <Button text={"Place Order"}  click={showModal} className="!w-full !mt-4 !flex !justify-center !py-2 md:!py-3"/>
            </div>
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          className="!w-fit"
        >
        <div className="bg-white  text-center w-full max-w-md !pb-6 !pt-10">
                <div className="relative flex items-center justify-center">
                  <div className="bg-gradient-to-tr from-orange-400 to-orange-500 rounded-full p-4">
                    <FaCheckCircle className="w-12 h-12 text-white" />
                  </div>
                  {/* Dots background */}
                  <div className="absolute w-32 h-32">
                    <div className="animate-ping absolute top-0 left-0 w-2 h-2 bg-orange-300 rounded-full"></div>
                    <div className="animate-ping absolute top-2 right-2 w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                    <div className="animate-ping absolute bottom-2 left-4 w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="animate-ping absolute bottom-0 right-6 w-2.5 h-2.5 bg-orange-400 rounded-full"></div>
                  </div>
                </div>
        
                <h2 className="text-2xl font-semibold mt-6">Thank you for ordering!</h2>
                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur sadipscing elitr,
                  sed diam nonumy eirmod tempor
                </p>
        
                <div className="flex justify-center gap-4 mt-6">
                  <button className="border border-gray-300 px-5 py-2 rounded-md hover:bg-gray-100">
                    View Order
                  </button>
                  <button className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600">
                    Continue Shopping
                  </button>
                </div>
              </div>
        </Modal>
      </div>
    </div>
  );
};

export default ReviewYourOrder;
