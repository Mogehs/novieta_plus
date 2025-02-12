import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setShowLanguages(false);
  };

  return (
    <>
      <nav className="fixed w-full z-50 top-0 backdrop-blur-md bg-[#96193a]/80 border-b border-white/20 shadow-lg">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 ">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logo.png"
              className="w-16 h-16 object-contain"
              alt="logo"
            />
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            {menuOpen ? (
              <FaTimes
                className="text-white text-2xl cursor-pointer hover:text-gray-400 transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <FaBars
                className="text-white text-2xl cursor-pointer hover:text-gray-400 transition-all duration-300"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center flex-grow">
            <ul className="flex space-x-8 font-bold text-lg text-white">
              {["Home", "About", "Services", "Contact"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={
                      (index === 0 && "/") ||
                      (index === 1 && "/about-us") ||
                      (index === 2 && "/services") ||
                      (index === 3 && "/contact-us")
                    }
                    className="hover:text-gray-300 transition-all duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Language Selector */}
          <div className="hidden md:flex relative">
            <button
              type="button"
              className="flex items-center text-white font-medium rounded-lg text-sm px-4 py-2 border border-white/40 hover:border-gray-300 transition-all duration-300"
              onClick={() => setShowLanguages(!showLanguages)}
            >
              {selectedLanguage}{" "}
              {showLanguages ? (
                <FaChevronUp className="ml-3" />
              ) : (
                <FaAngleDown className="ml-3" />
              )}
            </button>
            {showLanguages && (
              <div className="absolute top-12 right-0 bg-white/20 backdrop-blur-md shadow-lg rounded-lg p-2 w-32">
                {["English", "Arabic"].map((lang) => (
                  <p
                    key={lang}
                    className="cursor-pointer redText hover:bg-gray-300/30 p-2 rounded transition-all duration-300"
                    onClick={() => handleLanguageSelect(lang)}
                  >
                    {lang}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#96193a]/90 backdrop-blur-md absolute w-[60%] top-16 right-0 p-4 shadow-lg rounded-lg">
            <ul className="flex flex-col space-y-4 font-bold text-lg text-center text-white">
              {["Home", "About", "Services", "Contact"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={
                      (index === 0 && "/") ||
                      (index === 1 && "/about-us") ||
                      (index === 2 && "/services") ||
                      (index === 3 && "/contact-us")
                    }
                    className="block py-2 px-3 hover:text-gray-300 transition-all duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Selector for Mobile */}
            <div className="mt-4">
              <button
                type="button"
                className="w-full flex justify-between items-center text-white font-medium rounded-lg text-sm px-4 py-2 border border-white/40 hover:border-gray-300 transition-all duration-300"
                onClick={() => setShowLanguages(!showLanguages)}
              >
                {selectedLanguage}{" "}
                {showLanguages ? <FaChevronUp /> : <FaAngleDown />}
              </button>
              {showLanguages && (
                <div className="bg-white/20 backdrop-blur-md shadow-lg rounded-lg mt-2 p-2">
                  {["English", "Arbi"].map((lang) => (
                    <p
                      key={lang}
                      className="cursor-pointer text-white hover:bg-gray-300/30 p-2 rounded transition-all duration-300"
                      onClick={() => handleLanguageSelect(lang)}
                    >
                      {lang}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
