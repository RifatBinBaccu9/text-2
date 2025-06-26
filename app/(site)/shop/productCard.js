"use client";
import { Button } from "@/app/component/common/button";
import { Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { GoArrowSwitch } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { TbShoppingBagPlus } from "react-icons/tb";

const ProductCard = ({ bestSellers }) => {
  const { id, image, hoverImage, title, price, discount, description } = bestSellers;

  return (
    <div className="group relative border border-cardBorder rounded-2xl bg-white shadow transition-all hover:shadow-lg hover:border-bgNormal overflow-hidden">
      {/* Top Badge */}
      <div className="absolute top-2 left-2 z-10 bg-bgNormal text-white text-xs font-bold px-2 py-1 rounded-full">
        Hot
      </div>

      {/* Image Section */}
      <div className="relative w-full h-48 sm:h-40 md:h-36 lg:h-44 xl:h-52 bg-cardBg flex items-center justify-center overflow-hidden">
        {/* Main Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain transition-opacity duration-300 p-1 group-hover:opacity-0"
        />
        {/* Hover Image */}
        {hoverImage && (
          <Image
            src={hoverImage}
            alt={`${title} Hover`}
            fill
            className="object-contain opacity-0 transition-opacity duration-300 p-1 group-hover:opacity-100"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10 rounded-t-2xl" />

         <div className="absolute top-1/2 left-1/3 flex flex-row gap-2 z-20">
      <Tooltip title="Add to Wishlist" placement="top">
        <Link
          href="#"
          className="product_card_icon h-fit transition-transform duration-300 hover:-translate-y-1"
        >
          <FaRegStar className="text-base sm:text-lg" />
        </Link>
      </Tooltip>

      <Tooltip title="Compare" placement="top">
        <Link
          href="#"
          className="product_card_icon h-fit transition-transform duration-300 hover:-translate-y-1"
        >
          <GoArrowSwitch className="text-base sm:text-lg" />
        </Link>
      </Tooltip>

      <Tooltip title="View Details" placement="top">
        <Link
          href={`/shop/${id}`}
          className="product_card_icon h-fit transition-transform duration-300 hover:-translate-y-1"
        >
          <IoEyeOutline className="text-base sm:text-lg" />
        </Link>
      </Tooltip>
    </div>
      </div>

      {/* Product Details */}
      <div className="p-4 space-y-2">
        <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">T-Shirt</p>

        <h3 className="text-lg font-semibold font-jost text-textNormal group-hover:text-bgNormal transition line-clamp-1">
          {title}
        </h3>

        <p className="text-sm text-gray-500 font-jost leading-snug line-clamp-2 h-[40px]">
          {description}
        </p>

        <div className="flex items-center justify-between mt-3">
          <div className="text-bgHover font-bold text-lg">
            ৳110
            <span className="text-description line-through ml-2 text-sm font-medium">
              ৳10
            </span>
          </div>

          {/* Cart Button */}
          <div className="transition-transform duration-300 hover:-translate-y-1 mr-2 _tooltip">
            <Tooltip title="Add To Cart" placement="top" className="_tooltip">
              <button className="w-9 h-9 rounded-full border border-cardBorder bg-cardBg hover:bg-bgNormal text-bgHover hover:text-white flex items-center justify-center transition">
                <TbShoppingBagPlus className="text-lg" />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
