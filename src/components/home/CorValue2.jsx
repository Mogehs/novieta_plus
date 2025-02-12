import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext"; // Import language context
import value2 from "../../assets/HomeImg/value2.png";

export default function CoreValue2() {
  const { language } = useContext(LanguageContext); // Get current language

  // Define translations inside the component
  const translations = {
    en: {
      heading: "Commitment",
      subtitle: "Achieving results that exceed client expectations",
      coreValues: [
        "We are dedicated to delivering exceptional outcomes that surpass client expectations through innovation, precision, and expertise.",
        "Our team ensures every project is executed with excellence, focusing on quality, efficiency, and client satisfaction.",
        "With a results-driven approach, we prioritize client goals, offering tailored solutions that drive long-term success.",
        "By combining creativity and strategy, we transform ideas into impactful digital solutions across multiple platforms.",
      ],
    },
    ar: {
      heading: "الالتزام",
      subtitle: "تحقيق النتائج التي تتجاوز توقعات العملاء",
      coreValues: [
        "نحن ملتزمون بتقديم نتائج استثنائية تتجاوز توقعات العملاء من خلال الابتكار والدقة والخبرة.",
        "يضمن فريقنا تنفيذ كل مشروع بكفاءة، مع التركيز على الجودة والكفاءة ورضا العملاء.",
        "مع نهج مدفوع بالنتائج، نضع أهداف العملاء في أولوياتنا، ونقدم حلولاً مصممة خصيصًا لتحقيق النجاح طويل الأمد.",
        "من خلال دمج الإبداع والاستراتيجية، نحول الأفكار إلى حلول رقمية مؤثرة عبر منصات متعددة.",
      ],
    },
  };

  return (
    <div className="h-fit sm:mt-10" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="w-full mx-auto sm:w-[90%] flex lg:flex-row flex-col gap-4">
        {/* Core Values */}
        <div className="sm:w-[100%] w-full p-10 order-2 lg:order-1">
          <p className="redText">{translations[language].subtitle}</p>
          <h1 className="text-3xl font-semibold">
            {translations[language].heading}
          </h1>
          {translations[language].coreValues.map((desc, index) => (
            <div key={index} className="py-2">
              <ul className="flex gap-2 items-start">
                <p>☼</p>
                <li>{desc}</li>
              </ul>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="sm:w-[100%] w-full h-auto order-1 lg:order-2">
          <img
            src={value2}
            alt="Access"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
