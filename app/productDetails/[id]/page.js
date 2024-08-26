"use client";

import { useParams } from "next/navigation";
import productData from "@/components/data";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const ProductDetails = () => {
  const params = useParams();

  const singleProduct = productData.find((i) => i.id == params.id);

  return (
    <>
      <div className="text-white mx-auto justify-center m-20 items-center lg:text-white lg:flex lg:mx-auto lg:justify-center lg:items-center lg:p-24 md:text-white md:flex md:mx-auto md:justify-center md:items-center md:p-24">
        <div className="flex justify-center">
          <Image
            src={singleProduct.src}
            width={300}
            height={300}
            className="w-[260px] h-[360px] rounded-md lg:w-[340px] lg:h-[430px] lg:rounded-md md:w-[310px] md:h-[390px] md:rounded-md"
          />
          <div></div>
        </div>

        <div className="m-3 lg:m-10 md:m-10">
          <div className="">
            <h1 className="text-2xl font-bold">About Album</h1>
            <p className="text-sm w-[17rem] opacity-30 mt-3 lg:text-sm lg:w-[32rem] lg:opacity-30 lg:mt-3 md:text-sm md:w-[22rem] md:opacity-30 md:mt-1">
              {singleProduct.history}
            </p>
          </div>
          <div className="mt-2 flex">
            <div>
              <div className=" ">
                {" "}
                Artist: <span className="ml-2">
                  {singleProduct.artistMan}
                </span>{" "}
              </div>
              <div className="mt-1">
                {" "}
                Label: <span className="ml-2">{singleProduct.label}</span>{" "}
              </div>
              <div className="mt-1">
                Release Date:{" "}
                <span className="ml-2">{singleProduct.releaseDate}</span>{" "}
              </div>
              <div className="mt-1">
                Genres: <span className="ml-2">{singleProduct.genres}</span>
              </div>
              <div className="mt-1">
                People: <span className="ml-2"> {singleProduct.People} </span>
              </div>
            </div>
          </div>

          <div className="mt-2">
            <p className="text-xl font-bold">Share it</p>
            <div className="text-white flex gap-3 lg:flex lg:gap-6 md:flex md:gap-3">
              <div className="w-[2rem] h-[2rem] mt-3 rounded-[50%] border border-white ">
                <a href="https://linkdin.com">
                  <BsLinkedin className="mt-2 ml-[0.43rem]" />
                </a>
              </div>
              <div className="w-[2rem] h-[2rem] mt-3 rounded-[50%] border border-white ">
                <a href="https://github.com">
                  <FaGithub className="mt-2 ml-[0.43rem]" />
                </a>
              </div>
              <div className="w-[2rem] h-[2rem] mt-3 rounded-[50%] border border-white">
                <a href="https://dribble.com">
                  <FiDribbble className="mt-2 ml-[0.43rem]" />
                </a>
              </div>
              <div className="w-[2rem] h-[2rem] mt-3 rounded-[50%] border border-white ">
                <a href="https://instagram.com">
                  <FaInstagram className="mt-2 ml-[0.43rem]" />
                </a>
              </div>
              <div className="w-[2rem] h-[2rem] mt-3 rounded-[50%] border border-white ">
                <a href="https://twitter.com">
                  <FaXTwitter className="mt-2 ml-[0.43rem]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
