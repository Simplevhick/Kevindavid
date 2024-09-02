"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [accordionOpenTwo, setAccordionOpenTwo] = useState(false);


  return (
    <div className="">
      <div className="relative flex items-center justify-center w-full h-screen mb-[7rem] bg-fixed bg-center bg-cover custom-img2">
        <div className="text-[5rem] lg:text-[7rem] lg:m-auto lg:min-w-screen md:text-[5rem] md:flex md:min-w-screen">
          <div className="flex-none lg:flex md:flex">
            <div className="text-white leading-[4.5rem] lg:leading-[6rem] md:leading-[6rem]">
              <h3 className="outfit text-cs">KEVIN</h3>
              <h3 className="outfit">DAVID</h3>
              <h3 className="outfit text-cs">KAYDEE</h3>
            </div>
            <div className="lg:flex lg:items-center md:flex md:items-center">
              <div className="bg-white hidden w-[16rem] rounded-xl h-2 lg:bg-white lg:w-[16rem] lg:rounded-xl lg:flex lg:items-end lg:justify-end lg:h-2 md:bg-white md:block md:w-[16rem] md:rounded-xl md:h-2"></div>
              <div className="outfit flex text-white">About</div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[1rem] text-white lg:px-[7rem] lg:text-white md:px-[7rem] md:text-white">
        <div className="flex flex-col space-y-10 lg:flex lg:flex-col lg:space-y-10 md:flex md:flex-col md:space-y-10">
          <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2">
            <h2 className="outfit text-[1.3rem]">About Me</h2>
            <div className="break-words outfit leading-7">
              My name is Kevin David Kaydee, I am a freelance branding & digital
              designer based by the valley in New York. I currently work at
              Liquid.I create brand identities, digital experieces, and print
              materials that communicate clearly acheive marketing goals, and
              look fantastic.
              <div className="p-1 mb-1 bg-black rounded-lg">
                <div className="py-2">
                  <button
                    onClick={() => setAccordionOpen(!accordionOpen)}
                    className="flex justify-between w-full"
                  >
                    <span className="text-lg outfit">This is the title</span>
                    {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
                    <svg
                      className="fill-fuchsia-300 shrink-0 ml-8"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${
                          accordionOpen && "!rotate-180"
                        }`}
                      />
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                          accordionOpen && "!rotate-180"
                        }`}
                      />
                    </svg>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                      accordionOpen
                        ? `grid-rows-[1fr] opacity-100`
                        : `grid-rows-[0fr] opacity-0`
                    }`}
                  >
                    <div className="overflow-hidden text-white outfit ml-5">
                      This is the Answer
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-1 bg-black rounded-lg">
                <div className="py-2">
                  <button
                    onClick={() => setAccordionOpenTwo(!accordionOpenTwo)}
                    className="flex justify-between w-full"
                  >
                    <span className="text-lg outfit">This is the title 2</span>
                    {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
                    <svg
                      className="fill-fuchsia-300 shrink-0 ml-8"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${
                          accordionOpenTwo && "!rotate-180"
                        }`}
                      />
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                          accordionOpenTwo && "!rotate-180"
                        }`}
                      />
                    </svg>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                      accordionOpenTwo
                        ? `grid-rows-[1fr] opacity-100`
                        : `grid-rows-[0fr] opacity-0`
                    }`}
                  >
                    <div className="overflow-hidden text-white outfit ml-5">
                      This is the Answer 2
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2">
            <h2 className="outfit text-[1.3rem]">Experience</h2>
            <div className="break-words outfit">
              <div className="p-1 lg:p-0 md:p-0">
                <div className="border-none outfit border-red-400 text-lg h-[2.5rem] bg-black hover:bg-fuchsia-600 hover:flex hover:items-center hover:justify-center hover:rounded-md">
                  2020 • CEO - LiquidThemes
                </div>
              </div>
              <div className="p-1 lg:p-0 lg:mt-1 md:p-0 md:mt-1">
                <div className="border-none outfit border-red-400 text-lg h-[2.5rem] bg-black hover:bg-fuchsia-600 hover:flex hover:items-center hover:justify-center hover:rounded-md">
                  2020 • CEO - LiquidThemes
                </div>
              </div>
              <div className="p-1 lg:p-0 lg:mt-1 md:p-0 md:mt-1">
                <div className="border-none outfit border-red-400 text-lg h-[2.5rem] bg-black hover:bg-fuchsia-600 hover:flex hover:items-center hover:justify-center hover:rounded-md">
                  2020 • CEO - LiquidThemes
                </div>
              </div>
              <div className="p-1 lg:p-0 lg:mt-1 md:p-0 md:mt-1">
                <div className="border-none outfit border-red-400 text-lg h-[2.5rem] bg-black hover:bg-fuchsia-600 hover:flex hover:items-center hover:justify-center hover:rounded-md">
                  2020 • CEO - LiquidThemes
                </div>
              </div>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2">
            <h2 className="outfit text-[1.3rem]">Skills</h2>
            <div className="break-words outfit">
              <div className="flex gap-10">
                <div>
                  <p className="p-1 lg:p-0  md:p-0 outfit"> Art Direction</p>
                  <p className="p-1 lg:p-0 lg:mt-1 md:p-0 md:mt-1 outfit">
                    Brand Strategy
                  </p>
                  <p className="p-1 lg:p-0 lg:mt-1 md:p-0 md:mt-1 outfit">
                    {" "}
                    Communication
                  </p>
                  <p className="p-1 lg:p-0 lg:mt-1 md:p-0 md:mt-1 outfit">
                    {" "}
                    Graphic Design
                  </p>
                  <p className="p-1 lg:p-0 lg:mt-1 md:p-0 md:mt-1 outfit">
                    {" "}
                    Print Design
                  </p>
                  <p className="p-1 lg:p-0 lg:mt-1 md:p-0 md:mt-1 outfit">
                    {" "}
                    Motion Graphics
                  </p>
                </div>
                <div>
                  <p className="p-1 lg:p-0  md:p-0 outfit">Brand Guide</p>
                  <p className="p-1 lg:p-0 lg:mt-1 md:p-0 md:mt-1 outfit">
                    Flayer Design
                  </p>
                  <p className="p-1 lg:p-0 lg:mt-1 md:p-0 md:mt-1 outfit">
                    Video Production
                  </p>
                  <p className="p-1 lg:p-0 lg:mt-1 md:p-0 md:mt-1 outfit">
                    Web Advertising
                  </p>
                  <p className="p-1 lg:p-0 lg:mt-1 md:p-0 md:mt-1 outfit">
                    Illustration
                  </p>
                  <p className="p-1 lg:p-0 lg:mt-1 md:p-0 md:mt-1 outfit">
                    Content Creation
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2">
            <h2 className="outfit text-[1.3rem]">Awards</h2>
            <div className="break-words outfit">
              <div className="flex gap-10">
                <div>
                  <p className="p-1 lg:p-0 md:p-0 outfit"> 3x </p>
                  <p className="p-1 lg:p-0 lg:mt-1 md:p-0 md:mt-1 outfit">
                    {" "}
                    1x{" "}
                  </p>
                  <p className="p-1 lg:p-0 lg:mt-1 md:p-0 md:mt-1 outfit">
                    {" "}
                    2x
                  </p>
                  <p className="p-1 lg:p-0 lg:mt-1 md:p-0 md:mt-1 outfit">
                    {" "}
                    6x
                  </p>
                  <p className="p-1 lg:p-0 lg:mt-1 md:p-0 md:mt-1 outfit">
                    {" "}
                    2x{" "}
                  </p>
                  <p className="p-1 lg:p-0 lg:mt-1 md:p-0 md:mt-1 outfit">
                    {" "}
                    1x{" "}
                  </p>
                </div>
                <div>
                  <p className="p-1 lg:p-0  md:p-0 outfit">
                    AW Site of the Day
                  </p>
                  <p className="p-1 lg:p-0 lg:mt-1 md:p-0 md:mt-1 outfit">
                    FTA Best Interactive
                  </p>
                  <p className="p-1 lg:p-0 lg:mt-1 md:p-0 md:mt-1 outfit">
                    Css Design Awards
                  </p>
                  <p className="p-1 lg:p-0 lg:mt-1 md:p-0 md:mt-1 outfit">
                    AW Honourable Mention
                  </p>
                  <p className="p-1 lg:p-0 lg:mt-1 md:p-0 md:mt-1 outfit">
                    Red Dot Graphic Design Awards
                  </p>
                  <p className="p-1 lg:p-0 lg:mt-1 md:p-0 md:mt-1 outfit">
                    AW Collections
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="ml-auto mr-auto mt-[2rem] text-white max-w-[1240px] lg:mr-auto lg:ml-auto lg:mt-[5rem] md:mr-auto md:ml-auto md:mt-[4rem]"
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
                +234 9023 2032 54
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
              <h3 className="text-[1rem] outfit font-bold">
                info@kevindavidkaydee.com
              </h3>
            </div>
          </div>
        </div>

        <div className="max-w-[1240px] flex flex-col-reverse items-center justify-center mt-[12%] ml-[1em] lg:max-w-[1240px] lg:flex lg:flex-row lg:items-center lg:p-8 lg:mt-[4%] lg:ml-[1em] md:max-w-[1240px] md:flex md:flex-row md:items-center md:m-3 md:mt-[12%] md:ml-[0.5rem]">
          <div className="p-2 lg:p-2 md:p-[0.5rem] lg:flex-1 md:flex-1">
            <Link href="">
              <h3 className="ml-12 text-[2.5rem] outfit font-semibold lg:ml-1 lg:text-7xl lg:font-semibold md:text-5xl md:ml-1 md:font-semibold">
                LETS TALK
              </h3>
            </Link>
            <h3 className="text-[2rem] text-gray-700 outfit p-[0.5px] font-bold text-cs lg:text-7xl lg:text-gray-700 lg:ml-1 lg:font-bold lg:text-cs md:text-5xl md:ml-1 md:text-gray-700 md:font-bold md:text-cs">
              KAYDEE@HUB.COM
            </h3>
          </div>

          <Link href="" mailto="">
            <div className="w-[10rem] flex justify-center items-center h-[10rem] bg-black-500 rounded-[50%] border border-white lg:w-[9rem] lg:flex lg:justify-center lg:items-center lg:h-[9rem] lg:bg-black-500 lg:rounded-[50%] lg:border lg:border-white md:w-[11rem] md:flex md:justify-center md:items-center md:h-[11rem] md:bg-black-500 md:rounded-[50%] md:border md:border-white">
              <p className="text-sm w-20 outfit lg:text-sm lg:w-20 md:text-md md:w-20 font-normal">
                SEND ME A MESSAGE
              </p>
            </div>
          </Link>
        </div>

        <div className="m-4 justify-around items-center lg:flex lg:m-4 lg:justify-around lg:items-center md:flex md:m-4 md:justify-around md:items-center">
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

          <div className="">
            <div className="flex items-center">
              <p className="text-3xl">✌️</p>
              <div className="p-2">
                <span className="outfit">
                  info@liquid.com Looking for collabration for your next post?
                </span>
                <p className="outfit">Do not hesitate to contact us</p>
              </div>
            </div>
            <div className="">
              {/* <span>
                info@liquid.com Looking for collabration for your next post?
              </span>
              <p>Do not hesitate to contact us</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// <div className="wrapper text-white w-5/6">
//                 <div className="tab mb-3 bg-red-500 px-3 shadow-lg rounded-md relative">
//                     <input type="radio" name="faq" id="faq1" className="appearance-none peer"/>
//                     <label htmlFor="faq1" className="flex items-center text-lg outfit font-semibold cursor-pointer
//                     after:absolute after:content-['+']
//                     after:right-5 after:text-2xl
//                     after:text-gray-400 hover:after:text-gray-100 peer-checked:after:transform peer-checked:after:rotate-45">
//                       {/* <h2 className="mr-2 h-8 w-8 bg-fuchsia-400 grid place-items-center text-white rounded-full">01</h2> */}
//                       <h3 className="outfit">What is TailwindCss?</h3>
//                     </label>
//                     <div className="answer mt-3 h-0 overflow-hidden transition ease-in-out duration-500 peer-checked:h-full">
//                         <p className="outfit">TailwindCss is good for you and everybody. I love tailwindcss. Good for you if you do also</p>
//                     </div>
//                 </div>
//                 <div className="tab mb-3 bg-red-500 text-white px-3 shadow-lg rounded-md relative">
//                     <input type="radio" name="faq" id="faq2" className="appearance-none peer"/>
//                     <label htmlFor="faq2" className="flex items-center text-lg outfit font-semibold cursor-pointer
//                     after:absolute after:content-['+']
//                     after:right-5 after:text-2xl
//                     after:text-gray-400 hover:after:text-gray-100 peer-checked:after:transform peer-checked:after:rotate-45">
//                       {/* <h2 className="mr-2 h-8 w-8 bg-fuchsia-400 grid place-items-center text-white rounded-full">01</h2> */}
//                       <h3 className="outfit">How do i use Tailwindcss in my project?</h3>
//                     </label>
//                     <div className="answer mt-5 h-0 overflow-hidden transition ease-in-out duration-500 peer-checked:h-full">
//                         <p className="outfit">After installing tailwindcss, you can include it in your projects by importing the pre built Css</p>
//                     </div>
//                 </div>
//                 <div className="tab mb-3 bg-red-500 text-white px-3 shadow-lg rounded-md relative">
//                     <input type="radio" name="faq" id="faq3" className="appearance-none peer"/>
//                     <label htmlFor="faq3" className="flex items-center text-lg outfit font-semibold cursor-pointer
//                     after:absolute after:content-['+']
//                     after:right-5 after:text-2xl
//                     after:text-gray-400 hover:after:text-gray-100 peer-checked:after:transform peer-checked:after:rotate-45">
//                       {/* <h2 className="mr-2 h-8 w-8 bg-fuchsia-400 grid place-items-center text-white rounded-full">01</h2> */}
//                       <h3 className="outfit">How do install TailwindCss</h3>
//                     </label>
//                     <div className="answer mt-5 h-0 overflow-hidden transition ease-in-out duration-500 peer-checked:h-full">
//                         <p className="outfit">Just do the npx create react </p>
//                     </div>
//                 </div>
//             </div>
