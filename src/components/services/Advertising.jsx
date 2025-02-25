import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Advertising = () => {
  const { language } = useContext(LanguageContext);

  // Content in English & Arabic
  const content = {
    en: {
      title: "Advertising & Brand Promotion:",
      description:
        "Novieta Plus provides creative advertising solutions to enhance brand visibility and engage target audiences effectively.",
      services: [
        "Outdoor & Indoor Advertising",
        "Billboard & Banner Printing",
        "Digital Advertising & Social Media Campaigns",
        "Customized Promotional Materials",
      ],
    },
    ar: {
      title: "الإعلانات والترويج للعلامة التجارية:",
      description:
        "تقدم نوفيا بلس حلول إعلانية إبداعية لتعزيز ظهور العلامة التجارية والتفاعل الفعّال مع الجمهور المستهدف.",
      services: [
        "الإعلانات الخارجية والداخلية",
        "طباعة اللوحات الإعلانية واللافتات",
        "الإعلانات الرقمية وحملات التواصل الاجتماعي",
        "مواد ترويجية مخصصة",
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
            src="/new-services/adver-2.jpg"
            alt="printing"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Advertising;
