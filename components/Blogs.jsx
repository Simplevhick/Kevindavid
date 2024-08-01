import Image from "next/image";

const Blogs = () => {
  return (
    <div id="blog">
      <div className="flex items-center justify-center flex-col text-white">
        <h1 className="text-[1.5rem]">Hope You Like It</h1>
        <h1 className="text-[2rem] font-bold lg:text-[2.8rem] lg:font-bold md:text-[2.8rem] md:font-bold">
          LATEST RELEASES
        </h1>
      </div>

      <div className="relative grid grid-cols-1 gap-3 place-items-center mt-3 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:-3 lg:place-items-center lg:mt-3 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-3 md:place-items-center md:mt-3">
        <div className="rounded-[20px]">
          <Image
            src="/assets/img3.jpeg"
            alt="pix"
            width={320}
            height={300}
            className="rounded-[3px] lg:h-280 lg:w-300"
          />
          <div className="flex justify-center items-center flex-col text-white">
            <h3 className="opacity-45">Producer Edition</h3>
            <p className="opacity-45"> Eclipse of the sun and moon </p>
          </div>
        </div>
        <div className="rounded-[20px] lg:rounded-[20px] lg:mt-[5rem] md:rounded-[20px] md:mt-[5rem]">
          <Image
            src="/assets/img6.jpeg"
            alt="pix"
            width={320}
            height={300}
            className="rounded-[3px]"
          />
          <div className="flex justify-center items-center flex-col text-white">
            <h3 className="opacity-45">Producer Edition</h3>
            <p className="opacity-45"> Eclipse of the sun and moon </p>
          </div>
        </div>
        <div className="rounded-[20px]">
          <Image
            src="/assets/img5.jpeg"
            alt="pix"
            width={320}
            height={300}
            className="rounded-[3px]"
          />
          <div className="flex justify-center items-center flex-col text-white">
            <h3 className="opacity-45">Producer Edition</h3>
            <p className="opacity-45"> Eclipse of the sun and moon </p>
          </div>
        </div>
        <div className="rounded-[20px]">
          <Image
            src="/assets/img3.jpeg"
            alt="pix"
            width={320}
            height={300}
            className="rounded-[3px]"
          />
          <div className="flex justify-center items-center flex-col text-white">
            <h3 className="opacity-45">Producer Edition</h3>
            <p className="opacity-45"> Eclipse of the sun and moon </p>
          </div>
        </div>
        <div className="rounded-[20px] lg:rounded-[20px] lg:mt-[5rem] md:rounded-[20px] md:mt-[5rem]">
          <Image
            src="/assets/img5.jpeg"
            alt="pix"
            width={320}
            height={300}
            className="rounded-[3px]"
          />
          <div className="flex justify-center items-center flex-col text-white">
            <h3 className="opacity-45">Producer Edition</h3>
            <p className="opacity-45"> Eclipse of the sun and moon </p>
          </div>
        </div>
        <div className="rounded-[20px]">
          <Image
            src="/assets/img6.jpeg"
            alt="pix"
            width={320}
            height={300}
            className="rounded-[3px]"
          />
          <div className="flex justify-center items-center flex-col text-white">
            <h3 className="opacity-45">Producer Edition</h3>
            <p className="opacity-45"> Eclipse of the sun and moon</p>
          </div>
        </div>
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
