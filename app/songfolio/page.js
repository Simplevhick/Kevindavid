"use client";

import Hero from "@/components/Hero";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 1, duration: 1, ease: "easeInOut" },
          }}
          className="text-[5rem] lg:text-[7rem] lg:m-auto lg:min-w-screen md:text-[5rem] md:flex md:min-w-screen"
        >
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
        </motion.div>
      </div>

      <div className="mb-[3rem] lg:mb-[3rem] md:mb-[3rem] m-auto" id="">
        <div className=" p-7 w-auto rounded-md lg:w-auto lg:mt-0 lg:p-6 lg:rounded-md md:rounded-md md:mt-32 md:w-auto md:m-5 bg-gradient-to-r  from-purple-700 to-red-500">
          <div className="text-2xl">
            <div>
              <h3 className="outfit"> List of tracks recorded </h3>
            </div>
            <div className="text-xl">
              <p className="outfit text-gray-400 text-1xl">
                {" "}
                listening to our song{" "}
              </p>
            </div>
          </div>
          <div className="px-[1rem] text-white lg:px-[8rem] lg:text-white md:px-[3rem] md:text-white">
            <div className="flex flex-col space-y-10 lg:flex lg:flex-col lg:space-y-10 md:flex md:flex-col md:space-y-10">
              <div className="mt-5 lg:grid lg:grid-cols-2 lg:mt-5 md:grid md:grid-cols-2 md:mt-5">
                <div className="text-[1rem]">
                  <h3 className="outfit"> List of tracks recorded</h3>
                </div>

                <div className="lg:flex lg:justify-center lg:gap-5 md:flex md:justify-center md:gap-5">
                  <audio ref={audioRef} src="/assets/asa.mp3" />
                  <div className="">
                    <div
                      className=" h-2 rounded"
                      style={{ width: `${progress}%` }}
                    />
                    <div className="w-[43vw] hidden h-2 bg-gray-200 rounded lg:block lg:w-[43vw] lg:h-2 lg:bg-gray-200 lg:rounded md:block md:w-[43vw] md:h-2 md:bg-gray-200 md:rounded" />
                  </div>

                  <div className="mt-[0.256rem] lg:mt-[-1.3rem] md:mt-[-1.3rem]">
                    <button onClick={togglePlay} className="text-[2.5rem]">
                      {isPlaying ? (
                        <BsFillPauseCircleFill />
                      ) : (
                        <BsFillPlayCircleFill />
                      )}
                    </button>
                  </div>
                </div>
                <div className="">
                  <hr className="mt-6 w-[90%] lg:mt-6 lg:w-[55rem] lg:ml-[2rem] md:mt-6 md:w-[35rem] md:ml-[4rem]" />
                </div>
              </div>

              <div className="mt-2 lg:grid lg:grid-cols-2 lg:mt-5 md:grid md:grid-cols-2 md:mt-5">
                <div className="text-[1rem]">
                  <h3 className="outfit">Love no be scam</h3>
                </div>

                <div className="lg:flex lg:justify-center lg:gap-5 md:flex md:justify-center md:gap-5">
                  <audio ref={audRef} src="/assets/asa.mp3" />
                  <div className="">
                    <div
                      className=" h-2 rounded"
                      style={{ width: `${progress}%` }}
                    />
                    <div className="w-[43vw] hidden h-2 bg-gray-200 rounded lg:block lg:w-[43vw] lg:h-2 lg:bg-gray-200 lg:rounded md:block md:w-[43vw] md:h-2 md:bg-gray-200 md:rounded" />
                  </div>

                  <div className="mt-[0.256rem] lg:mt-[-1.3rem] md:mt-[-1.3rem]">
                    <button onClick={togglePlay} className="text-[2.5rem]">
                      {isPlaying ? (
                        <BsFillPauseCircleFill />
                      ) : (
                        <BsFillPlayCircleFill />
                      )}
                    </button>
                  </div>
                </div>
                <div className="">
                  <hr className="mt-6 w-[90%] lg:mt-6 lg:w-[55rem] lg:ml-[2rem] md:mt-6 md:w-[35rem] md:ml-[4rem]" />
                </div>
              </div>

              <div className="mt-2 lg:grid lg:grid-cols-2 lg:mt-5 md:grid md:grid-cols-2 md:mt-5">
                <div className="text-[1rem]">
                  <h3 className="outfit"> Recorded</h3>
                </div>

                <div className="lg:flex lg:justify-center lg:gap-5 md:flex md:justify-center md:gap-5">
                  <audio ref={auditRef} src="/assets/asa.mp3" />
                  <div className="">
                    <div
                      className=" h-2 rounded"
                      style={{ width: `${progress}%` }}
                    />
                    <div className="w-[43vw] hidden h-2 bg-gray-200 rounded lg:block lg:w-[43vw] lg:h-2 lg:bg-gray-200 lg:rounded md:block md:w-[43vw] md:h-2 md:bg-gray-200 md:rounded" />
                  </div>

                  <div className="mt-[0.256rem] lg:mt-[-1.3rem] md:mt-[-1.3rem]">
                    <button onClick={togglePlay} className="text-[2.5rem]">
                      {isPlaying ? (
                        <BsFillPauseCircleFill />
                      ) : (
                        <BsFillPlayCircleFill />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Songfolio;

// <div className="w-auto h-auto rounded-md lg:w-auto lg:h-auto  lg:rounded-md md:w-auto md:h-auto md:rounded-md bg-gradient-to-r  from-purple-700 to-red-500">
//           <div className="p-7 lg:p-7 md:p-7">
//             <h3 className="text-[1.4rem] outfit text-white text-md font-bold lg:text-[1.6rem] lg:text-xl lg:font-bold md:text-[1.2rem] md:text-sm md:font-bold">
//               List of tracks recorded
//             </h3>
//             <p className="text-[1rem] outfit text-base lg:text-[1rem] lg:text-gray-400 lg:text-base md:text-[1rem] md:text-base">
//               listening to our song
//             </p>
//           </div>

//           <div className="m-5 lg:m-5 md:m-5">
//             <div className="lg:flex lg:items-center lg:justify-center lg:gap-20 md:flex md:items-center md:gap-20">
//               <div className="text-white">
//                 <h3 className="outfit">How i am feeling</h3>
//               </div>

//               <div className="gap-5 lg:flex lg:items-center lg:gap-20 md:flex md:items-center md:gap-20">
//                 <audio ref={audioRef} src="/assets/when.mp3" />
//                 <div className="">
//                   <div
//                     className=" h-2 rounded"
//                     style={{ width: `${progress}%` }}
//                   />
//                   <div className="w-[43vw] hidden h-2 bg-gray-200 rounded lg:block lg:w-[43vw] lg:h-2 lg:bg-gray-200 lg:rounded md:block md:w-[43vw] md:h-2 md:bg-gray-200 md:rounded" />
//                 </div>

//                 <div>
//                   <button
//                     onClick={togglePlay}
//                     className="text-[2.5rem] text-white"
//                   >
//                     {isPlaying ? (
//                       <BsFillPauseCircleFill />
//                     ) : (
//                       <BsFillPlayCircleFill />
//                     )}
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-center">
//               <hr className="mt-6 w-[90%]" />
//             </div>

//             <div className="mt-6 lg:flex lg:items-center lg:justify-center lg:gap-20 md:flex md:items-center md:gap-20">
//               <div className="text-white">
//                 <h3 className="outfit">Coming to town</h3>
//               </div>

//               <div className="gap-5 lg:flex lg:items-center lg:gap-20 md:flex md:items-center md:gap-20">
//                 <audio ref={audRef} src="/assets/central.mp3" />
//                 <div className="">
//                   <div
//                     className=" h-2 rounded"
//                     style={{ width: `${progression}%` }}
//                   />
//                   <div className="w-[43vw] hidden h-2 bg-gray-200 rounded lg:block lg:w-[43vw] lg:h-2 lg:bg-gray-200 lg:rounded md:block md:w-[43vw] md:h-2 md:bg-gray-200 md:rounded" />
//                 </div>

//                 <button onClick={play} className="text-[2.5rem] text-white">
//                   {isPlay ? (
//                     <BsFillPauseCircleFill />
//                   ) : (
//                     <BsFillPlayCircleFill />
//                   )}
//                 </button>
//               </div>
//             </div>
//             <div className="flex justify-center">
//               <hr className="mt-6 w-[90%]" />
//             </div>

//             <div className="mt-6 lg:flex lg:items-center lg:justify-center lg:gap-20 md:flex md:items-center md:gap-20">
//               <div className="text-white">
//                 <h3 className="outfit">Moving Train Up</h3>
//               </div>

//               <div className="gap-5 lg:flex lg:items-center lg:gap-20 md:flex md:items-center md:gap-20">
//                 <audio ref={auditRef} src="/assets/elon.mp3" />
//                 <div className="">
//                   <div
//                     className=" h-2 rounded"
//                     style={{ width: `${progressional}%` }}
//                   />
//                   <div className="w-[43vw] hidden h-2 bg-gray-200 rounded lg:block lg:w-[43vw] lg:h-2 lg:bg-gray-200 lg:rounded md:block md:w-[43vw] md:h-2 md:bg-gray-200 md:rounded" />
//                 </div>

//                 <button
//                   onClick={Beingplay}
//                   className="text-[2.5rem] text-white"
//                 >
//                   {isBeingPlayed ? (
//                     <BsFillPauseCircleFill />
//                   ) : (
//                     <BsFillPlayCircleFill />
//                   )}
//                 </button>
//               </div>
//             </div>
//             <div className="flex justify-center">
//               <hr className="mt-6 w-[90%]" />
//             </div>
//           </div>
//         </div>
