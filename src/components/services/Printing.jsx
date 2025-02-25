import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function Printing() {
  const { language } = useContext(LanguageContext);

  // Content in English & Arabic
  const content = {
    en: {
      title: "Digital and Offset Printing:",
      description:
        "Novieta Plus offers a wide range of printing services to meet all client needs",
      services: [
        "Indoor and Outdoor Printing",
        "Textile Printing for Various Purposes",
        "Specialized Printing",
      ],
    },
    ar: {
      title: "الطباعة الرقمية والأوفست:",
      description:
        "تقدم نوفيا بلس مجموعة واسعة من خدمات الطباعة لتلبية جميع احتياجات العملاء",
      services: [
        "الطباعة الداخلية والخارجية",
        "طباعة المنسوجات لأغراض مختلفة",
        "الطباعة المتخصصة",
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
            src="/new-services/d-print.jpg"
            alt="printing"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
