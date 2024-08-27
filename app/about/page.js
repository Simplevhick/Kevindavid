"use client";

import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const About = () => {
  const [openFile, setOpenFile] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFile, setIsOpenFile] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const popUp = () => {
    setIsOpen(!isOpenFile);
  };

  return (
    <>
      <div
        className="relative w-full flex items-end  h-screen mb-[7rem] lg:w-full lg:flex lg:items-end lg:justify-center lg:h-screen lg:mb-[7rem] md:w-full md:flex md:items-end md:h-screen md:justify-center md:mb-[7rem] bg-fixed bg-center bg-cover custom-img2"
        id="about"
      >
        <div className="text-[7rem] pl-[1rem] min-w-screen lg:text-[9rem] lg:pl-[3rem] lg:flex lg:min-w-screen md:text-[6rem] md:pl-[1.7rem] md:flex md:min-w-screen">
          <div className="">
            <h3 className="text-white leading-[3rem] font-extrabold outfit">KEVIN</h3>
            <h3 className="text-white font-extrabold outfit">DAVID</h3>
          </div>
          <div className="flex-none items-center lg:flex lg:items-center md:flex md:items-center">
            <div className="bg-white hidden w-[16rem] rounded-xl h-2 lg:bg-white lg:block lg:w-[16rem] lg:rounded-xl lg:h-2 md:bg-white md:block md:w-[16rem] md:rounded-xl md:h-2"></div>
            <h3 className="text-white text-cs font-extrabold outfit">About</h3>
          </div>
        </div>
      </div>

      <div className="text-white max-w-[1240px] m-auto">
        <div className="m-4 lg:flex lg:justify-around lg:m-4 md:flex md:justify-around md:m-4">
          <div>
            <h3 className="text-lg outfit">About Me</h3>
          </div>
          <div className="text-md leading-[1.5rem] w-[23rem] p-4 lg:text-md lg:w-[20rem] md:text-md md:w-[20rem]">
            <p className="outfit">
              My name is Kevin Kaydee Ichekor, Im a freelance Branding & Digital
              Designer based by the volley in New york. I currently work at the
              Liquid . I create brand identities, digital experiences, and print
              materials that communicate clearly acheive marketing goals, and
              look fantastic, beauty and technicsal experiences. Our design
              starts and ends best-in-class experience strategy that builds
              brands.
            </p>
            <div className="flex items-end justify-between">
              <div>
                <p className="outfit">Digital marketing</p>
              </div>
              <div className="relative">
                <button
                  className=" h-3 w-3 focus:border-gray-400 py-2"
                  onClick={toggleDropdown}
                >
                  +
                </button>
                <div className="absolute right-0 bg-white rounded-lg shadow-lg">
                  {isOpen && (
                    <p className="text-gray-800 bg-white w-[12rem] p-2 hover:text-gray-400">
                      I also do other stuffs aside business and making money
                    </p>
                  )}
                </div>
              </div>
            </div>
            {/* <div className="flex items-end justify-between">
              <div>
                <p>Ui/Ux</p>
              </div>
              <div className="relative inline-block text-left">
                <button className=" h-3 w-3 py-2" onClick={popUp}>
                  +
                </button>
                <div className="absolute right-0  rounded-lg p-2 ">
                  {isOpenFile && (
                    <div className="hidden w-auto flex-col rounded-lg text-red-300 py-1 shadow-md transition-all group-hover:flex lg:hidden lg:w-auto lg:flex-col lg:rounded-lg lg:text-red-300 lg:py-1 lg:shadow-md lg:transition-all lg:group-hover:flex md:hidden md:w-auto md:flex-col md:rounded-lg md:text-red-300 md:py-1 md:shadow-md md:transition-all md:group-hover:flex">
                      <p className="flex  items-center py-1 pl-1 pr-1 text-neutral-500 hover:text-black lg:flex  lg:items-center lg:py-1 lg:pl-1 lg:pr-1 lg:text-neutral-500 lg:hover:text-black md:flex md:items-center md:py-1 md:pl-1  md:pr-1 md:text-neutral-500 md:hover:text-black">
                        <span className="whitespace-nowrap">
                          Hes an expert in this field
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div> */}
            <div className="flex justify-between flex-col group py-5 transition-all lg:group lg:py-5 lg:transition-all md:group md:py-5 md:transition-all">
              <div className="flex items-center gap-[15rem] text-neutral-200 group-hover:text-white  lg:text-neutral-200 lg:group-hover:text-white md:flex md:items-center md:gap-[19rem] md:text-neutral-200 md:group-hover:text-white">
                <p className="whitespace-nowrap outfit">Ui/Ux</p>
                <div>
                  <AiOutlinePlus className="rotate-180 transition-all text-white group-hover:rotate-0" />
                </div>
              </div>
              <div className="hidden w-auto flex-col rounded-lg text-red-300 py-1 shadow-md transition-all group-hover:flex lg:rounded-lg lg:text-red-300 lg:py-1 lg:shadow-md lg:transition-all lg:group-hover:flex md:hidden md:w-auto md:flex-col md:rounded-lg md:text-red-300 md:py-1 md:shadow-md md:transition-all md:group-hover:flex">
                <p className="flex  items-center py-1 pl-1 pr-1 text-neutral-500 lg:py-1 lg:pl-1 lg:pr-1  md:flex md:items-center md:py-1 md:pl-1  md:pr-1 md:text-neutral-500">
                  <span className="whitespace-nowrap outfit">
                    Hes an expert in this field
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="m-4 lg:flex lg:justify-around lg:m-7 md:flex md:justify-around md:m-7">
          <div>
            <h3 className="text-lg  outfit">Experience</h3>
          </div>
          <div className="text-md w-[20rem] p-4 lg:text-md lg:w-[20rem] lg:p-4 md:text-md md:w-[20rem] md:p-4">
            <div className="text-lg p-1 outfit">2020 · CEO - LiquidThemes</div>
            <div className="text-lg p-1 outfit">2020 · CEO - Action Ray</div>
            <div className="text-lg p-1 outfit">2020 · CEO - The mix</div>
            <div className="text-lg p-1 outfit">2020 · CEO - SquidGame</div>
          </div>
        </div>

        <div className="m-4 lg:flex lg:justify-around md:flex md:justify-around md:m-4">
          <div>
            <h3 className="text-lg outfit">My Skills</h3>
          </div>
          <div className="text-md w-[20rem] p-4 lg:flex lg:text-md lg:w-[20rem] lg:p-4 md:text-md md:p-4">
            <div className="">
              <div className="p-1 lg:p-1">
                <p className="text-[1.1rem] outfit lg:text-[1.1rem] md:text-[1.1rem]">
                  Art & Culture
                </p>
              </div>
              <div className="p-1 lg:p-1 md:flex md:items-center">
                <p className="text-[1.1rem] outfit ">Brand strategy</p>
              </div>
              <div className="p-1 lg:p-1 md:flex md:items-center">
                <p className="text-[1.1rem] outfit lg:text-[1.1rem] md:text-[1.1rem]">
                  Communication
                </p>
              </div>

              <div className="p-1 lg:p-1 md:flex md:items-center">
                <p className="text-[1.1rem] outfit lg:text-[1.1rem] md:text-[1.1rem] whitespace-nowrap">
                  Motion graphics
                </p>
              </div>
            </div>
            <div className="whitespace-nowrap">
              <div className="p-1 lg:p-1 md:flex md:items-center">
                <p className="text-[1.1rem] outfit lg:text-[1.1rem] md:text-[1.1rem]">
                  Content creation
                </p>
              </div>
              <div className="p-1 lg:p-1 md:flex md:items-center">
                <p className="text-[1.1rem] outfit lg:text-[1.1rem] md:text-[1.1rem]">
                  Flayresign
                </p>
              </div>
              <div className="p-1 lg:p-1 md:flex md:items-center">
                <p className="text-[1.1rem] outfit lg:text-[1.1rem] md:text-[1.1rem]">
                  Brand strategy
                </p>
              </div>
              <div className="p-1 lg:p-1 md:flex md:items-center">
                <p className="text-[1.1rem] outfit lg:text-[1.1rem] md:text-[1.1rem]">
                  Content creation
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="m-4 lg:flex lg:justify-around lg:m-7 md:flex md:justify-around md:m-4">
          <div>
            <h3 className="text-lg outfit">Awards</h3>
          </div>
          <div className="text-md w-[20rem] p-4 whitespace-nowrap md:p-4">
            <div className="">
              <div className="p-1 lg:p-3">
                <p className="text-[0.90rem] lg:text-[0.90rem] md:text-[0.90rem] outfit">
                  3x
                  <span className="text-[1rem] font-semibold pl-8 lg:pl-8 md:pl-5 outfit">
                    AW Site of the Day
                  </span>
                </p>
              </div>
              <div className="p-1 lg:p-3">
                <p className="text-[0.90rem] lg:text-[0.90rem] md:text-[0.90rem] outfit">
                  1x
                  <span className="text-[1rem] font-semibold pl-8 lg:pl-8 md:pl-5 outfit">
                    FTA Best interactive
                  </span>
                </p>
              </div>
              <div className="p-1 lg:p-3 ">
                <p className="text-[0.90rem] lg:text-[0.90rem] md:text-[0.90rem] outfit">
                  2x
                  <span className="text-[1rem] font-semibold pl-8 lg:pl-8 md:pl-5 outfit">
                    AW Honourable
                  </span>
                </p>
              </div>
              <div className="p-1 lg:p-3 ">
                <p className="text-[0.90rem] lg:text-[0.90rem] md:text-[0.90rem] outfit">
                  2x
                  <span className="text-[1rem] font-semibold pl-8 lg:pl-8 md:pl-5 outfit">
                    Red Dot Graphic Design Awards
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

{
  /* <div className="flex justify-around">
          <div className="">
            <h3 className="text-lg font-bold">About Me</h3>
          </div>
          <div className="text-md w-[22rem] mt-5 lg:text-md lg:w-[27rem] md:text-md md:w-[27rem]">
            <p>
              My name is Kevin Kaydee Ichekor, Im a freelance Branding & Digital
              Designer based by the volley in New york. I currently work at the
              Liquid . I create brand identities, digital experiences, and print
              materials that communicate clearly acheive marketing goals, and
              look fantastic, beauty and technicsal experiences. Our design
              starts and ends best-in-class experience strategy that builds
              brands.
            </p>
            <div className="flex items-center transition-all lg:flex lg:items-center lg:transition-all md:flex md:items-center md:transition-all">
              <div className=" group py-5 transition-all lg:group lg:py-5 lg:transition-all md:group md:py-5 md:transition-all">
                <p className="flex items-center gap-[15rem] text-neutral-200 group-hover:text-white lg:flex lg:items-center lg:gap-[19rem] lg:text-neutral-200 lg:group-hover:text-white md:flex md:items-center md:gap-[19rem] md:text-neutral-200 md:group-hover:text-white">
                  <span className="whitespace-nowrap">Digital Design</span>
                  <AiOutlinePlus className="rotate-180 transition-all group-hover:rotate-0" />
                </p>
                <div className="hidden w-auto flex-col rounded-lg text-red-300 py-1 shadow-md transition-all group-hover:flex lg:hidden lg:w-auto lg:flex-col lg:rounded-lg lg:text-red-300 lg:py-1 lg:shadow-md lg:transition-all lg:group-hover:flex md:hidden md:w-auto md:flex-col md:rounded-lg md:text-red-300 md:py-1 md:shadow-md md:transition-all md:group-hover:flex">
                  <p className="flex  items-center py-1 pl-1 pr-1 text-neutral-500 hover:text-black lg:flex  lg:items-center lg:py-1 lg:pl-1 lg:pr-1 lg:text-neutral-500 lg:hover:text-black md:flex md:items-center md:py-1 md:pl-1  md:pr-1 md:text-neutral-500 md:hover:text-black">
                    <span className="whitespace-nowrap">
                      Hes an expert in this field
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center transition-all lg:flex lg:items-center lg:transition-all md:flex md:items-center md:transition-all">
              <div className="group py-2 transition-all lg:group lg:py-2 lg:transition-all md:group md:py-2 md:transition-all">
                <p className="flex items-center gap-[14.5rem] text-neutral-200 group-hover:text-white lg:flex lg:items-center lg:gap-[18.5rem] lg:text-neutral-200 lg:group-hover:text-white md:flex md:items-center md:gap-[18.5rem] md:text-neutral-200 md:group-hover:text-white">
                  <span className="whitespace-nowrap">Product Design</span>
                  <AiOutlinePlus className="rotate-180 transition-all group-hover:rotate-0" />
                </p>
                <div className="hidden w-auto flex-col rounded-lg  text-red-300 py-1 shadow-md transition-all group-hover:flex lg:hidden lg:w-auto lg:flex-col lg:rounded-lg  lg:text-red-300 lg:py-1 lg:shadow-md lg:transition-all lg:group-hover:flex md:hidden md:w-auto md:flex-col md:rounded-lg  md:text-red-300 md:py-1 md:shadow-md md:transition-all md:group-hover:flex">
                  <p className="flex items-center py-1 pl-1 pr-1 text-neutral-500 hover:text-black lg:flex lg:items-center lg:py-1 lg:pl-1 lg:pr-1 lg:text-neutral-500 lg:hover:text-black md:flex md:items-center md:py-1 md:pl-1 md:pr-1 md:text-neutral-500 md:hover:text-black">
                    <span className="whitespace-nowrap">
                      Hes broad on all angles
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */
}

{
  /* <div className="flex justify-around">
          <div className="">
            <h3 className="text-lg font-bold">Experience</h3>
          </div>

          <div className="">
            <div className="p-1 lg:p-1 md:p-1">
              <p className="text-[1.1rem] lg:text-[1.1rem] md:text-[1.1rem]">
                2000{" "}
                <span className="text-[1.5rem] font-bold pl-10 lg:text-[1.5rem] lg:font-bold lg:pl-10 md:text-[1.5rem] md:font-bold md:pl-10">
                  {" "}
                  ·{" "}
                </span>{" "}
                <span className="text-[1rem] font-semibold pl-10 lg:text-[1rem] lg:font-semibold lg:pl-10 md:text-[1rem] md:font-semibold md:pl-10">
                  {" "}
                  CEO - LiquidThemes{" "}
                </span>{" "}
              </p>
            </div>
            <div className="p-1 lg:p-1 md:p-1">
              <p className="text-[1.1rem] lg:text-[1.1rem] md:text-[1.1rem]">
                2022{" "}
                <span className="text-[1.5rem] font-bold pl-10 lg:text-[1.5rem] lg:font-bold lg:pl-10 md:text-[1.5rem] md:font-bold md:pl-10">
                  {" "}
                  ·{" "}
                </span>{" "}
                <span className="text-[1rem] font-semibold pl-10 lg:text-[1rem] lg:font-semibold lg:pl-10 md:text-[1rem] md:font-semibold md:pl-10">
                  {" "}
                </span>{" "}
                CEO - SquidGame{" "}
              </p>
            </div>
            <div className="p-1 lg:p-1 md:p-1">
              <p className="text-[1.1rem] lg:text-[1.1rem] md:text-[1.1rem]">
                2021{" "}
                <span className="text-[1.5rem] font-bold pl-10 lg:text-[1.5rem] lg:font-bold lg:pl-10 md:text-[1.5rem] md:font-bold md:pl-10">
                  {" "}
                  ·{" "}
                </span>{" "}
                <span className="text-[1rem] font-semibold pl-10 lg:text-[1rem] lg:font-semibold lg:pl-10 md:text-[1rem] md:font-semibold md:pl-10">
                  {" "}
                </span>{" "}
                CEO - Action Ray{" "}
              </p>
            </div>
            <div className="p-1 lg:p-1 md:p-1">
              <p className="text-[1.1rem] lg:text-[1.1rem] md:text-[1.1rem]">
                2023{" "}
                <span className="text-[1.5rem] font-bold pl-10 lg:text-[1.5rem] lg:font-bold lg:pl-10 md:text-[1.5rem] md:font-bold md:pl-10">
                  {" "}
                  ·{" "}
                </span>{" "}
                <span className="text-[1rem] font-semibold pl-10 lg:text-[1rem] lg:font-semibold lg:pl-10 md:text-[1rem] md:font-semibold md:pl-10">
                  {" "}
                </span>{" "}
                CEO - The mix{" "}
              </p>
            </div>
          </div>
        </div> */
}
{
  /* <div className="">
          <div className="flex justify-around">
            <div className="">
              <h3 className="text-lg font-bold">Skills</h3>
            </div>

            <div className=" lg:flex lg:gap-[13%] md:flex md:gap-[13%]">
              <div className="">
                <div className="p-1">
                  <p className="text-[1.1rem] lg:text-[1.1rem] md:text-[1.1rem]">
                    Art & Culture
                  </p>
                </div>
                <div className="p-1 lg:p-1 md:p-1 md:flex md:items-center">
                  <p className="text-[1.1rem] ">Brand strategy</p>
                </div>
                <div className="p-1 lg:p-1 md:p-1 md:flex md:items-center">
                  <p className="text-[1.1rem] lg:text-[1.1rem] md:text-[1.1rem]">
                    Communication
                  </p>
                </div>

                <div className="p-1 md:p-1 md:flex md:items-center">
                  <p className="text-[1.1rem] lg:text-[1.1rem] md:text-[1.1rem] whitespace-nowrap">
                    Motion graphics
                  </p>
                </div>
              </div>

              <div className="whitespace-nowrap">
                <div className="p-1 lg:p-1 md:p-1 md:flex md:items-center">
                  <p className="text-[1.1rem] lg:text-[1.1rem] md:text-[1.1rem]">Content creation</p>
                </div>
                <div className="p-1 lg:p-1 md:p-1 md:flex md:items-center">
                  <p className="text-[1.1rem] lg:text-[1.1rem] md:text-[1.1rem]">Flayresign</p>
                </div>
                <div className="p-1 lg:p-1 md:p-1 md:flex md:items-center">
                  <p className="text-[1.1rem] lg:text-[1.1rem] md:text-[1.1rem]">Brand strategy</p>
                </div>
                <div className="p-1 lg:p-1 md:p-1 md:flex md:items-center">
                  <p className="text-[1.1rem] lg:text-[1.1rem] md:text-[1.1rem]">Content creation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-around">
          <div className="">
            <h3 className="text-lg font-bold">Awards</h3>
          </div>

          <div className="">
            <div className="p-1">
              <p className="text-[1.1rem] lg:text-[1.1rem] md:text-[1.1rem]">
                3x
                <span className="text-[1rem] font-semibold pl-8">
                  AW Site of the Day
                </span>
              </p>
            </div>
            <div className="p-1">
              <p className="text-[1.1rem] lg:text-[1.1rem] md:text-[1.1rem]">
                1x
                <span className="text-[1rem] font-semibold pl-8">
                  FTA Best interactive
                </span>
              </p>
            </div>
            <div className="p-1">
              <p className="text-[1.1rem] lg:text-[1.1rem] md:text-[1.1rem]">
                2x
                <span className="text-[1rem] font-semibold pl-8">
                  AW Honourable
                </span>
              </p>
            </div>
            <div className="p-1">
              <p className="text-[1.1rem] lg:text-[1.1rem] md:text-[1.1rem]">
                2x
                <span className="text-[1rem] font-semibold pl-8">
                  Red Dot Graphic Design Awards
                </span>
              </p>
            </div>
          </div>
        </div> */
}
