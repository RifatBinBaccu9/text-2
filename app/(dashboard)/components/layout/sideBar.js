"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  TbHelpCircle,
  TbMailOpened,
  TbReportAnalytics,
  TbShoppingCartCheck,
} from "react-icons/tb";
import {
  FaBlog,
  FaBoxOpen,
  FaCog,
  FaCreditCard,
  FaEnvelopeOpenText,
  FaFileAlt,
  FaSms,
  FaTshirt,
  FaUsers,
  FaWallet,
  FaWrench,
} from "react-icons/fa";
import {
  MdAddCard,
  MdArticle,
  MdHistory,
  MdOutlineContactMail,
  MdOutlineLocalShipping,
  MdOutlinePayments,
  MdOutlinePrivacyTip,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import {
  BiCategoryAlt,
  BiSolidCoupon,
  BiSolidOffer,
  BiTag,
  BiTrendingUp,
  BiUserVoice,
} from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiFileList3Line, RiLogoutCircleRLine } from "react-icons/ri";
import { AiOutlineTag } from "react-icons/ai";
import { IoIosArrowForward, IoMdAnalytics } from "react-icons/io";
import { PiArrowBendDoubleUpRightFill } from "react-icons/pi";
import { LiaLanguageSolid } from "react-icons/lia";
import { BsStars } from "react-icons/bs";
import { LuBadgeHelp } from "react-icons/lu";

