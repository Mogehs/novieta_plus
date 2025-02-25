import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Media = () => {
  const { language } = useContext(LanguageContext);

  // Content in English & Arabic
  const content = {
    en: {
      title: "Media Production & Marketing Strategy:",
      description:
        "Novieta Plus offers high-quality media production and strategic marketing solutions to help brands stand out in the digital landscape.",
      services: [
        "Video Production & Editing",
        "Professional Photography",
        "Social Media Content Creation",
        "Branding & Advertising Strategies",
      ],
    },
    ar: {
      title: "إنتاج الوسائط وتطوير استراتيجيات التسويق:",
      description:
        "تقدم نوفيا بلس خدمات إنتاج وسائط عالية الجودة وحلول تسويقية استراتيجية لمساعدة العلامات التجارية على التميز في المجال الرقمي.",
      services: [
        "إنتاج الفيديو والتحرير",
        "التصوير الفوتوغرافي الاحترافي",
        "إنشاء محتوى لوسائل التواصل الاجتماعي",
        "استراتيجيات العلامة التجارية والإعلانات",
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
            src="/new-services/media-production.jpg"
            alt="printing"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Media;
