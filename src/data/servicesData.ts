import SecurityImg from "../assets/security.png";
import ComputerImg from "../assets/computer.png";
import customerImg from "../assets/ServicesImages/customer.webp";
import crossPlatformImg from "../assets/ServicesImages/cross-platform.webp";
import predictiveAnalyticsImg from "../assets/ServicesImages/PredictiveAnalytics.webp";
import dataDrivenImg from "../assets/ServicesImages/data-driven.webp";
import onpageSeoImg from "../assets/ServicesImages/onpage-seo.webp";
import offpageSeoImg from "../assets/ServicesImages/offpage-seo.webp";
import designImg from "../assets/ServicesImages/design.webp";
import prototypingImg from "../assets/ServicesImages/prototyping.webp";
import adsImg from "../assets/ServicesImages/ads.webp";
import contentMarketingImg from "../assets/ServicesImages/ContentMarketing.webp";


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
          title: "Responsive Web Design",
          description: "Your users deserve a flawless experience our responsive design approach guarantees that your web app looks and performs perfectly on every device, from desktops to smartphones.",
          image: ComputerImg,
        },
        {
          title: "Secure and Scalable Solutions",
          description: "We implement robust security protocols and design scalable architectures to ensure your web applications are secure, reliable, and ready to grow.",
          image: SecurityImg,
          reverse: true,
        },
      ],
      processSteps: [
        { number: 1, title: "Analysis", description: "To explore your vision, customers, and the problem to be solved." },
        { number: 2, title: "Design", description: "To craft the look, feel, and flow of your software product." },
        { number: 3, title: "Development", description: "To iteratively build the perfect product to meet your goals." },
        { number: 4, title: "Release", description: "To get your finished product out to your customers." },
      ],
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
        description: "At TechBugs, we specialize in web application development that delivers dynamic, efficient, and tailored digital solutions. Our approach is centered on deeply understanding your business goals, user expectations, and leveraging the latest web technologies to create high-performance, scalable web applications that truly make an impact.",
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
          title: "Cross-Platform Development",
          description: "We use modern frameworks like React Native and Flutter to develop cross-platform apps that cut costs and time, without compromising on performance or user experience.",
          image: crossPlatformImg,
        },
         {
          title: "User-Centric Design",
          description: "Our UI/UX designers follow user-centered design principles to craft intuitive, visually engaging interfaces that boost user satisfaction and drive meaningful interaction.",
          image: customerImg,
          reverse: true,
        },
      ],
      processSteps: [
        { number: 1, title: "Analysis", description: "Placeholder for mobile app analysis." },
        { number: 2, title: "Design", description: "Placeholder for mobile app design." },
        { number: 3, title: "Development", description: "Placeholder for mobile app development." },
        { number: 4, title: "Release", description: "Placeholder for mobile app release." },
      ],
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
        description: "At TechBugs, we offer tailored mobile app development services designed to meet your unique business needs. Our skilled developers leverage cutting-edge technologies and modern tools to build high-quality, user-friendly, and scalable mobile applications for both iOS and Android platforms. Whether you require a native app, hybrid solution, or web-based mobile app, we have the expertise to deliver robust and reliable solutions that align perfectly with your goals.",
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
          title: "Predictive Analytics",
          description: "Our predictive models deliver forward-looking insights that help you stay ahead and make smarter decisions with confidence.",
          image: predictiveAnalyticsImg,
        },
        {
          title: "Data-Driven Insights",
          description: "Unlock valuable insights from complex data to inform smarter strategies and boost operational efficiency.",
          image: dataDrivenImg,
          reverse: true
        },
      ],
      processSteps: [
        { number: 1, title: "Analysis", description: "Placeholder for ML analysis." },
        { number: 2, title: "Design", description: "Placeholder for ML design." },
        { number: 3, title: "Development", description: "Placeholder for ML development." },
        { number: 4, title: "Release", description: "Placeholder for ML release." },
      ],
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
        description: "At TechBugs, we harness the power of cutting-edge machine learning algorithms and models to build intelligent solutions that automate processes, predict trends, and uncover valuable insights from data. Our machine learning services empower businesses to make smarter, data-driven decisions, optimize operations, and stay ahead in a competitive market.",
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
          title: "On-Page SEO",
          description: "Optimizing individual web pages to improve search engine rankings and attract more relevant, high-quality traffic.",
          image: onpageSeoImg,
        },
        {
          title: "Off-Page SEO",
          description: "We create authoritative backlinks and amplify your content across trusted platforms to enhance your domain authority and online visibility.",
          image: offpageSeoImg,
          reverse: true
        },
      ],
      processSteps: [
        { number: 1, title: "Analysis", description: "Placeholder for SEO analysis." },
        { number: 2, title: "Design", description: "Placeholder for SEO design." },
        { number: 3, title: "Development", description: "Placeholder for SEO implementation." },
        { number: 4, title: "Release", description: "Placeholder for SEO results." },
      ],
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
        description: "TechBugs provides comprehensive SEO services tailored to boost your online visibility, attract high-quality organic traffic, and improve your search engine rankings. With a data-driven strategy, we optimize your website for maximum impact—driving higher conversions and accelerating business growth.",
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
          title: "Visual Design",
          description: "We craft the visual identity of your digital product, including color schemes, typography, and imagery to ensure a cohesive and engaging user interface.",
          image: designImg,
        },
        {
          title: "Interactive Prototyping",
          description: "Our interactive prototypes give clients a hands-on preview of their product, allowing for early feedback and experience-driven refinements.",
          image: prototypingImg,
          reverse: true
        }
      ],
      processSteps: [
        { number: 1, title: "Analysis", description: "Placeholder for UI/UX analysis." },
        { number: 2, title: "Design", description: "Placeholder for UI/UX design." },
        { number: 3, title: "Development", description: "Placeholder for UI/UX development." },
        { number: 4, title: "Release", description: "Placeholder for UI/UX release." },
      ],
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
        description: "At TechBugs, we deliver UI/UX design services that empower businesses to build intuitive, user-friendly, and visually compelling digital products. Our design approach is rooted in a deep understanding of your business goals, target audience, and industry trends, enabling us to craft unique and impactful designs that elevate the overall user experience.",
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
          title: "Content Marketing",
          description: "We craft and distribute meaningful content that resonates with your audience, building trust, driving engagement, and strengthening brand loyalty.",
          image: contentMarketingImg,
        },
         {
          title: "Paid Advertising",
          description: "We run strategic paid campaigns on Google and social media to maximize your reach, drive quick results, and boost brand visibility instantly.",
          image: adsImg,
          reverse: true
        }
      ],
      processSteps: [
        { number: 1, title: "Analysis", description: "Placeholder for marketing analysis." },
        { number: 2, title: "Design", description: "Placeholder for marketing design." },
        { number: 3, title: "Development", description: "Placeholder for marketing campaign development." },
        { number: 4, title: "Release", description: "Placeholder for marketing campaign launch." },
      ],
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
        description: "At TechBugs, we provide comprehensive digital marketing services aimed at enhancing your online presence, engaging your target audience, and delivering measurable results. Our strategies are customized to align with your business objectives, ensuring maximum ROI and long-term, sustainable growth.",
      },
    },
  },
]; 