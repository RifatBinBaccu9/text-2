"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCanadianMapleLeaf } from "react-icons/fa6";
import { MdOutlineDateRange, MdOutlineTextsms } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaLink,
} from "react-icons/fa";
import { GiBookmarklet } from "react-icons/gi";
import Breadcrumb from "@/app/component/common/breadcrumb";
import { Button } from "@/app/component/common/button";
import FormInput from "@/app/component/from/input";

const blogs = [
  {
    id: 12,
    image: "/blog-main.jpeg",
    title: "Latest Trends in Women's Fashion",
    dis: "Discover the latest trends in women's fashion, where style meets versatility. Explore a wide range of choices, from comfortable casual wear perfect for everyday life to stunning party outfits that make a statement. Modern fashion embraces bold colors, elegant designs, and effortless charm, helping every woman express her unique personality with confidence and grace.",
    name: "Sumaiya Khan",
    date: "March 15, 2025",
    sms: "897",
    category: "Fashion",
    user_name: "/rifat_mias.jpg",
    intro:
      "Women's fashion is always evolving, combining comfort and style to craft beautiful looks for every occasion. From casual wear to elegant evening outfits, trends are designed to highlight individuality and confidence. Fashion today embraces diversity, allowing women to express themselves freely while staying comfortable and stylish in every setting.",
    imageuser: "/fashion-women-9.jpg",
    text: "Trendy dresses, cozy loungewear, and bold accessories define the latest women's fashion trends. This season focuses on blending comfort with striking style, allowing women to express their individuality effortlessly while staying fashionable, confident, and ready for any occasion.",
    text2:
      "Wearing comfortable and well-designed clothing not only enhances appearance but also boosts confidence and overall well-being. When you feel good in what you wear, it positively impacts your mood and attitude. Fashion today focuses on blending style with comfort, empowering individuals to express themselves freely and feel their best every day.",
    useimg: "/blog-site.jpeg",
    useimg2: "/blog-site2.jpeg",
    conclusion:
      "Women's fashion encourages creativity and self-expression, evolving gracefully with changing trends. It reflects individuality, confidence, and the spirit of the times, allowing every woman to showcase her unique style.",
  },
  {
    id: 11,
    image: "/blog-main.jpeg",
    title: "Latest Trends in Women's Fashion",
    dis: "Discover the latest trends in women's fashion, where style meets versatility. Explore a wide range of choices, from comfortable casual wear perfect for everyday life to stunning party outfits that make a statement. Modern fashion embraces bold colors, elegant designs, and effortless charm, helping every woman express her unique personality with confidence and grace.",
    name: "Sumaiya Khan",
    date: "March 15, 2025",
    sms: "897",
    category: "Fashion",
    user_name: "/rifat_mias.jpg",
    intro:
      "Women's fashion is always evolving, combining comfort and style to craft beautiful looks for every occasion. From casual wear to elegant evening outfits, trends are designed to highlight individuality and confidence. Fashion today embraces diversity, allowing women to express themselves freely while staying comfortable and stylish in every setting.",
    imageuser: "/fashion-women-9.jpg",
    text: "Trendy dresses, cozy loungewear, and bold accessories define the latest women's fashion trends. This season focuses on blending comfort with striking style, allowing women to express their individuality effortlessly while staying fashionable, confident, and ready for any occasion.",
    text2:
      "Wearing comfortable and well-designed clothing not only enhances appearance but also boosts confidence and overall well-being. When you feel good in what you wear, it positively impacts your mood and attitude. Fashion today focuses on blending style with comfort, empowering individuals to express themselves freely and feel their best every day.",
    useimg: "/blog-site.jpeg",
    useimg2: "/blog-site2.jpeg",
    conclusion:
      "Women's fashion encourages creativity and self-expression, evolving gracefully with changing trends. It reflects individuality, confidence, and the spirit of the times, allowing every woman to showcase her unique style.",
  },
  {
    id: 10,
    image: "/blog-main.jpeg",
    title: "Latest Trends in Women's Fashion",
    dis: "Discover the latest trends in women's fashion, where style meets versatility. Explore a wide range of choices, from comfortable casual wear perfect for everyday life to stunning party outfits that make a statement. Modern fashion embraces bold colors, elegant designs, and effortless charm, helping every woman express her unique personality with confidence and grace.",
    name: "Sumaiya Khan",
    date: "March 15, 2025",
    sms: "897",
    category: "Fashion",
    user_name: "/rifat_mias.jpg",
    intro:
      "Women's fashion is always evolving, combining comfort and style to craft beautiful looks for every occasion. From casual wear to elegant evening outfits, trends are designed to highlight individuality and confidence. Fashion today embraces diversity, allowing women to express themselves freely while staying comfortable and stylish in every setting.",
    imageuser: "/fashion-women-9.jpg",
    text: "Trendy dresses, cozy loungewear, and bold accessories define the latest women's fashion trends. This season focuses on blending comfort with striking style, allowing women to express their individuality effortlessly while staying fashionable, confident, and ready for any occasion.",
    text2:
      "Wearing comfortable and well-designed clothing not only enhances appearance but also boosts confidence and overall well-being. When you feel good in what you wear, it positively impacts your mood and attitude. Fashion today focuses on blending style with comfort, empowering individuals to express themselves freely and feel their best every day.",
    useimg: "/blog-site.jpeg",
    useimg2: "/blog-site2.jpeg",
    conclusion:
      "Women's fashion encourages creativity and self-expression, evolving gracefully with changing trends. It reflects individuality, confidence, and the spirit of the times, allowing every woman to showcase her unique style.",
  },
  {
    id: 9,
    image: "/blog-main.jpeg",
    title: "Latest Trends in Women's Fashion",
    dis: "Discover the latest trends in women's fashion, where style meets versatility. Explore a wide range of choices, from comfortable casual wear perfect for everyday life to stunning party outfits that make a statement. Modern fashion embraces bold colors, elegant designs, and effortless charm, helping every woman express her unique personality with confidence and grace.",
    name: "Sumaiya Khan",
    date: "March 15, 2025",
    sms: "897",
    category: "Fashion",
    user_name: "/rifat_mias.jpg",
    intro:
      "Women's fashion is always evolving, combining comfort and style to craft beautiful looks for every occasion. From casual wear to elegant evening outfits, trends are designed to highlight individuality and confidence. Fashion today embraces diversity, allowing women to express themselves freely while staying comfortable and stylish in every setting.",
    imageuser: "/fashion-women-9.jpg",
    text: "Trendy dresses, cozy loungewear, and bold accessories define the latest women's fashion trends. This season focuses on blending comfort with striking style, allowing women to express their individuality effortlessly while staying fashionable, confident, and ready for any occasion.",
    text2:
      "Wearing comfortable and well-designed clothing not only enhances appearance but also boosts confidence and overall well-being. When you feel good in what you wear, it positively impacts your mood and attitude. Fashion today focuses on blending style with comfort, empowering individuals to express themselves freely and feel their best every day.",
    useimg: "/blog-site.jpeg",
    useimg2: "/blog-site2.jpeg",
    conclusion:
      "Women's fashion encourages creativity and self-expression, evolving gracefully with changing trends. It reflects individuality, confidence, and the spirit of the times, allowing every woman to showcase her unique style.",
  },
  {
    id: 8,
    image: "/blog-main.jpeg",
    title: "Latest Trends in Women's Fashion",
    dis: "Discover the latest trends in women's fashion, where style meets versatility. Explore a wide range of choices, from comfortable casual wear perfect for everyday life to stunning party outfits that make a statement. Modern fashion embraces bold colors, elegant designs, and effortless charm, helping every woman express her unique personality with confidence and grace.",
    name: "Sumaiya Khan",
    date: "March 15, 2025",
    sms: "897",
    category: "Fashion",
    user_name: "/rifat_mias.jpg",
    intro:
      "Women's fashion is always evolving, combining comfort and style to craft beautiful looks for every occasion. From casual wear to elegant evening outfits, trends are designed to highlight individuality and confidence. Fashion today embraces diversity, allowing women to express themselves freely while staying comfortable and stylish in every setting.",
    imageuser: "/fashion-women-9.jpg",
    text: "Trendy dresses, cozy loungewear, and bold accessories define the latest women's fashion trends. This season focuses on blending comfort with striking style, allowing women to express their individuality effortlessly while staying fashionable, confident, and ready for any occasion.",
    text2:
      "Wearing comfortable and well-designed clothing not only enhances appearance but also boosts confidence and overall well-being. When you feel good in what you wear, it positively impacts your mood and attitude. Fashion today focuses on blending style with comfort, empowering individuals to express themselves freely and feel their best every day.",
    useimg: "/blog-site.jpeg",
    useimg2: "/blog-site2.jpeg",
    conclusion:
      "Women's fashion encourages creativity and self-expression, evolving gracefully with changing trends. It reflects individuality, confidence, and the spirit of the times, allowing every woman to showcase her unique style.",
  },
  {
    id: 7,
    image: "/blog-main.jpeg",
    title: "Latest Trends in Women's Fashion",
    dis: "Discover the latest trends in women's fashion, where style meets versatility. Explore a wide range of choices, from comfortable casual wear perfect for everyday life to stunning party outfits that make a statement. Modern fashion embraces bold colors, elegant designs, and effortless charm, helping every woman express her unique personality with confidence and grace.",
    name: "Sumaiya Khan",
    date: "March 15, 2025",
    sms: "897",
    category: "Fashion",
    user_name: "/rifat_mias.jpg",
    intro:
      "Women's fashion is always evolving, combining comfort and style to craft beautiful looks for every occasion. From casual wear to elegant evening outfits, trends are designed to highlight individuality and confidence. Fashion today embraces diversity, allowing women to express themselves freely while staying comfortable and stylish in every setting.",
    imageuser: "/fashion-women-9.jpg",
    text: "Trendy dresses, cozy loungewear, and bold accessories define the latest women's fashion trends. This season focuses on blending comfort with striking style, allowing women to express their individuality effortlessly while staying fashionable, confident, and ready for any occasion.",
    text2:
      "Wearing comfortable and well-designed clothing not only enhances appearance but also boosts confidence and overall well-being. When you feel good in what you wear, it positively impacts your mood and attitude. Fashion today focuses on blending style with comfort, empowering individuals to express themselves freely and feel their best every day.",
    useimg: "/blog-site.jpeg",
    useimg2: "/blog-site2.jpeg",
    conclusion:
      "Women's fashion encourages creativity and self-expression, evolving gracefully with changing trends. It reflects individuality, confidence, and the spirit of the times, allowing every woman to showcase her unique style.",
  },
  {
    id: 6,
    image: "/blog-main.jpeg",
    title: "Latest Trends in Women's Fashion",
    dis: "Discover the latest trends in women's fashion, where style meets versatility. Explore a wide range of choices, from comfortable casual wear perfect for everyday life to stunning party outfits that make a statement. Modern fashion embraces bold colors, elegant designs, and effortless charm, helping every woman express her unique personality with confidence and grace.",
    name: "Sumaiya Khan",
    date: "March 15, 2025",
    sms: "897",
    category: "Fashion",
    user_name: "/rifat_mias.jpg",
    intro:
      "Women's fashion is always evolving, combining comfort and style to craft beautiful looks for every occasion. From casual wear to elegant evening outfits, trends are designed to highlight individuality and confidence. Fashion today embraces diversity, allowing women to express themselves freely while staying comfortable and stylish in every setting.",
    imageuser: "/fashion-women-9.jpg",
    text: "Trendy dresses, cozy loungewear, and bold accessories define the latest women's fashion trends. This season focuses on blending comfort with striking style, allowing women to express their individuality effortlessly while staying fashionable, confident, and ready for any occasion.",
    text2:
      "Wearing comfortable and well-designed clothing not only enhances appearance but also boosts confidence and overall well-being. When you feel good in what you wear, it positively impacts your mood and attitude. Fashion today focuses on blending style with comfort, empowering individuals to express themselves freely and feel their best every day.",
    useimg: "/blog-site.jpeg",
    useimg2: "/blog-site2.jpeg",
    conclusion:
      "Women's fashion encourages creativity and self-expression, evolving gracefully with changing trends. It reflects individuality, confidence, and the spirit of the times, allowing every woman to showcase her unique style.",
  },
  {
    id: 5,
    image: "/blog-main.jpeg",
    title: "Latest Trends in Women's Fashion",
    dis: "Discover the latest trends in women's fashion, where style meets versatility. Explore a wide range of choices, from comfortable casual wear perfect for everyday life to stunning party outfits that make a statement. Modern fashion embraces bold colors, elegant designs, and effortless charm, helping every woman express her unique personality with confidence and grace.",
    name: "Sumaiya Khan",
    date: "March 15, 2025",
    sms: "897",
    category: "Fashion",
    user_name: "/rifat_mias.jpg",
    intro:
      "Women's fashion is always evolving, combining comfort and style to craft beautiful looks for every occasion. From casual wear to elegant evening outfits, trends are designed to highlight individuality and confidence. Fashion today embraces diversity, allowing women to express themselves freely while staying comfortable and stylish in every setting.",
    imageuser: "/fashion-women-9.jpg",
    text: "Trendy dresses, cozy loungewear, and bold accessories define the latest women's fashion trends. This season focuses on blending comfort with striking style, allowing women to express their individuality effortlessly while staying fashionable, confident, and ready for any occasion.",
    text2:
      "Wearing comfortable and well-designed clothing not only enhances appearance but also boosts confidence and overall well-being. When you feel good in what you wear, it positively impacts your mood and attitude. Fashion today focuses on blending style with comfort, empowering individuals to express themselves freely and feel their best every day.",
    useimg: "/blog-site.jpeg",
    useimg2: "/blog-site2.jpeg",
    conclusion:
      "Women's fashion encourages creativity and self-expression, evolving gracefully with changing trends. It reflects individuality, confidence, and the spirit of the times, allowing every woman to showcase her unique style.",
  },
  {
    id: 4,
    image: "/blog-main.jpeg",
    title: "Latest Trends in Women's Fashion",
    dis: "Discover the latest trends in women's fashion, where style meets versatility. Explore a wide range of choices, from comfortable casual wear perfect for everyday life to stunning party outfits that make a statement. Modern fashion embraces bold colors, elegant designs, and effortless charm, helping every woman express her unique personality with confidence and grace.",
    name: "Sumaiya Khan",
    date: "March 15, 2025",
    sms: "897",
    category: "Fashion",
    user_name: "/rifat_mias.jpg",
    intro:
      "Women's fashion is always evolving, combining comfort and style to craft beautiful looks for every occasion. From casual wear to elegant evening outfits, trends are designed to highlight individuality and confidence. Fashion today embraces diversity, allowing women to express themselves freely while staying comfortable and stylish in every setting.",
    imageuser: "/fashion-women-9.jpg",
    text: "Trendy dresses, cozy loungewear, and bold accessories define the latest women's fashion trends. This season focuses on blending comfort with striking style, allowing women to express their individuality effortlessly while staying fashionable, confident, and ready for any occasion.",
    text2:
      "Wearing comfortable and well-designed clothing not only enhances appearance but also boosts confidence and overall well-being. When you feel good in what you wear, it positively impacts your mood and attitude. Fashion today focuses on blending style with comfort, empowering individuals to express themselves freely and feel their best every day.",
    useimg: "/blog-site.jpeg",
    useimg2: "/blog-site2.jpeg",
    conclusion:
      "Women's fashion encourages creativity and self-expression, evolving gracefully with changing trends. It reflects individuality, confidence, and the spirit of the times, allowing every woman to showcase her unique style.",
  },
  {
    id: 3,
    image: "/blog-main.jpeg",
    title: "Latest Trends in Women's Fashion",
    dis: "Discover the latest trends in women's fashion, where style meets versatility. Explore a wide range of choices, from comfortable casual wear perfect for everyday life to stunning party outfits that make a statement. Modern fashion embraces bold colors, elegant designs, and effortless charm, helping every woman express her unique personality with confidence and grace.",
    name: "Sumaiya Khan",
    date: "March 15, 2025",
    sms: "897",
    category: "Fashion",
    user_name: "/rifat_mias.jpg",
    intro:
      "Women's fashion is always evolving, combining comfort and style to craft beautiful looks for every occasion. From casual wear to elegant evening outfits, trends are designed to highlight individuality and confidence. Fashion today embraces diversity, allowing women to express themselves freely while staying comfortable and stylish in every setting.",
    imageuser: "/fashion-women-9.jpg",
    text: "Trendy dresses, cozy loungewear, and bold accessories define the latest women's fashion trends. This season focuses on blending comfort with striking style, allowing women to express their individuality effortlessly while staying fashionable, confident, and ready for any occasion.",
    text2:
      "Wearing comfortable and well-designed clothing not only enhances appearance but also boosts confidence and overall well-being. When you feel good in what you wear, it positively impacts your mood and attitude. Fashion today focuses on blending style with comfort, empowering individuals to express themselves freely and feel their best every day.",
    useimg: "/blog-site.jpeg",
    useimg2: "/blog-site2.jpeg",
    conclusion:
      "Women's fashion encourages creativity and self-expression, evolving gracefully with changing trends. It reflects individuality, confidence, and the spirit of the times, allowing every woman to showcase her unique style.",
  },
  {
    id: 2,
    image: "/blog-main.jpeg",
    title: "Latest Trends in Women's Fashion",
    dis: "Discover the latest trends in women's fashion, where style meets versatility. Explore a wide range of choices, from comfortable casual wear perfect for everyday life to stunning party outfits that make a statement. Modern fashion embraces bold colors, elegant designs, and effortless charm, helping every woman express her unique personality with confidence and grace.",
    name: "Sumaiya Khan",
    date: "March 15, 2025",
    sms: "897",
    category: "Fashion",
    user_name: "/rifat_mias.jpg",
    intro:
      "Women's fashion is always evolving, combining comfort and style to craft beautiful looks for every occasion. From casual wear to elegant evening outfits, trends are designed to highlight individuality and confidence. Fashion today embraces diversity, allowing women to express themselves freely while staying comfortable and stylish in every setting.",
    imageuser: "/fashion-women-9.jpg",
    text: "Trendy dresses, cozy loungewear, and bold accessories define the latest women's fashion trends. This season focuses on blending comfort with striking style, allowing women to express their individuality effortlessly while staying fashionable, confident, and ready for any occasion.",
    text2:
      "Wearing comfortable and well-designed clothing not only enhances appearance but also boosts confidence and overall well-being. When you feel good in what you wear, it positively impacts your mood and attitude. Fashion today focuses on blending style with comfort, empowering individuals to express themselves freely and feel their best every day.",
    useimg: "/blog-site.jpeg",
    useimg2: "/blog-site2.jpeg",
    conclusion:
      "Women's fashion encourages creativity and self-expression, evolving gracefully with changing trends. It reflects individuality, confidence, and the spirit of the times, allowing every woman to showcase her unique style.",
  },
  {
    id: 1,
    image: "/blog-main.jpeg",
    title: "Latest Trends in Women's Fashion",
    dis: "Discover the latest trends in women's fashion, where style meets versatility. Explore a wide range of choices, from comfortable casual wear perfect for everyday life to stunning party outfits that make a statement. Modern fashion embraces bold colors, elegant designs, and effortless charm, helping every woman express her unique personality with confidence and grace.",
    name: "Sumaiya Khan",
    date: "March 15, 2025",
    sms: "897",
    category: "Fashion",
    user_name: "/rifat_mias.jpg",
    intro:
      "Women's fashion is always evolving, combining comfort and style to craft beautiful looks for every occasion. From casual wear to elegant evening outfits, trends are designed to highlight individuality and confidence. Fashion today embraces diversity, allowing women to express themselves freely while staying comfortable and stylish in every setting.",
    imageuser: "/fashion-women-9.jpg",
    text: "Trendy dresses, cozy loungewear, and bold accessories define the latest women's fashion trends. This season focuses on blending comfort with striking style, allowing women to express their individuality effortlessly while staying fashionable, confident, and ready for any occasion.",
    text2:
      "Wearing comfortable and well-designed clothing not only enhances appearance but also boosts confidence and overall well-being. When you feel good in what you wear, it positively impacts your mood and attitude. Fashion today focuses on blending style with comfort, empowering individuals to express themselves freely and feel their best every day.",
    useimg: "/blog-site.jpeg",
    useimg2: "/blog-site2.jpeg",
    conclusion:
      "Women's fashion encourages creativity and self-expression, evolving gracefully with changing trends. It reflects individuality, confidence, and the spirit of the times, allowing every woman to showcase her unique style.",
  },
];

