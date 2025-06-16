"use client";
import Breadcrumb from "@/app/component/common/breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { BsCheckAll } from "react-icons/bs";
import Services from "../(home)/component/services";

const Story = () => {
  const page = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
  ];
  const services = [
     { title: "24/7 dedicated customer support." },
     { title: "Pure cumin supplied by 500+ trusted farmers." },
     { title: "50+ sales centers across the country." },
     { title: " Over 1 million satisfied customers." },
  ];
  return (
    <div className="header_top">
      <Breadcrumb title={"About Us"} subtitle={"Home"} page={page} />
      <div className="container my-8 md:my-[72px]">
        <div className=" flex flex-col-reverse lg:flex-row justify-between items-center gap-6 lg:gap-10 xl:gap-[136px]">
          <div className="w-full lg:w-[536px]">
            <Link
              href={"#"}
              className="text-sm font-semibold px-4 py-2 bg-bulu text-white rounded-sm"
            >
              WHO WE ARE
            </Link>
            <h1
              className="text-2xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold mt-10 mb-6"
            >
              Your Trusted Source for Pure Cumin – Premium Quality Delivered
              with Ease!
            </h1>
            <p className="text-base text-[#475156] font-normal mt-6 mb-[32px]">
              We source the finest pure cumin directly from farms, known for its
              exceptional aroma and flavor. Our cumin is 100% pure and hygienic,
              enhancing both the taste and nutrition of your cooking.
            </p>
            <ul>
              {
                services.map((item, index) => (
                  <li key={index} className="flex flex-row items-center mb-4 gap-3">
                    <BsCheckAll className="w-6 h-6 text-bulu" />
                    <span className="text-base font-normal">{item.title}</span>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="w-full lg:w-[648px] h-[300px] lg:h-[450px] px-0 sm:px-6 md:px-8 lg:px-0">
            <Image
              src={"/login.jpeg"}
              alt="about cumin"
              width={648}
              height={536}
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
        <Services />
      </div>
    </div>
  );
};

export default Story;
