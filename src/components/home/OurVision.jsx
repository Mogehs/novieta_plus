import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext"; // Import language context

export default function OurVision() {
  const { language } = useContext(LanguageContext); // Get current language

  const translations = {
    en: {
      subtitle: "Enhance productivity, collaboration, and efficiency",
      title: "Our Vision",
      description:
        "Our vision is to lead digital transformation, driven by innovation and advanced technologies, to achieve outstanding and sustainable results. We strive to empower businesses with cutting-edge solutions, fostering growth, efficiency, and long-term success in an ever-evolving digital landscape.",
    },
    ar: {
      subtitle: "تعزيز الإنتاجية والتعاون والكفاءة",
      title: "رؤيتنا",
      description:
        "رؤيتنا هي قيادة التحول الرقمي، مدفوعين بالابتكار والتقنيات المتقدمة، لتحقيق نتائج متميزة ومستدامة. نسعى إلى تمكين الشركات بحلول متطورة، تعزز النمو والكفاءة والنجاح طويل الأمد في عالم رقمي دائم التطور.",
    },
  };

  return (
    <div className="h-fit mt-16 md:mt-10 flex flex-col items-center">
      <div className="w-[95%] lg:w-[85%] h-80 text-center p-8 rounded-lg ">
        {/* Subtitle with a decorative line */}
        <p className=" text-sm sm:text-lg font-medium uppercase tracking-wider">
          {translations[language].subtitle}
        </p>
        <div className="w-16 h-1 red-color mx-auto mt-2 mb-4"></div>

        {/* Title */}
        <h1 className="text-2xl sm:text-5xl font-bold redText">
          {translations[language].title}
        </h1>

        {/* Description */}
        <p className="mt-4 text-black text-sm sm:text-lg leading-relaxed">
          {translations[language].description}
        </p>
      </div>
    </div>
  );
}
