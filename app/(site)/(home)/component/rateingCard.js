import { Rate, Tooltip } from "antd";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa6";
import React from "react";

const RateingCard = ({ratings}) => {
    const { image, title, profession, rating, description } = ratings;
  return (
    <div className="group">
      <div className="flex flex-row justify-between items-center gap-4">
        <Rate allowHalf disabled defaultValue={rating} />
        <div><FaQuoteRight size={24} className="text-bgNormal"/></div>
      </div>
      <Tooltip title={description} className="text-base md:text-lg font-normal text-textNormal pt-3 pb-[30px] line-clamp-4 cursor-help">
        {description}
      </Tooltip>
      <div className="flex gap-[10px]">
        <div>
          <Image
            src={image}
            alt={title || "image"}
            width={1100}
            height={1100}
            className="w-[48px] h-[48px]"
          />
        </div>
        <div>
          <h1 className="text-base text-textNormal font-bold line-clamp-1">{title}</h1>
          <p className="pt-1 font-normal text-sm text-description">
            {profession}
          </p>
        </div>
      </div>
    </div>
  );
};
export default RateingCard;
