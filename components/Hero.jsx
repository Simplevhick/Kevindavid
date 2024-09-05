"use client";

import { useEffect, useRef, useState } from "react";
import HeaderSocials from "./HeaderSocials";
import Player from "./Player";
import { songsdata } from "./audio";
import { motion } from "framer-motion";

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
    {/* relative flex items-center justify-center max-w-[100%] h-[100vh] mb-[7rem] bg-fixed bg-center bg-cover custom-img lg:relative lg:flex lg:items-center lg:justify-center lg:w-full lg:h-screen lg:mb-[7rem] lg:bg-fixed lg:bg-center lg:bg-cover lg:custom-img md:relative md:flex md:items-center md:justify-center md:w-full md:h-screen md:mb-[7rem] md:bg-fixed md:bg-center md:bg-cover md: */}
      <motion.section
        initial={{ opacity: 20 }}
        animate={{ opacity: 1, transition: { delay: 1 } }}
        className="custom-img"
        id="hero"
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 1, duration: 1, ease: "easeInOut" },
          }}
          className="p-5 text-white mt-[-10rem]"
        >
          <h2 className="text-7xl font-bold text-cs sm:text-9xl outfit">
            {heading}
          </h2>
          <div className="absolute ml-[1rem] lg:ml-[1rem] md:ml-[1rem]">
            <h2 className="text-6xl font-bold lg:text-[7rem] md:text-[7rem] outfit">
              {message}
            </h2>
          </div>
          <div className="absolute ml-[-0.50rem] mt-[4rem] lg:ml-[-1.5rem] lg:mt-[7rem] md:ml-[-2rem] md:mt-[6.5rem]">
            <h2 className="text-6xl font-bold text-cs lg:text-[7rem] md:text-[7rem] outfit">
              {sub}
            </h2>
          </div>
        </motion.div>
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
      </motion.section>
    </>
  );
};

export default Hero;
