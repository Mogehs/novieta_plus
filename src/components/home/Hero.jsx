import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext"; // Import language context
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { language } = useContext(LanguageContext); // Get current language

  // Define translations inside the component
  const translations = {
    en: {
      title: "Unlock your ultimate digital work focus today!",
      subtitle:
        "Help your employees harness their full potential with our adaptive digital workplace.",
      buttonText: "Get Our Services",
    },
    ar: {
      title: "افتح تركيز العمل الرقمي الأمثل لديك اليوم!",
      subtitle:
        "ساعد موظفيك في الاستفادة القصوى من إمكانياتهم من خلال مكان العمل الرقمي المتكيف لدينا.",
      buttonText: "احصل على خدماتنا",
    },
  };
  const navigate = useNavigate();

  

  return (
    <>
      <div
        className="my-40 h-100 w-[90%] mx-auto bg-gradient-to-br gradientColor rounded-xl shadow-lg ml-auto text-white p-5 flex items-center"
        dir={language === "ar" ? "rtl" : "ltr"} // Set direction to RTL if language is Arabic
      >
        <div className="w-full">
          <p className="text-3xl md:text-5xl font-bold w-full text-center lg:text-start lg:w-[90%]">
            {translations[language].title} {/* Dynamic title */}
          </p>
          <p className="mt-4 text-center lg:text-start w-full lg:w-[80%] text-lg">
            {translations[language].subtitle} {/* Dynamic subtitle */}
          </p>
          {/* btn */}
          <button className=" mt-10 brown-color w-fit p-3  rounded-2xl cursor-pointer  mx-auto lg:mx-0 hover:shadow-2xl transition-all delay-75 ease-in-out" onClick={() => navigate("/services")}>{translations[language].buttonText}</button>
        </div>
        <img
          src="/services/Standing-Man-Laptop.webp"
          alt=""
          className="h-[28.8rem] relative -top-7.5 hidden lg:inline"
        />



      </div>

    </>
  );
};

export default Hero;
