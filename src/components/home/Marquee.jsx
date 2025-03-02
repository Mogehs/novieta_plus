import { useEffect, useRef } from "react";
import one from "/marquee/design-designers-dribbble-svgrepo-com.svg";
import two from "/marquee/design-education-learning-svgrepo-com.svg";
import three from "/marquee/design-education-painting-svgrepo-com.svg";
import four from "/marquee/design-svgrepo-com.svg";
import five from "/marquee/design-svgrepo-com (1).svg";
import six from "/marquee/design-tool-pencil-svgrepo-com.svg";
import seven from "/marquee/development-svgrepo-com.svg";
import eight from "/marquee/services-svgrepo-com.svg";

const images = [
  one,
  two,
  three,
  four,
  five,
  six,
  four,
  seven,
  eight,
  seven,
  two,
];

export default function Marquee() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animation;

    const startScrolling = () => {
      animation = slider.animate(
        [{ transform: "translateX(0)" }, { transform: "translateX(-100%)" }],
        {
          duration: 30000,
          iterations: Infinity,
          easing: "linear",
        }
      );
    };

    startScrolling();

    const handleMouseEnter = () => animation.pause();
    const handleMouseLeave = () => animation.play();

    slider.addEventListener("mouseenter", handleMouseEnter);
    slider.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      slider.removeEventListener("mouseenter", handleMouseEnter);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      animation.cancel();
    };
  }, []);

  return (
    <div className="w-full overflow-hidden my-5 bg-gray-100">
      <div ref={sliderRef} className="flex w-[200%]  gap-20">
        {[...images, ...images].map((img, index) => (
          <div key={index} className="w-20 p-2 flex-shrink-0 cursor-pointer">
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
