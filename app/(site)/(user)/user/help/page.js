"use client";
import { Button } from "@/app/component/common/button";
import FormInput from "@/app/component/from/input";
import { Form } from "antd";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaHeadset } from "react-icons/fa";
import ContactMethod from "../components/help/contactmethods";
import Faq from "../components/help/faq";

const HelpSupport = () => {
  return (
    <div className="w-full">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">Help & Support</h1>

      {/* Contact Methods */}
      <ContactMethod />

      {/* FAQ Section */}
      <Faq />

      {/* Contact Form */}
      <div className="border p-6 rounded-xl mb-10">
        <h2 className="text-xl font-semibold mb-4">Still Need Help? Send Us a Message</h2>
        <Form className=" bg-white w-full">
            <div className="">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="h-[48px]">
                  <FormInput type={"text"} placeholder={"Full Name"} className={"!py-3 !border-cardBorder focus:!border-bgHover"} />
                </div>
                <div className="h-[48px]">
                  <FormInput type={"email"} placeholder={"Email Address"} className={"!py-3 !border-cardBorder focus:!border-bgHover"} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="h-[48px]">
                  <FormInput type={"text"} placeholder={"Phone Numbar"} className={"!py-3 !border-cardBorder focus:!border-bgHover"} />
                </div>
                <div className="h-[48px]">
                  <FormInput type={"email"} placeholder={"Address"} className={"!py-3 !border-cardBorder focus:!border-bgHover"} />
                </div>
              </div>
              <div className="h-[48px] mt-4">
                  <FormInput type={"text"} placeholder={"Subject"} className={"!py-3 !border-cardBorder focus:!border-bgHover"} />
                </div>
              <div className="h-[120px] mt-4">
                <FormInput textArea={'textArea'} rows={"4"} placeholder={"Type your message here"} className={"!py-3 !border-cardBorder focus:!border-bgHover !h-fit"}/>
              </div>
            </div>

            <Button text={"Send Message"} className="!py-3 !mt-4" />
          </Form>
      </div>
    </div>
  );
};

export default HelpSupport;
