import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const { language } = useContext(LanguageContext); // Get current language

  // Define translations inside the component
  const translations = {
    en: {
      services: "Services",
      company: "Company",
      developers: "Developers",
      socialMedia: "Social media",
      features: [
        { name: "Website Design", link: "/services/website-design" },
        { name: "Digital Marketing", link: "/services/digital-marketing" },
        {
          name: "Event and Conference Organization",
          link: "/services/event-conference",
        },
      ],
      companyLinks: ["Privacy", "Terms of Service"],
      developerLinks: ["Public API", "Documentation", "Guides"],
      footerText: "© 2025 Novietaa. All rights reserved.",
    },
    ar: {
      services: "الخدمات",
      company: "الشركة",
      developers: "المطورين",
      socialMedia: "وسائل التواصل الاجتماعي",
      features: [
        { name: "تصميم المواقع", link: "/services/website-design" },
        { name: "التسويق الرقمي", link: "/services/digital-marketing" },
        {
          name: "تنظيم الفعاليات والمؤتمرات",
          link: "/services/event-conference",
        },
      ],
      companyLinks: ["الخصوصية", "شروط الخدمة"],
      developerLinks: ["واجهة برمجة التطبيقات العامة", "الوثائق", "الدلائل"],
      footerText: "© 2025 نوفيا. جميع الحقوق محفوظة.",
    },
  };

  return (
    <footer className="px-4 divide-y bg-[#262626] backdrop-blur-md text-[white] border-t border-white/20 shadow-lg tracking-wider">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a href="#" className="flex items-center justify-start">
            <img src="/logo.png" className="h-10 rounded-lg" alt="" />
            <span className="self-center text-xl font-bold">Novietaa</span>
          </a>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          {[
            translations[language].services,
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
                      <li key={item.name}>
                        <Link to={item.link}>{item.name}</Link>
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
                    <FaLinkedin className="w-6 h-6 hover:text-white" />
                  </Link>
                  <Link to="" title="Facebook" className="p-1">
                    <FaFacebook className="w-6 h-6 hover:text-white" />
                  </Link>
                  <Link to="" title="Twitter" className="p-1">
                    <FaTwitter className="w-6 h-6 hover:text-white" />
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
