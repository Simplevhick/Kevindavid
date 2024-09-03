"use client";
import { useState, useRef, useEffect } from "react";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";

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

  return (
    <div className="mb-[18rem] lg:mb-[15rem] md:mb-[5rem]">
      <div
        className="relative lg:relative lg:m-auto md:relative md:m-auto"
        id="tours"
      >
        <div className=" text-white bg-[url('/assets/kev5.jpg')] rounded-2xl flex h-[60vh] justify-center w-[100vw] mt-[4.3rem] lg:rounded-3xl lg:flex lg:h-[70vh] lg:justify-center lg:w-[100vw] lg:mt-[4.3rem] md:rounded-3xl md:flex md:h-[70vh] md:justify-center md:w-[100vw] md:mt-[4.3rem] bg-fixed bg-center bg-cover bg-no-repeat">
          <div>
            <div className="mt-5 lg:mt-5 md:mt-5">
              <h3 className="text-7xl font-bold text-cs sm:text-9xl outfit">
                TOUR
              </h3>
              <h3 className="text-7xl font-bold sm:text-9xl ml-3 lg:ml-5 md:ml-5 outfit">
                DATE
              </h3>
            </div>
          </div>

          <div className="absolute w-auto h-auto top-[13rem] rounded-md lg:absolute lg:w-auto lg:h-auto lg:top-[20rem] lg:rounded-md md:absolute md:w-auto md:h-auto md:top-[20rem] md:rounded-md bg-gradient-to-r  from-purple-700 to-red-500">
            <div className="p-7 lg:p-7 md:p-7">
              <h3 className="text-[1.4rem] outfit text-md font-bold lg:text-[1.6rem] lg:text-xl lg:font-bold md:text-[1.2rem] md:text-sm md:font-bold">
                List of tracks recorded
              </h3>
              <p className="text-[1rem] outfit text-base lg:text-[1rem] lg:text-gray-400 lg:text-base md:text-[1rem] md:text-base">
                listening to our song
              </p>
            </div>

            <div className="m-5 lg:m-5 md:m-5">
              <div className="lg:flex lg:items-center lg:gap-20 md:flex md:items-center md:gap-20">
                <div className="">
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
              <div className="flex justify-center">
                <hr className="mt-6 w-[90%]" />
              </div>

              <div className="mt-6 lg:flex lg:items-center lg:gap-20 md:flex md:items-center md:gap-20">
                <div className="">
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

                  <button onClick={play} className="text-[2.5rem]">
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

              <div className="mt-6 lg:flex lg:items-center lg:gap-20 md:flex md:items-center md:gap-20">
                <div className="">
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

                  <button onClick={Beingplay} className="text-[2.5rem]">
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
        </div>
      </div>
    </div>
  );
};

export default Tour;
