import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const { language } = useContext(LanguageContext); // Get current language

  // Define translations inside the component
  const translations = {
    en: {
      product: "Product",
      company: "Company",
      developers: "Developers",
      socialMedia: "Social media",
      features: ["Features", "Integrations", "Pricing", "FAQ"],
      companyLinks: ["Privacy", "Terms of Service"],
      developerLinks: ["Public API", "Documentation", "Guides"],
      footerText: "© 2025 Novietaa. All rights reserved.",
    },
    ar: {
      product: "المنتج",
      company: "الشركة",
      developers: "المطورين",
      socialMedia: "وسائل التواصل الاجتماعي",
      features: ["الميزات", "التكاملات", "الأسعار", "الأسئلة الشائعة"],
      companyLinks: ["الخصوصية", "شروط الخدمة"],
      developerLinks: ["واجهة برمجة التطبيقات العامة", "الوثائق", "الدلائل"],
      footerText: "© 2025 نوفيا. جميع الحقوق محفوظة.",
    },
  };

  return (
    <footer className="px-4 divide-y  bg-[#960037] backdrop-blur-md text-white border-t border-white/20 shadow-lg">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <img src="/logo.png" className="h-10" alt="" />
            <span className="self-center text-xl font-bold">Novietaa</span>
          </a>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          {[
            translations[language].product,
            translations[language].company,
            translations[language].developers,
            translations[language].socialMedia,
          ].map((title, index) => (
            <div className="space-y-3" key={index}>
              <h3 className="tracking-wide uppercase text-md font-bold">
                {title}
              </h3>
              {index !== 3 ? (
                <ul className="space-y-1 font-base">
                  {index === 0 &&
                    translations[language].features.map((item) => (
                      <li key={item}>
                        <Link to="">{item}</Link>
                      </li>
                    ))}
                  {index === 1 &&
                    translations[language].companyLinks.map((item) => (
                      <li key={item}>
                        <Link to="">{item}</Link>
                      </li>
                    ))}
                  {index === 2 &&
                    translations[language].developerLinks.map((item) => (
                      <li key={item}>
                        <Link to="">{item}</Link>
                      </li>
                    ))}
                </ul>
              ) : (
                <div className="flex justify-start space-x-3">
                  <Link to="" title="LinkedIn" className="p-1">
                    <FaLinkedin className="w-6 h-6 hover:text-[#0077b5]" />
                  </Link>
                  <Link to="" title="Facebook" className="p-1">
                    <FaFacebook className="w-6 h-6 hover:text-[#1877F2]" />
                  </Link>
                  <Link to="" title="Twitter" className="p-1">
                    <FaTwitter className="w-6 h-6 hover:text-[#1DA1F2]" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="py-6 text-sm text-center font-semibold">
        {translations[language].footerText}
      </div>
    </footer>
  );
};

export default Footer;
