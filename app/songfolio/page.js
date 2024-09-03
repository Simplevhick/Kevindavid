"use client";

import Hero from "@/components/Hero";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";

const Songfolio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const [progression, setProgression] = useState(0);
  const [isBeingPlayed, setIsBeingPlayed] = useState(false);
  const [progressional, setProgressional] = useState(0);

  const audioRef = useRef(null);
  const audRef = useRef(null);
  const auditRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const play = () => {
    if (isPlay) {
      audRef.current.pause();
    } else {
      audRef.current.play();
    }
    setIsPlay(!isPlay);
  };

  const Beingplay = () => {
    if (isBeingPlayed) {
      auditRef.current.pause();
    } else {
      auditRef.current.play();
    }
    setIsBeingPlayed(!isBeingPlayed);
  };

  const handleTimeUpdate = () => {
    const { currentTime, duration } = audioRef.current;
    setProgress((currentTime / duration) * 100);
  };

  const handleTheTimeUpdate = () => {
    const { currentTime, duration } = audRef.current;
    setProgression((currentTime / duration) * 100);
  };

  const handleTheSameTimeUpdate = () => {
    const { currentTime, duration } = audRef.current;
    setProgressional((currentTime / duration) * 100);
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  useEffect(() => {
    const aud = audRef.current;
    aud.addEventListener("thetimeupdate", handleTheTimeUpdate);

    return () => {
      aud.removeEventListener("thetimeupdate", handleTheTimeUpdate);
    };
  }, []);

  useEffect(() => {
    const audit = auditRef.current;
    audit.addEventListener("theSametimeupdate", handleTheSameTimeUpdate);

    return () => {
      audit.removeEventListener("theSametimeupdate", handleTheSameTimeUpdate);
    };
  }, []);
  return (
    <>
      <div className="relative flex items-center justify-center w-full h-screen mb-[7rem] lg:mb-[7rem] md:mb-[7rem] bg-fixed bg-center bg-cover custom-img2">
        <div className="text-[5rem] lg:text-[7rem] lg:m-auto lg:min-w-screen md:text-[5rem] md:flex md:min-w-screen">
          <div className="flex-none lg:flex md:flex">
            <div className="text-white leading-[4.5rem] lg:leading-[6rem] md:leading-[6rem]">
              <h3 className="outfit text-cs">KEVIN</h3>
              <h3 className="outfit">DAVID</h3>
              <h3 className="outfit text-cs">KAYDEE</h3>
            </div>
            <div className="lg:flex lg:items-center md:flex md:items-center">
              <div className="bg-white hidden w-[16rem] rounded-xl h-2 lg:bg-white lg:w-[16rem] lg:rounded-xl lg:flex lg:items-end lg:justify-end lg:h-2 md:bg-white md:block md:w-[16rem] md:rounded-xl md:h-2"></div>
              <div className="outfit  text-white">Music</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-[3rem] lg:mb-[3rem] md:mb-[3rem] m-auto" id="">
        <div className="w-auto h-auto rounded-md lg:w-auto lg:h-auto  lg:rounded-md md:w-auto md:h-auto md:rounded-md bg-gradient-to-r  from-purple-700 to-red-500">
          <div className="p-7 lg:p-7 md:p-7">
            <h3 className="text-[1.4rem] outfit text-white text-md font-bold lg:text-[1.6rem] lg:text-xl lg:font-bold md:text-[1.2rem] md:text-sm md:font-bold">
              List of tracks recorded
            </h3>
            <p className="text-[1rem] outfit text-base lg:text-[1rem] lg:text-gray-400 lg:text-base md:text-[1rem] md:text-base">
              listening to our song
            </p>
          </div>

          <div className="m-5 lg:m-5 md:m-5">
            <div className="lg:flex lg:items-center lg:justify-center lg:gap-20 md:flex md:items-center md:gap-20">
              <div className="text-white">
                <h3 className="outfit">How i am feeling</h3>
              </div>

              <div className="gap-5 lg:flex lg:items-center lg:gap-20 md:flex md:items-center md:gap-20">
                <audio ref={audioRef} src="/assets/asa.mp3" />
                <div className="">
                  <div
                    className=" h-2 rounded"
                    style={{ width: `${progress}%` }}
                  />
                  <div className="w-[43vw] hidden h-2 bg-gray-200 rounded lg:block lg:w-[43vw] lg:h-2 lg:bg-gray-200 lg:rounded md:block md:w-[43vw] md:h-2 md:bg-gray-200 md:rounded" />
                </div>

                <div>
                  <button
                    onClick={togglePlay}
                    className="text-[2.5rem] text-white"
                  >
                    {isPlaying ? (
                      <BsFillPauseCircleFill />
                    ) : (
                      <BsFillPlayCircleFill />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <hr className="mt-6 w-[90%]" />
            </div>

            <div className="mt-6 lg:flex lg:items-center lg:justify-center lg:gap-20 md:flex md:items-center md:gap-20">
              <div className="text-white">
                <h3 className="outfit">Coming to town</h3>
              </div>

              <div className="gap-5 lg:flex lg:items-center lg:gap-20 md:flex md:items-center md:gap-20">
                <audio ref={audRef} src="/assets/central.mp3" />
                <div className="">
                  <div
                    className=" h-2 rounded"
                    style={{ width: `${progression}%` }}
                  />
                  <div className="w-[43vw] hidden h-2 bg-gray-200 rounded lg:block lg:w-[43vw] lg:h-2 lg:bg-gray-200 lg:rounded md:block md:w-[43vw] md:h-2 md:bg-gray-200 md:rounded" />
                </div>

                <button onClick={play} className="text-[2.5rem] text-white">
                  {isPlay ? (
                    <BsFillPauseCircleFill />
                  ) : (
                    <BsFillPlayCircleFill />
                  )}
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <hr className="mt-6 w-[90%]" />
            </div>

            <div className="mt-6 lg:flex lg:items-center lg:justify-center lg:gap-20 md:flex md:items-center md:gap-20">
              <div className="text-white">
                <h3 className="outfit">Moving Train Up</h3>
              </div>

              <div className="gap-5 lg:flex lg:items-center lg:gap-20 md:flex md:items-center md:gap-20">
                <audio ref={auditRef} src="/assets/elon.mp3" />
                <div className="">
                  <div
                    className=" h-2 rounded"
                    style={{ width: `${progressional}%` }}
                  />
                  <div className="w-[43vw] hidden h-2 bg-gray-200 rounded lg:block lg:w-[43vw] lg:h-2 lg:bg-gray-200 lg:rounded md:block md:w-[43vw] md:h-2 md:bg-gray-200 md:rounded" />
                </div>

                <button
                  onClick={Beingplay}
                  className="text-[2.5rem] text-white"
                >
                  {isBeingPlayed ? (
                    <BsFillPauseCircleFill />
                  ) : (
                    <BsFillPlayCircleFill />
                  )}
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <hr className="mt-6 w-[90%]" />
            </div>
          </div>
        </div>

        {/* <div
          className="ml-auto mr-auto mt-[3rem] text-white max-w-[1240px] lg:mr-auto lg:ml-auto lg:mt-[3rem] md:mr-auto md:ml-auto md:mt-[3rem]"
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
                
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Songfolio;
