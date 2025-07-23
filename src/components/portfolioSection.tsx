import React from "react";
import project1 from "../assets/PortfolioImages/cg.webp";
import wordpress from "../assets/PortfolioImages/wordpress.webp";
import node from "../assets/PortfolioImages/node-js.webp";
import mongodb from "../assets/PortfolioImages/mongodb.webp";
import aws from "../assets/PortfolioImages/aws.webp";
import react from "../assets/PortfolioImages/react-native.webp";
import python from "../assets/PortfolioImages/python.webp";
import nextjs from "../assets/PortfolioImages/nextjs.webp";
import takenote from "../assets/PortfolioImages/takenote.webp";
import italplastick from "../assets/PortfolioImages/italplastick.webp";
import php from "../assets/PortfolioImages/php.webp";
import mysql from "../assets/PortfolioImages/mysql.webp";
import Do from "../assets/PortfolioImages/Do.webp";
import java from "../assets/PortfolioImages/java.webp";
import keycoin from "../assets/PortfolioImages/keycoin.webp";
import fazalshawl from "../assets/PortfolioImages/fazalshawl.webp";
import laravel from "../assets/PortfolioImages/laravel.webp";
import cardclub from "../assets/PortfolioImages/cardclub.webp";
import redux from "../assets/PortfolioImages/redux.webp";
import iamadesigner from "../assets/PortfolioImages/iamadesigner.webp";
import bootstrap from "../assets/PortfolioImages/bootstrap.webp";
import globalswiftasia from "../assets/PortfolioImages/globalswiftasia.webp";
import naseebi from "../assets/PortfolioImages/naseebi.webp";
import blockchain from "../assets/PortfolioImages/blockchain.webp";
import tailwindcss from "../assets/PortfolioImages/tailwindcss.webp";
import keycoinweb from "../assets/PortfolioImages/keycoinweb.webp";
import { NavLink } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    title: "Cyber Guardians",
    subtitle: "Web App Development",
    description:
      "Backed by decades of expertise in risk management, Cyber Guardians equips businesses with the tools needed to ensure lasting cybersecurity. Serving industries from banking to government, our online training platform builds digital resilience, strengthens trust, and safeguards critical assets in an ever-evolving digital landscape.",
    icons: [
      { src: wordpress, name: "WordPress" },
      { src: node, name: "Node.js" },
      { src: mongodb, name: "MongoDB" },
      { src: aws, name: "AWS" },
      { src: react, name: "React Native" },
    ],
    image: project1,
  },
  {
    id: 2,
    title: "TakeNote",
    subtitle: "Web App Development",
    description:
      "Your go-to solution for accurate, hassle-free speech-to-text conversion. This powerful platform simplifies the entire transcription process—making it easy to convert speeches, meetings, interviews, and audio files into clear, well-structured, and editable text. Whether you're a student, professional, or content creator, our tool is designed to save you time, boost productivity, and deliver reliable results every time.",
    icons: [
      { src: python, name: "Python" },
      { src: mongodb, name: "MongoDB" },
      { src: aws, name: "AWS" },
      { src: nextjs, name: "Next Js" },
    ],
    image: takenote,
  },
  {
    id: 3,
    title: "Ital Plastick",
    subtitle: "Web App Development",
    description:
      "Since 1963, Ital-Plastick has been a leader in the production of premium PVC windows and doors—proudly made in Italy. As the only Italian company that fully controls its entire production chain, Ital-Plastick sets itself apart by not only designing innovative window systems but also extruding profiles and manufacturing complete production lines for windows and profile coatings. Our unwavering commitment to quality and innovation ensures that every product delivers exceptional durability, performance, and attention to detail.",
    icons: [
      { src: wordpress, name: "WordPress" },
      { src: php, name: "Php" },
      { src: mysql, name: "Mysql" },
      { src: Do, name: "Digital Ocean" },
    ],
    image: italplastick,
  },
  {
    id: 4,
    title: "Keycoin",
    subtitle: "Mobile App Development",
    description:
      "Keycoin is your gateway to financial freedom, unlocking a world of limitless possibilities. As a decentralized digital currency, it empowers individuals to take full control of their financial future—free from the limitations of traditional banking systems. With Keycoin, you’re not just transacting; you’re participating in a new era of independence, transparency, and global accessibility.",
    icons: [
      { src: node, name: "Node.js" },
      { src: mongodb, name: "MongoDB" },
      { src: aws, name: "AWS" },
      { src: java, name: "Java" },
    ],
    image: keycoin,
  },
  {
    id: 5,
    title: "Fazal Shawl",
    subtitle: "Web App Development",
    description:
      "Step into a world of timeless elegance and exceptional craftsmanship with Fazal Shawl, a distinguished name in luxury shawl design. Our online boutique features a curated collection of exquisitely crafted shawls that blend traditional artistry with modern sophistication. Each piece reflects the rich heritage of shawl-making, thoughtfully designed for those who appreciate fine craftsmanship and wish to add cultural depth and refined style to their wardrobe.",
    icons: [
      { src: node, name: "Node.js" },
      { src: mysql, name: "Mysql" },
      { src: redux, name: "Redux" },
      { src: react, name: "React Native" },
    ],
    image: fazalshawl,
  },
  {
    id: 6,
    title: "Card Club",
    subtitle: "Web App Development",
    description:
      "Experience the joy of meaningful gift-giving with Card Club—an innovative platform for creating and exchanging personalized gift cards with ease. This user-friendly website streamlines the process of sending thoughtful, customized cards for any occasion. Whether you're setting reminders for special dates, selecting the perfect gift from a curated collection, or adding a hear",
    icons: [
      { src: laravel, name: "Laravel" },
      { src: mysql, name: "Mysql" },
      { src: react, name: "React js" },
    ],
    image: cardclub,
  },
  {
    id: 7,
    title: "IamaDesigner",
    subtitle: "Web App Development",
    description:
      "Iamadesigner is the ultimate platform for creative professionals to showcase their talent, build stunning portfolios, and connect with potential clients. Designed exclusively for designers, it empowers graphic artists, UI/UX experts, and digital creators to gain visibility, highlight their best work, and land exciting opportunities. With powerful tools and a supportive creative network, Iamadesigner helps you get discovered, get hired, and grow your design business with confidence.",
    icons: [
      { src: node, name: "Node.js" },
      { src: mongodb, name: "MongoDB" },
      { src: Do, name: "Digital Ocean" },
      { src: react, name: "React Js" },
    ],
    image: iamadesigner,
  },
  {
    id: 8,
    title: "Global Swift ASIA",
    subtitle: "Web App Development",
    description:
      "Experience the convenience of modern financial transactions with Global Swift Asia, a premier platform specializing in seamless money transfers across Asia. Designed for both individuals and businesses, this service offers a fast, reliable, and secure way to send and receive funds internationally. With a user-friendly interface, competitive exchange rates, and a strong focus on transaction security, Global Swift Asia simplifies cross-border remittances. Whether for personal or professional needs, your transfers are handled with precision.",
    icons: [
      { src: bootstrap, name: "Bootstrap" },
      { src: laravel, name: "Laravel" },
      { src: react, name: "React Native" },
    ],
    image: globalswiftasia,
  },
  {
    id: 9,
    title: "Naseebi",
    subtitle: "Web App Development",
    description:
      "Welcome to Naseebi, where meaningful relationships begin. More than just a dating app, Naseebi is a thoughtfully designed platform that helps you build genuine connections aligned with your values, beliefs, and interests. Whether you're looking for companionship or something deeper, Naseebi is where authenticity meets compatibility.",
    icons: [
      { src: node, name: "Node.js" },
      { src: mongodb, name: "MongoDB" },
      { src: react, name: "React Js" },
    ],
    image: naseebi,
  },
  {
    id: 10,
    title: "Key Coin",
    subtitle: "Web App Development",
    description:
      "Step into the dynamic world of cryptocurrency with Keycoin, a cutting-edge digital asset platform tailored for the modern investor. At Keycoin.live, users gain secure, intuitive access to decentralized finance—enabling seamless trading, investing, and portfolio management. With a commitment to innovation, transparency, and user empowerment, Keycoin simplifies the crypto experience while maintaining the highest standards of security. Whether you're an experienced trader or just entering the crypto space, Keycoin.live provides the tools and insights needed to thrive in the fast-evolving world of digital finance.",
    icons: [
      { src: bootstrap, name: "Bootstrap" },
      { src: blockchain, name: "Blockchain" },
      { src: tailwindcss, name: "Tailwind Css" },
    ],
    image: keycoinweb,
  },
];

const PortfolioSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      <div
        className="absolute w-[45rem] h-[45rem] top-[12rem] right-0 rounded-bl-[100%] filter blur-3xl opacity-50 z-0 hidden sm:block"
        style={{
          background: "linear-gradient(to bottom, #78BA9F 70%, #12334E 30%)",
          animation: "blob 8s infinite",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute w-[60rem] h-[55rem] bottom-[8rem] left-[-10rem] rounded-tr-[100%] filter blur-3xl opacity-50 z-0 hidden sm:block"
        style={{
          background: "linear-gradient(to bottom, #78BA9F 70%, #12334E 30%)",
          animation: "blob 8s infinite",
          animationDelay: "2s",
        }}
      />
      <style>
        {`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.05); }
            66% { transform: translate(-20px, 20px) scale(0.95); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
        `}
      </style>

      <div className="max-w-[69rem] mx-auto px-4 md:px-6 mt-10 mb-14 md:mb-20">
        <p className="text-lg text-[#08162C] font-semibold mb-4">
         <NavLink to="/">
           Home &gt;
         </NavLink>
          <span className="text-[#78BA9F] font-semibold"> Portfolio</span>
        </p>
        <div className="space-y-2 relative z-20">
          <h1 className="text-4xl md:text-[5rem] font-semibold text-[#08162C] mb-4">
            Effective solutions for unique client problems
          </h1>
        </div>
        <p className="mt-6 text-base md:text-lg text-[#252525] leading-relaxed max-w-3xl">
          Our design-first approach has helped transform innovative businesses
          like these.
        </p>
      </div>

      <div className="space-y-12 relative z-20">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="flex flex-col bg-white justify-between rounded-3xl shadow-2xl p-6 md:p-10 max-w-[40rem] lg:max-w-[60rem] mx-auto"
          >
            <div className="flex flex-col lg:flex-row gap-10 justify-between">
              <div className="text-left flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl mb-4 font-bold text-[#08162C]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#78BA9F] font-semibold mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-sm sm:text-base md:text-base text-[#252525] mb-6 max-w-[35rem]">
                    {project.description}
                  </p>
                </div>

                <div className="flex gap-8 justify-end flex-wrap mt-4">
                  {project.icons.map((icon, index) => (
                    <div key={index} className="relative group">
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                        {icon.name}
                      </div>
                      <img
                        src={icon.src}
                        alt={icon.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-200 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative w-full max-w-[360px] min-h-[400px]  mx-auto rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;