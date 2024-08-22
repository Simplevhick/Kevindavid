import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="text-white max-w-[1240px]">
        <div className="">
          <div className="ml-3 lg:flex lg:justify-around lg:ml-3 md:flex md:justify-around md:ml-3">
            <div className="p-3 lg:p-3 md:p-3">
              <div>
                <p className="text-gray-200 opacity-55 text-md lg:text-gray-200 lg:opacity-55 lg:text-sm md:text-gray-200 md:opacity-55 md:text-sm">
                  Looking for collabration?
                </p>
              </div>
              <h3 className="text-[1rem] font-bold">KAYDEE</h3>
            </div>
            <div className="hidden lg:w-[13rem] lg:block lg:h-[0.15rem] lg:bg-white lg:rounded lg:mt-[1.5rem] md:w-[9rem] md:block md:h-[0.15rem] md:bg-white md:rounded md:mt-[1.5rem]" />

            <div className="p-3 lg:p-3 md:p-3">
              <div className="">
                <p className="text-gray-200 opacity-55 text-md lg:text-gray-200 lg:opacity-55 lg:text-sm md:text-gray-200 md:opacity-55 md:text-sm">
                  3, ogunshina ogundele way,
                </p>
                <p className="text-gray-200 opacity-55 text-md lg:text-gray-200 lg:opacity-55 lg:text-sm md:text-gray-200 md:opacity-55 md:text-sm">
                  Anthony, Lagos Nigeria
                </p>
              </div>
              <h3 className="text-[1rem] font-bold">+234 9023 2032 54</h3>
            </div>
            <div className="hidden lg:w-[13rem] lg:block lg:h-[0.15rem] lg:bg-white lg:rounded lg:mt-[1.5rem] md:w-[9rem] md:block md:h-[0.15rem] md:bg-white md:rounded md:mt-[1.5rem]" />

            <div className="p-3 lg:p-3 md:p-3">
              <div>
                <p className="text-gray-200 opacity-55 text-md lg:text-gray-200 lg:opacity-55 lg:text-sm md:text-gray-200 md:opacity-55 md:text-sm">
                  Looking for a job?
                </p>
                <p className="text-gray-200 opacity-55 text-md lg:text-gray-200 lg:opacity-55 lg:text-sm md:text-gray-200 md:opacity-55 md:text-sm">
                  Send your resume
                </p>
              </div>
              <h3 className="text-[1rem] font-bold">info@KAYDEE.com</h3>
            </div>
          </div>
        </div>

        <div className="max-w-[1240px] flex flex-col-reverse items-center justify-center mt-[12%] ml-[1em] lg:max-w-[1240px] lg:flex lg:flex-row lg:items-center lg:p-8 lg:mt-[8%] lg:ml-[1em] md:max-w-[1240px] md:flex md:flex-row md:items-center md:m-3 md:mt-[12%] md:ml-[0.5rem]">
          <div className="p-2 lg:p-2 md:p-[0.5rem] lg:flex-1 md:flex-1">
            <Link href="">
              <h3 className="ml-12 text-[2.5rem] font-semibold lg:ml-1 lg:text-7xl lg:font-semibold md:text-5xl md:ml-1 md:font-semibold">
                LETS TALK
              </h3>
            </Link>
            <h3 className="text-[2rem] text-gray-700 p-[0.5px] font-bold text-cs lg:text-7xl lg:text-gray-700 lg:ml-1 lg:font-bold lg:text-cs md:text-5xl md:ml-1 md:text-gray-700 md:font-bold md:text-cs">
              KAYDEE@HUB.COM
            </h3>
          </div>

          <Link href="">
            <div className="w-[10rem] flex justify-center items-center h-[10rem] bg-black-500 rounded-[50%] border border-white lg:w-[9rem] lg:flex lg:justify-center lg:items-center lg:h-[9rem] lg:bg-black-500 lg:rounded-[50%] lg:border lg:border-white md:w-[11rem] md:flex md:justify-center md:items-center md:h-[11rem] md:bg-black-500 md:rounded-[50%] md:border md:border-white">
              <p className="text-sm w-20 lg:text-sm lg:w-20 md:text-md md:w-20 font-normal">
                SEND ME A MESSAGE
              </p>
            </div>
          </Link>
        </div>

        <div className="m-4 justify-around lg:flex lg:m-4 lg:justify-around md:flex md:m-4 md:justify-around">
          <div className="flex justify-evenly lg:flex lg:gap-5 md:flex md:gap-5">
            <Link href="https://github.com">
              <FaGithub className="text-2xl" />
            </Link>
            <Link href="https://instagram.com">
              <FaInstagram className="text-2xl" />
            </Link>
            <Link href="https://twitter.com">
              <FaXTwitter className="text-2xl" />
            </Link>
          </div>

          <div className="flex gap-1 p-3 items-start lg:flex lg:gap-4 lg:items-start md:flex md:gap-4 md:items-start">
            <div>
              <p className="text-4xl">✌️</p>
            </div>
            <div className="">
              <p>
                info@liquid.com Looking for collabration for your next post?
              </p>
              <p>Do not hesitate to contact us</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
