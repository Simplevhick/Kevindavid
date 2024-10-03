import Image from "next/image";
import Link from "next/link";
import productData from "./data"

const Blogs = () => {
  return (
    <div className="mb-[5rem] bg-[#080803]" id="blog">
      <div className="flex items-center justify-center flex-col text-white">
        <h1 className="text-[1.5rem] outfit">Hope you like it</h1>
        <h1 className="text-[2rem] outfit font-bold lg:text-[2.8rem] lg:font-bold md:text-[2.8rem] md:font-bold">
          LATEST RELEASES
        </h1>
      </div>

      <div className="relative grid grid-cols-2 gap-1 place-items-center ml-1 mt-3 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:place-items-center lg:mt-1 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-3 md:place-items-center md:mt-1">
        {productData.map((productData) => (
          <div
            key={productData.id}
            className="rounded-[20px] mt-[4rem] lg:rounded-[20px] lg:mt-[3rem] md:rounded-[20px] md:mt-[5rem]"
          >
            <Link href={`/productDetails/${productData.id}`}>
              <img
                src={productData.src}
                alt={productData.alt}
                className="rounded-[3px] w-[10remm] h-[15rem] lg:h-[430px] lg:w-[350px] md:h-[350px] md:w-[260px]"
              />
              <div className="flex justify-center items-center flex-col text-white p-1">
                <h3 className="opacity-45 p-1 outfit">{productData.artist}</h3>
                <p className="text-[1.1rem] outfit lg:text-[1.3rem] md:text-[1.3rem]">
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
