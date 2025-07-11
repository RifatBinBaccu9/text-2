"use client";
import { IoSearch } from "react-icons/io5";
import { Pagination, Tooltip } from "antd";
import { useState } from "react";
import BlogCard from "./blogCard";
import Breadcrumb from "@/app/component/common/breadcrumb";
import FormInput from "@/app/component/from/input";

const blogs = [
  {
    id: 1,
    image: "/blog-main.jpeg",
    title: "Latest Trends in Women's Fashion",
    dis: "Discover the latest trends in women's fashion, where style meets versatility. Explore a wide range of choices, from comfortable casual wear perfect for everyday life to stunning party outfits that make a statement. Modern fashion embraces bold colors, elegant designs, and effortless charm, helping every woman express her unique personality with confidence and grace.",
    name: "Sumaiya Khan",
    date: "March 15, 2025",
    sms: "897",
    category: "Fashion",
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
    image: "/blog8.jfif",
    title: "Men's Casual Style Guide for 2025",
    dis: "Explore how men can stay stylish and comfortable with the latest casual wear trends.",
    name: "Rakibul Islam",
    date: "March 10, 2025",
    sms: "654",
    category: "Fashion",
    intro:
      "Men's casual fashion is all about combining style with comfort, offering versatile outfits for daily life.",
    imageuser: "/fashion-men-8.jpg",
    text: "From smart polos to relaxed jeans, discover must-haves for every modern man's wardrobe.",
    text2:
      "Comfortable clothing improves body movement and boosts daily performance.",
    useimg: "/fashion8.jfif",
    useimg2: "/fashion9.jfif",
    conclusion:
      "A well-curated casual wardrobe enhances a man's personality and comfort.",
  },
  {
    id: 7,
    image: "/blog7.jfif",
    title: "Top Accessories to Elevate Your Look",
    dis: "Accessories are key to making your outfit stand out. Learn what’s trending now.",
    name: "Salma Akter",
    date: "March 2, 2025",
    sms: "812",
    category: "Fashion",
    intro:
      "Accessories like handbags, watches, and jewelry add the perfect finishing touch to any outfit.",
    imageuser: "/fashion-accessories-7.jpg",
    text: "Smart accessory choices can transform a simple outfit into a stunning style statement.",
    text2:
      "Lightweight and ergonomic accessories support body balance and posture.",
    useimg: "/fashion8.jfif",
    useimg2: "/fashion9.jfif",
    conclusion:
      "Choosing the right accessories is the secret to mastering everyday fashion.",
  },
  {
    id: 6,
    image: "/blog6.jfif",
    title: "Comfort Meets Style: Athleisure Trends",
    dis: "Athleisure wear is redefining modern fashion by combining fitness and casual styles.",
    name: "Imran Hossain",
    date: "February 25, 2025",
    sms: "721",
    category: "Fashion",
    intro:
      "Athleisure brings comfort to everyday outfits, making it a favorite for all age groups.",
    imageuser: "/fashion-athleisure-6.jpg",
    text: "From yoga pants to stylish hoodies, athleisure outfits are practical and fashionable.",
    text2: "Breathable fabrics enhance comfort and maintain body temperature.",
    useimg: "/fashion8.jfif",
    useimg2: "/fashion9.jfif",
    conclusion:
      "Athleisure is more than a trend — it’s a lifestyle choice for modern individuals.",
  },
  {
    id: 5,
    image: "/blog5.jfif",
    title: "Essential Clothing Tips for Healthy Skin",
    dis: "The right clothing can help keep your skin healthy. Learn how fabric choice matters.",
    name: "Nausheen Akter",
    date: "February 20, 2025",
    sms: "678",
    category: "Fashion",
    intro:
      "Choosing the right fabric helps your skin breathe and reduces irritation and allergies.",
    imageuser: "/fashion-skin-5.jpg",
    text: "Organic cotton and breathable fabrics prevent skin problems and provide extra comfort.",
    text2: "Natural fabrics protect your skin and promote better health.",
    useimg: "/fashion8.jfif",
    useimg2: "/fashion9.jfif",
    conclusion:
      "Healthy clothing choices are essential for maintaining beautiful and irritation-free skin.",
  },
  {
    id: 4,
    image: "/blog4.jfif",
    title: "Fashion Essentials for Every Season",
    dis: "Build a versatile wardrobe that fits every season’s demands with style and ease.",
    name: "Arif Rahman",
    date: "February 15, 2025",
    sms: "743",
    category: "Fashion",
    intro:
      "From cozy sweaters for winter to breathable fabrics for summer, clothing must adapt to seasonal needs.",
    imageuser: "/fashion-season-4.jpg",
    text: "Seasonal clothing choices keep you comfortable and stylish throughout the year.",
    text2:
      "Dressing appropriately for weather conditions supports overall health.",
    useimg: "/fashion8.jfif",
    useimg2: "/fashion9.jfif",
    conclusion: "A smart seasonal wardrobe ensures both comfort and elegance.",
  },
  {
    id: 3,
    image: "/blog3.jfif",
    title: "Daily Wardrobe Basics Everyone Needs",
    dis: "A few essential pieces can help you create a variety of stylish looks every day.",
    name: "Mehedi Hasan",
    date: "February 10, 2025",
    sms: "610",
    category: "Fashion",
    intro:
      "A good wardrobe foundation includes versatile basics that can be styled in multiple ways.",
    imageuser: "/fashion-basics-3.jpg",
    text: "Basic T-shirts, jeans, and classic jackets are must-haves for a functional wardrobe.",
    text2:
      "Light and well-fitting clothes support posture and make movement easier.",
    useimg: "/fashion8.jfif",
    useimg2: "/fashion9.jfif",
    conclusion:
      "Investing in good basics simplifies your daily styling choices.",
  },
  {
    id: 2,
    image: "/blog2.jfif",
    title: "Choosing the Right Outfit for Any Occasion",
    dis: "Different occasions call for different styles — learn how to pick the perfect outfit.",
    name: "Tanzila Rahman",
    date: "February 5, 2025",
    sms: "523",
    category: "Fashion",
    intro:
      "Understanding dress codes and personal style helps you choose outfits that fit the occasion.",
    imageuser: "/fashion-occasion-2.jpg",
    text: "Formal events require tailored pieces, while casual outings allow for creative expression.",
    text2:
      "Comfortable and appropriate clothing reduces stress and boosts confidence.",
    useimg: "/fashion8.jfif",
    useimg2: "/fashion9.jfif",
    conclusion:
      "Choosing outfits smartly for each occasion enhances your presence and comfort.",
  },
  {
    id: 9,
    image: "/blog1.jfif",
    title: "The Evolution of Fashion Through Time",
    dis: "Fashion has evolved over centuries, reflecting cultural changes and innovations.",
    name: "Sadia Jahan",
    date: "February 1, 2025",
    sms: "450",
    category: "Fashion",
    intro:
      "Fashion history shows how clothing has mirrored social, economic, and technological developments.",
    imageuser: "/fashion-history-1.jpg",
    text: "From ancient robes to modern streetwear, fashion keeps telling the story of humanity.",
    text2:
      "Fashion evolution also promotes comfort, adaptability, and self-confidence.",
    useimg: "/fashion8.jfif",
    useimg2: "/fashion9.jfif",
    conclusion:
      "Fashion is not just clothing — it’s a reflection of history, identity, and innovation.",
  },
];

