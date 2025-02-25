import { useState, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext"; // Ensure correct path
import Printing from "./Printing";
import WebDesign from "./WebDesign";
import Marketing from "./Marketing";
import DocPhoto from "./DocPhoto";
import Media from "./Media";
import Organization from "./Organization";
import Advertising from "./Advertising";
import { Link } from "react-router-dom";

export default function WeAreProviding() {
  const [active, setActive] = useState("printing");
  const { language } = useContext(LanguageContext); // Get language context

  const data = [
    {
      title: {
        en: "Digital & Offset Printing",
        ar: "الطباعة الرقمية والأوفست",
      },
      key: "printing",
    },
    {
      title: {
        en: "Web Design",
        ar: "تصميم المواقع",
      },
      key: "design",
    },
    {
      title: {
        en: "Marketing",
        ar: "التسويق",
      },
      key: "marketing",
    },
    {
      title: {
        en: "Documentation & Photography",
        ar: "التوثيق والتصوير",
      },
      key: "photo",
    },
    {
      title: {
        en: "Media Production",
        ar: "إنتاج الوسائط",
      },
      key: "media",
    },
    {
      title: {
        en: "Event & Confress Org.",
        ar: "تنظيم الفعاليات والمؤتمرات",
      },
      key: "organization",
    },
    {
      title: {
        en: "Advertising",
        ar: "الإعلان",
      },
      key: "advertising",
    },
  ];

  return (
    <div className={language === "ar" ? "rtl" : ""}>
      <h1 className="font-bold text-center redText text-2xl sm:text-3xl mb-4">
        {language === "en" ? "We Provide" : "نحن نقدم"}
      </h1>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-4xl overflow-x-auto sm:overflow-visible">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-4 sm:px-0">
            {data.map((item) => (
              <div
                key={item.key}
                className={`flex flex-col items-center cursor-pointer bg-white shadow-md px-3 py-2 sm:py-3 rounded-md transition-all duration-300
                  ${active === item.key ? "light-color text-white" : ""}`}
                onClick={() => setActive(item.key)}
              >
                <h1 className="text-xs sm:text-sm font-bold">
                  {item.title[language]}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Component Display Section */}
      <div className="w-full flex justify-center my-6 mb-10">
        <div className="w-full px-4 sm:px-0">
          {active === "printing" && <Printing />}
          {active === "design" && <WebDesign />}
          {active === "marketing" && <Marketing />}
          {active === "photo" && <DocPhoto />}
          {active === "media" && <Media />}
          {active === "organization" && <Organization />}
          {active === "advertising" && <Advertising />}
        </div>
      </div>

      <Link to="/our-services">
        <h1 className="text-white my-10 tracking-widest font-bold text-center w-fit mx-auto light-color p-2 rounded-xl">
          {language === "en"
            ? "Check Out Our Services in Detail"
            : "تحقق من خدماتنا بالتفصيل"}
        </h1>
      </Link>
    </div>
  );
}
