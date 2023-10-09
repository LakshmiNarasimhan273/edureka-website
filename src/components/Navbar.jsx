// src/components/Navbar.js
import React from "react";
import edurekaLogo from "../assets/brand/edureka_banner.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const quickLinks = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "About", link: "/about" },
    { id: 3, text: "Courses", link: "/courses" },
    { id: 4, text: "Contact", link: "/contact" },
  ];

  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <Link to="/">
          <img
            src={edurekaLogo}
            className="w-[25%] h-[25%]"
            alt="Edureka Learning Center"
          />
        </Link>
        <nav class="md:ml-auto flex flex-wrap gap-5 items-center text-base justify-center">
          {quickLinks.map(({ id, text, link }) => (
            <div key={id} className="text-black font-semibold text-lg">
              <Link to={link}>{text}</Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
