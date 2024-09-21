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
    <div className="">
      <div className="mb-[15rem] lg:mb-[12rem] md:mb-[10rem] xl:mb-[5rem]" id="tours">
        <div className="relative text-white bg-[url('/assets/kev5.jpg')] rounded-2xl flex h-[40rem] justify-center w-[100%]  lg:rounded-3xl lg:flex lg:h-[70vh] lg:justify-center lg:w-[100%] md:rounded-3xl md:flex md:h-[70vh] md:justify-center md:w-[100%] bg-fixed bg-center bg-cover bg-no-repeat">
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

          <div className="absolute p-12 w-auto top-[19rem] rounded-md lg:w-auto lg:top-[20rem] lg:mt-0 lg:p-6 lg:rounded-md md:rounded-md md:mt-32 md:w-auto md:top-[10rem] md:m-5 bg-gradient-to-r  from-purple-700 to-red-500">
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
                  <hr className="mt-6 w-[90%] lg:mt-6 lg:w-[55rem] lg:ml-[2rem] md:mt-6 md:w-[35rem] md:ml-[4rem] xl:mt-6 xl:w-[78vw]" />
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
                    <button onClick={play} className="text-[2.5rem]">
                      {isPlay ? (
                        <BsFillPauseCircleFill />
                      ) : (
                        <BsFillPlayCircleFill />
                      )}
                    </button>
                  </div>
                </div>
                <div className="">
                  <hr className="mt-6 w-[90%] lg:mt-6 lg:w-[55rem] lg:ml-[2rem] md:mt-6 md:w-[35rem] md:ml-[4rem] xl:mt-6 xl:w-[78vw]" />
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
                    <button onClick={Beingplay} className="text-[2.5rem]">
                      {isBeingPlayed ? (
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
      </div>
    </div>
  );
};

export default Tour;



// <div className="absolute p-7 top-[19rem] w-auto rounded-md lg:absolute lg:top-[20rem] lg:w-auto lg:mt-0 m-auto lg:p-6 lg:rounded-md md:rounded-md md:absolute md:top-[10rem] md:mt-32 md:w-auto xl:w-auto md:m-5 bg-gradient-to-r  from-purple-700 to-red-500">
//             <div className="text-[1.7rem] whitespace-nowrap lg:px-[2rem] lg:text-2xl md:text-2xl md:px-[2rem]">
//               <div>
//                 <h3 className="outfit"> List of tracks recorded </h3>
//               </div>
//               <div className="text-xl">
//                 <p className="outfit text-gray-400 text-1xl">
//                   {" "}
//                   listening to our song{" "}
//                 </p>
//               </div>
//             </div>
//             <div className="px-[-1rem] text-white lg:px-[8rem] lg:text-white md:px-[3rem] md:text-white xl:px-[8rem] xl:text-white">
//             {/* <div className="px-[1rem] text-white lg:px-[8rem] lg:text-white md:px-[3rem] md:text-white"> */}
//               <div className="flex flex-col space-y-10 lg:flex lg:flex-col lg:space-y-10 md:flex md:flex-col md:space-y-10">
//                 <div className="mt-5 lg:grid lg:grid-cols-2 lg:mt-5 md:grid md:grid-cols-2 md:mt-5">
//                   <div className="text-[1.1rem]">
//                     <h3 className="outfit"> List of tracks recorded</h3>
//                   </div>

//                   <div className="lg:flex lg:justify-center lg:gap-5 md:flex md:justify-center md:gap-5">
//                     <audio ref={audioRef} src="/assets/central.mp3" />
//                     <div className="">
//                       <div
//                         className=" h-2 rounded"
//                         style={{ width: `${progress}%` }}
//                       />
//                       <div className="w-[43vw] hidden h-2 bg-gray-200 rounded lg:block lg:w-[43vw] lg:h-2 lg:bg-gray-200 lg:rounded md:block md:w-[43vw] md:h-2 md:bg-gray-200 md:rounded" />
//                     </div>

//                     <div className="mt-[0.256rem] lg:mt-[-1.3rem] md:mt-[-1.3rem]">
//                       <button onClick={togglePlay} className="text-[2.5rem]">
//                         {isPlaying ? (
//                           <BsFillPauseCircleFill />
//                         ) : (
//                           <BsFillPlayCircleFill />
//                         )}
//                       </button>
//                     </div>
//                   </div>
//                   <div className="lg:m-auto md:m-auto xl:m-auto">
//                     <hr className="mt-6 w-[90%] lg:mt-6 lg:w-[55rem] lg:ml-[2rem] md:mt-6 md:w-[35rem] md:ml-[4rem] xl:mt-6 xl:w-[65rem]" />
//                   </div>
//                 </div>

//                 <div className="mt-2 lg:grid lg:grid-cols-2 lg:mt-5 md:grid md:grid-cols-2 md:mt-5">
//                   <div className="text-[1.1rem]">
//                     <h3 className="outfit">Love no be scam</h3>
//                   </div>

//                   <div className="lg:flex lg:justify-center lg:gap-5 md:flex md:justify-center md:gap-5">
//                     <audio ref={audRef} src="/assets/asa.mp3" />
//                     <div className="">
//                       <div
//                         className=" h-2 rounded"
//                         style={{ width: `${progress}%` }}
//                       />
//                       <div className="w-[43vw] hidden h-2 bg-gray-200 rounded lg:block lg:w-[43vw] lg:h-2 lg:bg-gray-200 lg:rounded md:block md:w-[43vw] md:h-2 md:bg-gray-200 md:rounded" />
//                     </div>

//                     <div className="mt-[0.256rem] lg:mt-[-1.3rem] md:mt-[-1.3rem]">
//                       <button onClick={play} className="text-[2.5rem]">
//                         {isPlay ? (
//                           <BsFillPauseCircleFill />
//                         ) : (
//                           <BsFillPlayCircleFill />
//                         )}
//                       </button>
//                     </div>
//                   </div>
//                   <div className="">
//                     <hr className="mt-6 w-[90%] lg:mt-6 lg:w-[55rem] lg:ml-[2rem] md:mt-6 md:w-[35rem] md:ml-[4rem]" />
//                   </div>
//                 </div>

//                 <div className="mt-2 lg:grid lg:grid-cols-2 lg:mt-5 md:grid md:grid-cols-2 md:mt-5">
//                   <div className="text-[1.1rem]">
//                     <h3 className="outfit"> Recorded</h3>
//                   </div>

//                   <div className="lg:flex lg:justify-center lg:gap-5 md:flex md:justify-center md:gap-5">
//                     <audio ref={auditRef} src="/assets/elon.mp3" />
//                     <div className="">
//                       <div
//                         className=" h-2 rounded"
//                         style={{ width: `${progress}%` }}
//                       />
//                       <div className="w-[43vw] hidden h-2 bg-gray-200 rounded lg:block lg:w-[43vw] lg:h-2 lg:bg-gray-200 lg:rounded md:block md:w-[43vw] md:h-2 md:bg-gray-200 md:rounded" />
//                     </div>

//                     <div className="mt-[0.256rem] lg:mt-[-1.3rem] md:mt-[-1.3rem]">
//                       <button onClick={Beingplay} className="text-[2.5rem]">
//                         {isBeingPlayed ? (
//                           <BsFillPauseCircleFill />
//                         ) : (
//                           <BsFillPlayCircleFill />
//                         )}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>