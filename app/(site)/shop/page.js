"use client";
import { useState } from "react";
import Image from "next/image";
import { IoAddOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Slider } from "antd";
import { FiFilter } from "react-icons/fi";
import Services from "../(home)/component/services";
import ProductCard from "./productCard";
import ProductCard2 from "./productCard2";
import Breadcrumb from "@/app/component/common/breadcrumb";

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

const Shop = () => {
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

  const [isLayout, setLayout] = useState(true);
  const [isCategories, setCategories] = useState(false);
  const [isPrice, setPrice] = useState(true);
  const [isColor, setColor] = useState(false);
  const [isSize, setSize] = useState(true);
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

  const [priceRange, setPriceRange] = useState([0, 200]);
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
  return (
    <div className="header_top">
      {/* Breadcrumb Navigation */}
      <Breadcrumb title={"Shop"} page={page} />

      <div className="container my-8 md:my-[72px]">
        <div className="lg:grid lg:grid-cols-8 gap-6">
          {/* Product Filter */}
          <div className="hidden lg:block w-full  col-span-2">
            {/* Product Categories Filter */}
            <div>
              <button
                className="shop_filter_button"
                onClick={() => setCategories(!isCategories)}
              >
                <span className="text-base lg:text-lg font-jost font-medium xl:font-bold text-[#131118]">
                  Product Categories
                </span>
                <IoIosArrowDown className="text-xl lg:text-2xl" />
              </button>

              <ul className={`mt-6 ${isCategories ? "block" : "hidden"}`}>
                {productCategories.map((productCategory) => (
                  <label
                    key={productCategory.id}
                    className="flex items-center justify-between hover:bg-slate-200 rounded-md px-2 py-2 cursor-pointer"
                  >
                    <div className="flex flex-row items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(
                          productCategory.categoryItem
                        )}
                        onChange={() =>
                          toggleCategory(productCategory.categoryItem)
                        }
                        className="w-6 h-6 accent-black border-white cursor-pointer"
                      />
                      <span className="text-base font-jost font-normal">
                        {productCategory.name}
                      </span>
                    </div>
                    <IoAddOutline className="text-lg" />
                  </label>
                ))}
              </ul>
            </div>

            <hr className="border border-[#F6F5F6] my-5" />

            {/* Filter by Price */}
            <div className="prductPrice">
              <button
                className="shop_filter_button"
                onClick={() => setPrice(!isPrice)}
              >
                <span className="text-lg font-jost font-medium xl:font-bold text-[#131118]">
                  Filter by Price
                </span>{" "}
                <IoIosArrowDown className="text-2xl" />
              </button>

              <ul className={`mt-6 ${isPrice ? "hidden" : "block"}`}>
                <div className="">
                  <div className="rounded-md w-10/12 mx-auto ">
                    <label className="text-base font-jost font-normal mb-4">
                      Price: ${priceRange[0]} - ${priceRange[1]}
                    </label>
                    <Slider
                      range
                      min={0}
                      max={200}
                      value={priceRange}
                      onChange={handlePriceChange}
                    />
                  </div>
                </div>
              </ul>
            </div>

            <hr className="border border-[#F6F5F6] my-5" />

            {/* Filter by Color */}
            <div>
              <button
                className="shop_filter_button"
                onClick={() => setColor(!isColor)}
              >
                <span className="text-lg font-jost font-medium xl:font-bold text-[#131118]">
                  Filter by Color
                </span>
                <IoIosArrowDown className="text-2xl" />
              </button>

              <ul className={`mt-6 ${isColor ? "block" : "hidden"}`}>
                {productColor.map((productColor) => (
                  <label
                    key={productColor.id}
                    className="flex items-center justify-between hover:bg-slate-200 rounded-md px-2 py-2 cursor-pointer"
                  >
                    <div className="flex flex-row items-center gap-[10px]">
                      <input
                        type="checkbox"
                        checked={selectedColor.includes(productColor.name)}
                        onChange={() => toggleColor(productColor.name)}
                        className="hidden"
                      />
                      <div
                        className="w-6 h-6 border rounded-md"
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

            <hr className="border border-[#F6F5F6] my-5" />
            {/* Filter by Size */}
            <div>
              <button
                className="shop_filter_button "
                onClick={() => setSize(!isSize)}
              >
                <span className="text-lg font-jost font-medium xl:font-bold text-[#131118]">
                  Filter by Size
                </span>{" "}
                <IoIosArrowDown className="text-2xl" />
              </button>

              <ul className={`mt-6 ${isSize ? "hidden" : "block"}`}>
                {productSize.map((productSize) => (
                  <label
                    key={productSize.key}
                    className={` flex items-center justify-between hover:bg-slate-200 rounded-md px-2 py-2 cursor-pointer`}
                  >
                    <div className="flex flex-row items-center gap-[10px]">
                      <input
                        type="checkbox"
                        checked={selectedSize.includes(productSize.label)}
                        onChange={() => toggleSize(productSize.label)}
                        className="w-6 h-6 accent-black border-white !rounded-full"
                      />
                      <span className="text-base font-jost font-normal">
                        {productSize.label}
                      </span>
                    </div>
                    <p className="text-base font-jost font-normal">(10)</p>
                  </label>
                ))}
              </ul>
            </div>
          </div>
          {/* Product List */}
          <div className="w-full col-span-6">
            <div className="flex flex-row items-center justify-between mb-[30px]">
              <div className="flex flex-row items-center gap-[22px]">
                <div
                  onClick={(e) => setLayout(true)}
                  className=" cursor-pointer"
                >
                  <Image
                    src={"/Huge.png"}
                    alt="image"
                    width={900}
                    height={900}
                    className="w-6 h-6"
                  />
                </div>
                <div
                  onClick={(e) => setLayout(false)}
                  className=" cursor-pointer"
                >
                  <Image
                    src={"/huge2.png"}
                    alt="image"
                    width={900}
                    height={900}
                    className="w-5 h-3"
                  />
                </div>
                <h1 className="hidden sm:block text-base font-jost font-normal text-[#131118">
                  Showing 1–{paginatedProducts.length} of {bestSeller.length}{" "}
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
                  <FiFilter className="text-2xl" />
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
                className={`px-4 py-2 mx-1 ${
                  currentPage === i + 1 ? "bg-black text-white" : "bg-gray-200"
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
