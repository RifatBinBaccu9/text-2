"use client";
import { Tooltip } from "antd";
import React from "react";

const ServiceCard = ({ service }) => {
  const { imgIcon, title, paragraph } = service;

  return (
    <div className="flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-md border border-cardBorder hover:shadow-lg hover:border-bgNormal transition duration-300 group">
      <div className="text-4xl text-bgNormal group-hover:scale-110 transition-transform duration-300">
        {imgIcon}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-textNormal group-hover:text-bgHover">
        {title}
      </h3>
      <Tooltip title={paragraph} className="mt-2 text-sm cursor-help text-description leading-relaxed line-clamp-2 h-10">
        {paragraph}
      </Tooltip>
    </div>
  );
};

export default ServiceCard;
