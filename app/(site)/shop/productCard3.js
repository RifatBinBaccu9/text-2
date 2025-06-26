"use client";
import { IoIosRemove } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import { IoEyeOutline } from "react-icons/io5";

const ProductCard3 = ({ bestSellers }) => {
    const { id, image, title, price, discount, description, sub_description } =
        bestSellers;
    return (
        <div>
            <div className="flex flex-row justify-start w-full gap-6 group">
                <div className="bg-white w-[120px] h-[90px]  relative rounded-md border border-bgNormal hover:border-bgHover">
                    <Image
                        src={image}
                        alt="image"
                        width={900}
                        height={900}
                        className="w-[120px] h-[90px] rounded-md p-1"
                    />
                    <div className="absolute inset-0 group-hover:bg-textNormal group-hover:duration-500 opacity-30 rounded-md"></div>
                    <div className="absolute top-1/3 left-1/3">
                            <Link
                                href={`/shop/${id}`}
                                className="p-2 border-cardBorder bg-cardBg hover:bg-bgNormal text-bgHover hover:text-white rounded-full shadow-md cursor-pointer group-hover:block hidden h-fit transition-transform duration-300"
                            >
                                <IoEyeOutline className="text-base" />
                            </Link>
                    </div>
                </div>

                <div className="flex flex-col justify-center w-full text-start">
                    <div className="flex flex-row justify-between items-center">
                        <h3 className="text-base font-jost font-bold text-textNormal hover:text-bgNormal line-clamp-1">{title}</h3>
                        <span className="text-xl text-bgNormal hover:text-bgHover cursor-pointer"><AiOutlineDelete /></span>
                    </div>
                    <Tooltip title={description} className="text-description text-base font-jost font-normal py-[5px] line-clamp-2 cursor-help">
                        {description}
                    </Tooltip>
                    <div className="flex flex-row justify-between items-center gap-4">
                        <div className="text-base font-jost font-normal flex gap-2">
                            <span className="text-textNormal">{price}</span>
                            <span className="text-description line-through">{discount}</span>
                        </div>

                        <div className="flex flex-row items-center w-fit border border-cardBorder hover:border-bgNormal rounded-md p-1 gap-2">
                            <span className="text-lg hover:text-bgNormal cursor-pointer"><IoIosRemove /></span>
                            <span className="text-lg">1</span>
                            <span className="text-lg hover:text-bgNormal cursor-pointer"><IoIosAdd /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-textHover my-3 sm:my-4"></div>
        </div>
    );
};

export default ProductCard3;
