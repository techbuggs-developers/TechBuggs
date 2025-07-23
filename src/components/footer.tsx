import {
  Mail,
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
  MapPin,
  Phone,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import FooterBg from "../assets/footer-bg.png";
import LogoWhite from "../assets/logo-white.png";
import { Button } from "./common/button";

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Careers", path: "/careers" },
  { name: "Trainings", path: "/trainings" },
  { name: "Contact Us", path: "/contact" },
];

const services = [
  { name: "Web Development", path: "/services/web-development" },
  { name: "Mobile Development", path: "/services/mobile-development" },
  { name: "Machine Learning", path: "/services/machine-learning" },
  { name: "SEO Optimization", path: "/services/seo-optimization" },
  { name: "UI/UX Design", path: "/services/ui-ux-design" },
  { name: "Digital Marketing", path: "/services/digital-marketing" },
];

export default function Footer() {
  return (
    <>
      <footer className=" text-white relative lg:h-[33rem]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${FooterBg})` }}
        ></div>
        <div
          className="absolute w-full h-[40rem] bottom-0 left-0  filter blur-3xl opacity-40 z-0"
          style={{
            background: "linear-gradient(to right, #12334E 100%)",
          }}
        />

        <div className="absolute inset-0 bg-[#12334E]/50"></div>
        <div className="max-w-[85rem] mx-auto px-6 pt-10 space-y-10 relative">
          <div className="flex flex-col lg:flex-row justify-between gap-6 items-start md:items-center border-b border-gray-700 pb-10">
            <div className="mx-auto md:mx-0">
              <NavLink
                to="/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <img
                  src={LogoWhite}
                  alt="Logo"
                  className="sm:h-28 sm:w-96 h-20 w-64 "
                />
              </NavLink>
            </div>

            <div className="flex flex-col lg:flex-row items-start sm:items-center justify-between max-w-[72rem] gap-4 w-full">
              <div className="flex items-center gap-4">
                <div className="h-16 w-[2px] rounded-sm bg-[#45BCA0] flex items-center " />
                <div className="flex flex-col space-y-2 sm:ml-0 lg:ml-10">
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    News Subscription
                  </h2>
                  <p className="text-sm font-semibold text-[#C8C8C8]">
                    Get Latest Deals from Waker’s Inbox & Subscribe Now
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2 items-center sm:pl-0">
                <div className=" w-full">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="pl-10 pr-4 py-4 w-full sm:w-75 rounded-md  bg-white border border-gray-600 text-black placeholder:text-[#7B7B7B]"
                  />
                </div>
                <Button
                  className="w-full sm:w-40 px-6 py-4 rounded-md"
                  variant="primary"
                >
                  SUBSCRIBE
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm pb-10 ">
            <div>
              <h3 className="font-semibold text-white text-lg mb-4 relative">
                ABOUT COMPANY
                <div className="w-[10.8rem] h-[2px] bg-[#45BCA0] mt-2 rounded-[1px] relative flex items-center">
                  <div className="w-2 h-2 rounded-full border-2 border-[#45BCA0] flex items-center justify-center absolute right-0">
                    <span className="bg-white w-[5px] h-[5px] rounded-full absolute" />
                  </div>
                </div>
              </h3>
              <p className="text-[#C8C8C8] mb-5 sm:max-w-[16rem] leading-6 text-base">
                Empowering businesses with innovative software solutions and
                cutting-edge technology.
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/techbuggs/" target="blank">
                  {" "}
                  <Linkedin />
                </a>

                <a
                  href="https://www.facebook.com/people/Techbuggs/61578437660327/"
                  target="blank"
                >
                  {" "}
                  <Facebook />
                </a>
                <a href="https://www.youtube.com/@Techbuggsofficial" target="blank">
                  {" "}
                  <Youtube />
                </a>

                <a
                  href="https://www.instagram.com/techbuggsofficial?igsh=MTlvbHNtMHZyNmtuaQ=="
                  target="blank"
                >
                  <Instagram />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white text-lg mb-4 relative">
                QUICK LINKS
                <div className="w-[7.8rem] h-[2px] bg-[#45BCA0] mt-2 rounded-[1px] relative flex items-center">
                  <div className="w-2 h-2 border-2 border-[#45BCA0] flex justify-center items-center absolute right-0 rounded-full">
                    <span className="bg-white w-[5px] h-[5px] absolute rounded-full " />
                  </div>
                </div>
              </h3>
              <ul className="space-y-3 text-[#C8C8C8] ">
                {quickLinks.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `text-base transition-colors ${
                          isActive
                            ? "text-[#45BCA0]"
                            : "text-[#C8C8C8] hover:text-[#45BCA0]"
                        }`
                      }
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white text-lg mb-4 relative">
                OUR SERVICES
                <div className="w-[9rem] h-[2px] bg-[#45BCA0] mt-2 rounded-[1px] relative flex items-center">
                  <div className="w-2 h-2 border-2 border-[#45BCA0] flex justify-center items-center absolute right-0 rounded-full">
                    <span className="bg-white w-[5px] h-[5px] rounded-full absolute " />
                  </div>
                </div>
              </h3>
              <ul className="space-y-3 text-[#C8C8C8]">
                {services.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <NavLink
                      to={item.path}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      className={({ isActive }) =>
                        `text-base transition-colors ${
                          isActive
                            ? "text-[#45BCA0]"
                            : "hover:text-[#45BCA0] text-[#C8C8C8]"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white text-lg mb-4 relative">
                CONTACT US
                <div className="w-[7.8rem] h-[2px] bg-[#45BCA0] mt-2 rounded-[1px] relative flex items-center">
                  <div className="w-2 h-2 border-2 border-[#45BCA0] absolute flex justify-center items-center right-0 rounded-full">
                    <span className="bg-white w-[5px] h-[5px] rounded-full absolute " />
                  </div>
                </div>
              </h3>
              <p className="text-[#C8C8C8] mb-3 text-base flex items-center gap-2">
                <Phone className="w-5 h-5 text-white" />
                +92 3347518381
              </p>
              <p className="text-[#C8C8C8] text-base flex items-center gap-2 mb-3">
                <Mail className="w-5 h-5 text-white" />
                Info@techbuggs.com
              </p>
              <h3 className="font-semibold text-white text-lg mb-3 relative">
                LOCATION
                <div className="w-[6.4rem] h-[2px] bg-[#45BCA0] mt-2 rounded-[1px] relative flex items-center">
                  <div className="w-2 h-2 border-2 border-[#45BCA0] absolute flex justify-center items-center right-0 rounded-full">
                    <span className="bg-white w-[5px] h-[5px] rounded-full absolute" />
                  </div>
                </div>
              </h3>
              <p className="text-[#C8C8C8] text-sm   flex items-center gap-2">
                <MapPin className="w-5 h-5  text-white" />
                114 F1 Wapda town Lahore
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#12334E] text-white py-4 px-4 sm:px-6 ">
        <div className="max-w-[85rem] px-6 mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-3">
          <p className="text-center sm:text-left">
            © 2025 TechBuggs. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-center sm:text-right">
            <span className="hover:underline cursor-pointer">
              Terms & Condition
            </span>
            <span className="text-white h-5 w-[1px] bg-white" />
            <span className="hover:underline cursor-pointer">Careers</span>
            <span className="text-white h-5 w-[1px] bg-white" />
            <span className="hover:underline cursor-pointer">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
