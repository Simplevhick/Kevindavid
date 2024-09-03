import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="">
      <div className="">
        <div className="relative text-white mt-[5rem] p-4 lg:m-10 lg:mt-[7rem] lg:flex lg:justify-center lg:gap-[12rem] md:m-32 md:flex md:justify-center md:items-center md:gap-[4rem]">
          <div className="">
            <div className="text-[1.7rem] w-[12rem] lg:text-[1.7rem] lg:w-[13rem] md:text-[1.7rem] md:w-[13rem]">
              <p className="outfit">Got An idea Or A Partnership In Mind?</p>
            </div>
            <div className="text-white flex flex-col items-center gap-[1rem] absolute top-[10rem] left-[23rem] lg:flex lg:text-white lg:flex-col lg:items-center lg:lg:gap-3 lg:absolute lg:top-12 lg:left-[-2rem] md:text-white md:flex md:flex-col md:items-center md:gap-3 md:absolute md:top-[4.5rem] md:left-[-7rem]">
              <a href="https://linkdin.com">
                <FaXTwitter />
              </a>
              <a href="https://github.com">
                <FaInstagram />
              </a>
              <a href="https://dribble.com">
                <FiFacebook />
              </a>
              <a href="https://instagram.com">
                <BsLinkedin />
              </a>
            </div>
            <div className="lg:flex lg:items-end lg:justify-end lg:gap-16 md:flex md:items-end md:justify-end md:gap-16">
              <div className="">
                <div className="mt-3 lg:mt-3">
                  <p className="outfit">Phone:</p>
                </div>
                <div className="opacity-30 whitespace-nowrap">
                  <p className="outfit">+98 (0) 101 0000 888</p>
                  <p className="outfit">+98 (0) 101 0000 888</p>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <p className="outfit">Email:</p>
                  </div>
                  <div className="opacity-30">
                    <p className="outfit">info@youremail.com</p>
                    <p className="outfit">info@youremail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col lg:flex md:flex">
              <div className="">
                <div className=" lg:flex lg:gap-7 md:flex md:gap-7">
                  <div className="mt-5 lg:mt-0 md:mt-0">
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="outfit w-[22rem] border-r-none border-l-none border-t-none border-r-none border-b-[1.5px] border-b-gray-700 p-2 bg-transparent outline-none lg:outfit lg:border-r-none lg:border-l-none lg:border-t-none lg:border-r-none lg:border-b-[1.5px] lg:border-b-gray-700 lg:p-2 lg:bg-transparent lg:outline-none md:outfit md:border-r-none md:border-l-none md:border-t-none md:border-r-none md:border-b-[1.5px] md:border-b-gray-700 md:p-2 md:w-[12rem] md:bg-transparent md:outline-none"
                    />
                  </div>
                  <div className="mt-5 lg:mt-0 md:mt-0">
                    <input
                      type="text"
                      placeholder="Your Phone number"
                      className="outfit w-[22rem] border-r-none border-l-none border-t-none border-r-none border-b-[1.5px] border-b-gray-700 p-2 bg-transparent outline-none lg:outfit lg:border-r-none lg:border-l-none lg:border-t-none lg:border-r-none lg:border-b-[1.5px] lg:border-b-gray-700 lg:p-2 lg:bg-transparent lg:outline-none md:outfit md:border-r-none md:border-l-none md:border-t-none md:border-r-none md:border-b-[1.5px] md:border-b-gray-700 md:p-2 md:w-[12rem] md:bg-transparent md:outline-none"
                    />
                  </div>
                </div>
                <div className="mt-5 lg:mt-0 md:mt-0">
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Your Email"
                      className="outfit w-[22rem] border-r-none border-l-none border-t-none border-r-none border-b-[1.5px] border-b-gray-700 p-2 bg-transparent outline-none lg:outfit lg:mt-5 lg:border-r-none lg:border-l-none lg:border-t-none lg:border-r-none lg:border-b-[1.5px] lg:border-b-gray-700 lg:p-2 lg:w-[27rem] lg:bg-transparent lg:outline-none md:outfit md:border-r-none md:border-l-none md:border-t-none md:border-r-none md:border-b-[1.5px] md:border-b-gray-700 md:p-2 md:w-[12rem] md:bg-transparent md:outline-none"
                    />
                  </div>
                  <div>
                    <textarea
                      id=""
                      className="outfit border-r-none border-l-none border-t-none border-r-none border-b-2 border-b-gray-700 p-2 bg-transparent w-[22rem] mt-5 outline-none lg:outfit lg:border-r-none lg:border-l-none lg:border-t-none lg:border-r-none lg:border-b-2 lg:border-b-gray-700 lg:p-2 lg:bg-transparent lg:w-[27rem] lg:mt-5 lg:outline-none md:outfit md:border-r-none md:border-l-none md:border-t-none md:border-r-none md:border-b-2 md:border-b-gray-700 md:p-2 md:bg-transparent md:w-[27rem] md:mt-5 md:outline-none"
                      placeholder="Your message"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className="ml-auto mr-auto mt-[1rem] text-white max-w-[1240px] lg:mr-auto lg:ml-auto lg:mt-[-6rem] md:mr-auto md:ml-auto md:mt-[18rem]"
          id="footer"
        >
          <div className="">
            <div className="ml-3 lg:flex lg:justify-around lg:ml-3 md:flex md:justify-around md:ml-3">
              <div className="p-3 lg:p-3 md:p-3">
                <div>
                  <p className="text-gray-200 outfit opacity-55 text-md lg:text-gray-200 lg:opacity-55 lg:text-sm md:text-gray-200 md:opacity-55 md:text-sm">
                    Looking for collabration?
                  </p>
                </div>
                <h3 className="text-[1rem] outfit font-bold">KAYDEE</h3>
              </div>
              <div className="hidden lg:w-[13rem] lg:block lg:h-[0.15rem] lg:bg-white lg:rounded lg:mt-[1.5rem] md:w-[9rem] md:block md:h-[0.15rem] md:bg-white md:rounded md:mt-[1.5rem]" />

              <div className="p-3 lg:p-3 md:p-3">
                <div className="">
                  <p className="text-gray-200 outfit opacity-55 text-md lg:text-gray-200 lg:opacity-55 lg:text-sm md:text-gray-200 md:opacity-55 md:text-sm">
                    3, ogunshina ogundele way,
                  </p>
                  <p className="text-gray-200 outfit opacity-55 text-md lg:text-gray-200 lg:opacity-55 lg:text-sm md:text-gray-200 md:opacity-55 md:text-sm">
                    Anthony, Lagos Nigeria
                  </p>
                </div>
                <h3 className="text-[1rem] font-bold outfit">
                  +234 9023 2032 54
                </h3>
              </div>
              <div className="hidden lg:w-[13rem] lg:block lg:h-[0.15rem] lg:bg-white lg:rounded lg:mt-[1.5rem] md:w-[9rem] md:block md:h-[0.15rem] md:bg-white md:rounded md:mt-[1.5rem]" />

              <div className="p-3 lg:p-3 md:p-3">
                <div>
                  <p className="text-gray-200 outfit opacity-55 text-md lg:text-gray-200 lg:opacity-55 lg:text-sm md:text-gray-200 md:opacity-55 md:text-sm">
                    Looking for a job?
                  </p>
                  <p className="text-gray-200 outfit opacity-55 text-md lg:text-gray-200 lg:opacity-55 lg:text-sm md:text-gray-200 md:opacity-55 md:text-sm">
                    Send your resume
                  </p>
                </div>
                <h3 className="text-[1rem] outfit font-bold">
                  info@kevindavidkaydee.com
                </h3>
              </div>
            </div>
          </div>

          <div className="max-w-[1240px] flex flex-col-reverse items-center justify-center mt-[12%] ml-[1em] lg:max-w-[1240px] lg:flex lg:flex-row lg:items-center lg:p-8 lg:mt-[4%] lg:ml-[1em] md:max-w-[1240px] md:flex md:flex-row md:items-center md:m-3 md:mt-[12%] md:ml-[0.5rem]">
            <div className="p-2 lg:p-2 md:p-[0.5rem] lg:flex-1 md:flex-1">
              <Link href="">
                <h3 className="ml-12 text-[2.5rem] outfit font-semibold lg:ml-1 lg:text-7xl lg:font-semibold md:text-5xl md:ml-1 md:font-semibold">
                  LETS TALK
                </h3>
              </Link>
              <h3 className="text-[2rem] text-gray-700 outfit p-[0.5px] font-bold text-cs lg:text-7xl lg:text-gray-700 lg:ml-1 lg:font-bold lg:text-cs md:text-5xl md:ml-1 md:text-gray-700 md:font-bold md:text-cs">
                KAYDEE@HUB.COM
              </h3>
            </div>

            <Link href="" mailto="">
              <div className="w-[10rem] flex justify-center items-center h-[10rem] bg-black-500 rounded-[50%] border border-white lg:w-[9rem] lg:flex lg:justify-center lg:items-center lg:h-[9rem] lg:bg-black-500 lg:rounded-[50%] lg:border lg:border-white md:w-[11rem] md:flex md:justify-center md:items-center md:h-[11rem] md:bg-black-500 md:rounded-[50%] md:border md:border-white">
                <p className="text-sm w-20 outfit lg:text-sm lg:w-20 md:text-md md:w-20 font-normal">
                  SEND ME A MESSAGE
                </p>
              </div>
            </Link>
          </div>

          <div className="m-4 justify-around items-center lg:flex lg:m-4 lg:justify-around lg:items-center md:flex md:m-4 md:justify-around md:items-center">
            <div className="flex justify-evenly lg:flex lg:gap-5 md:flex md:gap-5">
              <Link href="https://github.com">
                <FaGithub className="text-2xl" />
              </Link>
              <Link href="https://instagram.com">
                <FaInstagram className="text-2xl" />
              </Link>
              <Link href="https://twitter.com">
                <FaXTwitter className="text-2xl" />
              </Link>
            </div>

            <div className="">
              <div className="flex items-center">
                <p className="text-3xl">✌️</p>
                <div className="p-2">
                  <span className="outfit">
                    info@liquid.com Looking for collabration for your next post?
                  </span>
                  <p className="outfit">Do not hesitate to contact us</p>
                </div>
              </div>
              <div className="">
                
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;

