import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Marketing = () => {
  const { language } = useContext(LanguageContext);

  // Content in English & Arabic
  const content = {
    en: {
      title: "Marketing & Branding Services:",
      description:
        "Novieta Plus provides comprehensive marketing solutions to enhance brand visibility and customer engagement through strategic campaigns.",
      services: [
        "Digital Marketing & Social Media Management",
        "SEO & Content Marketing",
        "Branding & Graphic Design",
        "Email & SMS Campaigns",
      ],
    },
    ar: {
      title: "خدمات التسويق والعلامة التجارية:",
      description:
        "تقدم نوفيا بلس حلول تسويقية شاملة لتعزيز ظهور العلامة التجارية وزيادة تفاعل العملاء من خلال حملات استراتيجية.",
      services: [
        "التسويق الرقمي وإدارة وسائل التواصل الاجتماعي",
        "تحسين محركات البحث والتسويق بالمحتوى",
        "تصميم العلامات التجارية والجرافيك",
        "حملات البريد الإلكتروني والرسائل النصية",
      ],
    },
  };

  return (
    <div
      className="w-full sm:w-9/12 mx-auto mt-4 sm:mt-8 bg-white border border-[#615e5e62] p-3 rounded-md h-fit"
      style={{
        clipPath:
          "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 29% 98%, 27% 74%, 0% 75%);",
      }}
    >
      <div className="flex flex-col md:flex-row gap-4">
        {/* Text Section */}
        <div
          className={`w-full px-2 md:w-2/4 flex flex-col gap-2 ${
            language === "ar" ? "text-right" : "text-left"
          }`}
        >
          <p>
            <span className="font-bold text-xl sm:text-3xl redText">
              {content[language].title}
            </span>

            <p className="mt-2 sm:mt-3 text-sm sm:text-lg">
              {content[language].description}
            </p>
            <ul className="sm:mt-5 mt-2 text-sm sm:text-lg">
              {content[language].services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full h-[40vh] sm:h-[48vh] md:w-2/4">
          <img
            src="/new-services/dm.jpg"
            alt="printing"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Marketing;
