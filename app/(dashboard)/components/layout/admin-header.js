"use client";

import { Search } from "@/app/component/from/search";
import { Dropdown, MenuProps } from "antd";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";
import { GoMoon } from "react-icons/go";
import { IoSunnyOutline } from "react-icons/io5";
import { FiLogOut, FiUser, FiSettings } from "react-icons/fi";
import Link from "next/link";

const languageItems = [
  { key: "1", label: <a href="#">English</a> },
  { key: "2", label: <a href="#">বাংলা</a> },
];

const profileItems = [
  {
    key: "1",
    label: (
      <Link href="/profile">
        <div className="flex items-center gap-2">
          <FiUser /> <span>Profile</span>
        </div>
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link href="/settings">
        <div className="flex items-center gap-2">
          <FiSettings /> <span>Settings</span>
        </div>
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link href="/logout">
        <div className="flex items-center gap-2 text-red-500">
          <FiLogOut /> <span>Logout</span>
        </div>
      </Link>
    ),
  },
];

const AdminHeader = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
    else setDarkMode(false);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-[#1f1f1f] z-10 shadow-sm">
      <div className="flex flex-row items-center justify-between py-5 px-8 h-[70px]">
        {/* Search */}
        <div className="flex items-center gap-6">
          <Search classInput="!w-[388px]" placeholder="Search" />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Theme + Notification */}
          <div className="flex items-center gap-4">
            <div onClick={() => setDarkMode(!darkMode)} className="cursor-pointer">
              {darkMode ? (
                <GoMoon className="text-2xl text-bgNormal" />
              ) : (
                <IoSunnyOutline className="text-2xl text-textNormal" />
              )}
            </div>
            <IoMdNotifications className="text-2xl text-[#3F69F7] cursor-pointer" />
          </div>

          {/* Language Dropdown */}
          <Dropdown menu={{ items: languageItems }} placement="bottom">
            <div className="flex items-center text-gray-800 dark:text-gray-200 cursor-pointer">
              <TbWorld className="text-xl" />
              <span className="text-sm font-nunito font-semibold mx-2">English</span>
              <IoIosArrowDown className="text-base" />
            </div>
          </Dropdown>

          {/* Profile Dropdown */}
          <Dropdown menu={{ items: profileItems }} placement="bottomRight" trigger={["click"]}>
            <div className="flex items-center cursor-pointer">
              <Image
                src="/rifat_mias.jpg"
                alt="profile"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="ml-4 mr-4 text-left">
                <p className="text-sm font-bold font-nunito text-gray-800 dark:text-gray-200">
                  MD. Rifat Mia
                </p>
                <p className="text-xs font-semibold font-nunito text-gray-600 dark:text-gray-400">
                  Admin
                </p>
              </div>
              <div className="p-1 rounded-full border border-gray-300 dark:border-bgNormal">
                <IoIosArrowDown className="text-base text-gray-800 dark:text-bgNormal" />
              </div>
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
