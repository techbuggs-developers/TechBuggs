import type { Project } from "../types";
import cyberGuardiansImg from "../assets/images/PortfolioImages/cg.webp";
import keycoinImg from "../assets/images/PortfolioImages/keycoin.webp";
import globalswiftasiaImg from "../assets/images/PortfolioImages/globalswiftasia.webp";

export const projects: Project[] = [
  {
    id: 1,
    title: "Cyber Guardians",
    subtitle: "Web App Development",
    image: cyberGuardiansImg,
    overlay: "bg-[#93BD65]/15",
    hoverOverlay: "group-hover:bg-[#93BD65]",
    description:
      "With decades of expertise, Cyber Guardians provides online training to strengthen cybersecurity, build digital resilience, and protect critical assets across industries",
  },
  {
    id: 2,
    title: "Keycoin",
    subtitle: "Mobile App Development",
    image: keycoinImg,
    overlay: "bg-black/40",
    hoverOverlay: "group-hover:bg-black",
    description:
      "Keycoin empowers you to take control of your financial future. As a decentralized digital currency, it offers independence, transparency, and global access—beyond the limits of traditional banking.",
  },
  {
    id: 3,
    title: "Global Swift ASIA",
    subtitle: "Web App Development",
    image: globalswiftasiaImg,
    overlay: "bg-[#013A69]/40",
    hoverOverlay: "group-hover:bg-[#013A69]",
    description:
      "Global Swift Asia offers fast, secure, and reliable money transfers across Asia. Designed for individuals and businesses, it features a user-friendly platform, competitive rates, and strong security—making cross-border remittances simple and efficient.",
  },
]; 