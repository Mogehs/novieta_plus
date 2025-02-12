import { FaPhoneAlt, FaGlobe } from "react-icons/fa";
import { IoLocationSharp, IoMailSharp } from "react-icons/io5";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Contact = () => {
  const { language } = useContext(LanguageContext);

  const contactInfo = {
    en: {
      heading: "Contact Us",
      website: "www.novietaaplus.com",
      email: "novietaa@novietaaplus.com",
      phone: "+974 70809767 & +974 70809768",
      address: "Doha – Al Muntazah – Street 830, Building 16",
    },
    ar: {
      heading: "اتصل بنا",
      website: "www.novietaaplus.com",
      email: "novietaa@novietaaplus.com",
      phone: "+974 70809767 & +974 70809768",
      address: "الدوحة – المنتزه – شارع 830، مبنى 16",
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800 px-6 py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left Section */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="w-40 sm:w-48 md:w-56 lg:w-64"
          />
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md space-y-6 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center md:text-left">
            {contactInfo[language].heading}
          </h2>

          <div className="space-y-4">
            <ContactItem icon={<FaGlobe />} text={contactInfo[language].website} />
            <ContactItem icon={<IoMailSharp />} text={contactInfo[language].email} />
            <ContactItem icon={<FaPhoneAlt />} text={contactInfo[language].phone} />
            <ContactItem icon={<IoLocationSharp />} text={contactInfo[language].address} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, text }) => (
  <div className="flex items-center space-x-3">
    <span className="text-gray-600 text-xl">{icon}</span>
    <span className="text-base sm:text-lg font-semibold text-gray-700">{text}</span>
  </div>
);

export default Contact;
