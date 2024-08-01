import { HiCursorArrowRipple } from "react-icons/hi2";

const About = () => {
  return (
    <div id="about">
      <div className="text-white m-3 mt-1 lg:flex lg:justify-between lg:text-white lg:mt-11 lg:m-7 lg:items-center md:flex md:justify-between md:text-white md:m-5 md:mt-12">
        <div className="">
          <p className="text-[2rem] font-bold lg:text-[2.2rem] lg:font-bold md:text-[2.8rem] md:font-bold">
            LATEST NEWS
          </p>
          <p className="lg:text-sm text-sm md:text-sm opacity-45">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>

        <div>
          <button className="mt-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 lg:py-2 lg:px-6 md:py-2 md:px-6 rounded-[0.5rem] shadow-lg hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-300 ease-in-out">
            Click Here
          </button>
        </div>
      </div>

      <div className="m-3 mt-5 grid grid-cols-1 lg:m-11 lg:mt-5 lg:grid lg:grid-cols-3 md:m-11 md:mt-5 md:grid md:grid-cols-2">
        <div className="">
          <div className="text-red-500">
            <HiCursorArrowRipple className="text-3xl w-8" />
          </div>

          <div className="text-white">
            <h3 className="text-[1rem]">How to become the best DJ Ever</h3>
            <p className="lg:text-sm text-sm md:text-sm opacity-45">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="mt-2">
          <div className="text-red-500">
            <HiCursorArrowRipple className="text-3xl w-8" />
          </div>

          <div className="text-white">
            <h3 className="text-[1rem]">How to become the best DJ Ever</h3>
            <p className="lg:text-sm text-sm md:text-sm opacity-45">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="mt-2">
          <div className="text-red-500">
            <HiCursorArrowRipple className="text-3xl w-8" />
          </div>

          <div className="text-white">
            <h3 className="text-[1rem]">How to become the best DJ Ever</h3>
            <p className="lg:text-sm text-sm md:text-sm opacity-45">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>

      <div className="md:flex md:justify-between lg:flex lg:justify-between lg:max-w-[100%] bg-gradient-to-r  from-purple-700 to-red-500 p-6 sm:p-8 mt-12 md:p-10 lg:p-12 xl:p-16 rounded-lg shadow-lg">
            <div>
                <h3 className="text-[2rem] font-bold lg:text-[2.2rem] lg:font-bold md:text-[2.8rem] md:font-bold text-white">NEWSLETTER SUBSCRIBE</h3>
                <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>

            <div>
                <button className="mt-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 lg:py-2 lg:px-6 md:py-2 md:px-6 rounded-[0.5rem] shadow-lg hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-300 ease-in-out">Hover Me</button>
            </div>
      </div>    
    </div>
  );
};

export default About;
