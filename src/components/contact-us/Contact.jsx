import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp, IoMailSharp } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext"; // Import the language context

const Contact = () => {
  const { language } = useContext(LanguageContext); // Access the language from context

  const contactInfo = {
    en: {
      heading: "Contact Us",
      website: "www.novietaaplus.com",
      email: "novietaa@novietaaplus.com",
      phone: "+974 70809767, +974 70809768",
      address: "Doha – Al Muntazah – Street 830, Building 16",
    },
    ar: {
      heading: "اتصل بنا",
      website: "www.novietaaplus.com",
      email: "novietaa@novietaaplus.com",
      phone: "+974 70809767, +974 70809768",
      address: "الدوحة – المنتزه – شارع 830، مبنى 16",
    },
  };

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-16 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/logo.png"
            alt="Illustration"
            className="w-40 sm:w-48 md:w-56 lg:w-64"
          />
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center md:text-left">
            {contactInfo[language].heading}
          </h2>

          <div className="flex items-center space-x-3">
            <FaGlobe className="text-gray-600 text-lg sm:text-xl" />
            <span className="text-base sm:text-lg font-semibold text-gray-700">
              {contactInfo[language].website}
            </span>
          </div>
          <hr className="border-gray-300" />

          <div className="flex items-center space-x-3">
            <IoMailSharp className="text-gray-600 text-lg sm:text-xl" />
            <span className="text-base sm:text-lg font-semibold text-gray-700">
              {contactInfo[language].email}
            </span>
          </div>
          <hr className="border-gray-300" />

          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-gray-600 text-lg sm:text-xl" />
            <p className="text-base sm:text-lg font-semibold text-gray-700 flex flex-col md:flex-row">
              <span className="text-nowrap">
                {contactInfo[language].phone.split(" & ")[0]}
              </span>
              <span className="text-nowrap">
                {contactInfo[language].phone.split(" & ")[1]}
              </span>
            </p>
          </div>
          <hr className="border-gray-300" />

          <div className="flex items-center space-x-3">
            <IoLocationSharp className="text-gray-600 text-xl sm:text-2xl" />
            <span className="text-base sm:text-lg font-semibold text-gray-700">
              {contactInfo[language].address}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
