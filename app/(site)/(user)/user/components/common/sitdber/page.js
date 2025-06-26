"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Icon Imports
import {
  LuUserRound,
  LuHeart,
  LuMapPin,
  LuCreditCard,
  LuBell,
  LuSettings,
} from "react-icons/lu";
import { IoHelpCircleOutline } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsBox } from "react-icons/bs";
import { PiShoppingCart } from "react-icons/pi";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="border border-cardBorder w-[350px] h-fit bg-white rounded-md flex flex-col justify-between">
      {/* Profile Info */}
      <div>
        <div className="flex items-center gap-4 p-5 shadow-sm shadow-black">
          <Image
            src="/rifat_mias.jpg"
            alt="Profile picture of Robert Fox"
            width={1000}
            height={1000}
            priority
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-normal font-jost text-[#131118]">Hello 👋</h3>
            <p className="text-lg font-bold font-jost text-[#131118]">Robert Fox</p>
          </div>
        </div>

        <hr className="bg-[#A4A1AA33] h-[1px] border-0" />

        {/* Navigation Items */}
        <div className="my-5">
          {data.map((item, idx) => {
            const isActive = pathname === item.link;
            return (
              <Link href={item.link} key={idx}>
                <div
                  className={`flex items-center gap-3 py-4 px-5 cursor-pointer transition-colors duration-200
                    ${
                      isActive
                        ? "bg-[#FFC0CB] text-[#D90452] font-bold"
                        : "text-[#131118] hover:text-[#FF4D6D] hover:bg-[#FFF0F5]"
                    }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-base">{item.title}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Fixed Bottom Section */}
      <div className="border-t pt-3 pb-5">
        <Link
          href="/user/help"
          className="transition duration-300 w-full flex items-center gap-2 rounded-md mx-5 p-[14px] hover:text-[#FF4D6D]"
        >
          <span className="text-xl">
            <IoHelpCircleOutline />
          </span>
          <span className="text-sm font-semibold">Help & Support</span>
        </Link>
        <Link
          href="/logout"
          className="transition duration-300 w-full flex items-center gap-2 rounded-md mx-5 p-[14px] hover:text-[#FF4D6D]"
        >
          <span className="text-xl">
            <RiLogoutCircleRLine />
          </span>
          <span className="text-sm font-semibold">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;

// Sidebar Menu Items
const data = [
  { title: "Profile", link: "/user", icon: <LuUserRound /> },
  { title: "My Orders", link: "/user1", icon: <BsBox /> },
  { title: "My Wishlists", link: "/user2", icon: <LuHeart /> },
  { title: "Check Out", link: "/user/checkout", icon: <PiShoppingCart /> },
  { title: "Manage Addresses", link: "/user4", icon: <LuMapPin /> },
  { title: "Saved Cards", link: "/user5", icon: <LuCreditCard /> },
  { title: "Notifications", link: "/user6", icon: <LuBell /> },
  { title: "Settings", link: "/user8", icon: <LuSettings /> },
];
