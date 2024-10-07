"use client";

import { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import productData from "@/components/data";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from 'react-icons/fa';
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import Link from "next/link";

const ProductDetails = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [progression, setProgression] = useState(0);

  const audRef = useRef(null);
  const clickRef = useRef();

  const play = () => {
    if (isPlay) {
      audRef.current.pause();
    } else {
      audRef.current.play();
    }
    setIsPlay(!isPlay);
  };

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    singleProduct.song.current.currentTime =
      (divprogress / 100) * singleProduct.song.length;
  };

  const params = useParams();

  const singleProduct = productData.find((i) => i.id == params.id);

  return (
    <>
      <div className="relative text-white  mx-auto justify-center m-20 items-center lg:text-white lg:flex lg:mx-auto lg:justify-center lg:items-center lg:p-24 md:text-white md:flex md:mx-auto md:justify-center md:items-center md:p-24">
        <div className="flex justify-center">
          <Image
            src={singleProduct.src}
            width={300}
            height={300}
            alt="pix"
            className="w-[260px] h-[360px] rounded-md lg:w-[340px] lg:h-[430px] lg:rounded-md md:w-[310px] md:h-[390px] md:rounded-md"
          />
          <div className="absolute w-[50vw] flex mt-[20rem] justify-center h-[5rem] bg-gradient-to-r  from-purple-700 to-red-500 rounded lg:absolute lg:w-[19vw] lg:flex lg:mt-[24rem] lg:justify-center lg:h-[5.4rem] lg:rounded md:absolute md:w-[19vw] md:flex md:m-[21.5rem] md:justify-center md:h-[5rem] md:rounded">
            <div className="">
              <audio ref={audRef} src={singleProduct.song} />
              <div className="">
                <div
                  className=" h-2 rounded lg:h-2 lg:rounded md:h-2 md:rounded"
                  style={{ width: `${progression}%` }}
                />
              </div>

              <button
                onClick={play}
                className="text-[1.7rem] lg:text-[2rem] md:text-[1.7rem]"
              >
                {isPlay ? <BsFillPauseCircleFill /> : <BsFillPlayCircleFill />}
              </button>
            </div>

            <div
              className="absolute top-11 navigation_wrapper2 w-[9rem] h-[3px] rounded-[30px] cursor-pointer lg:absolute lg:top-12 lg:navigation_wrapper2 lg:w-[13rem] lg:h-[5px] lg:rounded-[30px] lg:cursor-pointer md:absolute md:navigation_wrapper2 md:w-[10rem] md:h-[3px] md:rounded-[30px] md:cursor-pointer"
              onClick={checkWidth}
              ref={clickRef}
            >
              <div
                className="seek_bar2 w-0 h-[100%] rounded-[30px]"
                style={{ width: `${singleProduct.song.progress + "%"}` }}
              ></div>
            </div>
            <div className="absolute text-sm top-[3.3rem] lg:absolute lg:top-[4rem] md:absolute md:text-sm">
              <div>{singleProduct.title}</div>
            </div>
          </div>
        </div>

        <div className="m-3 lg:m-10 md:m-5">
          <div className="">
            <h1 className="text-2xl font-bold mt-[3.4rem] lg:text-2xl lg:font-bold md:text-2xl outfit md:font-bold">
              About Album
            </h1>
            <p className="text-sm w-full opacity-65 mt-3 lg:text-sm lg:w-[32rem] lg:opacity-65 lg:mt-3 outfit md:text-sm md:w-[21rem] md:opacity-65 md:mt-1">
              {singleProduct.history}
            </p>
          </div>
          <div className="mt-2 flex">
            <div>
              <div className="outfit">
                {" "}
                Artist: <span className="ml-2 outfit opacity-65 lg:opacity-65 md:opacity-65">
                  {singleProduct.artistMan}
                </span>{" "}
              </div>
              <div className="mt-1 outfit">
                {" "}
                Label: <span className="ml-2 outfit opacity-65 md:opacity-65 lg:opacity-65">{singleProduct.label}</span>{" "}
              </div>
              <div className="mt-1 outfit">
                Release Date:{" "}
                <span className="ml-2 outfit opacity-65 lg:opacity-65 md:opacity-65">{singleProduct.releaseDate}</span>{" "}
              </div>
              <div className="mt-1 outfit">
                Genres: <span className="ml-2 outfit opacity-65 lg:opacity-65 md:opacity-65">{singleProduct.genres}</span>
              </div>
              <div className="mt-1 outfit">
                People: <span className="ml-2 outfit opacity-65 lg:opacity-65 md:opacity-65"> {singleProduct.People} </span>
              </div>
            </div>
          </div>

          <div className="mt-2 ">
            <p className="text-xl font-bold outfit">Share it</p>
            <div className="text-white flex gap-3 lg:flex lg:gap-6 md:flex md:gap-3">
              <div className="w-[2rem] h-[2rem] mt-3 rounded-[50%] border border-white hover:bg-gradient-to-r  from-purple-700 to-red-500 hover:text-sm hover:ease-in-out">
                <a href="https://linkdin.com">
                  <FaYoutube className="mt-2 ml-[0.43rem]" />
                </a>
              </div>
              <div className="w-[2rem] h-[2rem] mt-3 rounded-[50%] border border-white hover:bg-gradient-to-r  from-purple-700 to-red-500 hover:text-sm hover:ease-in-out">
                <a href="https://github.com">
                  <FaGithub className="mt-2 ml-[0.43rem]" />
                </a>
              </div>
              <div className="w-[2rem] h-[2rem] mt-3 rounded-[50%] border border-white hover:bg-gradient-to-r  from-purple-700 to-red-500 hover:text-sm hover:ease-in-out">
                <a href="https://Tiktok.com">
                  <FaTiktok className="mt-2 ml-[0.43rem]" />
                </a>
              </div>
              <div className="w-[2rem] h-[2rem] mt-3 rounded-[50%] border border-white hover:bg-gradient-to-r  from-purple-700 to-red-500 hover:text-sm hover:ease-in-out">
                <a href="https://instagram.com">
                  <FaInstagram className="mt-2 ml-[0.43rem]" />
                </a>
              </div>
              <div className="w-[2rem] h-[2rem] mt-3 rounded-[50%] border border-white hover:bg-gradient-to-r  from-purple-700 to-red-500 hover:text-sm hover:ease-in-out">
                <a href="https://twitter.com">
                  <FaXTwitter className="mt-2 ml-[0.43rem]" />
                </a>
              </div>
            </div>

            <div className="mt-3">
              <div className="">
                <p className="text-xl font-bold outfit">Available on</p>
              </div>

              <div className="flex">
                <Link href="">
                  <div className="flex  mt-3 w-48 h-14 bg-black text-white rounded-xl">
                    <div className="mr-3">
                      <svg viewBox="0 0 384 512" width="25">
                        <path
                          fill="currentColor"
                          d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[0.72rem]">Download on the</div>
                      <div className="text-[1.2rem] font-semibold font-sans -mt-1">
                        App Store
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="">
                  <div className="flex mt-3 w-48 h-14 bg-black text-white rounded-lg">
                    <div className="mr-3">
                      <svg viewBox="30 336.7 120.9 129.2" width="25">
                        <path
                          fill="#FFD400"
                          d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                        />
                        <path
                          fill="#FF3333"
                          d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                        />
                        <path
                          fill="#48FF48"
                          d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                        />
                        <path
                          fill="#3BCCFF"
                          d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[0.72rem]">GET IT ON</div>
                      <div className="text-[1.2rem] font-semibold font-sans -mt-1">
                        Google Play
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
