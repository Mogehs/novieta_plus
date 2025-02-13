import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext"; // Import language context
import value1 from "../../assets/HomeImg/value1.png";

export default function CoreValue1() {
  const { language } = useContext(LanguageContext); // Get current language

  // Define translations inside the component
  const translations = {
    en: {
      heading: "Creativity",
      subtitle: "Providing innovative ideas and unique solutions",
      coreValues: [
        "Seamlessly access all your apps, documents, and information with a single login, enhancing productivity and convenience.",
        "Maximize security by customizing access conditions based on devices, networks, locations, and more, ensuring a safe digital environment.",
        "We offer seamless accessibility and optimized workflows without compromising security, enabling a smooth digital experience.",
        "Providing innovative ideas and unique solutions to drive digital transformation and excellence.",
      ],
    },
    ar: {
      heading: "الإبداع",
      subtitle: "تقديم أفكار مبتكرة وحلول فريدة",
      coreValues: [
        "الوصول السلس إلى جميع تطبيقاتك ومستنداتك ومعلوماتك من خلال تسجيل دخول واحد، مما يعزز الإنتاجية والراحة.",
        "تعزيز الأمان عن طريق تخصيص شروط الوصول استنادًا إلى الأجهزة والشبكات والمواقع والمزيد، لضمان بيئة رقمية آمنة.",
        "نقدم إمكانية وصول سلسة وتدفقات عمل محسّنة دون المساس بالأمان، مما يتيح تجربة رقمية سلسة.",
        "توفير أفكار مبتكرة وحلول فريدة لدفع التحول الرقمي والتميز.",
      ],
    },
  };

  return (
    <div className="h-fit sm:mt-10" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="w-full mx-auto sm:w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Image Section */}
        <div className="sm:w-[100%] w-full h-auto sm:mt-14">
          <img
            src={value1}
            alt="Access"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Core Value Section */}
        <div className="sm:w-[100%] w-full p-10">
          <p className="redText">{translations[language].subtitle}</p>
          <h1 className="text-3xl font-semibold sm:font-bold">
            {translations[language].heading}
          </h1>
          {translations[language].coreValues.map((desc, index) => (
            <div key={index} className="py-2">
              <ul className="flex gap-2 items-start">
                <p className="redText text-xl">☼</p>
                <li>{desc}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
