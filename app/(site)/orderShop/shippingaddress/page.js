import Breadcrumb from "@/app/component/common/breadcrumb";
import Link from "next/link";
import { Input } from "postcss";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { IoDocumentTextOutline, IoHome } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

const ShippingAddress = () => {
  const page = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Shipping Address",
      link: "/orderShop/shippingaddress",
    },
  ]
  return (
    <div className="header_top">
        <Breadcrumb title={"Shipping Address"} page={page} />

        <div className="container grid grid-cols-3 justify-between gap-[80px] my-8 md:my-[72px]">
          {/* left side */}
          <div className="col-span-3 lg:col-span-2">
            <div className="flex flex-row items-center justify-between gap-[10px] px-2">
              <div className="bg-[#131118]  rounded-[8px] flex justify-center items-center p-2 md:p-[10px]">
                <IoHome className="text-white text-lg md:text-xl" />
              </div>
              <div className="w-full border border-dashed border-[#A4A1AA33]"></div>
              <div className="bg-[#A4A1AA1A]  rounded-[8px] flex justify-center items-center p-2 md:p-[10px]">
                <MdOutlinePayment className="text-[#131118] text-lg md:text-xl" />
              </div>
              <div className="w-full border border-dashed border-[#A4A1AA33]"></div>
              <div className="bg-[#A4A1AA1A]  rounded-[8px] flex justify-center items-center p-2 md:p-[10px]">
                <IoDocumentTextOutline className="text-[#131118] text-lg md:text-xl" />
              </div>
            </div>

            <div className="flex flex-row items-center justify-between gap-4 text-sm md;text-base font-normal font-jost">
              <span>Address</span>
              <span>Payment Method</span>
              <span>Review</span>
            </div>

            <div className="my-[30px]">
              <div>
                <h1 className="text-lg md:text-xl font-jost font-bold text-[#131118]">
                  Select a delivery address
                </h1>
                <p className="text-xs md:text-sm font-jost font-normal text-[#131118]">
                  Is the address you'd like to use displayed below? If so, click
                  the corresponding "Deliver to this address" button. Or you can
                  enter a new delivery address.
                </p>
              </div>

              <div className="mt-5 mb-[30px] flex flex-col sm:flex-row justify-between gap-[30px]">
                <div className="bg-[#A4A1AA0D] p-4 rounded-[10px]">
                  <div className="flex items-center justify-between">
                    <h1 className="text-lg md:text-xl font-jost font-bold text-[#131118]">
                      Robert Fox
                    </h1>
                    <input type="checkbox" className="w-3 md:w-5 h-3 md:h-5" />
                  </div>
                  <p className="text-sm md:text-base font-jost font-normal text-[#131118] mt-[10px] mb-5">
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </p>

                  <div className="flex items-center justify-between gap-5">
                    <div className="w-full cursor-pointer p-2 flex flex-row items-center justify-center gap-[5px] bg-[#A4A1AA1A] rounded-[8px]">
                      <div>
                        <FiEdit className="text-base md:text-lg"/>
                      </div>
                      <span>Edit</span>
                    </div>
                    <div className="w-full cursor-pointer p-2 flex flex-row items-center justify-center gap-[5px] bg-[#FF72621A] rounded-[8px]">
                      <div>
                        <RiDeleteBinLine className="text-base md:text-lg"/>
                      </div>
                      <span>Delete</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#A4A1AA0D] p-4 rounded-[10px]">
                  <div className="flex items-center justify-between">
                    <h1 className="text-lg md:text-xl font-jost font-bold text-[#131118]">
                      John Willions
                    </h1>
                    <input type="checkbox" className="w-3 md:w-5 h-3 md:h-5" />
                  </div>
                  <p className="text-sm md:text-base font-jost font-normal text-[#131118] mt-[10px] mb-5">
                    3891 Ranchview Dr. Richardson, California 62639
                  </p>

                  <div className="flex flex-row  items-center justify-between gap-5">
                    <div className="w-full cursor-pointer p-2 flex flex-row items-center justify-center gap-[5px] bg-[#A4A1AA1A] rounded-[8px]">
                      <div>
                        <FiEdit className="text-base md:text-lg"/>
                      </div>
                      <span>Edit</span>
                    </div>
                    <div className="w-full cursor-pointer p-2 flex flex-row items-center justify-center gap-[5px] bg-[#FF72621A] rounded-[8px]">
                      <div>
                        <RiDeleteBinLine className="text-base md:text-lg"/>
                      </div>
                      <span>Delete</span>
                    </div>
                  </div>
                </div>
              </div>

              <Link href={"/orderShop/paymentmethod"} className="mt-[30px]">
                <button className="w-fit flex items-center justify-center !py-2 md:!py-3 xl:!py-4 !px-[50px] md:!px-[116px] coupon_button">
                  Deliver Here
                </button>
              </Link>
            </div>

            {/* Add a new address */}
            <div>
              <h1 className="text-xl font-jost font-bold text-[#131118]">
                Add a new address
              </h1>

              <div className="mt-[30px] flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-[#131118] text-base font-normal font-jost pb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter Name"
                    className="text-[#A4A1AACC] text-base font-normal font-jost outline-none border border-[#131118] w-full py-2 md:py-3 px-5 rounded-[10px] mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="number"
                    className="text-[#131118] text-base font-normal font-jost pb-1"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    id="number"
                    placeholder="Enter Mobile Number"
                    className="text-[#A4A1AACC] text-base font-normal font-jost outline-none border border-[#131118] w-full py-2 md:py-3 px-5 rounded-[10px] mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Flat"
                    className="text-[#131118] text-base font-normal font-jost pb-1"
                  >
                    Flat, House no., Building, Company, Apartment
                  </label>
                  <input
                    type="text"
                    id="Flat"
                    className="text-[#A4A1AACC] text-base font-normal font-jost outline-none border border-[#131118] w-full py-2 md:py-3 px-5 rounded-[10px] mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Area"
                    className="text-[#131118] text-base font-normal font-jost pb-1"
                  >
                    Area, Colony, Street, Sector, Village
                  </label>
                  <input
                    type="text"
                    id="Area"
                    className="text-[#A4A1AACC] text-base font-normal font-jost outline-none border border-[#131118] w-full py-2 md:py-3 px-5 rounded-[10px] mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="City"
                    className="text-[#131118] text-base font-normal font-jost pb-1"
                  >
                    Select City
                  </label>
                  <select
                    name="state"
                    id="City"
                    className="text-[#A4A1AACC] text-base font-normal font-jost outline-none border border-[#131118] w-full py-2 md:py-3 px-5 rounded-[10px] mt-1"
                  >
                    <option value="state">Select City</option>
                    <option value="state">state</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="Code"
                    className="text-[#131118] text-base font-normal font-jost pb-1"
                  >
                    Pin Code
                  </label>
                  <input
                    type="text"
                    id="Code"
                    placeholder="Enter Pin Code"
                    className="text-[#A4A1AACC] text-base font-normal font-jost outline-none border border-[#131118] w-full py-2 md:py-3 px-5 rounded-[10px] mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="State"
                    className="text-[#131118] text-base font-normal font-jost pb-1"
                  >
                    State
                  </label>
                  <select
                    name="state"
                    id="state"
                    className="text-[#A4A1AACC] text-base font-normal font-jost outline-none border border-[#131118] w-full py-2 md:py-3 px-5 rounded-[10px] mt-1"
                  >
                    <option value="state">Select State</option>
                    <option value="state">state</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-row items-center gap-[10px] mt-4">
                <input type="checkbox" className="w-4 md:w-6 h-4 md:h-6" />
                <span className="text-[#131118] text-sm md:text-base font-jost font-normal">
                  Use as my default address
                </span>
              </div>

              <button className="w-fit flex items-center justify-center !py-2 md:!py-3 xl:!py-4 !px-[50px] md:!px-[98px] coupon_button mt-[30px]">
                Add New Address
              </button>
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

export default ShippingAddress;
