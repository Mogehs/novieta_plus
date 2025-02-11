import React from "react";

const Hero = ({ title }) => {
  return (
    <>
      <div className="light-color h-100 w-full flex items-center justify-center relative mt-20">
        <div>
          <img
            src="/services/svg1.svg"
            alt=""
            className="h-30 absolute left-20 top-20 hidden md:inline"
          />
          <img
            src="/services/svg2.svg"
            alt=""
            className="h-30 absolute right-20 end-20 hidden md:inline"
          />
          <img
            src="/services/svg3.svg"
            alt=""
            className="h-10 absolute top-50 hidden md:inline"
          />
          <p className="text-[4rem]">{title}</p>
          <p className="text-center">Novietta {title}</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
