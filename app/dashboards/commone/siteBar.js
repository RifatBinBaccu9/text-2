"use client";
import { useMyContext } from "@/app/context/Context ";
import Image from "next/image";
import Link from "next/link";
import { TbMenu3 } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";

const siteData = [
  { title: "Dashboard", link: "/dashboard", icon: <RxDashboard /> },
  { title: "Products", link: "/products", icon: <TbMenu3 /> },
  { title: "Categories", link: "/categories", icon: <TbMenu3 /> },
  { title: "Suppliers", link: "/suppliers", icon: <TbMenu3 /> },
  { title: "Orders", link: "/orders", icon: <TbMenu3 /> },
  { title: "Inventory", link: "/inventory", icon: <TbMenu3 /> },
  { title: "Invoices", link: "/invoices", icon: <TbMenu3 /> },
  { title: "Payments", link: "/payments", icon: <TbMenu3 /> },
  { title: "Shipping", link: "/shipping", icon: <TbMenu3 /> },
  { title: "Users", link: "/users", icon: <TbMenu3 /> },
  { title: "Roles", link: "/roles", icon: <TbMenu3 /> },
  { title: "Permissions", link: "/permissions", icon: <TbMenu3 /> },
  { title: "Customers", link: "/customers" },
  { title: "Messages", link: "/messages" },
  { title: "Reports", link: "/reports" },
  { title: "Analytics", link: "/analytics" },
  { title: "Settings", link: "/settings" },
  { title: "Logout", link: "/logout" },
];
const SiteBar = () => {
  const { sitebar, setSitebar } = useMyContext(false);
  console.log(sitebar);

  return (
    <div>
      <div className={`w-[240px] font-nunito bg-bgGrea py-6 ${sitebar && "hidden"}`}>
        <div className=" justify-self-center">
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="logo"
              width={900}
              height={900}
              className="w-[120px] h-10 mx-auto"
            />
          </Link>
        </div>

        <div className="my-8">
          {siteData.map((item) => (
            <ul
              key={item.title}
              className="flex flex-row items-center group"
            >
              <li className="w-1 h-[50px] group-hover:bg-bgButton transition duration-300 rounded-tr-[4px] rounded-br-[4px]"></li>
              <Link
                href={item.link}
                className="text-sm font-semibold font-nunito text-white group-hover:bg-bgButton transition duration-300 w-full h-[50px] flex items-center rounded-md mr-6 ml-5 pl-8"
              >
                {item.title}
              </Link>
            </ul>
          ))}
        </div>
      </div>

      <div>
        <div className={`w-[85px] flex flex-col items-center bg-[#273142] ${!sitebar && "hidden"}`}>
          <div className="h-[70px] flex justify-center items-center">
          <TbMenu3
            onClick={(e) => setSitebar(pre => !pre)}
            className={`text-[22px] font-medium text-white cursor-pointer ${!sitebar && "hidden"}`}
            />
          </div>

          <div className="w-full">
            {
              siteData.map((item) => (
                <ul
                  key={item.title}
                  className="flex flex-row justify-between group"
                >
                  <li className="w-1 h-[50px] group-hover:bg-bgButton transition duration-300 rounded-tr-[4px] rounded-br-[4px]"></li>
                  <div className="w-full h-[50px] flex items-center justify-end text-2xl text-white group-hover:text-bgButton transition duration-300 cursor-pointer mr-8">
                  <Link
                    href={item.link}
                  >
                    {item.icon}
                  </Link>
                  </div>
                </ul>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteBar;
