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
    <div
      className="h-fit sm:mt-8 px-4 py-8"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="w-full lg:w-3/4 mx-auto text-center space-y-6">
        {/* Subtitle */}
        <p className="text-lg sm:text-xl font-medium text-[#262626]">
          {translations[language].subtitle}
        </p>

        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl font-semibold redText">
          {translations[language].heading}
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
          {translations[language].description}
        </p>

        {/* Image Section */}
        <div className="mt-6">
          <img
            src={develop}
            alt="Cloud"
            className="w-full h-auto object-cover rounded-lg transition-transform transform"
          />
        </div>
      </div>
    </div>
  );
}
