"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartCircleFill,
  BsFillSkipEndCircleFill,
} from "react-icons/bs";

const Player = ({
  audioElem,
  isplaying,
  setisplaying,
  currentSong,
  setCurrentSong,
  songs,
}) => {
  const clickRef = useRef();

  const PlayPause = () => {
    setisplaying(!isplaying);
  };

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
  };

  const skipBack = () => {
    const index = songs.findIndex((x) => x.title == currentSong.title);
    if (index == 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }

    audioElem.current.currentTime = 0;
  };

  const skiptoNext = () => {
    const index = songs.findIndex((x) => x.title == currentSong.title);
    if (index == songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }

    audioElem.current.currentTime = 0;
  };

  return (
    <div className="absolute w-[90%] max-w-[400px] lg:max-w-[900px] md:max-w-[600px] text-white top-[38rem] left-15 lg:top-[36rem] lg:left-38 md:top-[37rem] md:left-15">
      <div className="flex bg-red-500 p-4 rounded-xl items-center lg:flex lg:bg-red-500 lg:p-6 lg:items-center md:flex md:bg-red-500 md:p-4 md:items-center">
        <div className="flex items-center text-grey-200 ml-[7px] lg:flex lg:items-center lg:text-grey-200 md:flex md:items-center md:text-grey-200 ">
          <Image
            src={currentSong.img}
            alt="pix"
            layout="responsive"
            width={80}
            height={30}
            className=""
          />
          <div className="flex flex-col text-gray-200 opacity-55 w-2 ml-[5px] leading-none lg:flex lg:flex-col lg:text-gray-100 lg:w-2 lg:ml-[5px] lg:opacity-55 lg:leading-none md:flex md:flex-col md:text-gray-100 md:w-2 md:ml-[5px] md:opacity-55 md:leading-none">
            {currentSong.title}
          </div>
        </div>

        <div
          className="navigation_wrapper min-w-[70%] h-[5px] rounded-[30px] cursor-pointer ml-[20px] hidden lg:block lg:min-w-[60%] lg:h-[5px] lg:rounded-[30px] lg:cursor-pointer lg:ml-[70px] md:block md:min-w-[50%] md:h-[5px] md:rounded-[30px] md:cursor-pointer md:ml-[70px]"
          onClick={checkWidth}
          ref={clickRef}
        >
          <div
            className="seek_bar w-0 h-[100%] rounded-[30px]"
            style={{ width: `${currentSong.progress + "%"}` }}
          ></div>
        </div>

        <div className="flex ml-[8rem] items-center lg:flex lg:ml-5 lg:items-center md:flex md:ml-5 md:items-center">
          <BsFillSkipStartCircleFill
            className="text-[2rem] lg:text-[2rem] md:text-[2rem]"
            onClick={skipBack}
          />
          {isplaying ? (
            <BsFillPauseCircleFill
              className="text-[4rem] lg:text-[4rem] md:text-[4rem]"
              onClick={PlayPause}
            />
          ) : (
            <BsFillPlayCircleFill
              className="text-[4rem] lg:text-[4rem] md:text-[4rem]"
              onClick={PlayPause}
            />
          )}
          <BsFillSkipEndCircleFill
            className="text-[2rem] lg:text-[2rem] md:text-[2rem]"
            onClick={skiptoNext}
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
