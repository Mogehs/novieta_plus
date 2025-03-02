import { useContext } from "react";

import { LanguageContext } from "../../context/LanguageContext"; // Import language context

export default function Novita() {
  const { language } = useContext(LanguageContext); // Get current language

  // Define translations inside the component
  const translations = {
    en: {
      subtitle: "Prioritize impactful tasks that drive the most value",
      title: "Novietaa Plus - Integrated Advertising and Marketing Solutions",
      description:
        "Novietaa Plus delivers innovative and comprehensive advertising solutions. We focus on providing high-quality marketing services that help build a strong brand identity, enhance visibility, and increase engagement with the target audience across multiple channels.",
    },
    ar: {
      subtitle: "أولوية المهام المؤثرة التي تحقق أكبر قيمة.",
      title: "نوفـيتا بلص - حلول الإعلان والتسويق المتكاملة",
      description:
        "توفر نوفـيتا بلس حلولًا إعلانية مبتكرة وشاملة. نحن نركز على تقديم خدمات تسويقية عالية الجودة تساعد في بناء هوية علامة تجارية قوية، وتعزيز الرؤية، وزيادة التفاعل مع الجمهور المستهدف عبر قنوات متعددة.",
    },
  };

  return (
    <div className="h-[20rem] sm:h-fit relative sm:mt-20 w-full">
      <video
        src="/home/company.mp4"
        loop
        muted
        autoPlay
        poster="/home/job-5382501_1920.jpg"
        className="h-[20rem] sm:h-[85vh] w-full object-cover"
      ></video>
      <div className="absolute top-0 bg-black w-full h-full opacity-80"></div>
      <div className="absolute top-30 tracking-wider px-2 sm:left-20">
        <p className="bg-white redText text-[0.7rem] rounded-sm sm:text-[1rem]  relative w-70 px-2 sm:px-10 sm:py-1 sm:rounded-full font font-semibold sm:w-110 ">
          {translations[language].subtitle}
        </p>
        <h1 className="text-white mt-4 text-2xl sm:text-6xl font-bold w-80 sm:w-200">
          {translations[language].title}
        </h1>
      </div>
    </div>
  );
}
