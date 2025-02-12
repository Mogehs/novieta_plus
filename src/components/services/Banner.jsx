import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext"; // Import the language context

const Banner = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext); // Access current language from context

  // Translations object for English and Arabic
  const translations = {
    en: {
      title: "Unlock your ultimate digital work focus today!",
      subtitle:
        "Help your employees harness their full potential with our adaptive digital workplace.",
      buttonText: "Get Our Services",
    },
    ar: {
      title: "افتح تركيز عملك الرقمي النهائي اليوم!",
      subtitle:
        "ساعد موظفيك في الاستفادة القصوى من إمكاناتهم من خلال بيئة العمل الرقمية التكيفية.",
      buttonText: "احصل على خدماتنا",
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="my-20 h-100 w-[90%] mx-auto bg-gradient-to-br gradientColor rounded-xl shadow-lg ml-auto text-white p-5 flex items-center"
    >
      <div className="w-full">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-3xl md:text-5xl font-bold w-full text-center lg:text-start lg:w-[90%]"
        >
          {translations[language].title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-center lg:text-start w-full lg:w-[80%] text-lg"
        >
          {translations[language].subtitle}
        </motion.p>

        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
          }}
          whileTap={{ scale: 0.9 }}
          className="mt-10 brown-color w-fit p-3 rounded-2xl cursor-pointer mx-auto sm:mx-0 hover:shadow-2xl transition-all delay-75 ease-in-out"
          onClick={() => navigate("/contact-us")}
        >
          {translations[language].buttonText}
        </motion.div>
      </div>

      <motion.img
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.7 }}
        src="/services/Standing-Man-Laptop.webp"
        alt=""
        className="h-[28.8rem] relative -top-7.5 hidden lg:inline"
      />
    </motion.div>
  );
};

export default Banner;
