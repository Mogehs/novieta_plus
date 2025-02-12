import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext"; // Import language context
import sustaible from "../../assets/HomeImg/sustaible.png";

export default function CoreValue3() {
  const { language } = useContext(LanguageContext); // Get current language

  // Define translations inside the component
  const translations = {
    en: {
      heading: "Sustainability",
      subtitle: "Ensuring a positive and lasting impact on brands",
      coreValues: [
        "We implement sustainable strategies that drive long-term success while minimizing digital and environmental footprints.",
        "We are dedicated to delivering exceptional outcomes that surpass client expectations through innovation, precision, and expertise.",
        "Our team ensures every project is executed with excellence, focusing on quality, efficiency, and client satisfaction.",
        "With a results-driven approach, we prioritize client goals, offering tailored solutions that drive long-term success.",
        "By combining creativity and strategy, we transform ideas into impactful digital solutions across multiple platforms.",
      ],
    },
    ar: {
      heading: "الاستدامة",
      subtitle: "ضمان تأثير إيجابي ودائم على العلامات التجارية",
      coreValues: [
        "ننفذ استراتيجيات مستدامة تحقق النجاح طويل الأمد مع تقليل البصمة الرقمية والبيئية.",
        "نحن ملتزمون بتقديم نتائج استثنائية تتجاوز توقعات العملاء من خلال الابتكار والدقة والخبرة.",
        "يضمن فريقنا تنفيذ كل مشروع بكفاءة، مع التركيز على الجودة والكفاءة ورضا العملاء.",
        "مع نهج مدفوع بالنتائج، نضع أهداف العملاء في أولوياتنا، ونقدم حلولاً مصممة خصيصًا لتحقيق النجاح طويل الأمد.",
        "من خلال دمج الإبداع والاستراتيجية، نحول الأفكار إلى حلول رقمية مؤثرة عبر منصات متعددة.",
      ],
    },
  };

  return (
    <div className="h-fit sm:mt-10" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="w-full mx-auto sm:w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Image */}
        <div className="sm:w-[100%] w-full h-auto">
          <img
            src={sustaible}
            alt="Access"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Core Values */}
        <div className="sm:w-[100%] w-full p-10">
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
      </div>
    </div>
  );
}
