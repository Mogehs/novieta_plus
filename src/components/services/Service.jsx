import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext"; // Import the language context

const Service = () => {
  const { language } = useContext(LanguageContext); // Access the language from context

  const servicesText = {
    en: {
      heading: "Our Services",
      subheading: "What we are providing services all over the world",
      websiteDesign: "Website Design",
      digitalMarketing: "Digital Marketing",
      mediaProduction: "Media Production and Marketing Strategy Development",
      documentationPhotography: "Documentation and Photography",
      eventOrganization: "Event and Conference Organization",
    },
    ar: {
      heading: "خدماتنا",
      subheading: "ما نقدمه من خدمات في جميع أنحاء العالم",
      websiteDesign: "تصميم المواقع الإلكترونية",
      digitalMarketing: "التسويق الرقمي",
      mediaProduction: "إنتاج الوسائط وتطوير استراتيجيات التسويق",
      documentationPhotography: "التوثيق والتصوير الفوتوغرافي",
      eventOrganization: "تنظيم الفعاليات والمؤتمرات",
    },
  };

  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full pt-20 px-5">
      <div className="flex flex-col items-center text-center">
        <p className="text-[1.2rem] redText">
          {servicesText[language].subheading}
        </p>
        <h2 className="text-[2.5rem] md:text-[3.3rem] font-bold">
          {servicesText[language].heading}
        </h2>
      </div>

      <div className="p-5 md:p-10 flex flex-col md:flex-row justify-between gap-10 items-center">
        {/* First Service */}
        <div className="flex flex-col gap-10 items-center">
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
            className="light-color h-60 w-[90vw] sm:h-70 sm:w-70 rounded-xl text-black text-[1.3rem] text-center flex flex-col justify-around py-10 gap-3 shadow-lg transition-all duration-300"
          >
            <img
              src="/services/design-svgrepo-com.svg"
              alt=""
              className="h-15 w-fit mx-auto"
            />
            <motion.p whileHover={{ color: "#96193a", cursor: "pointer" }}>
              {servicesText[language].websiteDesign}
            </motion.p>
            <motion.div
              whileHover={{ x: 10 }}
              onClick={() => navigate("/services/website-design")}
            >
              <FaArrowRightLong className="text-black cursor-pointer text-[2rem] sm:text-[3rem] w-fit mx-auto hover:text-[#96193a]" />
            </motion.div>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
            className="light-color h-60 w-[90vw] sm:h-70 sm:w-70 rounded-xl text-black text-[1.3rem] text-center flex flex-col justify-around py-10 gap-3 mt-5 shadow-lg transition-all duration-300"
          >
            <img
              src="/services/rocket-2-svgrepo-com.svg"
              alt=""
              className="h-15 w-fit mx-auto"
            />
            <motion.p whileHover={{ color: "#96193a", cursor: "pointer" }}>
              {servicesText[language].digitalMarketing}
            </motion.p>
            <motion.div
              whileHover={{ x: 10 }}
              onClick={() => navigate("/services/digital-marketing")}
            >
              <FaArrowRightLong className="text-black cursor-pointer text-[2rem] sm:text-[3rem] w-fit mx-auto hover:text-[#96193a]" />
            </motion.div>
          </motion.div>
        </div>

        {/* Second Service (Hidden on mobile) */}
        <div className="flex-col items-center hidden lg:inline">
          <img
            src="/services/feature-min.webp"
            alt=""
            className="w-[18rem] sm:w-[25rem] object-contain"
          />
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
            className="light-color h-60 w-[90vw] sm:h-70 sm:w-90 rounded-xl text-black text-[1.3rem] text-center flex flex-col justify-around py-10 gap-3 mx-auto mt-5 shadow-lg transition-all duration-300"
          >
            <img
              src="/services/software-svgrepo-com.svg"
              alt=""
              className="h-15 w-fit mx-auto"
            />
            <motion.p whileHover={{ color: "#96193a", cursor: "pointer" }}>
              {servicesText[language].mediaProduction}
            </motion.p>
            <motion.div
              whileHover={{ x: 10 }}
              onClick={() => navigate("/services/media-production")}
            >
              <FaArrowRightLong className="text-black cursor-pointer text-[2rem] sm:text-[3rem] w-fit mx-auto hover:text-[#96193a]" />
            </motion.div>
          </motion.div>
        </div>

        {/* Third Service */}
        <div className="flex flex-col gap-10 items-center">
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
            className="light-color h-60 w-[90vw] sm:h-70 sm:w-70 rounded-xl text-black text-[1.3rem] text-center flex flex-col justify-around py-10 gap-3 shadow-lg transition-all duration-300"
          >
            <img
              src="/services/optimization-svgrepo-com.svg"
              alt=""
              className="h-15 w-fit mx-auto"
            />
            <motion.p whileHover={{ color: "#96193a", cursor: "pointer" }}>
              {servicesText[language].documentationPhotography}
            </motion.p>
            <motion.div
              whileHover={{ x: 10 }}
              onClick={() => navigate("/services/documentation-photography")}
            >
              <FaArrowRightLong className="text-black cursor-pointer text-[2rem] sm:text-[3rem] w-fit mx-auto hover:text-[#96193a]" />
            </motion.div>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
            className="light-color h-60 w-[90vw] sm:h-70 sm:w-70 rounded-xl text-black text-[1.3rem] text-center flex flex-col justify-around py-10 gap-3 mt-5 shadow-lg transition-all duration-300"
          >
            <img
              src="/services/development-idea-svgrepo-com.svg"
              alt=""
              className="h-15 w-fit mx-auto"
            />
            <motion.p whileHover={{ color: "#96193a", cursor: "pointer" }}>
              {servicesText[language].eventOrganization}
            </motion.p>
            <motion.div
              whileHover={{ x: 10 }}
              onClick={() => navigate("/services/event-conference")}
            >
              <FaArrowRightLong className="text-black cursor-pointer text-[2rem] sm:text-[3rem] w-fit mx-auto hover:text-[#96193a]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Service;
