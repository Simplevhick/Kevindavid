"use client";
import { useState, useRef, useEffect } from "react";

const Tour = () => {
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
    <div className="relative mb-[4.3rem]">
      <div className=" text-white bg-[url('/assets/bg2.jpeg')] rounded-2xl flex h-[60vh] justify-center w-[100vw] mt-[4.3rem] lg:rounded-3xl lg:flex lg:h-[70vh] lg:justify-center lg:w-[100vw] lg:mt-[4.3rem] md:rounded-3xl md:flex md:h-[70vh] md:justify-center md:w-[100vw] md:mt-[4.3rem] bg-fixed bg-center bg-cover bg-no-repeat">
        <div>
          <div className="mt-5">
            <h3 className="text-7xl font-bold text-cs sm:text-9xl">TOUR</h3>
            <h3 className="text-7xl font-bold sm:text-9xl ml-3 lg:ml-5 md:ml-5">
              DATE
            </h3>
          </div>
        </div>
      </div>

      <div className="absolute rounded-md w-[83vw] top-[14rem] ml-8 lg:w-[93vw] lg:top-[20rem] lg:ml-11 md:w-[90vw] md:top-[20rem] md:ml-11">
        <div className="rounded-md h-[100%] text-white bg-gradient-to-r  from-purple-700 to-red-500 ">
          <div className="p-7 lg:p-7 md:p-7">
            <h3 className="text-[1.4rem] text-md font-bold lg:text-[1.6rem] lg:text-xl lg:font-bold md:text-[1.2rem] md:text-sm md:font-bold">
              List of tracks recorded
            </h3>
            <p className="text-[1rem] text-base lg:text-[1rem] lg:text-gray-400 lg:text-base md:text-[1rem] md:text-base">listening to our song</p>
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

              <button
                onClick={togglePlay}
                className="text-white px-8 mt-2 py-[4px] text-[13px] rounded-[55px] bg-transparent border border-blue-50 lg:text-white lg:px-10 lg:py-1 lg:rounded-[55px] lg:bg-transparent lg:border lg:border-blue-50 md:text-white md:px-8 md:py-1 md:rounded-[55px] md:bg-transparent md:border md:border-blue-50"
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
            </div>
          </div>
          <hr className="w-[56vw] ml-14 mt-5 lg:w-[61rem] lg:ml-32 lg:mt-10 md:w-[41rem] md:ml-16 md:mt-10" />

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

              <button
                onClick={play}
                className="text-white px-8 mt-2 py-[4px] text-[13px] rounded-[55px] bg-transparent border border-blue-50 lg:text-white lg:px-10 lg:py-1 lg:rounded-[55px] lg:bg-transparent lg:border lg:border-blue-50 md:text-white md:px-8 md:py-1 md:rounded-[55px] md:bg-transparent md:border md:border-blue-50"
              >
                {isPlay ? "Pause" : "Play"}
              </button>
            </div>
          </div>
          <hr className="w-[56vw] ml-14 mt-5 lg:w-[61rem] lg:ml-32 lg:mt-10 md:w-[41rem] md:ml-16 md:mt-10" />

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

              <button
                onClick={Beingplay}
                className="text-white px-8 mt-2 py-[4px] text-[13px] rounded-[55px] bg-transparent border border-blue-50 lg:text-white lg:px-10 lg:py-1 lg:rounded-[55px] lg:bg-transparent lg:border lg:border-blue-50 md:text-white md:px-8 md:py-1 md:rounded-[55px] md:bg-transparent md:border md:border-blue-50"
              >
                {isBeingPlayed ? "Pause" : "Play"}
              </button>
            </div>
          </div>
          <hr className="w-[56vw] ml-14 mt-5 lg:w-[61rem] lg:ml-32 lg:mt-10 md:w-[41rem] md:ml-16 md:mt-10" />
        </div>
      </div>
    </div>
  );
};

export default Tour;
