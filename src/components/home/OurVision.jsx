import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function OurVision() {
  const { language } = useContext(LanguageContext);
  const translations = {
    en: {
      subtitle: "Novieta Plus - Digital Creativity Shaping the Future",
      title: "Our Vision",
      description:
        "Our vision is to lead digital transformation, driven by innovation and advanced technologies to achieve outstanding and sustainable results.",
    },
    ar: {
      subtitle: "نوفييتا بلس - الإبداع الرقمي يشكل المستقبل",
      title: "رؤيتنا",
      description:
        "رؤيتنا هي قيادة التحول الرقمي، مدفوعين بالابتكار والتقنيات المتقدمة لتحقيق نتائج متميزة ومستدامة.",
    },
  };

  return (
    <div className="h-fit flex flex-col items-center tracking-wider font-bold">
      <div className="w-[95%] lg:w-[85%] h-80 text-center p-8 rounded-lg ">
        <p className=" text-sm sm:text-lg font-medium uppercase tracking-wider">
          {translations[language].subtitle}
        </p>
        <div className="w-16 h-1 red-color mx-auto mt-2 mb-4"></div>

        <h1 className="text-2xl sm:text-5xl font-extrabold redText">
          {translations[language].title}
        </h1>

        <p className="mt-4 text-black text-sm sm:text-lg leading-relaxed">
          {translations[language].description}
        </p>
      </div>
    </div>
  );
}
