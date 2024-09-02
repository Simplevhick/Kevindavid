"use client";

import { useEffect, useRef, useState } from "react";
import HeaderSocials from "./HeaderSocials";
import Player from "./Player";
import { songsdata } from "./audio";

const Hero = ({ heading, message, sub }) => {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  return (
    <>
      {/* <div className="relative bg-[url('/assets/kev5.jpg')] flex items-center h-[95vh] justify-center mb-[7rem] bg-fixed bg-center bg-contain lg:relative lg:bg-[url('/assets/kev5.jpg')] lg:flex lg:items-center lg:h-[95vh] lg:justify-center lg:mb-[7rem] lg:bg-fixed lg:bg-center lg:bg-cover md:relative md:bg-[url('/assets/kev5.jpg')] md:flex md:items-center md:h-[95vh] md:justify-center md:mb-[7rem] md:bg-fixed md:bg-center md:bg-cover" id="hero"> */}
      <div
        className="relative flex items-center justify-center w-full h-screen mb-[7rem] bg-fixed bg-center bg-cover custom-img"
        id="hero"
      >
        {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[2]"/> */}
        {/* <div className="absolute top-[11rem]">
            <Image src="/assets/standbg.png" alt="pix" width={444} height={444}  className=""/>
        </div> */}
        <div className="p-5 text-white mt-[-10rem]">
          <h2 className="text-7xl font-bold text-cs sm:text-9xl outfit">
            {heading}
          </h2>
          <div className="absolute ml-[1rem] lg:ml-[1rem] md:ml-[1rem]">
            <h2 className="text-6xl font-bold lg:text-[7rem] md:text-[7rem] outfit">
              {message}
            </h2>
          </div>
          <div className="absolute ml-[-0.50rem] mt-[4rem] lg:ml-[-1.5rem] lg:mt-[7rem] md:ml-[-2rem] md:mt-[6.5rem]">
            <h2 className="text-6xl font-bold text-cs lg:text-[7rem] md:text-[7rem] outfit">{sub}</h2>
          </div>
        </div>
        <HeaderSocials />
        <audio
          src={currentSong.song}
          ref={audioElem}
          onTimeUpdate={onPlaying}
        />
        <Player
          songs={songs}
          setSongs={setSongs}
          isplaying={isplaying}
          setisplaying={setisplaying}
          audioElem={audioElem}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
        />
      </div>
    </>
  );
};

export default Hero;