const user_media = [
  { icons: <FaWhatsapp />, color: "bg-green-500" },
  { icons: <FaFacebookF />, color: "bg-blue-700" },
  { icons: <FaTwitter />, color: "bg-blue-500" },
  { icons: <FaLinkedinIn />, color: "bg-blue-800" },
  { icons: <FaPinterestP />, color: "bg-red-600" },
  { icons: <FaLink />, color: "bg-gray-500" },
];
const BlogeDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((item) => item.id === parseInt(id));

  const page = [
    { title: "Home", link: "/" },
    { title: "Blog", link: "/blog" },
    { title: "Blog Details", link: "#" },
  ];
  return (
    <div className="header_top">
      <Breadcrumb title="Blog Details" page={page} />

      <div className=" w-full lg:w-[1024px] mx-auto px-3 my-8 md:my-[72px]">
        <div className="w-full flex flex-row items-center justify-center mb-8">
          <Image
            src={blog.image}
            alt="Zira Image"
            width={900}
            height={900}
            className="border border-bulu p-4 md:p-6 rounded-md w-full lg:w-[800px] h-[300px] md:h-[400px] lg:h-[500px] transition-transform transform hover:scale-105"
          />
        </div>

        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-4 mb-6">
            <span className="blog_dts_info">
              <FaCanadianMapleLeaf className="text-[#FA8232]" />
              <span>{blog.category}</span>
            </span>
            <span className="blog_dts_info">
              <FaRegUserCircle className="text-[#FA8232]" />
              <span>{blog.name}</span>
            </span>
            <span className="blog_dts_info">
              <MdOutlineDateRange className="text-[#FA8232]" />
              <span>{blog.date}</span>
            </span>
            <span className="blog_dts_info">
              <MdOutlineTextsms className="text-[#FA8232]" />
              <span>{blog.sms}</span>
            </span>
          </div>

          <h1 className="text-xl sm:text-[32px] font-semibold mt-4 mb-6">
            {blog.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 lg:mb-6 gap-6">
            <div className="flex flex-row  items-center gap-3">
              <Image
                src={blog.user_name}
                alt={blog.name}
                width={40}
                height={40}
                className="rounded-full w-[40px] h-[40px]"
              />
              <h1 className="text-sm font-medium">{blog.name}</h1>
            </div>
            <div>
              <div className="w-1/2 sm:w-full flex flex-row justify-between items-center gap-3 ">
                {user_media.map((item, index) => (
                  <Link
                    key={index}
                    href={"#"}
                    className={`blog_user_media ${item.color}`}
                  >
                    {item.icons}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="blog_dsts">{blog.dis}</p>

            <div className="flex flex-row items-center gap-6 px-[20px]  bg-secondary border-l-8 border-[#FA8232] rounded-lg">
              <div className="hidden sm:block">
                <GiBookmarklet className="text-5xl text-bulu" />
              </div>
              <p className="blog_dsts">{blog.intro}</p>
            </div>

            <div>
              <p className=" blog_dsts">{blog.text}</p>
              <p className="mb-4 blog_dsts">{blog.text2}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-[32px]">
              <Image
                src={blog.useimg}
                alt="Zira Benefits"
                width={1000}
                height={1000}
                className="rounded-md w-full h-[150px] sm:h-[300px] lg:h-[400px]"
              />
              <Image
                src={blog.useimg2}
                alt="Zira Cultivation"
                width={1000}
                height={1000}
                className="rounded-md w-full h-[150px] sm:h-[300px] lg:h-[400px]"
              />
            </div>

            <p className="text-base font-normal mb-8 lg:mb-[72px]">{blog.conclusion}</p>

            <div className="mb-6 lg:mb-[48px]">
              <h1 className="text-xl font-medium mb-6">Comment</h1>
              <div className="flex flex-col lg:flex-row gap-x-4">
                <FormInput
                  label={"Full Name"}
                  type={"text"}
                  placeholder={"Enter your name"}
                />
                <FormInput
                  label={"Email Address"}
                  type={"email"}
                  placeholder={"Enter your email"}
                />
              </div>
              <FormInput
                label={"Message"}
                textArea={true}
                placeholder={"Enter your message"}
                rows={5}
                cols={5}
              />
              <Button text={"Post comment"} className="mt-3 !py-3" />
            </div>

            <div className="mb-[72px]">
              <h1 className="text-xl font-medium mb-6">Comments</h1>
              <div className="flex flex-row gap-3 mb-6 border-b border-[#131118] pb-4">
                <div>
                  <Image
                    src="/rifat_mias.jpg"
                    alt="Commenter Image"
                    width={100}
                    height={100}
                    className="rounded-full w-10 h-10"
                  />
                </div>
                <div className="w-full">
                  <div className="flex flex-row justify-between  mb-2">
                    <div className="font-semibold text-sm">Annette Black</div>
                    <div className="text-sm font-normal text-[#475156]">
                      April 26, 2021
                    </div>
                  </div>
                  <p className="text-sm font-normal text-[#475156]">
                    Elevated athleisure is perfect for those stylish, comfy days
                    ahead!
                  </p>
                </div>
              </div>

              <Button text={"Load more"} icons={<TfiReload />} className="mt-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogeDetail;
