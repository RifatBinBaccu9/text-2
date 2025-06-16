import { Button } from "@/app/component/common/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";

const ProductCard = ({ bestSellers }) => {
  const { id, image, title, price, discount, description } = bestSellers;

  return (
    <div className="group border border-cardBorder hover:border-bgNormal rounded-xl shadow-sm hover:shadow-md transition duration-300 bg-white">
      {/* Image & Hover Actions */}
      <div className="relative bg-cardBg px-4 py-6 sm:py-[55px] rounded-t-xl flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={900}
          height={900}
          className="object-contain w-full h-[120px] md:h-[160px] xl:h-[180px] transition-transform duration-300 group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-cardBg opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-t-xl z-10"></div>

        {/* Action icons */}
        <div className="absolute top-4 right-4 flex flex-col space-y-3 z-10">
          <Link href="/" className="product_card_icon" aria-label="Add to Favorites">
            <FaRegStar className="text-base sm:text-xl" />
          </Link>

          <Link href="/" className="product_card_icon" aria-label="Switch">
            <GoArrowSwitch className="text-base sm:text-xl" />
          </Link>

          <Link href={`/shop/${id}`} className="product_card_icon" aria-label="View Details">
            <IoEyeOutline className="text-base sm:text-xl" />
          </Link>
        </div>

        {/* Add to Cart button on hover */}
        <div className="absolute z-10 bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 hidden group-hover:block">
          <Button
            text="Add to Cart"
            href={`/shop/${id}`}
            className="!justify-center !py-2 !w-full !rounded-lg"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold font-jost text-textNormal hover:text-bgNormal transition cursor-pointer">
          {title}
        </h3>
        <p className="text-sm text-description font-jost mt-1 mb-3 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center gap-2 text-base font-medium font-jost">
          <span className="text-textNormal">৳{price}</span>
          <span className="text-description line-through text-sm">৳{discount}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
