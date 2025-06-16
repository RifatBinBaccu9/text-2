import { Button } from "@/app/component/common/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";

const ProductCard2 = ({ bestSellers }) => {
  const { id, image, title, price, discount, description, sub_description } =
    bestSellers;
  return (
    <div>
      <div className="flex flex-row justify-start w-full gap-10">
        <div className="bg-[#FAFAFB] sm:py-[55px] py-[30px] sm:px-[22px] px-3 group relative">
          <div className="w-[110px] sm:w-[220px] h-[60px] sm:h-[120px]">
            <Image
              src={image}
              alt="image"
              width={900}
              height={900}
              className="w-full h-full"
            />
          </div>

          <div className="absolute inset-0 group-hover:bg-black group-hover:duration-500 opacity-30"></div>

          <div>
            <div className="flex flex-col absolute top-7 right-3 md:right-7">
              <Link href={"/"}>
                <div className="product_card_icon">
                  <FaRegStar className="text-base sm:text-xl" />
                </div>
              </Link>
              <Link href={"/"}>
                <div className="product_card_icon">
                  <GoArrowSwitch className="text-base sm:text-xl" />
                </div>
              </Link>
              <Link href={`/shop/${id}`}>
                <div className="product_card_icon">
                  <IoEyeOutline className="text-base sm:text-xl" />
                </div>
              </Link>
            </div>

            <div className=" rounded-md inset-x-0 text-center hidden group-hover:block absolute bottom-3 md:bottom-4 justify-center">
              <Button
                text={"Add to Cart"}
                href={`/shop/${id}`}
                className="!opacity-95 !py-2 !w-10/12 !mx-auto !block"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between w-full y-5 text-start">
          <div>
            <h3 className="text-base font-jost font-bold">{title}</h3>
            <p className="text-base font-jost font-normal py-[5px]">
              {description}
            </p>
            <div className="hidden sm:block">
              <li className="text-base font-jost font-normal mt-4 line-clamp-4 ">
                {sub_description}
              </li>
            </div>
          </div>

          <div>
            <div className="text-base font-jost font-normal flex gap-2">
              <span>{price}</span>
              <span className="text-[#A4A2AA] line-through">{discount}</span>
            </div>
            <div className="flex justify-end sm:hidden">
              <Link
                href={"/"}
                className="px-5 py-[5px] md:py-[8px] lg:py-[10px] bg-[#174A9B] text-[#e9e5e5] rounded-md font-jost font-normal sm:text-base text-sm cursor-pointer hover:bg-[#123A7A] hover:text-white transition-colors duration-300"
              >
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#D9D9D9] my-3 sm:my-4 md:my-5 lg:my-6"></div>
    </div>
  );
};

export default ProductCard2;
