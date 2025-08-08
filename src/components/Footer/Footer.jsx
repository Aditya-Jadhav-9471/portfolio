import React from "react";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/aditya9471/", label: "LinkedIn" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/aadii_9471/", label: "Instagram" },
    { icon: <FaEnvelope />, link: "mailto:adityajadhav97349@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-[#0B0B0F] text-white py-10 px-[8vw] md:px-[6vw] lg:px-[20vw] border-t border-gray-700">
      <div className="container mx-auto text-center space-y-6">
        {/* Name / Logo */}
        <h2 className="text-2xl font-bold text-purple-500 tracking-wide hover:text-purple-400 transition-colors duration-300">
          Aditya Jadhav
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {navLinks.map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-sm sm:text-base text-gray-300 hover:text-purple-500 transition-colors duration-300 focus:outline-none focus:text-purple-400"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-purple-500 mx-auto"></div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-5">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="text-2xl text-gray-400 hover:text-purple-500 transition-transform transform hover:scale-110 duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-4">
          © {new Date().getFullYear()} Aditya Jadhav. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
