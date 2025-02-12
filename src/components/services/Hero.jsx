import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext"; // Import language context

const Hero = () => {
  const { language } = useContext(LanguageContext); // Get current language

  // Define translations for title and subtitle based on the language
  const translations = {
    en: {
      title: "Unlock Your Digital Work Focus",
      subtitle:
        "Novietta offers the ultimate solution to enhance your digital workplace experience.",
    },
    ar: {
      title: "افتح تركيز العمل الرقمي الخاص بك",
      subtitle:
        "نوفيا تقدم الحل الأمثل لتحسين تجربة مكان العمل الرقمي الخاص بك.",
    },
  };

  return (
    <div className="light-color h-100 w-full flex items-center justify-center relative mt-15">
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
        <p className="text-[4rem]">{translations[language].title}</p>
        <p className="text-center">{translations[language].subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;
