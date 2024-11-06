import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="text-white relative">
      <div className="absolute gap-2 flex flex-col left-[90%] top-40 lg:absolute lg:left-3 lg:top-[3rem] lg:gap-2 lg:flex lg:flex-col md:absolute md:left-3 md:top-[3rem] md:gap-2 md:flex md:flex-col">
          <a href="https://x.com/kevindavidkdee">
            <FaXTwitter />
          </a>
          <Link
            href="https://instagram.com/kevindavidkaydee/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCugP9o0GFBvoSg3xj0VJXqw"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaYoutube />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCugP9o0GFBvoSg3xj0VJXqw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </Link>
          <a href="https://github.com/Simplevhick/Kevindavid">
            <FaGithub />
          </a>
        </div>
      <div className="flex-none mt-[6rem] m-2 lg:m-14 lg:mt-32 lg:flex lg:items-center lg:justify-around md:m-14 md:mt-[7rem] md:gap-10 md:flex md:items-center md:justify-around">
        <div className="">  
          <div className="text-4xl lg:text-4xl md:text-4xl">
            <p className="outfit">Got An Idea Or A </p>
            <p className="outfit">Partnership In</p>
            <p>Mind?</p>
          </div>
          <div className="flex-none mt-5 lg:flex lg:gap-12 lg:mt-7 md:flex md:gap-12 md:mt-7">
            <div className="">
              <div className="">
                <p className="outfit">Phone:</p>
              </div>
              <div className="whitespace-nowrap">
                <p className="outfit">+234 (0) 803 5908 779</p>
              </div>
            </div>

            <div className="mt-4 lg:mt-0 md:mt-0">
              <div>
                <p className="outfit">Email:</p>
              </div>
              <div className="opacity-30">
                <p className="outfit">info@kevindavidkaydee.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 lg:mt-0 md:mt-0">
          <div className="">
            <input
              type="text"
              placeholder="Your Name"
              className="outfit w-[90%] border-r-none border-l-none border-t-none border-r-none  border-b-2 border-b-gray-700 bg-transparent outline-none text-[1rem] p-4 ml-0 lg:w-full  lg:text-[1.1rem] lg:p-4 lg:ml-2 md:w-full md:text-[1.1rem] md:p-4 md:ml-2"
            />
          </div>
            <input
              type="text"
              placeholder=" Your Email"
              className="outfit w-[90%] border-r-none border-l-none border-t-none border-r-none  border-b-2 border-b-gray-700 bg-transparent outline-none text-[1rem] p-4 ml-0 lg:w-full lg:text-[1.1rem] lg:p-4 lg:ml-2 md:w-full md:text-[1.1rem] md:p-4 md:ml-2"
            />
            <textarea
              id=""
              placeholder="Your Message"
              className="outfit w-[90%] border-r-none border-l-none border-t-none border-r-none  border-b-2 border-b-gray-700 bg-transparent outline-none text-[1rem] p-3 ml-0 lg:w-full lg:text-[1rem] lg:p-3 lg:ml-2 md:w-full md:text-[1rem] md:p-3 md:ml-2"
            />
        </div>
        {/* <div className="absolute gap-2 flex flex-col lg:absolute lg:left-3 lg:top-[3rem] lg:gap-2 lg:flex lg:flex-col md:absolute md:left-3 md:top-[3rem] md:gap-2 md:flex md:flex-col">
          <a href="https://x.com/kevindavidkdee">
            <FaXTwitter />
          </a>
          <Link
            href="https://instagram.com/kevindavidkaydee/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCugP9o0GFBvoSg3xj0VJXqw"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <FaYoutube />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCugP9o0GFBvoSg3xj0VJXqw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </Link>
          <a href="https://github.com/Simplevhick/Kevindavid">
            <FaGithub />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;

// <div className="relative text-white mt-[5rem] p-4 lg:m-10 lg:mt-[7rem] lg:flex lg:justify-center lg:flex-wrap lg:gap-[12rem] md:p-[2rem] md:flex md:flex-wrap md:justify-center md:items-center md:gap-[4rem] ">
//           <div className="">
//             <div className="text-[1.7rem] w-[12rem] lg:text-[1.7rem] lg:w-[13rem] md:text-[1.7rem] md:w-[13rem]">
//               <p className="outfit">Got An idea Or A Partnership In Mind?</p>
//             </div>
//             <div className="">
//               <div className="text-white flex flex-col items-center gap-[1rem] absolute top-[10rem] lg:flex lg:text-white lg:flex-col lg:flex-wrap lg:items-center lg:gap-3 lg:absolute lg:top-[4rem] lg:left-[-2rem] md:text-white md:flex md:flex-col md:items-center md:gap-3 md:absolute md:top-[4.5rem] md:left-[0.234rem]">
//                 {/* <div className="text-white flex flex-col items-center gap-[1rem] absolute top-[10rem] left-[22rem] lg:flex lg:text-white lg:flex-col lg:flex-wrap lg:items-center lg:gap-3 lg:absolute lg:top-[4rem] lg:left-[-2rem] md:text-white md:flex md:flex-col md:items-center md:gap-3 md:absolute md:top-[4.5rem] md:left-[0.234rem]"> */}
//                 <a href="https://x.com/kevindavidkdee">
//                   <FaXTwitter />
//                 </a>
//                 <Link
//                   href="https://instagram.com/kevindavidkaydee/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaInstagram />
//                 </Link>
//                 <Link
//                   href="https://www.youtube.com/channel/UCugP9o0GFBvoSg3xj0VJXqw"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaYoutube />
//                 </Link>
//                 <Link
//                   href="https://www.youtube.com/channel/UCugP9o0GFBvoSg3xj0VJXqw"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaTiktok />
//                 </Link>
//                 <a href="https://github.com/Simplevhick/Kevindavid">
//                   <FaGithub />
//                 </a>
//               </div>
//               <div className="lg:flex lg:items-end lg:justify-end lg:gap-16 md:flex md:items-end md:justify-end md:gap-16">
//                 <div className="">
//                   <div className="mt-3 lg:mt-3">
//                     <p className="outfit">Phone:</p>
//                   </div>
//                   <div className="opacity-30 whitespace-nowrap">
//                     <p className="outfit">+234 (0) 803 5908 779</p>
//                     <p className="outfit">+234 (0) 803 5908 779</p>
//                   </div>
//                 </div>
//                 <div>
//                   <div>
//                     <div>
//                       <p className="outfit">Email:</p>
//                     </div>
//                     <div className="opacity-30">
//                       <p className="outfit">info@kevindavidkaydee.com</p>
//                       <p className="outfit">info@kevindavidkaydee.com</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="">
//             <div className="flex flex-col lg:flex md:flex">
//               <div className="">
//                 <div className=" lg:flex lg:gap-7 md:flex md:gap-7">
//                   <div className="mt-5 lg:mt-0 md:mt-0">
//                     <input
//                       type="text"
//                       placeholder="Enter Your Name"
//                       className="outfit w-[22rem] border-r-none border-l-none border-t-none border-r-none border-b-[1.5px] border-b-gray-700 p-2 bg-transparent outline-none lg:outfit lg:border-r-none lg:border-l-none lg:border-t-none lg:border-r-none lg:border-b-[1.5px] lg:border-b-gray-700 lg:p-2 lg:bg-transparent lg:outline-none md:outfit md:border-r-none md:border-l-none md:border-t-none md:border-r-none md:border-b-[1.5px] md:border-b-gray-700 md:p-2 md:w-[12rem] md:bg-transparent md:outline-none"
//                     />
//                   </div>
//                   <div className="mt-5 lg:mt-0 md:mt-0">
//                     <input
//                       type="text"
//                       placeholder="Your Phone number"
//                       className="outfit w-[22rem] border-r-none border-l-none border-t-none border-r-none border-b-[1.5px] border-b-gray-700 p-2 bg-transparent outline-none lg:outfit lg:border-r-none lg:border-l-none lg:border-t-none lg:border-r-none lg:border-b-[1.5px] lg:border-b-gray-700 lg:p-2 lg:bg-transparent lg:outline-none md:outfit md:border-r-none md:border-l-none md:border-t-none md:border-r-none md:border-b-[1.5px] md:border-b-gray-700 md:p-2 md:w-[12rem] md:bg-transparent md:outline-none"
//                     />
//                   </div>
//                 </div>
//                 <div className="mt-5 lg:mt-0 md:mt-0">
//                   <div>
//                     <input
//                       type="text"
//                       placeholder="Enter Your Email"
//                       className="outfit w-[22rem] border-r-none border-l-none border-t-none border-r-none border-b-[1.5px] border-b-gray-700 p-2 bg-transparent outline-none lg:outfit lg:mt-5 lg:border-r-none lg:border-l-none lg:border-t-none lg:border-r-none lg:border-b-[1.5px] lg:border-b-gray-700 lg:p-2 lg:w-[27rem] lg:bg-transparent lg:outline-none md:outfit md:border-r-none md:border-l-none md:border-t-none md:border-r-none md:border-b-[1.5px] md:border-b-gray-700 md:p-2 md:w-[12rem] md:bg-transparent md:outline-none"
//                     />
//                   </div>
//                   <div>
//                     <textarea
//                       id=""
//                       className="outfit border-r-none border-l-none border-t-none border-r-none border-b-2 border-b-gray-700 p-2 bg-transparent w-[22rem] mt-5 outline-none lg:outfit lg:border-r-none lg:border-l-none lg:border-t-none lg:border-r-none lg:border-b-2 lg:border-b-gray-700 lg:p-2 lg:bg-transparent lg:w-[27rem] lg:mt-5 lg:outline-none md:outfit md:border-r-none md:border-l-none md:border-t-none md:border-r-none md:border-b-2 md:border-b-gray-700 md:p-2 md:bg-transparent md:w-[27rem] md:mt-5 md:outline-none"
//                       placeholder="Your message"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
