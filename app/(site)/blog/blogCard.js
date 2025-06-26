import { Button } from "@/app/component/common/button";
import { Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdArrowForward, MdOutlineDateRange, MdOutlineTextsms } from "react-icons/md";

const BlogCard = ({cardList}) => {
    const { id, image, name, date, dis, title, sms } = cardList;
  return (
    <div className="bg-cardBg hover:bg-opacity-50 bg-opacity-30 border border-cardBorder hover:border-bgNormal p-6 rounded-md">
      <div className="w-full rounded-md h-[280px]">
        <Image
          src={image}
          alt="image"
          width={900}
          height={900}
          className="w-full h-full rounded-md"
        />
      </div>
      <div>
        <div className="flex flex-row items-center justify-between mt-6">
          <span className="flex flex-row items-center gap-1">
            <FaRegUserCircle className="text-bgNormal" />
            <Tooltip title={name}>
              <span className=" line-clamp-1">{name}</span>
            </Tooltip>
          </span>
          <span className="flex flex-row items-center gap-1">
            <MdOutlineDateRange className="text-bgNormal" />
            <Tooltip title={date}>
              <span className=" line-clamp-1">{date}</span>
            </Tooltip>
          </span>
          <span className="flex flex-row items-center gap-1">
            <MdOutlineTextsms className="text-bgNormal" />
            <span>{sms}</span>
          </span>
        </div>
        <Tooltip title={title}>
          <h1 className=" text-lg font-medium mt-2 mb-3 line-clamp-1">
            <Link href={`/blog/${id}`} className="hover:text-bgNormal">{title}</Link>
          </h1>
        </Tooltip>
        <p className="text-base font-normal text-description mb-6 line-clamp-2">
          {dis}
        </p>
        <Button href={`/blog/${id}`} text={"Read more"} icon={<MdArrowForward />} />
        {/* <Link
          href={`/blog/${id}`}
          aria-label={`Read more about ${title}`}
          className="w-[162px] h-[48px] px-6 py-3 border border-[#174A9B] text-[#174A9B] hover:text-white hover:bg-[#174A9B] rounded-md flex items-center justify-center gap-2 transition-all duration-200"
        >
          <span className="text-sm font-bold">Read more</span>
          <MdArrowForward className="text-xl" />
        </Link> */}
      </div>
    </div>
  );
};

export default BlogCard;