{
  /* <div className="mt-5 lg:mt-5 md:mt-5">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="outfit w-[22rem] border-r-none border-l-none border-t-none border-r-none border-b-[1.5px] border-b-gray-700 p-2 bg-transparent outline-none lg:outfit lg:border-r-none  lg:border-l-none lg:border-t-none lg:border-r-none lg:border-b-2 lg:border-b-gray-700 lg:p-2 lg:bg-transparent lg:outline-none md:outfit md:border-r-none md:border-l-none md:border-t-none md:border-r-none md:border-b-2 md:border-b-gray-700 md:p-2 md:bg-transparent md:outline-none"
              />
            </div> */
}
{
  /* <div>
              <textarea
                id=""
                className="outfit border-r-none border-l-none border-t-none border-r-none border-b-2 border-b-gray-700 p-2 bg-transparent w-[22rem] mt-5 outline-none lg:outfit lg:border-r-none lg:border-l-none lg:border-t-none lg:border-r-none lg:border-b-2 lg:border-b-gray-700 lg:p-2 lg:bg-transparent lg:w-[27rem] lg:mt-5 lg:outline-none md:outfit md:border-r-none md:border-l-none md:border-t-none md:border-r-none md:border-b-2 md:border-b-gray-700 md:p-2 md:bg-transparent md:w-[27rem] md:mt-5 md:outline-none"
                placeholder="Your message"
              />
            </div> */
}
{
  /* <div className=" mt-5 lg:flex lg:justify-end lg:mt-5 md:flex md:justify-end md:mt-5">
              <button className="bg-gradient-to-t  from-red-500 to-purple-700 text-sm  py-1 px-8 outfit rounded-[2rem]">
                Submit
              </button>
            </div> */
}
