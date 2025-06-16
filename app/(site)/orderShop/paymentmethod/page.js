"use client";
import Breadcrumb from "@/app/component/common/breadcrumb";
import Link from "next/link";
import React, { useState } from "react";
import { IoDocumentTextOutline, IoHome } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const page = [
    { title: "Home", link: "/" },
    { title: "Payment Method", link: "#" },
  ]
  return (
    <div className="header_top">
      <Breadcrumb title={"Payment Method"} page={page}/>
        <div className="container grid grid-cols-3 justify-between gap-[80px] my-8 md:my-[72px]">
          {/* left side */}
          <div className="col-span-3 lg:col-span-2">
            <div className="flex flex-row items-center justify-between gap-[10px] px-2">
              <div className="bg-[#131118]  rounded-[8px] flex justify-center items-center p-2 md:p-[10px]">
                <IoHome className="text-white text-lg md:text-xl" />
              </div>
              <div className="w-full border border-dashed border-[#131118]"></div>
              <div className="bg-[#131118]  rounded-[8px] flex justify-center items-center p-2 md:p-[10px]">
                <MdOutlinePayment className="text-[#fff] text-lg md:text-xl" />
              </div>
              <div className="w-full border border-dashed border-[#A4A1AA33]"></div>
              <div className="bg-[#A4A1AA1A]  rounded-[8px] flex justify-center items-center p-2 md:p-[10px]">
                <IoDocumentTextOutline className="text-[#131118] text-lg md:text-xl" />
              </div>
            </div>

            <div className="flex flex-row items-center justify-between gap-4 text-base font-normal font-jost">
              <span>Address</span>
              <span>Payment Method</span>
              <span>Review</span>
            </div>

            {/* Add a new address */}
            <div className="mt-[30px]">
              <h1 className="text-xl font-jost font-bold text-[#131118]">
                Add a new address
              </h1>

              <div className="mt-8 flex flex-col gap-6 px-4 sm:px-8 lg:px-20">
                {/* Debit/Credit Card */}
                <div className="pb-5 border-b border-[#c7c7c9]">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      id="debit"
                      name="payment-method"
                      className="w-5 h-5"
                      checked={selectedMethod === "debit"}
                      onChange={(e) => setSelectedMethod(e.target.id)}
                    />
                    <label
                      htmlFor="debit"
                      className="text-lg sm:text-xl font-jost font-bold text-[#131118]"
                    >
                      Debit/Credit Card
                    </label>
                  </div>

                  {selectedMethod === "debit" && (
                    <div className="mt-5 flex flex-col gap-5">
                      <div>
                        <label
                          htmlFor="CardNumber"
                          className="text-sm font-jost"
                        >
                          Card Number
                        </label>
                        <input
                          type="text"
                          id="CardNumber"
                          placeholder="3897 22XX 1900 3890"
                          className="w-full py-3 px-4 border border-[#131118] rounded-xl mt-1 outline-none text-sm text-[#A4A1AACC]"
                        />
                      </div>
                      <div>
                        <label htmlFor="CardName" className="text-sm font-jost">
                          Card Holder Name
                        </label>
                        <input
                          type="text"
                          id="CardName"
                          placeholder="John Doe"
                          className="w-full py-3 px-4 border border-[#131118] rounded-xl mt-1 outline-none text-sm text-[#A4A1AACC]"
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full">
                          <label
                            htmlFor="ExpiryDate"
                            className="text-sm font-jost"
                          >
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            id="ExpiryDate"
                            placeholder="MM/YY"
                            className="w-full py-3 px-4 border border-[#131118] rounded-xl mt-1 outline-none text-sm text-[#A4A1AACC]"
                          />
                        </div>
                        <div className="w-full">
                          <label htmlFor="CVV" className="text-sm font-jost">
                            CVV
                          </label>
                          <input
                            type="password"
                            id="CVV"
                            placeholder="***"
                            className="w-full py-3 px-4 border border-[#131118] rounded-xl mt-1 outline-none text-sm text-[#A4A1AACC]"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Google Pay */}
                <div className="pb-5 border-b border-[#c7c7c9]">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      id="google"
                      name="payment-method"
                      className="w-5 h-5"
                      checked={selectedMethod === "google"}
                      onChange={(e) => setSelectedMethod(e.target.id)}
                    />
                    <label
                      htmlFor="google"
                      className="text-lg sm:text-xl font-jost font-bold text-[#131118]"
                    >
                      Google Pay
                    </label>
                  </div>

                  {selectedMethod === "google" && (
                    <div className="mt-5">
                      <label
                        htmlFor="googleEmail"
                        className="text-sm font-jost"
                      >
                        Google Pay Email
                      </label>
                      <input
                        type="email"
                        id="googleEmail"
                        placeholder="example@gmail.com"
                        className="w-full py-3 px-4 border border-[#131118] rounded-xl mt-1 outline-none text-sm text-[#A4A1AACC]"
                      />
                    </div>
                  )}
                </div>

                {/* PayPal */}
                <div className="pb-5 border-b border-[#c7c7c9]">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      id="paypal"
                      name="payment-method"
                      className="w-5 h-5"
                      checked={selectedMethod === "paypal"}
                      onChange={(e) => setSelectedMethod(e.target.id)}
                    />
                    <label
                      htmlFor="paypal"
                      className="text-lg sm:text-xl font-jost font-bold text-[#131118]"
                    >
                      PayPal
                    </label>
                  </div>

                  {selectedMethod === "paypal" && (
                    <div className="mt-5">
                      <label
                        htmlFor="paypalEmail"
                        className="text-sm font-jost"
                      >
                        PayPal Email
                      </label>
                      <input
                        type="email"
                        id="paypalEmail"
                        placeholder="example@paypal.com"
                        className="w-full py-3 px-4 border border-[#131118] rounded-xl mt-1 outline-none text-sm text-[#A4A1AACC]"
                      />
                    </div>
                  )}
                </div>

                {/* Cash on Delivery */}
                <div className="pb-5 border-b border-[#c7c7c9]">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      id="cash"
                      name="payment-method"
                      className="w-5 h-5"
                      checked={selectedMethod === "cash"}
                      onChange={(e) => setSelectedMethod(e.target.id)}
                    />
                    <label
                      htmlFor="cash"
                      className="text-lg sm:text-xl font-jost font-bold text-[#131118]"
                    >
                      Cash on Delivery
                    </label>
                  </div>
                </div>
              </div>

              <Link href="/orderShop/reviewYourOrder" className="w-full">
                <button className="w-fit flex items-center justify-center !py-2 md:!py-3 xl:!py-4 !px-[50px] md:!px-[98px] coupon_button mt-[30px]">
                  Continue
                </button>
              </Link>
            </div>
          </div>

          {/* right side */}
          <div className="hidden lg:block border border-[#c7c7c9] p-5 rounded-[4px] w-full h-fit">
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

            <div className="flex flex-row gap-2 sm:gap-0 items-center rounded-[10px] p-2 border border-[#c7c7c9] mt-[5px]">
              <input
                type="text"
                placeholder="FLAT50"
                className="w-full pl-2 outline-none text-base font-jost"
              />
              <button className="w-fit text-sm lg:text-base font-jost px-4 py-1 xl:py-2 rounded-[6px] text-[#fff] bg-[#174A9B] hover:bg-[#123A7A] transition-colors duration-300 cursor-pointer">
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
          </div>
        </div>
      </div>
  );
};

export default PaymentMethod;
