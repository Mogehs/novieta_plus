import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Service = () => {
  return (
    <div className="min-h-screen w-full pt-20 px-5">
      <div className="flex flex-col items-center text-center">
        <p className="text-[1.2rem]">
          What we are providing services all over the world
        </p>
        <h2 className="text-[2.5rem] md:text-[3.3rem] mt-4 font-bold">
          Our Services
        </h2>
      </div>

      <div className="p-5 md:p-10 flex flex-col md:flex-row justify-between gap-10 items-center">
        <div className="flex flex-col gap-10 items-center">
          <div className="light-color h-60 w-[90vw]  sm:h-70 sm:w-70 rounded-xl text-black text-[1.3rem] text-center flex flex-col justify-around py-10 gap-3 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src="/services/design-svgrepo-com.svg"
              alt=""
              className="h-15 w-fit mx-auto"
            />
            <p>Website Design</p>
            <FaArrowRightLong className="text-black cursor-pointer text-[2rem] sm:text-[3rem] w-fit mx-auto" />
          </div>
          <div className="light-color h-60 w-[90vw] sm:h-70 sm:w-70 rounded-xl text-black text-[1.3rem] text-center flex flex-col justify-around py-10 gap-3 mt-5 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src="/services/rocket-2-svgrepo-com.svg"
              alt=""
              className="h-15 w-fit mx-auto"
            />
            <p>Digital Marketing</p>
            <FaArrowRightLong className="text-black cursor-pointer text-[2rem] sm:text-[3rem] w-fit mx-auto" />
          </div>
        </div>

        <div className=" flex-col items-center  hidden lg:inline">
          <img
            src="/services/feature-min.webp"
            alt=""
            className="w-[18rem] sm:w-[25rem] object-contain"
          />
          <div className="light-color h-60 w-[90vw] sm:h-70 sm:w-90 rounded-xl text-black text-[1.3rem] text-center flex flex-col justify-around py-10 gap-3 mx-auto mt-5 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src="/services/software-svgrepo-com.svg"
              alt=""
              className="h-15 w-fit mx-auto"
            />
            <p>Media Production and Marketing Strategy Development</p>
            <FaArrowRightLong className="text-black cursor-pointer text-[2rem] sm:text-[3rem] w-fit mx-auto" />
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center">
          <div className="light-color h-60 w-[90vw] sm:h-70 sm:w-70 rounded-xl text-black text-[1.3rem] text-center flex flex-col justify-around py-10 gap-3 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src="/services/optimization-svgrepo-com.svg"
              alt=""
              className="h-15 w-fit mx-auto"
            />
            <p>Documentation and Photography</p>
            <FaArrowRightLong className="text-black cursor-pointer text-[2rem] sm:text-[3rem] w-fit mx-auto" />
          </div>
          <div className="light-color h-60 w-[90vw] sm:h-70 sm:w-70 rounded-xl text-black text-[1.3rem] text-center flex flex-col justify-around py-10 gap-3 mt-5 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src="/services/development-idea-svgrepo-com.svg"
              alt=""
              className="h-15 w-fit mx-auto"
            />
            <p>Event and Conference Organization</p>
            <FaArrowRightLong className="text-black cursor-pointer text-[2rem] sm:text-[3rem] w-fit mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
