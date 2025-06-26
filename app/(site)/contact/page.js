"use client";

import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Breadcrumb from "@/app/component/common/breadcrumb";
import { Button } from "@/app/component/common/button";
import Link from "next/link";
import { Form } from "antd";
import FormInput from "@/app/component/from/input";
import ContactMethod from "../(user)/user/components/help/contactmethods";
import Faq from "../(user)/user/components/help/faq";

export default function ContactPage() {
  const page = [
    { title: "Home", link: "/" },
    { title: "Contact", link: "#" },
  ];

  return (
    <div className="header_top">
      {/* Breadcrumb */}
      <Breadcrumb title="Contact" page={page} />

      {/* Contact Methods */}
      <div className="max-w-[1100px] mx-auto my-8 md:my-[72px]">
        <ContactMethod />
      </div>

      {/* Contact Section */}
      <div className="container my-8 md:my-[72px]">
        <div className="mx-auto flex flex-col lg:flex-row gap-8">

          {/* Left Side: Social & Map */}
          <div className="w-full lg:w-1/2 bg-white p-6 rounded shadow border border-y-bgNormal border-l-bgNormal">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Follow Us on Social Media
            </h3>
            <div className="flex gap-4 text-xl text-gray-700 mb-6">
              <Link
                href="#"
                aria-label="Facebook"
                className="p-2 border rounded-full hover:text-bgNormal hover:bg-textHover hover:border-cardBorder"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="p-2 border rounded-full hover:text-bgNormal hover:bg-textHover hover:border-cardBorder"
              >
                <FaTwitter />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="p-2 border rounded-full hover:text-bgNormal hover:bg-textHover hover:border-cardBorder"
              >
                <FaInstagram />
              </Link>
              <Link
                href="#"
                aria-label="Google Plus"
                className="p-2 border rounded-full hover:text-bgNormal hover:bg-textHover hover:border-cardBorder"
              >
                <FaGooglePlusG />
              </Link>
            </div>

            {/* Google Map */}
            <div className="w-full h-[400px]">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=..."
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full lg:w-1/2 bg-white p-6 rounded shadow border border-y-bgNormal border-r-bgNormal">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                Contact Us
              </h3>
              <p className="text-gray-500">Let’s get in touch</p>
            </div>

            <Form layout="vertical">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                  type="text"
                  placeholder="Full Name"
                  className="!py-3 !border-cardBorder focus:!border-bgHover"
                />
                <FormInput
                  type="email"
                  placeholder="Email Address"
                  className="!py-3 !border-cardBorder focus:!border-bgHover"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <FormInput
                  type="text"
                  placeholder="Phone Number"
                  className="!py-3 !border-cardBorder focus:!border-bgHover"
                />
                <FormInput
                  type="text"
                  placeholder="Address"
                  className="!py-3 !border-cardBorder focus:!border-bgHover"
                />
              </div>

              <div className="mt-4">
                <FormInput
                  type="text"
                  placeholder="Subject"
                  className="!py-3 !border-cardBorder focus:!border-bgHover"
                />
              </div>

              <div className="mt-4">
                <FormInput
                  textArea="textArea"
                  rows="4"
                  placeholder="Type your message here"
                  className="!py-3 !border-cardBorder focus:!border-bgHover !h-fit"
                />
              </div>

              <Button text="Send Message" className="!py-3 !mt-4" />
            </Form>
          </div>
        </div>

      <div className="mt-14">
        <Faq />
      </div>
      </div>

    </div>
  );
}
