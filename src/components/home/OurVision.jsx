import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext"; // Import language context

export default function OurVision() {
  const { language } = useContext(LanguageContext); // Get current language

  // Define translations inside the component
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
    <div className="h-fit sm:mt-25">
      <div className="w-[100%] sm:w-[60%] py-2 mx-auto">
        <p className="text-center text-xs sm:text-xl redText mb-2">
          {translations[language].subtitle}
        </p>
        <h1 className="text-center text-xl sm:text-4xl font-semibold">
          {translations[language].title}
        </h1>
        <div className="mt-2 px-2 text-center">
          <p>{translations[language].description}</p>
        </div>
      </div>
    </div>
  );
}
