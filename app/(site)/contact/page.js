import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import Breadcrumb from "@/app/component/common/breadcrumb";
import { Button } from "@/app/component/common/button";
import Link from "next/link";

export default function ContactPage() {
  const page = [
    { title: "Home", link: "/" },
    { title: "Contact", link: "#" },
  ]
  return (
    <div className="header_top bg-[#f9f9f9]">
        {/* Breadcrumb Navigation */}
        <Breadcrumb title={"Contact"} page={page} />
      <div className="container my-8 md:my-[72px]">
        <div className=" mx-auto bg-white rounded-2xl shadow-lg border grid lg:grid-cols-2 overflow-hidden">
          {/* Left Side - Contact Info */}
          <div className="p-10 text-gray-800 bg-white flex flex-col sm:flex-row lg:flex-col  ictems-center justify-between lg:justify-center ">
            <div className="mb-14">
              <h2 className="text-xl md:text-2xl font-bold mb-2 capitalize">Location</h2>
              <p className="text-gray-600">
                28 Jackson Blvd Ste 1020 Chicago
                <br />
                IL 60604-2340
              </p>
            </div>

            <div className="">
              <h2 className="text-xl md:text-2xl font-bold mb-2 capitalize text-[#004000]">
                Follow Us
              </h2>
              <div className="flex gap-4 mt-4 text-xl text-gray-700">
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="p-2 border rounded-full"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="#"
                  aria-label="Twitter"
                  className="p-2 border rounded-full"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="p-2 border rounded-full"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="#"
                  aria-label="Google Plus"
                  className="p-2 border rounded-full"
                >
                  <FaGooglePlusG />
                </Link>
              </div>
              <p className="text-sm text-gray-500 mt-4 lg:mt-14">
                ©2018{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form className="p-10 space-y-6 bg-white">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Contact Us
              </h3>
              <p className="text-gray-500">Let’s get in touch</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 p-3 rounded-lg w-full"
                required
              />
              <input
                type="text"
                placeholder="Company"
                className="border border-gray-300 p-3 rounded-lg w-full"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <span className=" text-xl absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
                  <HiOutlineMail />
                </span>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="pl-10 border border-gray-300 p-3 rounded-lg w-full"
                  required
                />
              </div>

              <div className="flex flex-row items-center border border-gray-300 p-3 rounded-lg gap-2">
                <div>
                  <div className="flex items-center gap-1 text-gray-400 text-base">
                    <span>US</span>
                    <MdKeyboardArrowDown />
                  </div>
                </div>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="outline-none  w-full"
                />
              </div>
            </div>

            <input
              type="text"
              placeholder="Address"
              className="border border-gray-300 p-3 rounded-lg w-full"
            />

            <textarea
              placeholder="Type your message here"
              rows={4}
              className="border border-gray-300 p-3 rounded-lg w-full"
              required
            />

            <Button text={"Send Message"} className="!py-3"/>
          </form>
        </div>
      </div>
      <div className="  w-full h-64 md:h-96 mt-[60px]">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.726546595275!2d-87.6301072845622!3d41.87811367922156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cba2c4a2e9b%3A0x8e7f5debe4dc5aa!2s28%20Jackson%20Blvd%20Ste%201020%2C%20Chicago%2C%20IL%2060604-2340!5e0!3m2!1sen!2sus!4v1614304567829!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
