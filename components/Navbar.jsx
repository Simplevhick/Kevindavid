"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full
       z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white lg:max-w-[1240px] lg:m-auto lg:flex lg:justify-between lg:items-center lg:p-4 lg:text-white md:max-w-[1240px] md:m-auto md:flex md:justify-between md:items-center md:p-4 md:text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl outfit">
            KAYDEE
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4 outfit">
            <Link href="/" className="hover:text-red-400 hover:ease-in-out hover:text-lg">Home</Link>
          </li>
          <li className="p-4 outfit">
            <Link href="/#blog" className="hover:text-red-400 hover:ease-in-out hover:text-lg">Blog</Link>
          </li>
          <li className="p-4 outfit">
            <Link href="/#tours" className="hover:text-red-400 hover:ease-in-out hover:text-lg">Tours</Link>
          </li>
          <li className="p-4 outfit">
            <a href="/about" className="hover:text-red-400 hover:ease-in-out hover:text-lg">About</a>
          </li>
          <li className="p-4 outfit">
            <a href="/songfolio" className="hover:text-red-400 hover:ease-in-out hover:text-lg">SongFolio</a>
          </li>
          <li className="p-4 outfit">
            <Link href="/contact" className="hover:text-red-400 hover:ease-in-out hover:text-lg">Contact</Link>
          </li>
        </ul>

        {/* mobile button */}
        <div onClick={handleNav} className="block sm:hidden z-10 text-white">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/* mobile menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl outfit hover:text-gray-500"
            >
              <Link href="/" className="">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl outfit hover:text-gray-500"
            >
              <Link href="/#blog" to="/#blog" className="">
                Blog
              </Link>
            </li>
  
            <li
              onClick={handleNav}
              className="p-4 text-4xl outfit hover:text-gray-500"
            >
              <Link href="/#tours" className="">Tours</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl outfit hover:text-gray-500"
            >
              <Link href="/about" className="">About</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl outfit hover:text-gray-500"
            >
              <Link href="/songfolio" className="">SongFolio</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl outfit hover:text-gray-500"
            >
              <Link href="/contact" className="">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
