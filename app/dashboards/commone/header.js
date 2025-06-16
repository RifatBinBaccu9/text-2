"use client";
import { Search } from "@/app/component/from/search";
import { Dropdown } from "antd";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenuUnfold2Line } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { useMyContext } from "@/app/context/Context ";

const items = [
  {
    key: '1',
    label: (
      <a  rel="noopener noreferrer" href="#">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a  rel="noopener noreferrer" href="#">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a  rel="noopener noreferrer" href="#">
        3rd menu item
      </a>
    ),
  },
];
const Header = () => {
  const {sitebar, setSitebar} = useMyContext(false);
  return (
    <div className="flex flex-row items-center justify-between py-5 px-8 bg-[#273142] h-[70px]">
      <div className="flex items-center gap-6">
        <RiMenuUnfold2Line onClick={(e) => setSitebar(pre => !pre)} className={`text-[22px] font-medium text-white cursor-pointer ${sitebar && "hidden"}`} />
        <Search classInput={"!w-[388px]"} placeholder={"Search"} />
      </div>

      <div className="flex flex-row items-center gap-6">
        <div className="flex items-center">
          <div className="mr-6">
          <IoMdNotifications className="text-2xl text-[#3D42DF] cursor-pointer"/>
          </div>
          <div>
            <Dropdown menu={{ items }} placement="bottom">
               <div className="flex items-center  text-[#F2F2F2] cursor-pointer">
                <TbWorld className="text-xl"/>
                <span className="text-sm font-nunito font-semibold mx-2">English</span>
                <IoIosArrowDown className="text-base"/>
               </div>
            </Dropdown>
          </div>
        </div>

        <div className="flex items-center cursor-pointer">
          <img
            src="/rifat_mias.jpg"
            alt="profile"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
          <div className="ml-4 mr-4">
            <p className="text-sm font-bold font-nunito text-white">MD. Rifat Mia</p>
            <p className="text-xs font-semibold font-nunito text-white">
              Admin
            </p>
          </div>
          <div className="p-1 rounded-full border border-white">
            <IoIosArrowDown className="text-base text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
