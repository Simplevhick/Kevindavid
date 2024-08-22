"use client";

import Hero from "@/components/Hero";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";

const About = () => {
  return (
    <>
      <div className="">
        <Hero heading="KAYDEE" message="ABOUT" />
      </div>

      <div className="text-white">
        <div className="text-white m-4 max-w-[1240px] lg:text-white lg:m-24 lg:flex lg:max-w-[1240px] md:text-white md:m-24 md:flex md:max-w-[1240px]">
          <div className="flex-none lg:flex lg:flex-1 md:flex md:flex-1">
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
                      He's an expert in this field
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
                      He's broad on all angles
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white m-5 max-w-[1240px] lg:text-white lg:m-24 lg:gap-[54%] lg:flex lg:max-w-[1240px] md:text-white md:m-24 md:gap-[54%] mdflex md:max-w-[1240px]">
          <div className="">
            <h3>Experience</h3>
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
        </div>
        <div className="text-white m-6 max-w-[1240px] lg:text-white lg:m-24 lg:gap-[54%] lg:flex lg:max-w-[1240px] md:text-white md:m-24 md:gap-[54%] mdflex md:max-w-[1240px]">
          <div className="">
            <h3>Skills</h3>
          </div>

          <div className="">
            <div className="p-1 lg:p-1 md:p-1">
              <p className="text-[1.1rem] lg:text-[1.1rem] md:text-[1.1rem]">
                Art & Culture
                <span className="text-[1rem] font-semibold pl-32">
                  Brand guide
                </span>
              </p>
            </div>
            <div className="p-1 lg:p-1 md:p-1">
              <p className="text-[1.1rem] ">
                Brand strategy
                <span className="text-[1rem] font-semibold pl-[7.1rem]">
                  Flayer design
                </span>
              </p>
            </div>
            <div className="p-1 lg:p-1 md:p-1">
              <p className="text-[1.1rem] lg:text-[1.1rem] md:text-[1.1rem]">
                {" "}
                Communication{" "}
                <span className="text-[1rem] font-semibold pl-[6.5rem]">
                  {" "}
                  Video-production{" "}
                </span>{" "}
              </p>
            </div>
            <div className="p-1 lg:p-1 md:p-1">
              <p className="text-[1.1rem] lg:text-[1.1rem] md:text-[1.1rem]">
                {" "}
                Motion graphics{" "}
                <span className="text-[1rem] font-semibold pl-[6.5rem]">
                  {" "}
                  Content creation{" "}
                </span>{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="text-white m-6 max-w-[1240px] lg:text-white lg:m-24 lg:gap-[54%] lg:flex lg:max-w-[1240px] md:text-white md:m-24 md:gap-[54%] mdflex md:max-w-[1240px]">
          <div className="">
            <h3>Awards</h3>
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
        </div>
      </div>
    </>
  );
};

export default About;
