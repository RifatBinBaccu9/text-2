"use client";
import { FaInstagram, FaHeadset, FaCreditCard } from "react-icons/fa";
import { AiOutlineDollarCircle } from "react-icons/ai";
import ServiceCard from "./serviceCard";

const services = [
  {
    id: 1,
    imgIcon: <FaInstagram />,
    title: "Free Shipping",
    paragraph: "Free shipping for orders above $150",
  },
  {
    id: 2,
    imgIcon: <AiOutlineDollarCircle />,
    title: "Money Guarantee",
    paragraph: "Return within 30 days of purchase",
  },
  {
    id: 3,
    imgIcon: <FaHeadset />,
    title: "Online Support",
    paragraph: "24/7 customer care team ready to help",
  },
  {
    id: 4,
    imgIcon: <FaCreditCard />,
    title: "Secure Payment",
    paragraph: "Multiple credit & debit card options",
  },
];

const Services = ({className}) => {
  return (
    <section className={`container my-[50px] md:my-[100px] px-4 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
