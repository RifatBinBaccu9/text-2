"use client";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart, FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { Button } from "../../component/common/button";
import { RiShoppingBag2Line } from "react-icons/ri";
import { useState } from "react";
import { Drawer, Form, Modal } from "antd";
import FormInput from "@/app/component/from/input";
import ProductCard3 from "../shop/productCard3";
import { IoIosLogOut } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";
import { LuBadgeInfo } from "react-icons/lu";
import { FaBlog } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { LuBadgeHelp } from "react-icons/lu";
import { TbShoppingCartCheck } from "react-icons/tb";
import { CiShoppingCart } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";

// Mock product data
const bestSeller = [
  {
    id: 2,
    image: "/product2.png",
    title: "Allen Solly",
    description: "Women Textured Handheld Bag",
    price: 150,
    discount: "$5",
    categoryItem: "Men",
    color: "Red",
    sub_description:
      "Engineered for performance, these running shoes feature cushioned soles and breathable mesh. Ideal for daily workouts, jogging, or a sporty lifestyle, they provide exceptional comfort with every step. The sleek design enhances mobility while ensuring your feet stay cool and supported during intense physical activities.",
  },
  {
    id: 3,
    image: "/product3.png",
    title: "Louis Philippe Sport",
    description: "Polo Collar T-Shirt",
    price: 130,
    discount: "$15",
    categoryItem: "Women",
    color: "Red",
    sub_description:
      "Made with breathable fabric and a smart polo design, this t-shirt delivers effortless style. It pairs well with jeans or chinos for a laid-back yet polished look. Whether you're at a sports game or having a casual day out, this polo t-shirt adds a smart touch to your appearance. It's a wardrobe staple that blends comfort with versatility.",
  },
  {
    id: 4,
    image: "/product4.png",
    title: "Adidas",
    description: "Men adi-dash Running Shoes",
    price: 100,
    discount: "$10",
    categoryItem: "Women",
    sub_description:
      "This chic handbag features elegant textures and fine craftsmanship. Spacious and durable, it's perfect for daily use or special events, adding a touch of sophistication to any outfit. With its comfortable handle and secure zippers, it's both practical and stylish. Whether you're going to work or a party, this bag enhances your look while holding your essentials with ease.",
  },
  {
    id: 5,
    image: "/product5.png",
    title: "Trendyol",
    description: "Floral Embroidered Maxi Dress",
    price: 180,
    discount: "$8",
    categoryItem: "Women",
    sub_description:
      "This chic handbag features elegant textures and fine craftsmanship. Spacious and durable, it's perfect for daily use or special events, adding a touch of sophistication to any outfit. With its comfortable handle and secure zippers, it's both practical and stylish. Whether you're going to work or a party, this bag enhances your look while holding your essentials with ease.",
  },
  {
    id: 6,
    image: "/product6.png",
    title: "YK Disney",
    description: "Girls Pink Moana Printed Dress",
    price: 100,
    discount: "$5",
    categoryItem: "Men",
    color: "Red",
    size: "L",
    sub_description:
      "This chic handbag features elegant textures and fine craftsmanship. Spacious and durable, it's perfect for daily use or special events, adding a touch of sophistication to any outfit. With its comfortable handle and secure zippers, it's both practical and stylish. Whether you're going to work or a party, this bag enhances your look while holding your essentials with ease.",
  },
  {
    id: 7,
    image: "/product7.png",
    title: "US Polo",
    description: "Tailored Cotton Casual Shirt",
    price: 20,
    discount: "$12",
    categoryItem: "Men",
    size: "L",
    sub_description:
      "This chic handbag features elegant textures and fine craftsmanship. Spacious and durable, it's perfect for daily use or special events, adding a touch of sophistication to any outfit. With its comfortable handle and secure zippers, it's both practical and stylish. Whether you're going to work or a party, this bag enhances your look while holding your essentials with ease.",
  },
  {
    id: 8,
    image: "/product8.png",
    title: "Zyla",
    description: "Women Sandals",
    price: 150,
    discount: "$7",
    categoryItem: "Men",
    color: "Red",
    size: "XL",
    sub_description:
      "This chic handbag features elegant textures and fine craftsmanship. Spacious and durable, it's perfect for daily use or special events, adding a touch of sophistication to any outfit. With its comfortable handle and secure zippers, it's both practical and stylish. Whether you're going to work or a party, this bag enhances your look while holding your essentials with ease.",
  },
  {
    id: 9,
    image: "/product6.png",
    title: "Nike",
    description: "Men Running Shoes",
    price: 250,
    discount: "$20",
    categoryItem: "Men",
    color: "Black",
    sub_description:
      "This chic handbag features elegant textures and fine craftsmanship. Spacious and durable, it's perfect for daily use or special events, adding a touch of sophistication to any outfit. With its comfortable handle and secure zippers, it's both practical and stylish. Whether you're going to work or a party, this bag enhances your look while holding your essentials with ease.",
  },
  {
    id: 10,
    image: "/product5.png",
    title: "Reebok",
    description: "Women Fitness Leggings",
    price: 85,
    discount: "$10",
    categoryItem: "Women",
    color: "Blue",
    sub_description:
      "This chic handbag features elegant textures and fine craftsmanship. Spacious and durable, it's perfect for daily use or special events, adding a touch of sophistication to any outfit. With its comfortable handle and secure zippers, it's both practical and stylish. Whether you're going to work or a party, this bag enhances your look while holding your essentials with ease.",
  },
  {
    id: 11,
    image: "/product5.png",
    title: "Reebok",
    description: "Women Fitness Leggings",
    price: 85,
    discount: "$10",
    categoryItem: "Women",
    color: "Blue",
    sub_description:
      "This chic handbag features elegant textures and fine craftsmanship. Spacious and durable, it's perfect for daily use or special events, adding a touch of sophistication to any outfit. With its comfortable handle and secure zippers, it's both practical and stylish. Whether you're going to work or a party, this bag enhances your look while holding your essentials with ease.",
  },
];

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [signup, setSignup] = useState(false);
  const [signin, setSignin] = useState(false);
  const [cart, setCart] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path) =>
    pathname === path ? "text-bgHover" : "text-textNormal";
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  // Sign Up Modal
  const handleSignupOk = () => setSignup(false);
  const handleSignupCancel = () => setSignup(false);

  // Sign In Modal
  const signinModal = () => {
    setSignin(true);
  };
  const handleSigninOk = () => {
    setSignin(false);
  };
  const handleSigninCancel = () => {
    setSignin(false);
  };

  // Cart Modal
  const cartModal = () => {
    setCart(true);
  };
  const handleCartOk = () => {
    setCart(false);
  };
  const handleCartCancel = () => {
    setCart(false);
  };

  // Search Modal
  const searchModal = () => {
    setSearch(true);
  };
  const handleSearchOk = () => {
    setSearch(false);
  };
  const handleSearchCancel = () => {
    setSearch(false);
  };
  return (
    <nav className="fixed top-0 w-full border-b border-b-cardBg text-textNormal select-none lg:py-0 py-3 bg-[#FFFFFF] z-50">
      <div className="relative">
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
                  <Link href="/" className={`header_title cursor-pointer ${isActive("/")}`}>
                    Home
                  </Link>
                </li>
                <li className="relative group">
                  <Link
                    href="/shop"
                    className={`flex items-center gap-x-1 cursor-pointer header_title ${isActive(
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
                    className={`header_title cursor-pointer ${isActive("/about")}`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={`header_title cursor-pointer ${isActive("/blog")}`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`header_title cursor-pointer ${isActive("/contact")}`}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Small device */}
          <Drawer
            onClose={onClose}
            open={open}
            placement="left"
            closable={false}
            width={200}
            className="_Drawer_navbar !w-[250px]"
          >
            <div className={`lg:hidden`}>
              <div className="flex flex-row gap-3">
                <Link href="/">
                  <Image
                    src="/rifat_mias.jpg"
                    alt="logo"
                    width={900}
                    height={900}
                    className="w-[50px] h-[50px] rounded-full"
                  />
                </Link>
                <div>
                  <h3 className="text-xl font-semibold text-textNormal line-clamp-1">Rifat Bin Baccu</h3>
                  <p className="text-base font-normal text-description line-clamp-1">Admin</p>
                </div>
              </div>
              <hr className="my-4" />
              <ul className="font-normal text-base space-y-3">
                <li>
                  <Link href="/" className={`header_title cursor-pointer flex items-center gap-2 ${isActive("/")}`}>
                    <IoHomeOutline size={16} />
                    <span>Home</span>
                  </Link>
                </li>
                <li className="relative group">
                  <Link
                    href="/shop"
                    className={`flex items-center gap-2 cursor-pointer header_title ${isActive(
                      "/shop"
                    )}`}
                  >
                    <BiShoppingBag size={16} />
                    <span>Shop</span>
                    <FaAngleDown className=" group-hover:rotate-180" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`header_title cursor-pointer flex items-center gap-2 ${isActive("/about")}`}
                  >
                    <LuBadgeInfo size={16} />
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={`header_title cursor-pointer flex items-center gap-2 ${isActive("/blog")}`}
                  >
                    <FaBlog size={16} />
                    <span>Blog</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`header_title cursor-pointer flex items-center gap-2 ${isActive("/contact")}`}
                  >
                    <MdContactMail size={16} />
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>

              <div className="mt-6">
                <hr className="mb-4" />
                <h3 className="font-normal text-base mb-3 flex items-center gap-2">
                  <LuBadgeHelp size={16} />
                  <span>Help</span>
                </h3>
                <h3 className="font-normal text-base mb-3 flex items-center gap-2">
                  <IoIosLogOut size={16} />
                  <span>Log Out</span>
                </h3>
              </div>
            </div>
          </Drawer>
          <div className="flex items-center sm:space-x-[30px] space-x-[10px]">
            <div className="flex items-center space-x-2">
              <div onClick={searchModal} className=" hover:bg-cardBg w-[44px] h-[36px] flex items-center justify-center rounded-[4px]">
                <IoSearch size={20} className="header_action cursor-pointer" />
              </div>
              <div className=" hover:bg-cardBg w-[44px] h-[36px] flex items-center justify-center rounded-[4px]">
                <FaRegHeart size={20} className="header_action cursor-pointer" />
              </div>
              <div onClick={cartModal} className=" hover:bg-cardBg w-[44px] h-[36px] flex items-center justify-center rounded-[4px]">
                <PiShoppingCart size={20} className="header_action cursor-pointer" />
              </div>
            </div>
            <div className="md:w-[35px] w-[30px] md:h-[35px] h-[30px] rounded-full hidden">
              <Image src={"/rifat_mias.jpg"} alt="profile image" width={1000} height={1000} className="md:w-[35px] w-[30px] md:h-[35px] h-[30px] rounded-full border border-bgNormal" />
            </div>
            <Button text={"Sign In"} click={signinModal} className="" />
            <div className="lg:hidden text- sm:text-5xl text-3xl cursor-pointer">
              <HiOutlineMenu onClick={showDrawer} />
            </div>
          </div>

          {/* Sign Up Modal */}
          <Modal
            open={signup}
            onOk={handleSignupOk}
            onCancel={handleSignupCancel}
            footer={null}
            className="_search_header"
          >
            <div className="w-full">
              <Form className="space-y-5">
                <div>
                  <h1 className="text-3xl font-semibold mb-1">Create Account ✨</h1>
                  <p className="text-gray-500">Sign up to get started</p>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="h-[48px]">
                    <FormInput type={"text"} placeholder={"Enter your name"} className={"!py-3 !border-cardBorder focus:!border-bgHover"} />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="h-[48px]">
                    <FormInput type={"email"} placeholder={"Enter your email"} className={"!py-3 !border-cardBorder focus:!border-bgHover"} />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="h-[48px]">
                    <FormInput
                      type={"password"}
                      placeholder={"Enter your password"}
                      className={"!py-3 !border-cardBorder focus:!border-bgHover"}
                      rules={[
                        { required: true, message: 'Please input your password!' },
                        { min: 6, message: 'Password must be at least 6 characters long!' },
                      ]}
                      hasFeedback
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <div className="h-[48px]">
                    <FormInput
                      type={"password"}
                      placeholder={"Enter your password"}
                      className={"!py-3 !border-cardBorder focus:!border-bgHover"}
                      hasFeedback
                      rules={[
                        { required: true, message: 'Please confirm your password!' },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(new Error('The new password that you entered do not match!'));
                          },
                        }),
                      ]}
                    />
                  </div>
                </div>

                <div className='my-6'>
                  <label className="flex items-center space-x-2 text-primary text-sm">
                    <input
                        type="checkbox"
                        // checked={selectedSize.includes(productSize.label)}
                        // onChange={() => toggleSize(productSize.label)}
                        className="w-4 h-4 accent-bgNormal border-white cursor-pointer !rounded-md"
                      />

                    <span className='text-textNormal text-sm'>{"I agree to all the"} <Link href={'#'} className='text-bgNormal font-semibold'>{"Terms"}</Link> {"and"} <Link href={'#'} className='text-bgNormal font-semibold'>{"Privacy Policies"}</Link></span>
                  </label>
                </div>

                <Button text={"Sign Up"} className="!w-full !justify-center !py-2 sm:!py-3" />

                <div className="text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      handleSignupCancel();
                      setSignin(true);
                    }}
                    className="text-bgNormal hover:text-bgHover font-medium"
                  >
                    Sign In
                  </button>
                </div>
              </Form>
            </div>
          </Modal>

          {/* Sign In */}
          <Modal
            open={signin}
            onOk={handleSigninOk}
            onCancel={handleSigninCancel}
            footer={null}
            className="_search_header"
          >
            <div className="w-full">
              <Form className="space-y-5">
                <div>
                  <h1 className="text-3xl font-semibold mb-1">Welcome 👋</h1>
                  <p className="text-gray-500">Please login to continue</p>
                </div>

                <div>
                  <h3 className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </h3>
                  <div className="h-[48px]">
                    <FormInput type={"email"} placeholder={"Enter your email"} className={"!py-3 !border-cardBorder focus:!border-bgHover"} />
                  </div>
                </div>

                <div >
                  <h3 className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </h3>
                  <div className="h-[48px]">
                    <FormInput
                      type={"password"}
                      placeholder={"Enter your password"}
                      className={"!py-3 !border-cardBorder focus:!border-bgHover"}
                      rules={[
                        { required: true, message: 'Please input your password!' },
                        { min: 6, message: 'Password must be at least 6 characters long!' },
                      ]}
                      hasFeedback
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div>
                    <label className="flex items-center space-x-2 text-primary text-sm justify-center">
                      <input
                        type="checkbox"
                        // checked={selectedSize.includes(productSize.label)}
                        // onChange={() => toggleSize(productSize.label)}
                        className="w-4 h-4 accent-bgNormal border-white cursor-pointer !rounded-md"
                      />

                      <span className='text-textNormal text-sm'>Remember Me</span>
                    </label>
                  </div>
                  <button type="button" className="text-bgNormal hover:text-bgHover hover:underline">
                    Forgot Password?
                  </button>
                </div>

                <Button text={"Sign In"} className="!w-full !justify-center !py-2 sm:!py-3" />

                <div className="text-center text-sm text-gray-600">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      handleSigninCancel();
                      setSignup(true);
                    }}
                    className="text-bgNormal hover:text-bgHover font-medium"
                  >
                    Sign Up
                  </button>
                </div>
              </Form>
            </div>
          </Modal>

          {/* Cart Modal */}
          <Modal
            open={cart}
            onOk={handleCartOk}
            onCancel={handleCartCancel}
            footer={null}
            className="_search_header"
          >
            <h1 className="text-bgNormal text-xl font-medium">My Cart <span>(0 item)</span></h1>
            <div className="rounded-md sm:h-[370px] h-[380px] overflow-y-auto custom-scrollbar !pr-3 !mt-6">
              {bestSeller.map((product, idx) => (
                <ProductCard3 key={idx} bestSellers={product} />
              ))}
            </div>
            <div className="flex flex-row justify-between items-center gap-4 text-base font-bold text-textNormal py-4">
              <h3>Subtotal</h3>
              <p>$200</p>
            </div>

            <div className=" grid grid-cols-2 gap-4 mb-4"> 
              <Button text={"View Cart"} className="!w-full justify-center !bg-transparent hover:!bg-bgNormal !text-bgNormal hover:!text-white !border !border-bgNormal" />
              <Button text={"Checkout"} className="!w-full justify-center !bg-transparent hover:!bg-bgNormal !text-bgNormal hover:!text-white !border !border-bgNormal" />
            </div>
          </Modal>

          {/* Search Modal */}
          <Modal
            open={search}
            onOk={handleSearchOk}
            onCancel={handleSearchCancel}
            footer={null}
            className="_search_header"
          >
            <FormInput type={"text"} icon={<IoSearch />} placeholder={"Search product..."} className={"sm:!w-[430px] !w-[250px] !py-2 focus-within:!border-bgNormal !border-cardBorder"} />
            <div className="rounded-md sm:h-[350px] h-[380px] overflow-y-auto custom-scrollbar !pr-3">
              {bestSeller.map((product, idx) => (
                <ProductCard3 key={idx} bestSellers={product} />
              ))}
            </div>
          </Modal>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;