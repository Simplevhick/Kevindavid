"use client";
import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
  const videoRef = useRef(null);
  const vidRef = useRef(null);
  const videdRef = useRef(null);
  const videodRef = useRef(null);
  const showdRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [isPlayed, setIsPlayed] = useState(false);
  const [isPay, setIsPay] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playPause = () => {
    if (isPlay) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
    setIsPlay(!isPlay);
  };

  const playAndPause = () => {
    if (isPlayed) {
      videdRef.current.pause();
    } else {
      videdRef.current.play();
    }
    setIsPlayed(!isPlayed);
  };

  const pausePlay = () => {
    if (isPay) {
      videodRef.current.pause();
    } else {
      videodRef.current.play();
    }
    setIsPay(!isPay);
  };

  const playShow = () => {
    if (isShow) {
      showdRef.current.pause();
    } else {
      showdRef.current.play();
    }
    setIsShow(!isShow);
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="text-white mt-20" id="carousel">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-[1.5rem]">Hope You Like It</h1>
        <h1 className="text-[2rem] font-bold lg:text-[2.8rem] lg:font-bold md:text-[2.8rem] md:font-bold">
          LATEST VIDEOS
        </h1>
      </div>

      <div className="carousel">
        <Slider {...settings}>
          <div className="box relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <video
              className="w-full h-full cursor-pointer object-cover"
              ref={videoRef}
              onClick={handlePlayPause}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              loop
              poster="poster.jpg"
            >
              <source src="./assets/craft.mp4" type="video/mp4" />
              {/* <source src="movie.ogg" type="video/ogg" /> */}
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white text-3xl rounded-full w-20 h-20 flex items-center justify-center"
                onClick={handlePlayPause}
              >
                ▶️
              </button>
            )}
          </div>
          <div className="box relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <video
              className="w-full h-full cursor-pointer object-cover"
              ref={vidRef}
              onClick={playPause}
              onPlay={() => setIsPlay(true)}
              onPause={() => setIsPlay(false)}
              loop
              poster="poster.jpg"
            >
              <source src="./assets/chat.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isPlay && (
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white text-3xl rounded-full w-20 h-20 flex items-center justify-center"
                onClick={playPause}
              >
                ▶️
              </button>
            )}
          </div>
          <div className="box relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <video
              className="w-full h-full cursor-pointer object-cover"
              ref={videdRef}
              onClick={playAndPause}
              onPlay={() => setIsPlayed(true)}
              onPause={() => setIsPlayed(false)}
              loop
              poster="poster.jpg"
            >
              <source src="./assets/chat.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isPlayed && (
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white text-3xl rounded-full w-20 h-20 flex items-center justify-center"
                onClick={playAndPause}
              >
                ▶️
              </button>
            )}
          </div>
          <div className="box relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <video
              className="w-full h-full cursor-pointer object-cover"
              ref={videodRef}
              onClick={pausePlay}
              onPlay={() => setIsPay(true)}
              onPause={() => setIsPay(false)}
              loop
              poster="poster.jpg"
            >
              <source src="./assets/chat.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isPay && (
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white text-3xl rounded-full w-20 h-20 flex items-center justify-center"
                onClick={pausePlay}
              >
                ▶️
              </button>
            )}
          </div>
          <div className="box relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <video
              className="w-full h-full cursor-pointer object-cover"
              ref={showdRef}
              onClick={playShow}
              onPlay={() => setIsShow(true)}
              onPause={() => setIsShow(false)}
              loop
              poster="poster.jpg"
            >
              <source src="./assets/chat.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isPay && (
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white text-3xl rounded-full w-20 h-20 flex items-center justify-center"
                onClick={playShow}
              >
                ▶️
              </button>
            )}
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
