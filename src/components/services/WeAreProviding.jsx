import React, { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    services: "Digital and Offset Printing:",
    description:
      "Novieta Plus offers a wide range of printing services to meet all client needs.",
    list: "Indoor and outdoor printing, Textile printing for various purposes, Specialized printing",
  },
  {
    services: "Website Design:",
    description:
      "We craft visually stunning and user-friendly websites tailored to your business needs.",
  },
  {
    services: "Digital Marketing:",
    description:
      "Boost your online presence with our innovative and results-driven digital marketing strategies.",
  },
  {
    services: "Documentation And Photography:",
    description:
      "High-quality documentation and photography services to capture and showcase your brand effectively.",
  },
];

const WeAreProviding = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <>
      <h1 className="text-[2rem] text-center mt-10 font-bold">
        We Are Providing
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[90%] p-5 min-h-[60vh] rounded-xl mx-auto text-white relative mb-35"
      >
        {services.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`w-full rounded-lg p-4 backdrop-blur-md shadow-lg cursor-pointer bg-gradient-to-br  ${
              hoverIndex === idx ? "gradientColor3" : "gradientColor2"
            }  `}
            onMouseEnter={() => setHoverIndex(idx)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <h1 className="font-bold text-lg sm:text-xl tracking-wide">
              {item.services}
            </h1>
            <p className="mt-3 text-sm sm:text-base">{item.description}</p>
            {item.list && (
              <ul className="mt-5">
                {item.list.split(",").map((li, listIdx) => (
                  <li key={listIdx} className="mt-2">
                    {li.trim()}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default WeAreProviding;
