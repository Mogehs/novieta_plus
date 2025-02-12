import { useContext } from "react";
import dot from "../../assets/HomeImg/dot.svg";
import work from "../../assets/HomeImg/work.mp4";
import rectangle from "../../assets/HomeImg/rectangle.png";
import { LanguageContext } from "../../context/LanguageContext"; // Import language context

export default function Novita() {
  const { language } = useContext(LanguageContext); // Get current language

  // Define translations inside the component
  const translations = {
    en: {
      subtitle: "Prioritize impactful tasks that drive the most value.",
      title: "Novieta Plus - Integrated Advertising and Marketing Solutions",
      description:
        "Novieta Plus delivers innovative and comprehensive advertising solutions. We focus on providing high-quality marketing services that help build a strong brand identity, enhance visibility, and increase engagement with the target audience across multiple channels.",
    },
    ar: {
      subtitle: "أولوية المهام المؤثرة التي تحقق أكبر قيمة.",
      title: "نوفـيتا بلس - حلول الإعلان والتسويق المتكاملة",
      description:
        "توفر نوفـيتا بلس حلولًا إعلانية مبتكرة وشاملة. نحن نركز على تقديم خدمات تسويقية عالية الجودة تساعد في بناء هوية علامة تجارية قوية، وتعزيز الرؤية، وزيادة التفاعل مع الجمهور المستهدف عبر قنوات متعددة.",
    },
  };

  return (
    <div className="h-fit relative mt-23">
      {/* Dotted Images */}
      <img
        src={dot}
        alt="dotted background"
        className="absolute top-0 left-0 w-1/2 sm:w-1/4"
      />
      <img
        src={rectangle}
        alt="rectangle background"
        className="absolute hidden sm:inline top-0 right-4 -z-10 w-1/2 sm:w-1/3"
      />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Content */}
        <div className="w-full sm:w-[80%] h-auto p-10">
          <h4 className="text-xs font-semibold">
            {translations[language].subtitle}
          </h4>
          <h1 className="text-xl sm:text-5xl font-semibold">
            {translations[language].title}
          </h1>
          <p className="mt-2">{translations[language].description}</p>
        </div>

        {/* Video */}
        <div className="w-full sm:w-[70%] pr-2.5 flex justify-center items-center">
          <video
            src={work}
            autoPlay
            muted
            loop
            className="w-[300px] h-[200px] sm:w-[100%] sm:h-[70%] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
