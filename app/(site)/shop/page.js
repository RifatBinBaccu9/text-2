"use client";
import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { ConfigProvider, Modal, Slider } from "antd";
import { FiFilter } from "react-icons/fi";
import Services from "../(home)/component/services";
import ProductCard from "./productCard";
import ProductCard2 from "./productCard2";
import Breadcrumb from "@/app/component/common/breadcrumb";
import { TfiMenuAlt } from "react-icons/tfi";
import { CgMenuRound } from "react-icons/cg";
import { BsGrid } from "react-icons/bs";
import { TbRulerMeasure } from "react-icons/tb";
import { PiPaintBucketLight } from "react-icons/pi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoIosRemove } from "react-icons/io";


const bestSeller = [
  {
    id: 1,
    image: "/product1.png",
    title: "Roadstar",
    description: "Printed Cotton T-Shirt",
    price: 150,
    discount: "$10",
    categoryItem: "Men",
    color: "Red",
    sub_description:
      "Crafted from 100% premium cotton, this printed t-shirt offers unmatched breathability and comfort. Whether you're running errands or relaxing at home, its soft texture and vibrant print make it your everyday essential. The design is versatile, ensuring it pairs easily with jeans, shorts, or joggers. It's the perfect addition to your casual wardrobe for effortless style.",
  },
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
const productCategories = [
  { id: "1", categoryItem: "Men", name: "Men" },
  { id: "2", categoryItem: "Women", name: "Women" },
  { id: "3", categoryItem: "Kids", name: "Kids" },
  { id: "4", categoryItem: "Bags", name: "Bags" },
  { id: "5", categoryItem: "Belts", name: "Belts" },
  { id: "6", categoryItem: "Wallets", name: "Wallets" },
  { id: "7", categoryItem: "Accessories", name: "Accessories" },
  { id: "8", categoryItem: "WinterWear", name: "Winter Wear" },
];

const productColor = [
  { id: "1", name: "Black" },
  { id: "2", name: "White" },
  { id: "3", name: "Red" },
  { id: "4", name: "Blue" },
  { id: "5", name: "Green" },
  { id: "6", name: "Yellow" },
  { id: "7", name: "Orange" },
  { id: "8", name: "Purple" },
];
const productSize = [
  { key: "1", label: "S" },
  { key: "2", label: "M" },
  { key: "3", label: "L" },
  { key: "4", label: "XL" },
  { key: "5", label: "XXL" },
];

const Shop = () => {
  const [cart, setCart] = useState(false);
  const [isLayout, setLayout] = useState(true);
  const [isCategories, setCategories] = useState(true);
  console.log(isCategories);

  const [isSize, setSize] = useState(false);
  const [isColor, setColor] = useState(false);
  const [isPrice, setPrice] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const toggleCategory = (categoryItems) => {
    if (selectedCategories.includes(categoryItems)) {
      const filterCategoryData = selectedCategories.filter(
        (categoryItem) => categoryItem !== categoryItems
      );
      setSelectedCategories(filterCategoryData);
    } else {
      const filterCategoryDatas = [...selectedCategories, categoryItems];
      setSelectedCategories(filterCategoryDatas);
    }
  };
  const toggleColor = (colorItems) => {
    if (selectedColor.includes(colorItems)) {
      const filterColorData = selectedColor.filter(
        (colorItem) => colorItem !== colorItems
      );
      setSelectedColor(filterColorData);
    } else {
      const filterColorDatas = [...selectedColor, colorItems];
      setSelectedColor(filterColorDatas);
    }
  };
  const toggleSize = (sizeItems) => {
    if (selectedSize.includes(sizeItems)) {
      const filterSizeData = selectedSize.filter(
        (sizeItem) => sizeItem !== sizeItems
      );
      setSelectedSize(filterSizeData);
    } else {
      const filterSizeDatas = [...selectedSize, sizeItems];
      setSelectedSize(filterSizeDatas);
    }
  };

  const [priceRange, setPriceRange] = useState([0, 400]);
  const handlePriceChange = (values) => setPriceRange(values);

  const filteredBestSellers = bestSeller.filter((item) => {
    const categoryMatch =
      selectedCategories.length === 0 || selectedCategories.includes(item.categoryItem);
    const colorMatch =
      selectedColor.length === 0 || selectedColor.includes(item.color);
    const sizeMatch =
      selectedSize.length === 0 || selectedSize.includes(item.size);
    const priceMatch =
      item.price >= priceRange[0] && item.price <= priceRange[1];
    return categoryMatch && colorMatch && sizeMatch && priceMatch;
  });

  const totalPages = Math.ceil(filteredBestSellers.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredBestSellers.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const page = [
    { title: "Home", link: "/" },
    { title: "Shop", link: "/shop" },
  ];

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
  return (
    <div className="header_top">
      {/* Breadcrumb Navigation */}
      <Breadcrumb title={"Shop"} page={page} />

      <div className="container my-8 md:my-[72px]">
        <div className="lg:grid lg:grid-cols-8 gap-6">
          {/* Product Filter */}
          <div className="hidden lg:block w-full col-span-2">
            {/* Product Categories Filter */}
            <div>
              <button
                className={`shop_filter_button flex items-center justify-between gap-2 ${isCategories ? "text-bgHover" : "text-textNormal"}`}
                onClick={() => setCategories(!isCategories)}
              >
                <div className="flex flex-row items-center gap-2">
                  <BsGrid className="text-xl" />
                  <span className="text-base lg:text-lg font-jost font-medium xl:font-bold">
                    Product Categories
                  </span>
                </div>
                <IoIosArrowDown
                  className={`text-xl lg:text-2xl transition-transform duration-200 ${isCategories ? "rotate-0" : "-rotate-90"}`}
                />
              </button>


              <ul className={`${isCategories ? "block" : "hidden"}`}>
                {productCategories.map((productCategory) => {
                  const isSelected = selectedCategories.includes(productCategory.categoryItem);
                  return (
                    <label
                      key={productCategory.id}
                      className="flex items-center justify-between hover:bg-cardBg rounded-md px-2 py-1 cursor-pointer"
                    >
                      <div className="flex flex-row items-center gap-2">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleCategory(productCategory.categoryItem)}
                          className="w-4 h-4 accent-bgNormal border-white cursor-pointer !rounded-md"
                        />
                        <span className="text-base font-jost font-normal">
                          {productCategory.name}
                        </span>
                      </div>

                      {/* Show + or - icon based on selection */}
                      {isSelected ? (
                        <IoIosRemove className="text-lg text-bgHover" />
                      ) : (
                        <IoAddOutline className="text-lg text-gray-600" />
                      )}
                    </label>
                  );
                })}
              </ul>

            </div>

            <hr className="border border-[#F6F5F6] my-2" />
            {/* Filter by Size */}
            <div>
              <button
                className={`shop_filter_button flex items-center justify-between gap-2 ${!isSize ? "text-bgHover" : "text-textNormal"}`}
                onClick={() => setSize(!isSize)}
              >
                <div className="flex flex-row items-center justify-between gap-2">
                  <TbRulerMeasure className="text-xl" />
                  <span className="text-lg font-jost font-medium xl:font-bold">
                    Filter by Size
                  </span>
                </div>
                <IoIosArrowDown
                  className={`text-2xl transition-transform duration-200 ${!isSize ? "rotate-0" : "-rotate-90"}`}
                />
              </button>

              <ul className={` ${isSize ? "hidden" : "block"}`}>
                {productSize.map((productSize) => (
                  <label
                    key={productSize.key}
                    className={` flex items-center justify-between hover:bg-cardBg rounded-md px-2 py-1 cursor-pointer`}
                  >
                    <div className="flex flex-row items-center gap-[10px]">
                      <input
                        type="checkbox"
                        checked={selectedSize.includes(productSize.label)}
                        onChange={() => toggleSize(productSize.label)}
                        className="w-4 h-4 accent-bgNormal border-white cursor-pointer !rounded-md"
                      />
                      <span className="text-base font-jost font-normal">
                        {productSize.label}
                      </span>
                    </div>
                    <p className={`text-base font-jost font-normal `}>(10)</p>
                  </label>
                ))}
              </ul>
            </div>

            <hr className="border border-[#F6F5F6] my-2" />

            {/* Filter by Color */}
            <div>
              <button
                className={`shop_filter_button flex items-center justify-between gap-2 ${isColor ? "text-bgHover" : "text-textNormal"}`}
                onClick={() => setColor(!isColor)}
              >
                <div className="flex flex-row items-center justify-between gap-2">
                  <PiPaintBucketLight className="text-xl" />
                  <span className="text-lg font-jost font-medium xl:font-bold">
                    Filter by Color
                  </span>
                </div>
                <IoIosArrowDown className={`text-2xl transition-transform duration-200 ${isColor ? "rotate-0" : "-rotate-90"}`} />
              </button>

              <ul className={` ${isColor ? "block" : "hidden"}`}>
                {productColor.map((productColor) => (
                  <label
                    key={productColor.id}
                    className="flex items-center justify-between hover:bg-cardBg rounded-md px-2 py-1 cursor-pointer"
                  >
                    <div className="flex flex-row items-center gap-[10px]">
                      <input
                        type="checkbox"
                        checked={selectedColor.includes(productColor.name)}
                        onChange={() => toggleColor(productColor.name)}
                        className="hidden"
                      />
                      <div
                        className="w-5 h-5 border rounded-md"
                        style={{
                          backgroundColor: productColor.name.toLowerCase(),
                        }}
                      ></div>
                      <span className="text-base font-jost font-normal">
                        {productColor.name}
                      </span>
                    </div>
                    <p className="text-base font-jost font-normal">(10)</p>
                  </label>
                ))}
              </ul>
            </div>

            <hr className="border border-[#F6F5F6] my-2" />

            {/* Filter by Price */}
            <div className="prductPrice">
              <button
                className={`shop_filter_button flex items-center justify-between gap-2 ${!isPrice ? "text-bgHover" : "text-textNormal"}`}
                onClick={() => setPrice(!isPrice)}
              >
                <div className="flex flex-row items-center justify-between gap-2">
                  <MdOutlineAttachMoney className="text-xl" />
                  <span className="text-lg font-jost font-medium xl:font-bold">
                    Filter by Price
                  </span>{" "}
                </div>
                <IoIosArrowDown className={`text-2xl transition-transform duration-200 ${!isPrice ? "rotate-0" : "-rotate-90"}`} />
              </button>

              <ul className={`mt-4 ${isPrice ? "hidden" : "block"}`}>
                <div className="">
                  <div className="rounded-md w-10/12 mx-auto ">
                    <label className="text-base font-jost font-normal mb-4">
                      Price: ${priceRange[0]} - ${priceRange[1]}
                    </label>
                    <ConfigProvider
                      theme={{
                        components: {
                          Slider: {
                            handleColor: "#ff4d4f",
                            handleColorDisabled: "#ffa39e",
                            handleActiveColor: "#cf1322",
                            handleActiveOutlineColor: "rgba(255,77,79,0.3)",
                            dotBorderColor: "#ffa39e",
                            dotActiveBorderColor: "#ff4d4f",
                            railBg: "#FFC0CB",
                            railHoverBg: "#FFC0CB",
                          },
                        },
                      }}
                    >
                      <Slider
                        range
                        min={0}
                        max={400}
                        handleColor={"#000"}
                        value={priceRange}
                        onChange={handlePriceChange}
                      />
                    </ConfigProvider>
                  </div>
                </div>
              </ul>
            </div>
          </div>

          {/* Small device filter */}
          <Modal
            open={cart}
            onOk={handleCartOk}
            onCancel={handleCartCancel}
            footer={null}
            className="_search_header"
          >
            <h1 className="text-bgNormal text-xl font-medium">My Cart <span>(0 item)</span></h1>
            <div className="rounded-md sm:h-[350px] h-[380px] overflow-y-auto custom-scrollbar !pr-3 !mt-6">
              <div className="lg:hidden w-full">
            {/* Product Categories Filter */}
            <div>
              <button
                className={`shop_filter_button flex items-center justify-between gap-2 ${isCategories ? "text-bgHover" : "text-textNormal"}`}
                onClick={() => setCategories(!isCategories)}
              >
                <div className="flex flex-row items-center gap-2">
                  <BsGrid className="text-xl" />
                  <span className="text-base lg:text-lg font-jost font-medium xl:font-bold">
                    Product Categories
                  </span>
                </div>
                <IoIosArrowDown
                  className={`text-xl lg:text-2xl transition-transform duration-200 ${isCategories ? "rotate-0" : "-rotate-90"}`}
                />
              </button>


              <ul className={`${isCategories ? "block" : "hidden"}`}>
                {productCategories.map((productCategory) => {
                  const isSelected = selectedCategories.includes(productCategory.categoryItem);
                  return (
                    <label
                      key={productCategory.id}
                      className="flex items-center justify-between hover:bg-cardBg rounded-md px-2 py-1 cursor-pointer"
                    >
                      <div className="flex flex-row items-center gap-2">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleCategory(productCategory.categoryItem)}
                          className="w-4 h-4 accent-bgNormal border-white cursor-pointer !rounded-md"
                        />
                        <span className="text-base font-jost font-normal">
                          {productCategory.name}
                        </span>
                      </div>

                      {/* Show + or - icon based on selection */}
                      {isSelected ? (
                        <IoIosRemove className="text-lg text-bgHover" />
                      ) : (
                        <IoAddOutline className="text-lg text-gray-600" />
                      )}
                    </label>
                  );
                })}
              </ul>

            </div>

            <hr className="border border-[#F6F5F6] my-2" />
            {/* Filter by Size */}
            <div>
              <button
                className={`shop_filter_button flex items-center justify-between gap-2 ${!isSize ? "text-bgHover" : "text-textNormal"}`}
                onClick={() => setSize(!isSize)}
              >
                <div className="flex flex-row items-center justify-between gap-2">
                  <TbRulerMeasure className="text-xl" />
                  <span className="text-lg font-jost font-medium xl:font-bold">
                    Filter by Size
                  </span>
                </div>
                <IoIosArrowDown
                  className={`text-2xl transition-transform duration-200 ${!isSize ? "rotate-0" : "-rotate-90"}`}
                />
              </button>

              <ul className={` ${isSize ? "hidden" : "block"}`}>
                {productSize.map((productSize) => (
                  <label
                    key={productSize.key}
                    className={` flex items-center justify-between hover:bg-cardBg rounded-md px-2 py-1 cursor-pointer`}
                  >
                    <div className="flex flex-row items-center gap-[10px]">
                      <input
                        type="checkbox"
                        checked={selectedSize.includes(productSize.label)}
                        onChange={() => toggleSize(productSize.label)}
                        className="w-4 h-4 accent-bgNormal border-white cursor-pointer !rounded-md"
                      />
                      <span className="text-base font-jost font-normal">
                        {productSize.label}
                      </span>
                    </div>
                    <p className={`text-base font-jost font-normal `}>(10)</p>
                  </label>
                ))}
              </ul>
            </div>

            <hr className="border border-[#F6F5F6] my-2" />

            {/* Filter by Color */}
            <div>
              <button
                className={`shop_filter_button flex items-center justify-between gap-2 ${isColor ? "text-bgHover" : "text-textNormal"}`}
                onClick={() => setColor(!isColor)}
              >
                <div className="flex flex-row items-center justify-between gap-2">
                  <PiPaintBucketLight className="text-xl" />
                  <span className="text-lg font-jost font-medium xl:font-bold">
                    Filter by Color
                  </span>
                </div>
                <IoIosArrowDown className={`text-2xl transition-transform duration-200 ${isColor ? "rotate-0" : "-rotate-90"}`} />
              </button>

              <ul className={` ${isColor ? "block" : "hidden"}`}>
                {productColor.map((productColor) => (
                  <label
                    key={productColor.id}
                    className="flex items-center justify-between hover:bg-cardBg rounded-md px-2 py-1 cursor-pointer"
                  >
                    <div className="flex flex-row items-center gap-[10px]">
                      <input
                        type="checkbox"
                        checked={selectedColor.includes(productColor.name)}
                        onChange={() => toggleColor(productColor.name)}
                        className="hidden"
                      />
                      <div
                        className="w-5 h-5 border rounded-md"
                        style={{
                          backgroundColor: productColor.name.toLowerCase(),
                        }}
                      ></div>
                      <span className="text-base font-jost font-normal">
                        {productColor.name}
                      </span>
                    </div>
                    <p className="text-base font-jost font-normal">(10)</p>
                  </label>
                ))}
              </ul>
            </div>

            <hr className="border border-[#F6F5F6] my-2" />

            {/* Filter by Price */}
            <div className="prductPrice">
              <button
                className={`shop_filter_button flex items-center justify-between gap-2 ${!isPrice ? "text-bgHover" : "text-textNormal"}`}
                onClick={() => setPrice(!isPrice)}
              >
                <div className="flex flex-row items-center justify-between gap-2">
                  <MdOutlineAttachMoney className="text-xl" />
                  <span className="text-lg font-jost font-medium xl:font-bold">
                    Filter by Price
                  </span>{" "}
                </div>
                <IoIosArrowDown className={`text-2xl transition-transform duration-200 ${!isPrice ? "rotate-0" : "-rotate-90"}`} />
              </button>

              <ul className={`mt-4 ${isPrice ? "hidden" : "block"}`}>
                <div className="">
                  <div className="rounded-md w-10/12 mx-auto ">
                    <label className="text-base font-jost font-normal mb-4">
                      Price: ${priceRange[0]} - ${priceRange[1]}
                    </label>
                    <ConfigProvider
                      theme={{
                        components: {
                          Slider: {
                            handleColor: "#ff4d4f",
                            handleColorDisabled: "#ffa39e",
                            handleActiveColor: "#cf1322",
                            handleActiveOutlineColor: "rgba(255,77,79,0.3)",
                            dotBorderColor: "#ffa39e",
                            dotActiveBorderColor: "#ff4d4f",
                            railBg: "#FFC0CB",
                            railHoverBg: "#FFC0CB",
                          },
                        },
                      }}
                    >
                      <Slider
                        range
                        min={0}
                        max={400}
                        handleColor={"#000"}
                        value={priceRange}
                        onChange={handlePriceChange}
                      />
                    </ConfigProvider>
                  </div>
                </div>
              </ul>
            </div>
          </div>
            </div>
          </Modal>

          {/* Product List */}
          <div className="w-full col-span-6">
            <div className="flex flex-row items-center justify-between mb-[30px]">
              <div className="flex flex-row items-center gap-3">
                <div
                  onClick={(e) => setLayout(true)}
                  className=" cursor-pointer"
                >
                  <CgMenuRound size={24} className={`rotate-90 text-bgNormal ${isLayout ? "text-bgNormal" : "text-cardBorder"}`} />
                </div>
                <div
                  onClick={(e) => setLayout(false)}
                  className=" cursor-pointer"
                >
                  <TfiMenuAlt size={20} className={`${isLayout ? "text-cardBorder" : "text-bgNormal"}`} />
                </div>
                <h1 className="hidden sm:block text-base font-jost font-normal text-[#131118">
                  Showing <span className={`text-bgHover`}>1–{paginatedProducts.length}</span> of <span className={`text-bgHover`}>{bestSeller.length}</span>{" "}
                  results
                </h1>
              </div>

              <div className="flex flex-row items-center gap-3">
                <div className="flex flex-row items-center gap-3">
                  <h1 className="text-base font-jost font-normal text-[#131118]">
                    Shot by latest
                  </h1>
                  <IoIosArrowDown className="text-[10px]" />
                </div>
                <div className="cursor-pointer lg:hidden">
                  <FiFilter onClick={cartModal} className="text-2xl text-bgNormal" />
                </div>
              </div>
            </div>

            <div>
              {isLayout ? (
                <div className="grid md:grid-cols-3 grid-cols-2 rounded-md  md:gap-5 gap-3">
                  {paginatedProducts.map((bestSellers, idx) => (
                    <ProductCard
                      key={idx}
                      bestSellers={bestSellers}
                    ></ProductCard>
                  ))}
                </div>
              ) : (
                <div className="space-y-4 ">
                  {paginatedProducts.map((bestSellers, idx) => (
                    <ProductCard2
                      key={idx}
                      bestSellers={bestSellers}
                    ></ProductCard2>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-end mb-[100px] mt-[50px]">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 mx-1 bg-gray-200 rounded-md disabled:opacity-50"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 mx-1 ${currentPage === i + 1 ? "bg-black text-white" : "bg-gray-200"
                  }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-1 bg-gray-200 rounded-md disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
        
        <Services />
      </div>
    </div>
  );
};

export default Shop;
