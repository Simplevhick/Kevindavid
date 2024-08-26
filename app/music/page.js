"use client";

import Hero from "@/components/Hero";
import { useState, useRef, useEffect } from "react";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";

const Music = () => {
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
      <div className="text-white">
        <Hero heading="KAYDEE" message=" MUSIC" />
      </div>

      <div className=" mb-[4.3rem] m-auto" id="">
        <div className=" rounded-md w-[83vw] top-[14rem] ml-8 lg:w-[93vw] lg:top-[20rem] lg:ml-11 md:w-[90vw] md:top-[20rem] md:ml-11">
          <div className="rounded-md h-[100%] text-white bg-gradient-to-r  from-purple-700 to-red-500 ">
            <div className="p-7 lg:p-7 md:p-7">
              <h3 className="text-[1.4rem] text-md font-bold lg:text-[1.6rem] lg:text-xl lg:font-bold md:text-[1.2rem] md:text-sm md:font-bold">
                List of tracks recorded
              </h3>
              <p className="text-[1rem] text-base lg:text-[1rem] lg:text-gray-400 lg:text-base md:text-[1rem] md:text-base">
                listening to our song
              </p>
            </div>

            <div className="ml-10 gap-28 lg:flex lg:items-center lg:text-center lg:ml-40 lg:gap-18 md:flex md: md:ml-8 md:gap-6 md:text-center">
              <div className="text-[18px] font-bold lg:text-base lg:font-bold md:text-base md:font-bold">
                <h3>How i am feeling</h3>
              </div>

              <div className="flex items-center gap-18 lg:flex lg:items-center lg:gap-18 md:flex md:items-center md:gap-16">
                <audio ref={audioRef} src="/assets/asa.mp3" />
                <div className="">
                  <div
                    className=" h-2 rounded"
                    style={{ width: `${progress}%` }}
                  />
                  <div className="w-[43vw] hidden h-2 bg-gray-200 rounded lg:w-[43vw] lg:flex lg:h-2 lg:bg-gray-200 lg:rounded md:w-[43vw] md:h-2 md:bg-gray-200 md:flex md:rounded md:ml-8" />
                </div>

                <button onClick={togglePlay} className="text-[3rem]">
                  {isPlaying ? (
                    <BsFillPauseCircleFill />
                  ) : (
                    <BsFillPlayCircleFill />
                  )}
                </button>
              </div>
            </div>
            <hr className="w-[56vw] ml-14 mt-5 lg:w-[61rem] lg:bg-gray-500 lg:ml-32 lg:mt-5 md:w-[41rem] md:ml-16 md:mt-10" />

            <div className="ml-10 mt-5 gap-28 lg:flex lg:items-center lg:text-center lg:ml-40 lg:gap-18 md:flex md: md:ml-8 md:gap-6 md:text-center">
              <div className="text-[18px] font-bold lg:text-base lg:font-bold md:text-base md:font-bold">
                <h3>Coming to town</h3>
              </div>

              <div className="flex items-center gap-18 lg:flex lg:items-center lg:gap-18 md:flex md:items-center md:gap-16">
                <audio ref={audRef} src="/assets/central.mp3" />
                <div className="">
                  <div
                    className=" h-2 rounded"
                    style={{ width: `${progression}%` }}
                  />
                  <div className="w-[43vw] hidden h-2 bg-gray-200 rounded lg:flex lg:w-[43vw] lg:h-2 lg:bg-gray-200 lg:rounded md:w-[43vw] md:h-2 md:bg-gray-200 md:flex md:rounded md:ml-8" />
                </div>

                <button onClick={play} className="text-[3rem]">
                  {isPlay ? (
                    <BsFillPauseCircleFill />
                  ) : (
                    <BsFillPlayCircleFill />
                  )}
                </button>
              </div>
            </div>
            <hr className="w-[56vw] ml-14 mt-5 lg:w-[61rem] lg:bg-gray-500 lg:ml-32 lg:mt-5 md:w-[41rem] md:ml-16 md:mt-10" />

            <div className="ml-10 mt-5 gap-28 lg:flex lg:items-center lg:text-center lg:ml-40 lg:gap-18 md:flex md: md:ml-8 md:gap-6 md:text-center">
              <div className="text-[18px] font-bold lg:text-base lg:font-bold md:text-base md:font-bold">
                <h3>Moving Train Up</h3>
              </div>

              <div className="flex items-center gap-18 lg:flex lg:items-center lg:gap-18 md:flex md:items-center md:gap-16">
                <audio ref={auditRef} src="/assets/elon.mp3" />
                <div className="">
                  <div
                    className=" h-2 rounded"
                    style={{ width: `${progressional}%` }}
                  />
                  <div className="w-[43vw] hidden h-2 bg-gray-200 rounded lg:flex lg:w-[43vw] lg:h-2 lg:bg-gray-200 lg:rounded md:w-[43vw] md:h-2 md:bg-gray-200 md:flex md:rounded md:ml-8" />
                </div>

                <button onClick={Beingplay} className="text-[3rem]">
                  {isBeingPlayed ? (
                    <BsFillPauseCircleFill />
                  ) : (
                    <BsFillPlayCircleFill />
                  )}
                </button>
              </div>
            </div>
            <hr className="w-[56vw] ml-14 mt-5 lg:w-[61rem] lg:bg-gray-500 lg:ml-32 lg:mt-5 md:w-[41rem] md:ml-16 md:mt-10" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Music;
