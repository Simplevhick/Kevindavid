import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div
        className="ml-auto mr-auto text-white max-w-[1240px] lg:mr-auto lg:ml-auto md:mr-auto md:ml-auto"
        id="footer"
      >
        <div className="">
          <div className="ml-3 lg:flex lg:justify-around lg:ml-3 md:flex md:justify-around md:ml-3">
            <div className="p-3 lg:p-3 md:p-3">
              <div>
                <p className="text-gray-200 outfit opacity-55 text-md lg:text-gray-200 lg:opacity-55 lg:text-sm md:text-gray-200 md:opacity-55 md:text-sm">
                  Looking for collabration?
                </p>
              </div>
              <h3 className="text-[1rem] outfit font-bold">KAYDEE</h3>
            </div>
            <div className="hidden lg:w-[13rem] lg:block lg:h-[0.15rem] lg:bg-white lg:rounded lg:mt-[1.5rem] md:w-[9rem] md:block md:h-[0.15rem] md:bg-white md:rounded md:mt-[1.5rem]" />

            <div className="p-3 lg:p-3 md:p-3">
              <div className="">
                <p className="text-gray-200 outfit opacity-55 text-md lg:text-gray-200 lg:opacity-55 lg:text-sm md:text-gray-200 md:opacity-55 md:text-sm">
                  3, ogunshina ogundele way,
                </p>
                <p className="text-gray-200 outfit opacity-55 text-md lg:text-gray-200 lg:opacity-55 lg:text-sm md:text-gray-200 md:opacity-55 md:text-sm">
                  Anthony, Lagos Nigeria
                </p>
              </div>
              <h3 className="text-[1rem] font-bold outfit">+234 9023 2032 54</h3>
            </div>
            <div className="hidden lg:w-[13rem] lg:block lg:h-[0.15rem] lg:bg-white lg:rounded lg:mt-[1.5rem] md:w-[9rem] md:block md:h-[0.15rem] md:bg-white md:rounded md:mt-[1.5rem]" />

            <div className="p-3 lg:p-3 md:p-3">
              <div>
                <p className="text-gray-200 outfit opacity-55 text-md lg:text-gray-200 lg:opacity-55 lg:text-sm md:text-gray-200 md:opacity-55 md:text-sm">
                  Looking for a job?
                </p>
                <p className="text-gray-200 outfit opacity-55 text-md lg:text-gray-200 lg:opacity-55 lg:text-sm md:text-gray-200 md:opacity-55 md:text-sm">
                  Send your resume
                </p>
              </div>
              <h3 className="text-[1rem] outfit font-bold">info@kevindavidkaydee.com</h3>
            </div>
          </div>
        </div>

        <div className="max-w-[1240px] flex flex-col-reverse mt-[12%] ml-[1em] lg:max-w-[1240px] lg:flex lg:flex-row lg:items-center lg:p-8 lg:mt-[4%] lg:ml-[1em] md:max-w-[1240px] md:flex md:flex-row md:items-center md:m-3 md:mt-[8%] md:ml-[0.5rem]">
          <div className="p-2 lg:p-2 md:p-[0.5rem] lg:flex-1 md:flex-1">
            <Link href="">
              <h3 className="ml-2s text-[2.5rem] outfit font-semibold lg:ml-1 lg:text-7xl lg:font-semibold md:text-5xl md:ml-1 md:font-semibold">
                LETS TALK
              </h3>
            </Link>
            <h3 className="text-[1.5rem] text-gray-700 outfit p-[0.5px] font-bold text-cs lg:text-7xl lg:text-gray-700 lg:ml-1 lg:font-bold lg:text-cs md:text-5xl md:ml-1 md:text-gray-700 md:font-bold md:text-cs">
              info@kevindavidkaydee.com
            </h3>
          </div>

          <Link href="mailto:info@kevindavidkaydee.com">
            <div className="w-[10rem] flex justify-center items-center h-[10rem] bg-black-500 rounded-[50%] border border-white lg:w-[8rem] lg:h-[8rem] lg:flex lg:items-center lg:bg-black-500 lg:rounded-[50%] lg:border lg:border-white md:w-[10rem] md:flex md:p-3 md:items-center md:h-[10rem] md:bg-black-500 md:rounded-[50%] md:border md:border-white">
              <p className="text-[1rem] whitespace-nowrap outfit lg:text-[0.62rem] lg:w-full lg:ml-1 md:text-[0.85rem] md:w-full font-normal">
                SEND ME A MESSAGE
              </p>
            </div>
          </Link>
        </div>

        <div className="m-4 justify-around items-center lg:flex lg:m-4 lg:justify-around lg:items-center md:flex md:m-4 md:justify-around md:items-center">
          <div className="flex justify-start ml-3 gap-3 lg:flex lg:gap-5 md:flex md:gap-5">
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

          <div className="">
            <div className="flex items-center">
              <p className="text-3xl">✌️</p>
              <div className="p-2">
                <span className="outfit">
                info@kevindavidkaydee.com Looking for collabration for your next post?
                </span>
                <p className="outfit">Do not hesitate to contact us</p>
              </div>
            </div>
            <div className="">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;