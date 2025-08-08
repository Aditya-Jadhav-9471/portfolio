import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    menuItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleMenuItemClick = (sectionId) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#050414]/60 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer hover:scale-105 transition-transform duration-300">
          <span className="text-[#8245ec]">&lt;</span>
          <span>Aditya</span>
          <span className="text-[#8245ec]">/</span>
          <span>Jadhav</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`relative pb-1 hover:text-[#8245ec] transition-colors duration-300 ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-[#8245ec] transition-all duration-300 ${
                    activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          {[
            {
              href: "https://github.com/Aditya-Jadhav-9471",
              icon: <FaGithub size={24} />,
            },
            {
              href: "https://www.linkedin.com/in/aditya9471/",
              icon: <FaLinkedin size={24} />,
            },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec] transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414]/80 backdrop-blur-lg rounded-lg shadow-lg md:hidden animate-slide-down"
        >
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`hover:text-[#8245ec] transition-colors duration-300 ${
                    activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/Aditya-Jadhav-9471"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec] transition-transform hover:scale-110"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/aditya9471/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec] transition-transform hover:scale-110"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
