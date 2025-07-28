import project1 from "../assets/images/PortfolioImages/cg.webp";
import wordpress from "../assets/images/TechStackImages/wordpress.webp";
import node from "../assets/images/TechStackImages/node-js.webp";
import mongodb from "../assets/images/TechStackImages/mongodb.webp";
import aws from "../assets/images/TechStackImages/aws.webp";
import react from "../assets/images/TechStackImages/react-native.webp";
import python from "../assets/images/TechStackImages/python.webp";
import nextjs from "../assets/images/TechStackImages/nextjs.webp";
import takenote from "../assets/images/PortfolioImages/takenote.webp";
import italplastick from "../assets/images/PortfolioImages/italplastick.webp";
import php from "../assets/images/TechStackImages/php.webp";
import mysql from "../assets/images/TechStackImages/mysql.webp";
import Do from "../assets/images/TechStackImages/Do.webp";
import java from "../assets/images/TechStackImages/java.webp";
import keycoin from "../assets/images/PortfolioImages/keycoin.webp";
import fazalshawl from "../assets/images/PortfolioImages/fazalshawl.webp";
import laravel from "../assets/images/TechStackImages/laravel.webp";
import cardclub from "../assets/images/PortfolioImages/cardclub.webp";
import redux from "../assets/images/TechStackImages/redux.webp";
import iamadesigner from "../assets/images/PortfolioImages/iamadesigner.webp";
import bootstrap from "../assets/images/TechStackImages/bootstrap.webp";
import globalswiftasia from "../assets/images/PortfolioImages/globalswiftasia.webp";
import naseebi from "../assets/images/PortfolioImages/naseebi.webp";
import blockchain from "../assets/images/TechStackImages/blockchain.webp";
import tailwindcss from "../assets/images/TechStackImages/tailwindcss.webp";
import keycoinweb from "../assets/images/PortfolioImages/keycoinweb.webp";
import type { PortfolioProject } from "../types";

export const projectsData: PortfolioProject[] = [
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