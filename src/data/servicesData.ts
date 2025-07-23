import SecurityImg from "../assets/security.png";
import ComputerImg from "../assets/computer.png";
import LaptopImg from "../assets/laptop.png";

export interface ServiceData {
  slug: string;
  title: string;
  description: string;
  details?: {
    serviceCards: Array<{
      title: string;
      description: string;
      image: any;
      reverse?: boolean;
    }>;
    processSteps: Array<{
      number: number;
      title: string;
      description: string;
    }>;
    laptopImageCards: any[];
    breadcrumb: Array<{
      label: string;
      href: string;
    }>;
    introSection: {
      title: string;
      description: string;
    };
    overviewSection: {
      title1: string;
      title2: string;
      description: string;
    };
  };
}

export const servicesData: ServiceData[] = [
  {
    slug: "web-development",
    title: "Web App Development",
    description: "Your users deserve a flawless experience. Our responsive design approach guarantees that your web app looks and performs perfectly on every device, from desktops to smartphones. We implement robust security protocols and design scalable architectures to ensure your web applications are secure, reliable, and ready to grow.",
    details: {
      serviceCards: [
        {
          title: "Web App Development",
          description: "We build robust, scalable, and modern web applications tailored to your business needs.",
          image: ComputerImg,
        },
      ],
      processSteps: [
        { number: 1, title: "Analysis", description: "To explore your vision, customers, and the problem to be solved." },
        { number: 2, title: "Design", description: "To craft the look, feel, and flow of your software product." },
        { number: 3, title: "Development", description: "To iteratively build the perfect product to meet your goals." },
        { number: 4, title: "Release", description: "To get your finished product out to your customers." },
      ],
      laptopImageCards: [LaptopImg, LaptopImg, LaptopImg],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Web Development Services", href: "/services/web-development" },
      ],
      introSection: {
        title: "Business-boosting Web Development Services",
        description: "We build modern, secure, and scalable web applications that are tailored to your unique business goals and growth.",
      },
      overviewSection: {
        title1: "Our Web",
        title2: "Development Services",
        description: "We create intuitive, high-performance solutions that provide a seamless user experience and deliver measurable results.",
      },
    },
  },
  {
    slug: "mobile-development",
    title: "Mobile App Development",
    description: "We create high-performance mobile apps for Android and iOS platforms, ensuring seamless user experiences and robust functionality tailored to your business needs.",
    details: {
      serviceCards: [
        {
          title: "Mobile App Development",
          description: "Our team creates high-performance mobile apps for Android and iOS platforms.",
          image: SecurityImg,
          reverse: true,
        },
      ],
      processSteps: [
        { number: 1, title: "Analysis", description: "Placeholder for mobile app analysis." },
        { number: 2, title: "Design", description: "Placeholder for mobile app design." },
        { number: 3, title: "Development", description: "Placeholder for mobile app development." },
        { number: 4, title: "Release", description: "Placeholder for mobile app release." },
      ],
      laptopImageCards: [LaptopImg, LaptopImg, LaptopImg],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Mobile App Development", href: "/services/mobile-development" },
      ],
      introSection: {
        title: "Business-boosting Mobile App Development",
        description: "We build modern, secure, and scalable mobile applications that are tailored to your unique business goals and growth.",
      },
      overviewSection: {
        title1: "Our Mobile",
        title2: "App Development Services",
        description: "We create intuitive, high-performance mobile solutions that provide a seamless user experience and deliver measurable results.",
      },
    },
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    description: "Leverage AI and machine learning to gain actionable insights, automate processes, and drive innovation with intelligent solutions designed for your business.",
    details: {
      serviceCards: [
        {
          title: "Machine Learning",
          description: "We deliver AI and machine learning solutions to automate and optimize your business.",
          image: ComputerImg,
        },
      ],
      processSteps: [
        { number: 1, title: "Analysis", description: "Placeholder for ML analysis." },
        { number: 2, title: "Design", description: "Placeholder for ML design." },
        { number: 3, title: "Development", description: "Placeholder for ML development." },
        { number: 4, title: "Release", description: "Placeholder for ML release." },
      ],
      laptopImageCards: [LaptopImg, LaptopImg, LaptopImg],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Machine Learning", href: "/services/machine-learning" },
      ],
      introSection: {
        title: "Business-boosting Machine Learning Services",
        description: "We build intelligent, scalable, and secure machine learning solutions tailored to your business needs.",
      },
      overviewSection: {
        title1: "Our Machine",
        title2: "Learning Services",
        description: "We create AI-driven solutions that provide actionable insights and automation for your business.",
      },
    },
  },
  {
    slug: "seo-optimization",
    title: "SEO Optimization",
    description: "Boost your online presence and search engine rankings with our comprehensive SEO services, designed to drive organic traffic and maximize your digital visibility.",
    details: {
      serviceCards: [
        {
          title: "SEO Optimization",
          description: "We help you rank higher and reach more customers with proven SEO strategies.",
          image: ComputerImg,
        },
      ],
      processSteps: [
        { number: 1, title: "Analysis", description: "Placeholder for SEO analysis." },
        { number: 2, title: "Design", description: "Placeholder for SEO design." },
        { number: 3, title: "Development", description: "Placeholder for SEO implementation." },
        { number: 4, title: "Release", description: "Placeholder for SEO results." },
      ],
      laptopImageCards: [LaptopImg, LaptopImg, LaptopImg],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "SEO Optimization", href: "/services/seo-optimization" },
      ],
      introSection: {
        title: "Business-boosting SEO Services",
        description: "We boost your online presence and search engine rankings with tailored SEO strategies.",
      },
      overviewSection: {
        title1: "Our SEO",
        title2: "Optimization Services",
        description: "We create strategies that drive organic traffic and maximize your digital visibility.",
      },
    },
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Designing",
    description: "We design intuitive and engaging user interfaces for web and mobile applications, focusing on user-friendly navigation and visually appealing experiences.",
    details: {
      serviceCards: [
        {
          title: "UI/UX Designing",
          description: "We design intuitive and engaging user interfaces for web and mobile applications.",
          image: ComputerImg,
        },
      ],
      processSteps: [
        { number: 1, title: "Analysis", description: "Placeholder for UI/UX analysis." },
        { number: 2, title: "Design", description: "Placeholder for UI/UX design." },
        { number: 3, title: "Development", description: "Placeholder for UI/UX development." },
        { number: 4, title: "Release", description: "Placeholder for UI/UX release." },
      ],
      laptopImageCards: [LaptopImg, LaptopImg, LaptopImg],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "UI/UX Designing", href: "/services/ui-ux-design" },
      ],
      introSection: {
        title: "Business-boosting UI/UX Design Services",
        description: "We design modern, user-friendly interfaces that enhance your digital products.",
      },
      overviewSection: {
        title1: "Our UI/UX",
        title2: "Design Services",
        description: "We create visually appealing and intuitive user experiences for your applications.",
      },
    },
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "Grow your business with our comprehensive digital marketing solutions, including targeted campaigns, brand strategy, and data-driven insights to maximize your reach.",
    details: {
      serviceCards: [
        {
          title: "Digital Marketing",
          description: "Grow your business with our comprehensive digital marketing solutions.",
          image: ComputerImg,
        },
      ],
      processSteps: [
        { number: 1, title: "Analysis", description: "Placeholder for marketing analysis." },
        { number: 2, title: "Design", description: "Placeholder for marketing design." },
        { number: 3, title: "Development", description: "Placeholder for marketing campaign development." },
        { number: 4, title: "Release", description: "Placeholder for marketing campaign launch." },
      ],
      laptopImageCards: [LaptopImg, LaptopImg, LaptopImg],
      breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Digital Marketing", href: "/services/digital-marketing" },
      ],
      introSection: {
        title: "Business-boosting Digital Marketing Services",
        description: "We help you grow your business with targeted digital marketing strategies.",
      },
      overviewSection: {
        title1: "Our Digital",
        title2: "Marketing Services",
        description: "We create data-driven marketing campaigns to maximize your reach and results.",
      },
    },
  },
]; 