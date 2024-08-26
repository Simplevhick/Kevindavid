import Image from "next/image";
import Link from "next/link";

const productData = [
  {
    id: 1,
    src: "/assets/kev9.jpg",
    alt: "pix",
    artist: "Producer Edition",
    about: "Eclipse of the sun",
  },
  {
    id: 2,
    src: "/assets/kev2.jpg",
    alt: "pix",
    artist: "Producer Edition",
    about: "Eclipse of the sun",
  },
  {
    id: 3,
    src: "/assets/kev1.jpg",
    alt: "pix",
    artist: "Producer Edition",
    about: "Eclipse of the sun",
  },
  {
    id: 4,
    src: "/assets/kev8.jpg",
    alt: "pix",
    artist: "Producer Edition",
    about: "Eclipse of the sun",
  },
];

const Blogs = () => {
  return (
    <div className="mb-[5rem]" id="blog">
      <div className="flex items-center justify-center flex-col text-white">
        <h1 className="text-[1.5rem]">Hope You Like It</h1>
        <h1 className="text-[2rem] font-bold lg:text-[2.8rem] lg:font-bold md:text-[2.8rem] md:font-bold">
          LATEST RELEASES
        </h1>
      </div>

      <div className="relative grid grid-cols-2 gap-1 place-items-center ml-1 mt-3 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:place-items-center lg:mt-3 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-3 md:place-items-center md:mt-3">
        {productData.map((productData) => (
          <div
            key={productData.id}
            className="rounded-[20px] lg:rounded-[20px] md:rounded-[20px] md:mt-[5rem]"
          >
            <Link href={`/productDetails/${productData.id}`}>
              <img
                src={productData.src}
                alt={productData.alt}
                className="rounded-[3px] w-[10remm] h-[15rem] lg:h-[430px] lg:w-[350px] md:h-[350px] md:w-[260px]"
              />
              <div className="flex justify-center items-center flex-col text-white p-1">
                <h3 className="opacity-45 p-1">{productData.artist}</h3>
                <p className="text-[1.1rem] lg:text-[1.3rem] md:text-[1.3rem]">
                  {productData.about}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

// import Image from "next/image";
// import Link from "next/link";

// const productId = [
//   {
//     id: 1,
//     img: "/assets/kev9.jpg",
//     alt: "pix",
//     artist: "Producer Edition",
//     about: "Eclipse of the sun"
//   },
//   {
//     id: 2,
//     img: "/assets/kev2.jpg",
//     alt: "pix",
//     artist: "Producer Edition",
//     about: "Eclipse of the sun"
//   },
//   {
//     id: 3,
//     img: "/assets/kev1.jpg",
//     alt: "pix",
//     artist: "Producer Edition",
//     about: "Eclipse of the sun"
//   },
//   {
//     id: 4,
//     img: "/assets/kev8.jpg",
//     alt: "pix",
//     artist: "Producer Edition",
//     about: "Eclipse of the sun"
//   },
// ];

// const Blogs = () => {
//   return (
//     <div className="mb-[5rem]" id="blog">
//       <div className="flex items-center justify-center flex-col text-white">
//         <h1 className="text-[1.5rem]">Hope You Like It</h1>
//         <h1 className="text-[2rem] font-bold lg:text-[2.8rem] lg:font-bold md:text-[2.8rem] md:font-bold">
//           LATEST RELEASES
//         </h1>
//       </div>

//       <div className="relative grid grid-cols-2 gap-1 place-items-center ml-1 mt-3 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:place-items-center lg:mt-3 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-3 md:place-items-center md:mt-3">
//         <Link href="">
//           <div className="rounded-[20px] lg:rounded-[20px] md:rounded-[20px] md:mt-[5rem]">
//             <img
//               src="/assets/kev9.jpg"
//               alt="pix"
//               className="rounded-[3px] w-[10remm] h-[15rem] lg:h-[350px] lg:w-[270px] md:h-[350px] md:w-[260px]"
//             />
//             <div className="flex justify-center items-center flex-col text-white p-1">
//               <h3 className="opacity-45 p-1">Producer Edition</h3>
//               <p className="text-[1.1rem] lg:text-[1.3rem] md:text-[1.3rem]">
//                 {" "}
//                 Eclipse of the sun
//               </p>
//             </div>
//           </div>
//         </Link>

//         <Link href="">
//           <div className="rounded-[20px] lg:rounded-[20px] md:rounded-[20px] md:mt-[5rem]">
//             <img
//               src="/assets/kev2.jpg"
//               alt="pix"
//               className="rounded-[3px] w-[10remm] h-[15rem] lg:h-[350px] lg:w-[270px] md:h-[350px] md:w-[260px]"
//             />
//             <div className="flex justify-center items-center flex-col text-white p-1">
//               <h3 className="opacity-45 p-1">Producer Edition</h3>
//               <p className="text-[1.1rem] lg:text-[1.3rem] md:text-[1.3rem]">
//                 {" "}
//                 Eclipse of the sun
//               </p>
//             </div>
//           </div>
//         </Link>

//         <a href="">
//           <div className="rounded-[20px] lg:rounded-[20px] md:rounded-[20px] md:mt-[5rem]">
//             <img
//               src="/assets/kev1.jpg"
//               alt="pix"
//               className="rounded-[3px] w-[10remm] h-[15rem] lg:h-[350px] lg:w-[270px] md:h-[350px] md:w-[260px]"
//             />
//             <div className="flex justify-center items-center flex-col text-white p-1">
//               <h3 className="opacity-45 p-1">Producer Edition</h3>
//               <p className="text-[1.1rem] lg:text-[1.3rem] md:text-[1.3rem]">
//                 {" "}
//                 Eclipse of the sun{" "}
//               </p>
//             </div>
//           </div>
//         </a>

//         <a href="">
//           <div className="rounded-[20px] lg:rounded-[20px] md:rounded-[20px] md:mt-[5rem]">
//             <img
//               src="/assets/kev8.jpg"
//               alt="pix"
//               className="rounded-[3px] w-[10remm] h-[15rem] lg:h-[350px] lg:w-[270px] md:h-[350px] md:w-[260px]"
//             />
//             <div className="flex justify-center items-center flex-col text-white p-1">
//               <h3 className="opacity-45 p-1">Producer Edition</h3>
//               <p className="text-[1.1rem] lg:text-[1.3rem] md:text-[1.3rem]">
//                 {" "}
//                 Eclipse of the sun{" "}
//               </p>
//             </div>
//           </div>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Blogs;
