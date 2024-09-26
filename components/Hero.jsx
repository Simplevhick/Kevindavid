"use client";

import { useEffect, useRef, useState } from "react";
import HeaderSocials from "./HeaderSocials";
import Player from "./Player";
import { songsdata } from "./audio";
import { motion } from "framer-motion";
import ModalVideo from "./modalVideo";

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
        className="relative flex items-center justify-center max-w-[100%] h-[100vh] mb-[7rem] bg-scroll bg-center bg-cover custom-img lg:relative lg:flex lg:items-center lg:justify-center lg:w-[100%] lg:h-[100vh] lg:mb-[14vh] lg:bg-fixed lg:bg-center lg:bg-cover md:relative md:flex md:items-center md:justify-center md:w-[100%] md:h-[100vh] md:mb-[14vh] md:bg-fixed md:bg-center md:bg-cover"
        id="hero"
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 1, duration: 1, ease: "easeInOut" },
          }}
          className="p-5 text-white mt-[-10rem] lg:p-5 lg:text-white lg:mt-[-20rem] md:p-5 md:text-white md:mt-[-10rem]"
        >
          <h2 className="text-7xl font-bold text-cs sm:text-9xl outfit lg:mt-[6rem] xl:mt-[8rem]">
            {heading}
          </h2>
          <div className="absolute ml-[1rem] lg:ml-[1rem] lg:mt-[-1em] md:ml-[1rem]">
            <h2 className="text-6xl font-bold lg:text-[7rem] md:text-[7rem] outfit">
              {message}
            </h2>
          </div>
          <div className="absolute ml-[-0.50rem] mt-[4rem] lg:ml-[-1.5rem] lg:mt-[5rem] md:ml-[-2rem] md:mt-[6.5rem]">
            <h2 className="text-6xl font-bold text-cs lg:text-[7rem] md:text-[7rem] outfit">
              {sub}
            </h2>
            <div className="mt-[1.5rem] lg:mt-0 md:mt-[1.5rem] xl:mt-[1.5rem]">
              <ModalVideo />
            </div>
          </div>
        </motion.div>
        <HeaderSocials />
        <audio
          // src="https://audiomack.com/kevindavidkaydee/song/when-god-remembers-you"
          src={currentSong.url} 
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
