"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineDashboard } from "react-icons/md";
import { TbDots } from "react-icons/tb";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      title: "Dashboard",
      href: "/",
      icon: <MdOutlineDashboard className="text-2xl" />,
    },
  ];

  return (
    <nav className="w-full flex flex-col px-4 mt-5 font-['Plus_Jakarta_Sans']">
      <ul id="sidebarnav" className="text-gray-600 text-sm relative">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <li className="sidebar-item relative overflow-hidden" key={index}>
              <Link
                href={item.href}
                className={`sidebar-link group gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md w-full transition-all duration-300 z-10 ${
                  isActive
                    ? "text-[#006aaf]"
                    : "text-gray-500 hover:text-[#006aaf]"
                }`}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
              {/* Pseudo bg for hover effect */}
              <span className="absolute inset-0 -z-10 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out bg-[#e5f3fb] rounded-r-[24px]"></span>
            </li>
          );
        })}

        {/* Label Section */}
        <li className="text-xs font-bold mb-4 mt-6">
          <TbDots className="nav-small-cap-icon text-lg hidden text-center" />
          <span className="text-xs text-gray-400 font-semibold">APPS</span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
