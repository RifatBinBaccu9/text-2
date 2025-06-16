"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward, IoMdAdd, IoMdRemove } from "react-icons/io";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ConfigProvider, Tabs } from "antd";
import { AiFillStar } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { useParams } from "next/navigation";
import Services from "../../(home)/component/services";

const bestSellers = [
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
const ProductId = () => {
  const { id } = useParams();
  const bestSeller = bestSellers.find((product) => product.id == id);
  const [activeTabKey, setActiveTabKey] = useState("1");
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("#E15353");
  const [selectedSize, setSelectedSize] = useState("M");

  const colorOptions = [
    "#E15353",
    "#F59E0B",
    "#9B51E0",
    "#3CD139",
    "#131118",
    "#A4A2AA",
  ];
  const sizeOptions = ["S", "M", "L", "XL", "XXL"];


  return (
    <div className="container product_dtails mt-[50px] sm:mt-[80px] lg:mt-[100px]">
      {/* Breadcrumb Navigation */}
      <div className="flex flex-wrap items-center gap-[7px] mt-[70px] mb-[50px]">
        <span className="font-jost font-normal text-sm">Shop</span>
        <IoIosArrowForward className="text-[10px]" />
        <span className="font-jost font-normal text-sm">All Products</span>
        <IoIosArrowForward className="text-[10px]" />
        <span className="font-jost font-normal text-sm">
          {bestSeller.title}
        </span>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        {/* Left Side (Image Gallery) */}
        <div>
          <div className="py-6 sm:py-[79px] px-6 sm:px-[58px] bg-[#A4A1AA0D]">
            {bestSeller.image ? (
              <Image
                src={bestSeller.image}
                alt={bestSeller.title || "Product image"}
                width={500}
                height={500}
                className="rounded-lg"
              />
            ) : (
              <div className="w-[500px] h-[500px] bg-gray-100 flex items-center justify-center text-gray-400 rounded-lg">
                No image available
              </div>
            )}{" "}
          </div>

          <div className="mt-5 relative">
            <Swiper
              slidesPerView={6}
              loop={true}
              modules={[Navigation]}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              breakpoints={{
                320: { slidesPerView: 3, spaceBetween: 10 },
                480: { slidesPerView: 3, spaceBetween: 10 },
                600: { slidesPerView: 4, spaceBetween: 10 },
                768: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 20 },
                1280: { slidesPerView: 4, spaceBetween: 20 },
              }}
            >
              {[...Array(6)].map((_, index) => (
                <SwiperSlide
                  key={index}
                  className="!lg:w-[96px] !lg:h-[96px] flex flex-row gap-5"
                >
                  <div className="flex flex-col items-center cursor-pointer">
                    <div className="w-full h-full rounded-md border border-[#E67E22] py-2 sm:py-4 px-2 sm:px-5">
                      <Image
                        src={"/product6.png"}
                        width={900}
                        height={900}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-[81px] lg:object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Right Side (Product Info) */}
        <div>
          <div className="flex flex-row justify-between">
            <h1 className="font-jost font-bold text-[30px]"></h1>
            <span className="h-fit font-jost font-normal text-[12px] text-[#3CD139] py-[6px] px-[10px] rounded-[4px] bg-[#3CD1391A]">
              In Stock
            </span>
          </div>
          <h1 className="font-jost font-normal text-xl text-[#131118] mt-[5px] mb-[10px]">
            {bestSeller.title}
          </h1>

          {/* Ratings */}
          <div className="flex flex-row items-center gap-2">
            <div className="flex flex-row gap-[5px] text-[#F59E0B] text-2xl">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="p-[2px]" />
              ))}
            </div>
            <p className="font-jost font-normal text-base text-[#A4A2AA]">
              5.0 (121 Reviews)
            </p>
          </div>

          {/* Price */}
          <div className="flex flex-row items-center gap-2 mt-4 mb-5">
            <span className="font-jost font-normal text-[22px] text-[#131118]">
              {bestSeller?.price || "Sold"}
            </span>
            <span className="font-jost font-normal text-xl text-[#A4A2AA] line-through">
              $100.00
            </span>
          </div>

          {/* Short Description */}
          <p className="font-jost font-normal text-base text-[#131118]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          {/* Color Selection */}
          <div className="mt-[30px]">
            <h1 className="font-jost font-bold text-lg text-[#131118]">
              Color
            </h1>
            <div className="flex flex-row items-center gap-[10px] mt-[10px]">
              {colorOptions.map((color, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedColor(color)}
                  className={`w-[30px] h-[30px] rounded-[4px] cursor-pointer border ${
                    selectedColor === color ? "ring-1 ring-black" : ""
                  }`}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-[20px]">
            <h1 className="font-jost font-bold text-lg text-[#131118]">Size</h1>
            <div className="flex flex-row items-center gap-[10px] mt-[10px]">
              {sizeOptions.map((size, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedSize(size)}
                  className={`border border-[#131118] px-3 lg:px-4 py-1 lg:py-2 rounded-md cursor-pointer ${
                    selectedSize === size ? "bg-black text-white" : ""
                  }`}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Quantity, Add to Cart, Wishlist */}
          <div className="w-full flex flex-row gap-4 items-center my-[50px]">
            <div className="flex flex-row items-center justify-center gap-[10px] border border-[#131118] rounded-[10px] p-2 lg:p-4">
              <IoMdRemove
                className="text-lg lg:text-2xl cursor-pointer"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              />
              <span className="font-jost font-normal text-base text-[#131118]">
                {quantity}
              </span>
              <IoMdAdd
                className="text-lg lg:text-2xl cursor-pointer"
                onClick={() => setQuantity((q) => q + 1)}
              />
            </div>

            <button className="w-full bg-[#131118] border border-[#131118] rounded-[10px] px-0  lg:px-[50px] py-2 lg:py-4 text-white font-jost font-normal text-base">
              Add to Cart
            </button>

            <div className="p-2 lg:p-4 border border-[#131118] rounded-[10px] cursor-pointer">
              <FaRegHeart className=" text-[#131118] text-xl lg:text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Description Tabs */}
      <div className="container mt-[25px] md:mt-[50px]">
        <div className="relative flex justify-center items-center select-none rounded-sm">
          <div className="flex flex-row items-center justify-center w-full">
            <ConfigProvider
              theme={{
                components: {
                  Tabs: {
                    itemActiveColor: "#000000",
                    inkBarColor: "#000000",
                  },
                },
              }}
            >
              <Tabs
                activeKey={activeTabKey}
                onChange={(key) => setActiveTabKey(key)}
                className="w-full"
                items={[
                  {
                    label: (
                      <span
                        className={`text-base sm:text-xl font-jost text-[#131118] ${
                          activeTabKey === "1" ? "font-bold" : "font-normal"
                        }`}
                      >
                        Description
                      </span>
                    ),
                    key: "1",
                    children: (
                      <div className="w-full">
                        <p className="font-jost font-normal text-base text-[#131118]">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout...
                        </p>
                        <p className="font-jost font-normal text-base text-[#131118] mt-5">
                          Various versions have evolved over the years,
                          sometimes by accident, sometimes on purpose (injected
                          humour and the like).
                        </p>
                      </div>
                    ),
                  },
                  {
                    label: (
                      <span
                        className={`text-base sm:text-xl font-jost text-[#131118] ${
                          activeTabKey === "2" ? "font-bold" : "font-normal"
                        }`}
                      >
                        Additional Information
                      </span>
                    ),
                    key: "2",
                    children: (
                      <div>
                        <div className="flex flex-row items-center gap-[30px]">
                          <h1 className="font-jost font-bold text-lg text-[#131118]">
                            Color
                          </h1>
                          <div className="flex flex-row items-center gap-3 text-base font-normal font-jost text-[#131118]">
                            <span>Black,</span>
                            <span>White,</span>
                            <span>Red,</span>
                            <span>Blue,</span>
                            <span>Green</span>
                          </div>
                        </div>
                        <div className="flex flex-row items-center gap-[41px] mt-4">
                          <h1 className="font-jost font-bold text-lg text-[#131118]">
                            Size
                          </h1>
                          <div className="flex flex-row items-center gap-3 text-base font-normal font-jost text-[#131118]">
                            <span>S,</span>
                            <span>M,</span>
                            <span>L,</span>
                            <span>XL,</span>
                            <span>XXL</span>
                          </div>
                        </div>
                      </div>
                    ),
                  },
                  {
                    label: (
                      <span
                        className={`text-base sm:text-xl font-jost text-[#131118] ${
                          activeTabKey === "4" ? "font-bold" : "font-normal"
                        }`}
                      >
                        Review
                      </span>
                    ),
                    key: "4",
                    children: (
                      <div>
                        <h1 className="font-jost font-bold text-xl text-[#131118]">
                          Customer Reviews
                        </h1>

                        <div className="mt-5">
                          <div>
                            <div className="flex flex-row items-center gap-[10px]">
                              <Image
                                src={"/11.jpg"}
                                alt="user"
                                width={900}
                                height={900}
                                className="w-[50px] h-[50px] rounded-full"
                              />
                              <div>
                                <h1 className="font-jost font-normal text-base text-[#131118]">
                                  Mark Williams
                                </h1>
                                <div className="flex flex-row items-center gap-2 mt-[7px]">
                                  <AiFillStar className="text-[#F59E0B] text-base" />
                                  <AiFillStar className="text-[#F59E0B] text-base" />
                                  <AiFillStar className="text-[#F59E0B] text-base" />
                                  <AiFillStar className="text-[#F59E0B] text-base" />
                                  <AiFillStar className="text-[#F59E0B] text-base" />
                                </div>
                              </div>
                            </div>
                            <p className="font-jost font-bold text-base text-[#131118] mt-[15px]">
                              Excellent Product, I Love It 😍
                            </p>
                            <p className="font-jost font-normal text-base text-[#131118] mt-[9px]">
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, as opposed to using
                              'Content here, content here', making it look like
                              readable English.
                            </p>
                            <div className="font-jost font-normal text-[14px] text-[#A4A2AA] mt-[12px]">
                              Review by{" "}
                              <span className="text-[#133118]">Krist</span>{" "}
                              Posted on{" "}
                              <span className="text-[#133118]">
                                June 05, 2023
                              </span>
                            </div>
                            <div className="w-full h-[1px] bg-[#A4A1AA33] my-5"></div>
                          </div>
                          <div>
                            <div className="flex flex-row items-center gap-[10px]">
                              <Image
                                src={"/11.jpg"}
                                alt="user"
                                width={900}
                                height={900}
                                className="w-[50px] h-[50px] rounded-full"
                              />
                              <div>
                                <h1 className="font-jost font-normal text-base text-[#131118]">
                                  Mark Williams
                                </h1>
                                <div className="flex flex-row items-center gap-2 mt-[7px]">
                                  <AiFillStar className="text-[#F59E0B] text-base" />
                                  <AiFillStar className="text-[#F59E0B] text-base" />
                                  <AiFillStar className="text-[#F59E0B] text-base" />
                                  <AiFillStar className="text-[#F59E0B] text-base" />
                                  <AiFillStar className="text-[#F59E0B] text-base" />
                                </div>
                              </div>
                            </div>
                            <p className="font-jost font-bold text-base text-[#131118] mt-[15px]">
                              Excellent Product, I Love It 😍
                            </p>
                            <p className="font-jost font-normal text-base text-[#131118] mt-[9px]">
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, as opposed to using
                              'Content here, content here', making it look like
                              readable English.
                            </p>
                            <div className="font-jost font-normal text-[14px] text-[#A4A2AA] mt-[12px]">
                              Review by{" "}
                              <span className="text-[#133118]">Krist</span>{" "}
                              Posted on{" "}
                              <span className="text-[#133118]">
                                June 05, 2023
                              </span>
                            </div>
                            <div className="w-full h-[1px] bg-[#A4A1AA33] my-5"></div>
                          </div>
                        </div>

                        <h1 className="font-jost font-bold text-base text-[#131118]">
                          Add your Review
                        </h1>

                        <div className="mt-5">
                          <h1 className="font-jost font-normal text-base text-[#131118]">
                            Your Rating
                          </h1>
                          <div className="flex flex-row items-center text-xl mt-[10px]">
                            <div className="pr-[10px] border-r border-r-[#A4A1AA33]">
                              <CiStar className="" />
                            </div>
                            <div className="flex flex-row items-center gap-1 px-[10px] border-r border-r-[#A4A1AA33]">
                              <CiStar className="" />
                              <CiStar className="" />
                            </div>
                            <div className="flex flex-row items-center gap-1 px-[10px] border-r border-r-[#A4A1AA33]">
                              <CiStar className="" />
                              <CiStar className="" />
                              <CiStar className="" />
                            </div>
                            <div className="flex flex-row items-center gap-1 pl-[10px]">
                              <CiStar className="" />
                              <CiStar className="" />
                              <CiStar className="" />
                              <CiStar className="" />
                            </div>
                          </div>
                        </div>

                        <form
                          action=""
                          className="flex flex-col gap-[22px] mt-8"
                        >
                          <div className="flex flex-col gap-[5px] text-[#131118]">
                            <label htmlFor="name">Name</label>
                            <input
                              type="text"
                              name=""
                              id="name"
                              placeholder="Enter Your Name"
                              className="w-full h-10 sm:h-[56px] outline-none border border-[#131118] rounded-[10px] p-4"
                            />
                          </div>
                          <div className="flex flex-col gap-[5px]">
                            <label htmlFor="email">Email Address</label>
                            <input
                              type="text"
                              name=""
                              id="email"
                              placeholder="Enter Your Email"
                              className="w-full h-10 sm:h-[56px] outline-none border border-[#131118] rounded-[10px] p-4"
                            />
                          </div>
                          <div className="flex flex-col gap-[5px]">
                            <label htmlFor="review">Your Review</label>
                            <textarea
                              name=""
                              id="review"
                              placeholder="Enter Your Review"
                              className="w-full h-[50px] sm:h-[104px] outline-none border border-[#131118] rounded-[10px] p-4"
                            ></textarea>
                          </div>

                          <button className="text-lg sm:text-xl lg:text-[26px] font-normal font-jost px-8 md:px-[46px] py-2 md:py-4 rounded-[10px] text-start bg-[#131118] text-[#fff] w-fit mt-[30px]">
                            Submit
                          </button>
                        </form>
                      </div>
                    ),
                  },
                ]}
              />
            </ConfigProvider>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {/* <RelatedProducts /> */}

      {/* Service Section */}
      <Services />
    </div>
  );
};

export default ProductId;