const BlogList = () => {
  const [searchQuery, setSearchQuery] = useState("");
const [currentPage, setCurrentPage] = useState(1);
const pageSize = 6;

const filteredBlogs = blogs.filter((blog) => {
  return (
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.dis.toLowerCase().includes(searchQuery.toLowerCase())
  );
});

const startIndex = (currentPage - 1) * pageSize;
const endIndex = startIndex + pageSize;
const paginatedBlogs = filteredBlogs.slice(startIndex, endIndex);


  const page = [
    { title: "Home", link: "/" },
    { title: "Blog", link: "/blog" },
  ];
  return (
    <div className="header_top">
      <Breadcrumb title={"Blog"} page={page} />
      <section className="container my-8 md:my-[72px] ">
        <div className=" flex flex-col sm:flex-row justify-between items-center sm:items-start">
          <h1 className="text-3xl xl:text-4xl font-bold font-poppins mb-5 sm:mb-0 text-textNormal">
            Our Latest News
          </h1>

          <div className="">
            <FormInput type={"text"} placeholder={"Search product..."} className={"lg:!w-[430px] sm:!w-[400px] !w-[350px] !py-3 focus:!border-bgNormal !border-cardBorder"} icon={<IoSearch />} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
  {paginatedBlogs.map((cardList, idx) => (
    <BlogCard key={idx} cardList={cardList}></BlogCard>
  ))}
</div>

<div className="flex flex-row items-center justify-center mt-10">
  <Pagination
    current={currentPage}
    total={filteredBlogs.length}
    pageSize={pageSize}
    onChange={(page) => setCurrentPage(page)}
    showSizeChanger={false}
  />
</div>

      </section>
    </div>
  );
};

export default BlogList;