const SideBar = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="z-40">
      <div className="w-[260px] bg-white text-[#111111] h-screen flex flex-col">
        {/* Logo Section */}
        <div className="flex justify-center items-center py-[14.5px]  border-b">
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

        {/* Sidebar Menu */}
        <ul
          id="sidebarnav"
          className="text-gray-600 text-sm relative mr-4 overflow-y-scroll scrollbar-hide"
        >
          {siteData.map((item, index) => {
            if (item.menu) {
              return (
                <p
                  key={index}
                  className="text-sm font-bold text-gray-400 mb-4 mt-6 px-3"
                >
                  {item.menu}
                </p>
              );
            }

            if (item.submenu) {
              const isOpen = openDropdown === item.name;
              const isSubmenuActive = item.submenu.some((sub) =>
                pathname.startsWith(sub.link)
              );

              return (
                <li key={index} className="sidebar-item relative">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`sidebar-link group py-2.5 my-1 text-base flex items-center justify-between relative rounded-md w-full transition-all duration-300 z-10 px-3 ${isSubmenuActive
                      ? "text-[#006aaf] font-semibold active"
                      : "text-textNormal hover:text-[#006aaf] font-medium"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                    <span
                      className={`text-lg transition-all duration-300 ${isOpen && "rotate-90"
                        }`}
                    >
                      {item.icons}
                    </span>
                  </button>

                  {/* Submenu */}
                  {isOpen && (
                    <ul className="pl-8 mt-2 space-y-1">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.link}
                            className={`sidebar-link block py-2 rounded-md text-sm ${pathname === subItem.link
                              ? "text-[#006aaf] font-semibold active"
                              : "text-textNormal hover:text-[#006aaf] font-medium"
                              }`}
                          >
                            <div className="flex items-center gap-2">
                              {subItem.icon}
                              <span>{subItem.title}</span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            if (item.title) {
              return (
                <li key={index} className="sidebar-item relative">
                  <Link
                    href={item.link}
                    className={`sidebar-link group gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md w-full transition-all duration-300 z-10 px-4 ${pathname === item.link
                      ? "text-[#006aaf] font-semibold active"
                      : "text-textNormal hover:text-[#006aaf] font-medium"
                      }`}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            }

            return null;
          })}
        </ul>

        {/* Bottom Section */}
        <div className="mt-auto border-t py-3">
          {/* <Link
            href="/settings"
            className="transition duration-300 w-full flex items-center gap-2 rounded-md p-[14px] hover:text-[#3F69F7]"
          >
            <span className="text-xl">
              <MdOutlinePrivacyTip />
            </span>
            <span className="text-sm font-semibold">Privacy & Policies</span>
          </Link> */}
          <Link
            href="/logout"
            className="transition duration-300 w-full flex items-center gap-2 rounded-md p-[14px] hover:text-[#3F69F7]"
          >
            <span className="text-xl">
              <RiLogoutCircleRLine />
            </span>
            <span className="text-sm font-semibold">Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

const siteData = [
  // { menu: "Home" },
  {
    title: "Dashboard",
    link: "/admin",
    icon: <MdOutlineSpaceDashboard />,
  },

  // { menu: "User Management" },
  { title: "Customers", link: "/admin/customer", icon: <FaUsers /> },
  { title: "Vendors", link: "/admin/vendors", icon: <BiUserVoice /> },

  // { menu: "Product Management" },
  {
    name: "Product Management",
    icon: <FaBoxOpen />,
    icons: <IoIosArrowForward  />,
    submenu: [
      { title: "Products", link: "/admin/product", icon: <FaTshirt /> },
      { title: "Brands", link: "/admin/inventory", icon: <AiOutlineTag /> },
      { title: "Categories", link: "/admin/categorie", icon: <BiCategoryAlt /> },
      { title: "Orders", link: "/admin/variants", icon: <TbShoppingCartCheck /> },
    ],
  },
  // { menu: "Payment Management" },
  {
    name: "Withdraw Management",
    icon: <FaCreditCard />,
    icons: <IoIosArrowForward  />,
    submenu: [
      {
        title: "Transaction History",
        link: "/admin/transaction-history",
        icon: <MdOutlinePayments />,
      },
      {
        title: "Withdraw Method",
        link: "/admin/withdraw-method",
        icon: <MdAddCard />,
      },
      {
        title: "Withdraw History",
        link: "/admin/withdraw-history",
        icon: <MdHistory />,
      },
    ],
  },
  // { menu: "Blog Management" },
  // { menu: "Blog Management" },
  {
    name: "Blog Management",
    icon: <FaBlog />, // Main Blogs Icon
    icons: <IoIosArrowForward  />,
    submenu: [
      {
        title: "Tags",
        link: "/admin/blog-tags",
        icon: <BiTag />,
      },
      {
        title: "Categories",
        link: "/admin/blog-categories",
        icon: <BiCategoryAlt />,
      },
      {
        title: "Blogs",
        link: "/admin/blogs",
        icon: <MdArticle />,
      },
    ],
  },
  
  // { menu: "Offer Management" },
  { title: "Coupons", link: "/admin/coupons", icon: <BiSolidCoupon /> },
  // { title: "Offers", link: "/admin/coupons", icon: <BiSolidOffer /> },

  // { menu: "Setting Management" },
  {
    name: "Setting Management",
    icon: <FaWrench />,
    icons: <IoIosArrowForward  />,
    submenu: [
      {
        title: "Site Setting",
        link: "/admin/site-setting",
        icon: <FaCog />,
      },
      {
        title: "Page Setting",
        link: "/admin/page-setting",
        icon: <FaFileAlt />,
      },
      {
        title: "Email Setting",
        link: "/admin/email-setting",
        icon: <FaEnvelopeOpenText />,
      },
      {
        title: "SMS Setting",
        link: "/admin/sms-setting",
        icon: <FaSms />,
      },
      {
        title: "Payment Setting",
        link: "/admin/sms-setting",
        icon: <MdAddCard />,
      },
    ],
  },

  // Others
  // { menu: "Others" },
  {
    title: "Testimonial",
    link: "/admin/testimonial",
    icon: <BsStars />,
  },
  {
    title: "Contacts",
    link: "/admin/contacts",
    icon: <MdOutlineContactMail />,
  },
  {
    title: "NewsLetter",
    link: "/admin/newsletter",
    icon: <TbMailOpened />,
  },
  {
    title: "FAQ",
    link: "/admin/faq",
    icon: <LuBadgeHelp />,
  },
  { title: "Languages", link: "/admin/languages", icon: <LiaLanguageSolid /> },
];

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   TbMenu3,
//   TbReportAnalytics,
//   TbShoppingCartCheck,
//   TbWorld,
// } from "react-icons/tb";
// import { FaBoxOpen, FaRegImages, FaTshirt, FaUsers } from "react-icons/fa";
// import { MdOutlineLocalShipping, MdOutlinePayments, MdOutlineSpaceDashboard } from "react-icons/md";
// import { BiCategoryAlt, BiSolidCoupon, BiTrendingUp, BiUserVoice } from "react-icons/bi";
// import { IoSettingsOutline } from "react-icons/io5";
// import { RiFileList3Line, RiLogoutCircleRLine } from "react-icons/ri";
// import { AiOutlineTag } from "react-icons/ai";
// import { IoMdAnalytics } from "react-icons/io";
// import { PiArrowBendDoubleUpRightFill } from "react-icons/pi";

// const SideBar = () => {
//   const pathname = usePathname();
//   const [openDropdown, setOpenDropdown] = useState(null); // store open submenu name

//   const toggleDropdown = (name) => {
//     setOpenDropdown(openDropdown === name ? null : name);
//   };

//   return (
//     <div className="z-40">
//       <div className="w-[260px] bg-white text-[#111111] h-screen flex flex-col">
//         {/* Logo Section */}
//         <div className="flex justify-center items-center h-[70px] border-b shrink-0">
//           <Link href="/">
//             <Image
//               src="/Logo.png"
//               alt="logo"
//               width={900}
//               height={900}
//               className="w-[120px] h-10 mx-auto"
//             />
//           </Link>
//         </div>

//         {/* Sidebar Menu */}
//         <ul id="sidebarnav" className="text-gray-600 text-sm relative mr-4 mt-4 overflow-y-scroll scrollbar-hide">
//           {siteData.map((item, index) => {
//             if (item.menu) {
//               // Menu heading
//               return (
//                 <p
//                   key={index}
//                   className="text-sm font-bold text-gray-400 mb-4 mt-6 px-2"
//                 >
//                   {item.menu}
//                 </p>
//               );
//             }

//             if (item.submenu) {
//               // Dropdown parent item
//               const isOpen = openDropdown === item.name;

//               return (
//                 <li key={index} className="sidebar-item relative">
//                   <button
//                     onClick={() => toggleDropdown(item.name)}
//                     className={`sidebar-link group py-2.5 my-1 text-base flex items-center justify-between relative rounded-md w-full transition-all duration-300 z-10 px-3 ${pathname.startsWith(item.submenu[0].link.split("/admin")[1]) ||
//                         pathname.startsWith(item.link)
//                         ? "text-[#006aaf] font-bold active"
//                         : "text-textNormal hover:text-[#006aaf] font-medium"
//                       }`}
//                   >
//                     <div className="flex items-center gap-3">
//                       {item.icon}
//                       <span>{item.name}</span>
//                     </div>
//                     <span
//                       className={`text-lg transition-all duration-300 ${isOpen && "rotate-90 "
//                         }`}
//                     >
//                       {item.icons}
//                     </span>
//                   </button>

//                   {/* Submenu */}
//                   {isOpen && (
//                     <ul className="pl-8 mt-2 space-y-1">
//                       {item.submenu.map((subItem, subIndex) => (
//                         <li key={subIndex}>
//                           <Link
//                             href={subItem.link}
//                             className={`sidebar-link block py-2 rounded-md text-sm ${pathname === subItem.link
//                                 ? "text-[#006aaf] font-semibold active"
//                                 : "text-textNormal hover:text-[#006aaf] font-normal"
//                               }`}
//                           >
//                             <div className="flex items-center gap-2">
//                               {subItem.icon}
//                               <span>{subItem.title}</span>
//                             </div>
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               );
//             }

//             // Normal link item with title
//             if (item.title) {
//               return (
//                 <li key={index} className="sidebar-item relative">
//                   <Link
//                     href={item.link}
//                     className={`sidebar-link group gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md w-full transition-all duration-300 z-10 px-4 ${pathname === item.link
//                         ? "text-[#006aaf] font-bold active"
//                         : "text-textNormal hover:text-[#006aaf] font-medium"
//                       }`}
//                   >
//                     {item.icon}
//                     <span>{item.title}</span>
//                   </Link>
//                 </li>
//               );
//             }

//             // For items with just name (without submenu)
//             if (item.name) {
//               return (
//                 <li key={index} className="sidebar-item relative">
//                   <Link
//                     href={item.link}
//                     className={`sidebar-link group py-2.5 my-1 text-base flex items-center relative rounded-md w-full transition-all duration-300 z-10 pl-4 pr-5 ${pathname === item.link
//                         ? "text-[#006aaf] font-semibold active"
//                         : "text-gray-500 hover:text-[#006aaf]"
//                       }`}
//                   >
//                     <div className="flex flex-row justify-between items-center w-full">
//                       <div className="flex flex-row items-center gap-3">
//                         {item.icon}
//                         <span>{item.name}</span>
//                       </div>
//                       <div
//                         className={`text-lg ${pathname === item.link
//                             ? "rotate-90"
//                             : "group-hover:rotate-90 transition-all duration-300"
//                           }`}
//                       >
//                         {item.icons}
//                       </div>
//                     </div>
//                   </Link>
//                 </li>
//               );
//             }

//             return null;
//           })}
//         </ul>

//         {/* Bottom Section */}
//         <div className="mt-auto border-t py-3">
//           <Link
//             href="/settings"
//             className="transition duration-300 w-full flex items-center gap-2 rounded-md  p-[14px] hover:text-[#3F69F7]"
//           >
//             <span className="text-xl">
//               <IoSettingsOutline />
//             </span>
//             <span className="text-sm font-semibold">Setting</span>
//           </Link>
//           <Link
//             href="/logout"
//             className="transition duration-300 w-full flex items-center gap-2 rounded-md  p-[14px] hover:text-[#3F69F7]"
//           >
//             <span className="text-xl">
//               <RiLogoutCircleRLine />
//             </span>
//             <span className="text-sm font-semibold">Logout</span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideBar;

// const siteData = [
//   { menu: "Home" },
//   { title: "Dashboard", link: "/admin", icon: <MdOutlineSpaceDashboard /> },

//   // User Management
//   { menu: "User Management" },
//   { title: "Customers", link: "/admin/customer", icon: <FaUsers /> },
//   { title: "Vendors", link: "/admin/vendors", icon: <BiUserVoice /> },

//   // Product Management with submenu under Products
//   { menu: "Product & Inventory" },
//   {
//     name: "Product Management",
//     icon: <FaBoxOpen />,
//     icons: <PiArrowBendDoubleUpRightFill />,
//     submenu: [
//       { title: "Products", link: "/admin/product", icon: <FaTshirt /> },
//       { title: "Brands", link: "/admin/inventory", icon: <AiOutlineTag /> },
//       { title: "Categories", link: "/admin/categorie", icon: <BiCategoryAlt /> },
//       { title: "Orders", link: "/admin/variants", icon: <TbShoppingCartCheck /> },
//     ],
//   },

//   // Orders & Sales
//   { menu: "Orders & Sales" },
//   {
//     name: "Orders Management",
//     icon: <TbShoppingCartCheck />,
//     icons: <PiArrowBendDoubleUpRightFill />,
//     submenu: [
//       { title: "Orders", link: "/admin/orders", icon: <TbShoppingCartCheck /> },
//       { title: "Invoices", link: "/admin/invoices", icon: <RiFileList3Line /> },
//       { title: "Payments", link: "/admin/payments", icon: <MdOutlinePayments /> },
//       { title: "Shipping", link: "/admin/shipping", icon: <MdOutlineLocalShipping /> },
//     ],
//   },
//   // Marketing
//   { title: "Promotions", link: "/admin/promotions", icon: <BiTrendingUp /> },
//   { title: "Coupons", link: "/admin/coupons", icon: <BiSolidCoupon /> },

//   // Reports & Analytics
//   { title: "Reports", link: "/admin/reports", icon: <TbReportAnalytics /> },
//   { title: "Analytics", link: "/admin/analytics", icon: <IoMdAnalytics /> },

//   // Internationalization
//   { title: "Languages", link: "/admin/languages", icon: <TbWorld /> },

//   // Permissions
//   { title: "Admin Roles", link: "/admin/permissions", icon: <TbMenu3 /> },
// ];
