import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaChevronUp } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";

const Navbar = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const { language, toggleLanguage, translations } =
    useContext(LanguageContext);

  return (
    <nav className="fixed w-full z-50 top-0 backdrop-blur-md bg-[#96193a]/80 border-b border-white/20 shadow-lg">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/logo.png"
            className="w-16 h-16 object-contain"
            alt="logo"
          />
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center space-x-8 font-bold text-lg text-white">
          <Link to="/" className="hover:text-gray-300">
            {translations[language].home}
          </Link>
          <Link to="/about-us" className="hover:text-gray-300">
            {translations[language].about}
          </Link>
          <Link to="/services" className="hover:text-gray-300">
            {translations[language].services}
          </Link>
          <Link to="/contact-us" className="hover:text-gray-300">
            {translations[language].contact}
          </Link>
        </div>

        {/* Language Selector with Dropdown */}
        <div className="relative">
          <button
            type="button"
            className="flex items-center text-white font-medium rounded-lg text-sm px-4 py-2 border border-white/40 hover:border-gray-300 transition-all duration-300"
            onClick={() => setShowLanguages(!showLanguages)}
          >
            {translations[language].language}
            {showLanguages ? (
              <FaChevronUp className="ml-2 text-white" />
            ) : (
              <FaAngleDown className="ml-2 text-white" />
            )}
          </button>

          {showLanguages && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg z-10">
              <button
                onClick={() => toggleLanguage("en")}
                className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100"
              >
                English
              </button>
              <button
                onClick={() => toggleLanguage("ar")}
                className="block w-full text-left px-4 text-black py-2 hover:bg-gray-100"
              >
                Arabic
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
