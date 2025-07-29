import React, { useRef } from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Testimonial } from "../types/index";

import Client1 from "../assets/images/TestimonialImages/Client1.webp"
import Client2 from "../assets/images/TestimonialImages/Client2.webp"
import Client3 from "../assets/images/TestimonialImages/Client3.jpeg"
import Client4 from "../assets/images/TestimonialImages/Client4.webp"

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "InnovateTech Inc",
    avatarUrl: Client1,
    testimonial:
      "TechBuggs transformed our outdated systems into a streamlined, efficient platform. Their team's technical expertise and commitment to our vision exceeded our expectations.",
  },
  {
    name: "Mark Reynolds",
    role: "CEO",
    company: "Global Logistics",
    avatarUrl: Client2,
    testimonial:
      "The supply chain management system developed by TechBuggs has increased our operational efficiency by 40%. Their solution was tailored perfectly to our complex requirements.",
  },
  {
    name: "Jennifer Wu",
    role: "Product Manager",
    company: "HealthFirst",
    avatarUrl: Client3,
    testimonial:
      "Working with TechBuggs on our healthcare platform was seamless. They understood our industry needs and delivered a HIPAA-compliant solution on time and within budget.",
  },
  {
    name: "David Alvarez",
    role: "Director of Digital",
    company: "Retail Solutions",
    avatarUrl: Client4,
    testimonial:
      "The e-commerce platform developed by TechBuggs helped us increase our conversion rates by 35% and provided valuable customer insights that transformed our business strategy.",
  },
];

const TestimonialCard: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative bg-[#12334E] overflow-visible h-[30rem] sm:h-[25rem] py-10">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl md:text-5xl text-white font-bold leading-snug">
          What Our Clients Says
        </h2>
        <p className="text-[#F0F0F0] text-lg  mt-4 mb-8">
          We take pride in delivering exceptional results for our clients.
          Here's what they have to say about working with us.
        </p>
      </div>

      <div className="hidden lg:flex">
        <div
          onClick={() => sliderRef.current?.slickPrev()}
          className="absolute -bottom-16 [@media(min-width:1100px)_and_(max-width:1280px)]:left-8 [@media(min-width:1280px)_and_(max-width:1350px)]:left-8  lg:left-2 xl:left-23 [@media(min-width:1535px)_and_(max-width:1542px)]:left-18  2xl:left-42 z-50 transform -translate-y-1/2 cursor-pointer w-10 h-10 border-2 border-[#555555] text-[#08162C] rounded-full shadow-md flex items-center justify-center"
        >
          <FaArrowLeft className="text-xl" />
        </div>

        <div
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute -bottom-16 lg:right-2 [@media(min-width:1100px)_and_(max-width:1280px)]:right-8 [@media(min-width:1536px)_and_(max-width:1545px)]:right-26 [@media(min-width:1280px)_and_(max-width:1350px)]:right-14 xl:right-25 2xl:right-50 z-50 transform -translate-y-1/2 cursor-pointer w-10 h-10 border-2 border-[#08162C] text-[#12334E] rounded-full shadow-md flex items-center justify-center"
        >
          <FaArrowRight className="text-xl" />
        </div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 bottom-0 z-40 w-full lg:max-w-[60rem] xl:max-w-6xl 2xl:max-w-7xl px-4 ">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="flex justify-center mt-8">
              <div
                className="ml-2 bg-white hover:bg-[#E8FFF8] cursor-pointer px-6 pb-8 
             w-[96%] sm:w-[90%] md:w-[98%] xl:w-[90%]  2xl:w-[370px]  relative block rounded-[20px]"
                style={{ minHeight: "250px" }}
              >
                <div className="w-[5.5rem] h-[5.5rem] absolute -top-10 left-6 rounded-md overflow-visible border-8 border-[#12334E] shadow-md bg-[#12334E]">
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full rounded-md object-cover"
                  />
                </div>
                <div className="pt-3 text-left ml-24">
                  <h3 className="font-bold text-lg text-[#08162C]">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#252525]">
                    {item.role}
                    {item.company}
                  </p>
                </div>
                <div className="flex gap-1 text-[#45BCA0] text-sm absolute bottom-7 left-7">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <FaQuoteLeft className="text-[#45BCA0] text-xl mb-2" />
                <p className="text-[#4C4C4C] text-left text-sm mb-4 mt-4">
                  {item.testimonial}
                </p>
                <div className="absolute bottom-0 right-0 w-9 h-9 flex items-center justify-center bg-[#E8FFF8] rounded-tl-full rounded-br-2xl z-10" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCard;
