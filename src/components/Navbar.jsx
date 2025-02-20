import { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, translations } =
    useContext(LanguageContext);
  const menuRef = useRef(null);
  const languageRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
    if (languageRef.current && !languageRef.current.contains(event.target)) {
      setShowLanguages(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed w-full z-50 top-0 backdrop-blur-md bg-[#262626] border-b border-white/20 shadow-lg transition-all duration-300 ease-in-out">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/logo.png"
            className="w-16 h-16 object-contain"
            alt="logo"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-bold text-lg text-white">
          <Link
            to="/"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            {translations[language].home}
          </Link>
          <Link
            to="/about-us"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            {translations[language].about}
          </Link>
          <Link
            to="/our-services"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            {translations[language].services}
          </Link>
          <Link
            to="/contact-us"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            {translations[language].contact}
          </Link>
        </div>

        {/* Language Selector (Desktop) */}
        <div className="hidden md:block relative" ref={languageRef}>
          <button
            type="button"
            className="flex items-center font-medium rounded-lg text-sm px-4 py-2 border border-white/40 hover:border-gray-300 transition-all duration-300 text-white"
            onClick={() => setShowLanguages(!showLanguages)}
          >
            {translations[language].language}
            {showLanguages ? (
              <FaChevronUp className="ml-2 text-white" />
            ) : (
              <FaAngleDown className="ml-2 text-white" />
            )}
          </button>

          <AnimatePresence>
            {showLanguages && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg z-10 transition-all duration-300 ease-in-out"
              >
                <button
                  onClick={() => {
                    toggleLanguage("en");
                    setShowLanguages(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100 hover:rounded-lg transition-colors duration-300"
                >
                  English
                </button>
                <button
                  onClick={() => {
                    toggleLanguage("ar");
                    setShowLanguages(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100 hover:rounded-lg transition-colors duration-300"
                >
                  Arabic
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          style={{ color: "#A89055" }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="md:hidden black-color h-[50vh] w-[20rem] transition-all ease-in-out duration-300 flex flex-col justify-center items-center  space-y-3 absolute z-10 right-0 text-white"
          >
            <Link
              to="/"
              className="hover:text-gray-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {translations[language].home}
            </Link>
            <Link
              to="/about-us"
              className="hover:text-gray-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {translations[language].about}
            </Link>
            <Link
              to="/our-services"
              className="hover:text-gray-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {translations[language].services}
            </Link>
            <Link
              to="/contact-us"
              className="hover:text-gray-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {translations[language].contact}
            </Link>

            {/* Language Selector (Mobile) */}
            <div className="relative">
              <button
                type="button"
                className="flex items-center font-medium rounded-lg text-sm px-4 py-2 border border-white/40 hover:border-gray-300 transition-all duration-300"
                style={{ color: "#A89055" }}
                onClick={() => setShowLanguages(!showLanguages)}
              >
                {translations[language].language}
                {showLanguages ? (
                  <FaChevronUp className="ml-2" style={{ color: "#A89055" }} />
                ) : (
                  <FaAngleDown className="ml-2" style={{ color: "#A89055" }} />
                )}
              </button>

              <AnimatePresence>
                {showLanguages && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg z-10 transition-all duration-300 ease-in-out"
                  >
                    <button
                      onClick={() => {
                        toggleLanguage("en");
                        setShowLanguages(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100 hover:rounded-lg transition-colors duration-300"
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        toggleLanguage("ar");
                        setShowLanguages(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100 hover:rounded-lg transition-colors duration-300"
                    >
                      Arabic
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
