import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contact">
      <div className="max-w-[1240px] flex justify-between items-center p-4 mt-3 text-white lg:max-w-[1240px] lg:m-3 lg:flex lg:justify-between lg:items-center lg:p-4 lg:text-white md:max-w-[1240px] md:m-3 md:flex md:justify-between md:items-center md:p-4 md:text-white">
        <Link href="/">
          <h1 className="font-bold text-4xl">Capture</h1>
        </Link>

        <div className="">
          <ul className="lg:flex lg:gap-4 md:lg:flex md:lg:gap-4 hidden">
            <li className="">
              <Link href="/">Home</Link>
            </li>
            <li className="">
              <Link href="/#blog">Blog</Link>
            </li>
            <li className="">
              <Link href="/#discography">Discography</Link>
            </li>
            <li className="">
              <Link href="/#tours">Tours</Link>
            </li>
            <li className="">
              <Link href="/#about">About</Link>
            </li>
            <li className="">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-white hidden lg:flex lg:gap-6 md:flex md:gap-6">
            <a href="https://linkdin.com">
              <BsLinkedin />
            </a>
            <a href="https://github.com">
              <FaGithub />
            </a>
            <a href="https://dribble.com">
              <FiDribbble />
            </a>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
            <a href="https://twitter.com">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
