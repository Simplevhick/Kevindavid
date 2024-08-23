import Image from "next/image";
import Link from "next/link";


const Blogs = () => {
  return (
    <div id="blog">
      <div className="flex items-center justify-center flex-col text-white">
        <h1 className="text-[1.5rem]">Hope You Like It</h1>
        <h1 className="text-[2rem] font-bold lg:text-[2.8rem] lg:font-bold md:text-[2.8rem] md:font-bold">
          LATEST RELEASES
        </h1>
      </div>

      <div className="relative grid grid-cols-2 gap-1 place-items-center ml-1 mt-3 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:-3 lg:place-items-center lg:mt-3 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-3 md:place-items-center md:mt-3">
        <a href="">
          <div className="hidden lg:block md:block rounded-[20px]">
            <img
              src="/assets/kev4.jpg"
              alt="pix"
              className="rounded-[3px] w-[10remm] h-[15rem] lg:h-[350px] lg:w-[260px] md:h-[350px] md:w-[260px]"
            />
            <div className="flex justify-center items-center flex-col text-white p-2">
              <h3 className="opacity-45 p-1">Producer Edition</h3>
              <p className="opacity-45"> Eclipse of the sun </p>
            </div>
          </div>
        </a>

        <a href="">
          <div className="hidden lg:block md:block rounded-[20px] lg:rounded-[20px] lg:mt-[5rem] md:rounded-[20px] md:mt-[5rem]">
            <img
              src="/assets/kev3.jpg"
              alt="pix"
              className="rounded-[3px] w-[10remm] h-[15rem] lg:h-[350px] lg:w-[260px] md:h-[350px] md:w-[260px]"
            />
            <div className="flex justify-center items-center flex-col text-white p-2">
              <h3 className="opacity-45 p-1">Producer Edition</h3>
              <p className="opacity-45"> Eclipse of the sun </p>
            </div>
          </div>
        </a>

        <a href="">
          <div className="rounded-[20px]">
            <img
              src="/assets/kev9.jpg"
              alt="pix"
              className="rounded-[3px] w-[10remm] h-[15rem] lg:h-[350px] lg:w-[260px] md:h-[350px] md:w-[260px]"
            />
            <div className="flex justify-center items-center flex-col text-white p-2">
              <h3 className="opacity-45 p-1">Producer Edition</h3>
              <p className="opacity-45"> Eclipse of the sun </p>
            </div>
          </div>
        </a>

        <a href="">
          <div className="rounded-[20px]">
            <img
              src="/assets/kev2.jpg"
              alt="pix"
              className="rounded-[3px] w-[10remm] h-[15rem] lg:h-[350px] lg:w-[260px] md:h-[350px] md:w-[260px]"
            />
            <div className="flex justify-center items-center flex-col text-white p-2">
              <h3 className="opacity-45 p-1">Producer Edition</h3>
              <p className="opacity-45"> Eclipse of the sun</p>
            </div>
          </div>
        </a>

        <a href="">
          <div className="rounded-[20px] lg:rounded-[20px] lg:mt-[5rem] md:rounded-[20px] md:mt-[5rem]">
            <img
              src="/assets/kev1.jpg"
              alt="pix"
              className="rounded-[3px] w-[10remm] h-[15rem] lg:h-[350px] lg:w-[260px] md:h-[350px] md:w-[260px]"
            />
            <div className="flex justify-center items-center flex-col text-white p-2">
              <h3 className="opacity-45 p-1">Producer Edition</h3>
              <p className="opacity-45"> Eclipse of the sun </p>
            </div>
          </div>
        </a>
        
        <a href="">
          <div className="rounded-[20px]">
            <img
              src="/assets/kev8.jpg"
              alt="pix"
              className="rounded-[3px] w-[10remm] h-[15rem] lg:h-[350px] lg:w-[260px] md:h-[350px] md:w-[260px]"
            />
            <div className="flex justify-center items-center flex-col text-white p-2">
              <h3 className="opacity-45 p-1">Producer Edition</h3>
              <p className="opacity-45"> Eclipse of the sun </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Blogs;

// <div className="flex">
//         <div className="card text-white">
//           <Image
//             src="/assets/img3.jpeg"
//             alt="pix"
//             width={250}
//             height={400}
//             className="rounded-[3px]"
//           />
//           <div className="">
//             <h3>Producer Edition</h3>
//             <p> Eclipse </p>
//           </div>
//           <div className="card text-white">
//             <Image
//               src="/assets/img6.jpeg"
//               alt="pix"
//               width={250}
//               height={400}
//               className="rounded-[3px]"
//             />
//             <div className="">
//               <h3>Producer Edition</h3>
//               <p> Eclipse </p>
//             </div>
//           </div>
//           <div className="card text-white">
//             <Image
//               src="/assets/img1.jpeg"
//               alt="pix"
//               width={250}
//               height={400}
//               className="rounded-[3px]"
//             />
//             <div className="">
//               <h3>Producer Edition</h3>
//               <p> Eclipse </p>
//             </div>
//           </div>
//           <div className="card text-white">
//             <Image
//               src="/assets/img5.jpeg"
//               alt="pix"
//               width={250}
//               height={400}
//               className="rounded-[3px]"
//             />
//             <div className="">
//               <h3>Producer Edition</h3>
//               <p> Eclipse </p>
//             </div>
//           </div>
//           <div className="card text-white">
//             <Image
//               src="/assets/img6.jpeg"
//               alt="pix"
//               width={250}
//               height={400}
//               className="rounded-[3px]"
//             />
//             <div className="">
//               <h3>Producer Edition</h3>
//               <p> Eclipse </p>
//             </div>
//           </div>
//           <div className="card text-white">
//             <Image
//               src="/assets/img3.jpeg"
//               alt="pix"
//               width={250}
//               height={400}
//               className="rounded-[3px]"
//             />
//             <div className="">
//               <h3>Producer Edition</h3>
//               <p> Eclipse </p>
//             </div>
//           </div>
//         </div>
