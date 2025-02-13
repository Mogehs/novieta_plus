import React, { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      image: "/about/testimonial.jpg",
      text: "Accelerate innovative with world-class tech teams beyond more Stoic this along goodness hey this this wow manatee",
      name: "Mike Holder",
    },
    {
      image: "/about/testi-2.jpg",
      text: "Accelerate innovative with world-class tech teams beyond more Stoic this along goodness hey this this wow manatee",
      name: "Mike Fermalin",
    },
    // Add more testimonials here
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="p-5">
      {/* Carousel Container */}
      <div className="flex justify-center items-center">
        <button
          onClick={handlePrev}
          className="p-3 bg-gray-300 rounded-full text-xl font-semibold text-black"
        >
          &#8592;
        </button>

        <div className="flex flex-col justify-center items-center mb-10 mx-5 w-full sm:w-[45%] md:w-[30%] lg:w-[25%]">
          <img
            src={testimonials[currentIndex].image}
            alt="Testimonial"
            className="rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
          />
          <div className="mt-4 text-center">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              {testimonials[currentIndex].text}
            </h2>
            <p className="mt-3 text-lg redText font-semibold">
              {testimonials[currentIndex].name}
            </p>
            {/* Stars */}
            <div className="flex mt-2 sm:ml-30">
              <span className="text-yellow-400">&#9733;</span>
              <span className="text-yellow-400">&#9733;</span>
              <span className="text-yellow-400">&#9733;</span>
              <span className="text-gray-300">&#9733;</span>
              <span className="text-gray-300">&#9733;</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="p-3 bg-gray-300 rounded-full text-xl font-semibold text-black"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
