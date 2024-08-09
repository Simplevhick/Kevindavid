"use client";

import { useEffect, useRef, useState } from "react";
import HeaderSocials from "./HeaderSocials";
import Player from "./Player";
import { songsdata } from "./audio";
import Image from "next/image";


const Hero = ({ heading, message }) => {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);

  const audioElem = useRef();

  useEffect(() => {
    if(isplaying) {
      audioElem.current.play()
    }else{
      audioElem.current.pause()
    }
  }, [isplaying])

  const onPlaying = () => {
    const duration = audioElem.current.duration
    const ct = audioElem.current.currentTime

    setCurrentSong({ ...currentSong, "progress":ct / duration * 100, "length" : duration })
  }

  return (
    <>
      <div className="relative flex items-center h-screen justify-center mb-[4.3rem] bg-fixed bg-center bg-cover custom-img">
        {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[2]"/> */}
        <div className="absolute top-[11rem]">
            <Image src="/assets/standbg.png" alt="" width={444} height={444}/>
        </div>
        <div className="p-5 text-white mt-[-10rem]">
          <h2 className="text-7xl font-bold text-cs sm:text-9xl">{heading}</h2>
          <div className="absolute ml-[2rem] lg:ml-[3rem] md:ml-[3rem] ">  
            <h2 className="text-6xl font-bold lg:text-[7rem] md:text-[7rem]">{message}</h2>
          </div>
          <h2 className="px-8 py-2"></h2>
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
