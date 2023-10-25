import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavItem from "../components/NavItem";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="header w-full sticky z-30 top-0 left-0 bg-[#FD9255]">
      <div className="max-w-[1240px] mx-auto px-8 py-8 items-center z-20 justify-between text-white md:flex md:flex-row md:px-10">
        <a className="logo-anchor w-16 h-16">
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 97 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="cil:house">
              <path
                id="Vector"
                d="M77.2969 76.2272V46.5H54.5625V76.2272H77.2969ZM60.625 52.5H71.2344V70.2272H60.625V52.5Z"
                fill="white"
              />
              <path
                id="Vector_2"
                d="M51.3566 6.32789C50.1334 5.21412 48.5225 4.61142 46.8607 4.6458C45.1989 4.68019 43.6149 5.34899 42.4398 6.51239L6.0625 42.5146V93H27.2812V63H39.4062V93H90.9375V42.3671L51.3566 6.32789ZM84.875 87H45.4688V57H21.2188V87H12.125V45L47.2519 10.7542V10.7437L84.875 45V87Z"
                fill="white"
              />
            </g>
          </svg>
        </a>
        <div
          onClick={handleNav}
          className="absolute z-30 right-8 top-1/2 -translate-y-1/2 cursor-pointer md:hidden bg-white rounded p-1 text-black"
        >
          {nav ? <AiOutlineClose size={32} /> : <AiOutlineMenu size={32} />}
        </div>
        <ul
          className={`md:flex md:gap-16 md:items-center md:pb-0 pb-12 bg-[#FD9255] absolute md:static md:-z-30 -z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in-out md:opacity-100 ${
            nav ? "top-32 opacity-100" : "top-[-300px] opacity-0"
          }`}
        >
          <NavItem>How We Work</NavItem>
          <NavItem>Services</NavItem>
          <NavItem>Free Quote</NavItem>
          <NavItem>Contact</NavItem>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
