import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';



const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mb-7 lg:mb-10 md:mb-9 xl:mb-12 2xl:mb-14">
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
              <h3 className="text-[1rem] font-bold outfit">
                +234 8035 908 779
              </h3>
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
              <h3 className="text-[1rem] outfit font-bold"></h3>
            </div>
          </div>
        </div>

        <div className="max-w-[1240px] flex flex-col-reverse mt-[12%] ml-[1em] lg:max-w-[1240px] lg:flex lg:flex-row lg:items-center lg:m-8 lg:mt-[4%] lg:ml-[1em] md:max-w-[1240px] md:flex md:flex-row md:items-center md:m-3 md:mt-[8%] md:ml-[0.5rem]">
          <div className="p-2 lg:p-2 md:p-[0.5rem] lg:flex-1 md:flex-1">
            <Link href="mailto:info@kevindavidkaydee.com">
              <h3 className="ml-2s text-[2.5rem] outfit font-semibold lg:ml-1 lg:text-7xl lg:font-semibold md:text-5xl md:ml-1 md:font-semibold">
                LETS TALK
              </h3>
            </Link>
            <h3 className="text-[1.5rem] text-gray-500 outfit p-[0.5px] font-bold text-cs lg:text-7xl lg:text-gray-500 lg:ml-1 lg:font-bold lg:text-cs md:text-5xl md:ml-1 md:text-gray-500 md:font-bold md:text-cs">
              info@kevindavidkaydee.com
            </h3>
          </div>

          <Link href="mailto:info@kevindavidkaydee.com">
            <div className="grid place-items-center w-[10rem] h-[10rem] bg-black-500 rounded-[50%] border border-white lg:w-[8rem] lg:h-[8rem] lg:m-auto lg:bg-black-500 lg:rounded-[50%] lg:border lg:border-white md:w-[8rem] md:p-3 md:h-[8rem] md:bg-black-500 md:rounded-[50%] md:border md:border-white">
              <div className="mt-[2rem] text-[1rem] outfit lg:text-[1rem] lg:mt-[1rem] md:text-[0.85rem] md:mt-[1rem] font-normal">
                SEND ME A
              </div>
              <div className="mt-[-5rem] outfit lg:mt-[-3rem] md:mt-[-3rem]">
                MESSAGE
              </div>
            </div>
          </Link>
        </div>

        <div className="m-4 justify-around items-center lg:flex lg:m-4 lg:justify-around lg:items-center md:flex md:m-4 md:justify-around md:items-center">
          <div className="flex justify-start ml-3 gap-3 lg:flex lg:gap-5 md:flex md:gap-5">
            <Link href="https://github.com/Simplevhick/Kevindavid" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl" />
            </Link>
            <Link href="https://instagram.com/kevindavidkaydee/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl" />
            </Link>
            <Link href="https://www.youtube.com/channel/UCugP9o0GFBvoSg3xj0VJXqw" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-2xl" />
            </Link>
            <Link href="https://www.youtube.com/channel/UCugP9o0GFBvoSg3xj0VJXqw" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="text-2xl" />
            </Link>
            <Link href="https://x.com/kevindavidkdee" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="text-2xl" />
            </Link>
          </div>

          <div className="">
            <div className="flex items-center">
              <p className="text-3xl">✌️</p>
              <div className="p-2">
                <span className="outfit">
                  info@kevindavidkaydee.com Looking for collabration for your
                  next post?
                </span>
                <p className="outfit">Do not hesitate to contact us</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center p-[20px, 0] ml-[24px]">
          <p>© {2024} KevindavidKaydee. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
