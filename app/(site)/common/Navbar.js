"use client";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart, FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { Button } from "../../component/common/button";
import MiniCart from "../miniCart/page";
import { RiShoppingBag2Line } from "react-icons/ri";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path) =>
    pathname === path ? "text-bgHover" : "text-textNormal";
  return (
    <nav className="fixed top-0 w-full border-b border-[#E5E5E5] text-textNormal select-none lg:py-0 py-3 bg-[#FFFFFF] z-50">
      <div className=" relative ">
        <div className="flex justify-between items-center container">
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="logo"
              width={900}
              height={900}
              className="sm:w-[143px] w-[70px] sm:h-[58px] h-[30px]"
            />
          </Link>
          <div className={` hidden lg:block`}>
            <div>
              <ul className="flex items-center space-x-[30px] font-normal text-base">
                <li>
                  <Link href="/" className={`header_title ${isActive("/")}`}>
                    Home
                  </Link>
                </li>
                <li className="relative group">
                  <Link
                    href="/shop"
                    className={`flex items-center gap-x-1 header_title ${isActive(
                      "/shop"
                    )}`}
                  >
                    <span>Shop</span>
                    <FaAngleDown className=" group-hover:rotate-180" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`header_title ${isActive("/about")}`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={`header_title ${isActive("/blog")}`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`header_title ${isActive("/contact")}`}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center sm:space-x-[30px] space-x-[10px]">
            <div className="flex items-center sm:space-x-5 space-x-2 sm:text-2xl text-lg">
              <IoSearch className="header_action" />
              <FaRegHeart className="header_action" />
              <RiShoppingBag2Line className="header_action" />
            </div>
            <Button text={"Login"} href={"/login"} />
            <div className="lg:hidden text- sm:text-5xl text-3xl cursor-pointer">
              <HiOutlineMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
