"use client";
import Image from "next/image";
import Link from "next/link";
import { MdOutlinePhoneInTalk, MdOutlineMail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const information = [
  { title: "My Account", link: "/myAccount" },
  { title: "Login", link: "/login" },
  { title: "My Cart", link: "/myCart" },
  { title: "My Wishlist", link: "/myWishlist" },
  { title: "Checkout", link: "/checkout" },
]
const service = [
  { title: "About", link: "/about" },
  { title: "Careers", link: "/careers" },
  { title: "Delivery Information", link: "/deliveryInformation" },
  { title: "Terms & Conditions", link: "/terms-and-conditions" },
];
const peyment = [
  { image: "/Footer/visa.png" },
  { image: "/Footer/PayPal.png" },
  { image: "/Footer/Mastercard.png" },
  { image: "/Footer/GooglePay.png" },
  { image: "/Footer/Amex.png" },
];
const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-[50px]">
      <div className="container">
        <div className="lg:flex justify-between  w-full lg:gap-[100px] ">
          <div>
            <Image
              src="/Logo.png"
              alt="logo"
              width={900}
              height={900}
              className="w-[143px] h-[58px] mb-10"
            />
            <div className="flex flex-wrap lg:flex-col sm:flex-row lg:justify-start justify-between gap-6 mb-6 lg:mb-0">
              <p className="flex gap-2">
                <MdOutlinePhoneInTalk className=" w-6 h-6" />
                <span className="text-base  font-normal lg:w-[258px] w-full">
                  (704) 555-0127
                </span>
              </p>
              <p className="flex gap-2">
                <MdOutlineMail className=" w-6 h-6" />
                <span className="text-base  font-normal lg:w-[258px] w-full">
                  krist@example.com
                </span>
              </p>
              <p className="flex gap-2">
                <GrLocation className=" w-6 h-6" />
                <span className="text-base  font-normal lg:w-[258px] w-full">
                  3891 Ranchview Dr. Richardson, California 62639
                </span>
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-4 sm:justify-between justify-center lg:gap-0 gap-4">
            <div className="sm:col-span-1 col-span-2 text-base text-white">
              <h3 className="font-bold">Information</h3>
              <ul className="flex flex-col gap-4 font-normal mt-5">
                {information.map((info, idx) => (
                  <li key={idx}>
                    <Link href={info.link}>{info.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:col-span-1 col-span-2 text-base text-white">
              <h3 className="font-bold">Service</h3>
              <ul className="flex flex-col gap-4 font-normal mt-5">
                {service.map((service, idx) => (
                  <li key={idx}>
                    <Link href={service.link}>{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:col-span-1 col-span-4 sm:mt-0 mt-5">
              <h1 className="text-base font-bold">Subscribe</h1>
              <p className="py-5 font-normal">
                Enter your email below to be the first to know about new
                collections and product launches.
              </p>
              <form >
                <label
                  htmlFor="emailSub"
                  className="border border-white bg-black  flex items-center select-none py-3 px-4 rounded-lg"
                >
                  <HiOutlineMail className="w-6 h-6 cursor-pointer" />
                  <input
                    type="email"
                    id="emailSub"
                    placeholder="Your email"
                    className="text-base  font-normal outline-none  border-none bg-black w-full  px-[12px]"
                  />
                  <button type="submit">
                    <FaArrowRightLong className="w-5 h-5 cursor-pointer" />
                  </button>
                </label>
              </form>
            </div>
          </div>
        </div>
        <div className="container flex sm:flex-row flex-col sm:justify-between justify-center border-t border-[#424146] py-5 lg:mt-[50px] mt-8">
          <div className="flex items-center justify-center gap-3">
            {peyment.map((item, idx) => (
              <Image
                key={idx}
                src={item.image}
                alt="peyment card"
                width={900}
                height={900}
                className="md:w-[36px] w-[25px] md:h-6 h-4"
              />
            ))}
          </div>

          <div className="text-base font-normal text-center sm:pt-0 pt-5">
              &copy; 2023 Shop All Rights are reserved️.
          </div>

          <div className="sm:flex md:text-2xl items-center text-lg gap-5 hidden ">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
