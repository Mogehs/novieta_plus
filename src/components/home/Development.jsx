import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext"; // Import language context
import develop from "../../assets/HomeImg/develop.png";

export default function Development() {
  const { language } = useContext(LanguageContext); // Get current language

  // Define translations inside the component
  const translations = {
    en: {
      subtitle:
        "Keeping up with the latest trends and technologies to ensure leadership",
      heading: "Developments",
      description:
        "We are committed to continuous innovation, embracing the latest advancements to redefine digital experiences. Our goal is to develop transformative solutions that enhance efficiency, scalability, and long-term success, ensuring businesses stay competitive in a rapidly evolving digital world.",
    },
    ar: {
      subtitle: "مواكبة أحدث الاتجاهات والتقنيات لضمان القيادة",
      heading: "التطورات",
      description:
        "نحن ملتزمون بالابتكار المستمر ، واحتضان أحدث التطورات لإعادة تعريف التجارب الرقمية. هدفنا هو تطوير حلول محورية تعزز الكفاءة والقابلية للتوسع والنجاح على المدى الطويل ، مما يضمن بقاء الشركات قادرة على المنافسة في عالم رقمي يتطور بسرعة.",
    },
  };

  return (
    <div className="h-fit sm:mt-10" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="w-[100%] lg:w-[60%] py-2 mx-auto">
        <p className="text-center text-xs sm:text-xl redText mb-2">
          {translations[language].subtitle}
        </p>
        <h1 className="text-center text-xl sm:text-4xl font-semibold">
          {translations[language].heading}
        </h1>
        <div className="mt-2 px-2 text-center">
          <p>{translations[language].description}</p>
        </div>

        <div className="w-[100%] sm:w-[100%] mx-auto">
          <img src={develop} alt="Cloud" />
        </div>
      </div>
    </div>
  );
}
