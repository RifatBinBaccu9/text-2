"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const InstSrorCard = ({ instStories }) => {
  const { image, InstagramLink } = instStories;

  return (
    <Link
      href={InstagramLink}
      target="_blank"
      className="group relative overflow-hidden h-[160px] sm:h-[200px] md:h-[180px] lg:h-[230px] xl:h-[300px] rounded-2xl shadow hover:shadow-lg transition-all duration-300"
    >
      <Image
        src={image}
        alt="Instagram Story"
        width={300}
        height={400}
        className="w-full h-full group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
        <FaInstagram className="text-bgNormal text-3xl" />
      </div>
    </Link>
  );
};

export default InstSrorCard;
