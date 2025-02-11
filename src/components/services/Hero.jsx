import React from "react";

const Hero = () => {
  return (
    <div className="mt-40 h-100 w-[90%] mx-auto bg-gradient-to-br gradientColor rounded-xl shadow-lg ml-auto text-white p-5 flex items-center">
      <div>
        <p className=" text-5xl font-bold w-[90%]">
          Unlock your ultimate digital work focus today!
        </p>
        <p className="mt-4 w-[80%] text-lg">
          Help your employees harness their full potential with our adaptive
          digital workplace.
        </p>
      </div>
      <img
        src="/services/Standing-Man-Laptop.webp"
        alt=""
        className="h-[28.8rem] relative -top-7.5"
      />
    </div>
  );
};

export default Hero;
