import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Code2,
  Globe,
  Smartphone,
  Palette,
  Server,
  Layout,
  BarChart2,
  Search,
  Brain,
  GraduationCap,
  FolderKanban,
} from "lucide-react";

import logo from "../assets/images/logo.png";
import { servicesData } from "../data/ServicesDetailData";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [techDropdownOpen, setTechDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileTechOpen, setMobileTechOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const mobileMenu = mobileMenuRef.current;
    if (!mobileMenu) return;

    const focusableElements = mobileMenu.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusableElement = focusableElements[0] as HTMLElement;
    const lastFocusableElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          e.preventDefault();
          lastFocusableElement.focus();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          e.preventDefault();
          firstFocusableElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);
    firstFocusableElement?.focus();

    return () => {
      document.removeEventListener("keydown", handleTabKey);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) return;
    setTimeout(() => {
      menuButtonRef.current?.focus();
    }, 200);
  };

  return (
    <header
      className="fixed top-0 z-80 transition-all duration-300 w-full max-w-full rounded-3xl mt-2 left-0 -translate-x-0 md:left-1/2 md:-translate-x-1/2 md:mt-2 md:w-[100%] md:max-w-7xl [@media(min-width:1100px)]:rounded-full 
         bg-white shadow-md"
    >
      <div className="py-3 px-6 flex items-center justify-between [@media(min-width:1100px)]:justify-around rounded-3xl md:rounded-full">
        <NavLink
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setMobileMenuOpen(false);
            setMobileServicesOpen(false);
            setMobileTechOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src={logo}
            alt="TechBuggs company logo"
            loading="lazy"
            className="h-10 md:h-12"
          />
        </NavLink>

        <nav className="hidden [@media(min-width:1100px)]:flex items-center space-x-6">
          <NavLink
            to="/about"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={({ isActive }) =>
              `text-lg font-medium transition-colors ${
                isActive
                  ? "text-[#45BCA0]"
                  : "text-[#08162C] hover:text-[#45BCA0]"
              }`
            }
          >
            About us
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setTechDropdownOpen(true)}
            onMouseLeave={() => setTechDropdownOpen(false)}
          >
            <NavLink
              to="/technologies"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={({ isActive }) =>
                `flex items-center gap-1 font-medium transition-colors text-lg cursor-pointer  ${
                  isActive
                    ? "text-[#45BCA0]"
                    : "text-[#08162C] hover:text-[#45BCA0]"
                }`
              }
            >
              Technologies{" "}
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 mt-1 ${
                  techDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </NavLink>

            {techDropdownOpen && (
              <div className="absolute top-full mt-0.5 left-0 w-[33rem] bg-gray-100 rounded-xl shadow-xl py-6 px-8 grid grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-black mb-2 flex items-center gap-2">
                    <Layout className="text-[#45BCA0]" size={20} />
                    Front-end
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <NavLink
                        to="/technologies/react"
                        className="flex items-center gap-2 text-gray-800 hover:text-[#45BCA0]"
                      >
                        React
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/technologies/nextjs"
                        className="flex items-center gap-2 text-gray-800 hover:text-[#45BCA0]"
                      >
                        Next.js
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/technologies/angular"
                        className="flex items-center gap-2 text-gray-800 hover:text-[#45BCA0]"
                      >
                        Angular
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-black mb-2 flex items-center gap-2">
                    <Server className="text-[#45BCA0]" size={20} />
                    Back-end
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <NavLink
                        to="/technologies/nodejs"
                        className="flex items-center gap-2 text-gray-800 hover:text-[#45BCA0]"
                      >
                        Node.js
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/technologies/python"
                        className="flex items-center gap-2 text-gray-800 hover:text-[#45BCA0]"
                      >
                        Python
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-black mb-2 flex items-center gap-2">
                    <Smartphone className="text-[#45BCA0]" size={20} />
                    Mobile
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <NavLink
                        to="/technologies/android"
                        className="flex items-center gap-2 text-gray-800 hover:text-[#45BCA0]"
                      >
                        Android
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/technologies/react-native"
                        className="flex items-center gap-2 text-gray-800 hover:text-[#45BCA0]"
                      >
                        React Native
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/technologies/flutter"
                        className="flex items-center gap-2 text-gray-800 hover:text-[#45BCA0]"
                      >
                        Flutter
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-black mb-2 flex items-start gap-2 ">
                    <Palette className="text-[#45BCA0]" size={20} />
                    UI/UX Design
                  </h4>

                  <ul className="space-y-2">
                    <li>
                      <NavLink
                        to="/technologies/figma"
                        className="flex items-center gap-2 text-gray-800 hover:text-[#45BCA0]"
                      >
                        Figma
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <NavLink
              to="/services"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={({ isActive }) =>
                `flex items-center gap-1 font-medium transition-colors text-lg cursor-pointer ${
                  isActive
                    ? "text-[#45BCA0]"
                    : "text-[#08162C] hover:text-[#45BCA0]"
                }`
              }
            >
              Our Services
              <ChevronDown
                size={20}
                className={`transition-transform mt-1 duration-200 ${
                  servicesDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </NavLink>
            {servicesDropdownOpen && (
              <div className="absolute top-full mt-0.5 left-0 w-68 bg-gray-100 rounded-xl shadow-xl py-3">
                {servicesData.map((service) => (
                  <NavLink
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="px-4 py-2 flex gap-2 items-center hover:text-[#45BCA0]"
                  >
                    {/* Add icons based on service.slug */}
                    {service.slug === "web-development" && (
                      <Globe size={18} className="text-[#45BCA0]" />
                    )}
                    {service.slug === "mobile-development" && (
                      <Smartphone size={18} className="text-[#45BCA0]" />
                    )}
                    {service.slug === "machine-learning" && (
                      <Brain size={18} className="text-[#45BCA0]" />
                    )}
                    {service.slug === "seo-optimization" && (
                      <Search size={18} className="text-[#45BCA0]" />
                    )}
                    {service.slug === "ui-ux-design" && (
                      <Palette size={18} className="text-[#45BCA0]" />
                    )}
                    {service.slug === "digital-marketing" && (
                      <BarChart2 size={18} className="text-[#45BCA0]" />
                    )}
                    {service.title}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/portfolio"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={({ isActive }) =>
              `text-lg font-medium transition-colors ${
                isActive
                  ? "text-[#45BCA0]"
                  : "text-[#08162C] hover:text-[#45BCA0]"
              }`
            }
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/trainings"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={({ isActive }) =>
              `text-lg font-medium transition-colors ${
                isActive
                  ? "text-[#45BCA0]"
                  : "text-[#08162C] hover:text-[#45BCA0]"
              }`
            }
          >
            Trainings
          </NavLink>

          <NavLink
            to="/careers"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={({ isActive }) =>
              `text-lg font-medium transition-colors ${
                isActive
                  ? "text-[#45BCA0]"
                  : "text-[#08162C] hover:text-[#45BCA0]"
              }`
            }
          >
            Careers
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={({ isActive }) =>
              `rounded-full px-4 py-2 transition-colors duration-200 text-base font-medium text-nowrap ${
                isActive
                  ? "bg-[#45BCA0] text-[#08162C]"
                  : "bg-[#45BCA0] text-[#08162C]"
              }`
            }
          >
            Get in Touch
          </NavLink>
        </nav>

        <div className="[@media(min-width:1100px)]:hidden flex items-center gap-4">
          <button
            ref={menuButtonRef}
            className="text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className="[@media(min-width:1100px)]:hidden bg-white shadow-lg border-t border-gray-100 max-h-[calc(100vh-80px)] overflow-y-auto rounded-b-3xl transition-all duration-300"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink
              to="/about"
              className="flex items-center gap-2 font-medium py-3 px-4 rounded-xl text-gray-700 hover:bg-gray-100"
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileServicesOpen(false);
                setMobileTechOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <Layout size={20} className="text-[#45BCA0]" />
              About us
            </NavLink>

            <div>
              <button className="flex items-center justify-between w-full px-4 py-3 text-left font-medium text-gray-700 hover:bg-gray-100 rounded-xl">
                <NavLink
                  to="/technologies"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileServicesOpen(false);
                    setMobileTechOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <span className="flex items-center gap-2">
                    <Code2 size={20} className="text-[#45BCA0]" />
                    Technologies
                  </span>
                </NavLink>
                <ChevronDown
                  size={16}
                  onClick={() => setMobileTechOpen(!mobileTechOpen)}
                  className={`${
                    mobileTechOpen ? "rotate-180" : ""
                  } transition-transform`}
                />
              </button>
              {mobileTechOpen && (
                <div className="ml-6 mt-2 space-y-2">
                  <NavLink
                    to="/technologies/react"
                    className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:text-[#45BCA0]"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                      setMobileTechOpen(false);
                    }}
                  >
                    React
                  </NavLink>
                  <NavLink
                    to="/technologies/nextjs"
                    className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:text-[#45BCA0]"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                      setMobileTechOpen(false);
                    }}
                  >
                    Next.js
                  </NavLink>
                  <NavLink
                    to="/technologies/angular"
                    className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:text-[#45BCA0]"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                      setMobileTechOpen(false);
                    }}
                  >
                    Angular
                  </NavLink>
                  <NavLink
                    to="/technologies/nodejs"
                    className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:text-[#45BCA0]"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                      setMobileTechOpen(false);
                    }}
                  >
                    Node.js
                  </NavLink>
                  <NavLink
                    to="/technologies/python"
                    className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:text-[#45BCA0]"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                      setMobileTechOpen(false);
                    }}
                  >
                    Python
                  </NavLink>
                  <NavLink
                    to="/technologies/android"
                    className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:text-[#45BCA0]"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                      setMobileTechOpen(false);
                    }}
                  >
                    Android
                  </NavLink>
                  <NavLink
                    to="/technologies/react-native"
                    className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:text-[#45BCA0]"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                      setMobileTechOpen(false);
                    }}
                  >
                    React Native
                  </NavLink>
                  <NavLink
                    to="/technologies/flutter"
                    className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:text-[#45BCA0]"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                      setMobileTechOpen(false);
                    }}
                  >
                    Flutter
                  </NavLink>
                  <NavLink
                    to="/technologies/figma"
                    className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:text-[#45BCA0]"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                      setMobileTechOpen(false);
                    }}
                  >
                    Figma
                  </NavLink>
                </div>
              )}
            </div>

            <div>
              <button className="flex items-center justify-between w-full px-4 py-3 text-left font-medium text-gray-700 hover:bg-gray-100 rounded-xl">
                <NavLink
                  to="/services"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileServicesOpen(false);
                    setMobileTechOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <span className="flex items-center gap-2">
                    <Globe size={20} className="text-[#45BCA0]" />
                    Our Services
                  </span>
                </NavLink>
                <ChevronDown
                  size={16}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`${
                    mobileServicesOpen ? "rotate-180" : ""
                  } transition-transform`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="ml-6 mt-2 space-y-2">
                  {servicesData.map((service) => (
                    <NavLink
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="block px-4 py-2 flex items-center gap-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                        setMobileTechOpen(false);
                      }}
                    >
                      {/* Add icons based on service.slug */}
                      {service.slug === "web-development" && (
                        <Globe size={18} className="text-[#45BCA0]" />
                      )}
                      {service.slug === "mobile-development" && (
                        <Smartphone size={18} className="text-[#45BCA0]" />
                      )}
                      {service.slug === "machine-learning" && (
                        <Brain size={18} className="text-[#45BCA0]" />
                      )}
                      {service.slug === "seo-optimization" && (
                        <Search size={18} className="text-[#45BCA0]" />
                      )}
                      {service.slug === "ui-ux-design" && (
                        <Palette size={18} className="text-[#45BCA0]" />
                      )}
                      {service.slug === "digital-marketing" && (
                        <BarChart2 size={18} className="text-[#45BCA0]" />
                      )}
                      {service.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/portfolio"
              className="flex items-center gap-2 font-medium py-3 px-4 rounded-xl text-gray-700 hover:bg-gray-100"
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileServicesOpen(false);
                setMobileTechOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <FolderKanban size={20} className="text-[#45BCA0]" />
              Portfolio
            </NavLink>

            <NavLink
              to="/trainings"
              className="flex items-center gap-2 font-medium py-3 px-4 rounded-xl text-gray-700 hover:bg-gray-100"
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileServicesOpen(false);
                setMobileTechOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <GraduationCap size={20} className="text-[#45BCA0]" />
              Trainings
            </NavLink>

            <NavLink
              to="/careers"
              className="flex items-center gap-2 font-medium py-3 px-4 rounded-xl text-gray-700 hover:bg-gray-100"
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileServicesOpen(false);
                setMobileTechOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <Brain size={20} className="text-[#45BCA0]" />
              Careers
            </NavLink>

            <NavLink
              to="/contact"
              className="text-center bg-[#45BCA0] rounded-xl px-6 py-3 flex items-center justify-center gap-2 mt-2"
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileServicesOpen(false);
                setMobileTechOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <Code2 size={20} />
              Get in Touch
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
