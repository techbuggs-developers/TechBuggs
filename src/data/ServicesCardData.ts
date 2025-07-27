import webImg from "../assets/ServiceCardImages/webDevelopment.png";
import mobileImg from "../assets/ServiceCardImages/mobileApp.png";
import mlImg from "../assets/ServiceCardImages/machineLearning.png";
import seoImg from "../assets/ServiceCardImages/seo.png";
import uiuxImg from "../assets/ServiceCardImages/Ui-Ux.png";
import digitalMarketing from "../assets/ServiceCardImages/Digital-Marketing.png";
import type { ServiceSectionItem } from "../types/index";

export const serviceCardData: ServiceSectionItem[] = [
  {
    slug: "web-development",
    title: ["Web App", "Development"],
    hoverDescription:
      "Building responsive and scalable web applications using modern technologies and advanced frameworks.",
    description: "Learn more",
    bgColor: "bg-[#F3F3F3]",
    textColor: "text-[#08162C]",
    tagBg: "bg-[#78BA9F]",
    tagText: "text-black",
    image: webImg,
    arrowBg: "bg-black",
    arrowText: "text-[#45BCA0]",
  },
  {
    slug: "mobile-development",
    title: ["Mobile App", "Development"],
    hoverDescription:
      "Native and cross-platform mobile applications for iOS and Android platforms.",
    description: "Learn more",
    bgColor: "bg-[#78BA9F]",
    textColor: "text-[#08162C]",
    tagBg: "bg-white",
    tagText: "text-black",
    image: mobileImg,
    arrowBg: "bg-black",
    arrowText: "text-white",
  },
  {
    slug: "machine-learning",
    title: ["Machine", "Learning"],
    hoverDescription:
      "Advanced machine learning solutions designed to automate tasks and optimize your business processes.",
    description: "Learn more",
    bgColor: "bg-[#12334E]",
    textColor: "text-white",
    tagBg: "bg-white",
    tagText: "text-black",
    image: mlImg,
    arrowBg: "bg-white",
    arrowText: "text-black",
  },
  {
    slug: "seo-optimization",
    title: ["SEO", "Optimization"],
    hoverDescription:
      "Comprehensive SEO strategies tailored to boost your online visibility and search engine rankings.",
    description: "Learn more",
    bgColor: "bg-[#F3F3F3]",
    textColor: "text-[#08162C]",
    tagBg: "bg-[#78BA9F]",
    tagText: "text-black",
    image: seoImg,
    arrowBg: "bg-black",
    arrowText: "text-[#45BCA0]",
  },
  {
    slug: "ui-ux-design",
    title: ["UI/UX", "Designing"],
    hoverDescription:
      "User-centered design solutions crafted to enhance user experience and drive deeper engagement.",
    description: "Learn more",
    bgColor: "bg-[#F3F3F3]",
    textColor: "text-[#08162C]",
    tagBg: "bg-[#78BA9F]",
    tagText: "text-black",
    image: uiuxImg,
    arrowBg: "bg-black",
    arrowText: "text-[#45BCA0]",
  },
  {
    slug: "digital-marketing",
    title: ["Digital", "Marketing"],
    hoverDescription:
      "Strategic digital marketing solutions designed to expand your online presence and reach the right audience.",
    description: "Learn more",
    bgColor: "bg-[#78BA9F]",
    textColor: "text-[#08162C]",
    tagBg: "bg-white",
    tagText: "text-black",
    image: digitalMarketing,
    arrowBg: "bg-black",
    arrowText: "text-white",
  },
];
