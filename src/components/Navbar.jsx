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
      <nav className="bg-[#a99056]">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3">
            <img
              src="/services/feature-min.webp"
              className="w-28 h-12 object-cover"
              alt="Car Logo"
            />
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            {menuOpen ? (
              <FaTimes
                className="text-white text-2xl cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <FaBars
                className="text-white text-2xl cursor-pointer"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center flex-grow">
            <ul className="flex space-x-8 font-bold text-lg text-white">
              <li>
                <Link to="#" className="hover:text-[#96193a]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#96193a]">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#96193a]">
                  Services
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#96193a]">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-[#96193a]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Language Selector for Large Screens (Aligned to the Right) */}
          <div className="hidden md:flex relative">
            <button
              type="button"
              className="flex items-center text-white border border-2xl font-medium rounded-lg text-sm px-4 py-2"
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
              <div className="absolute top-12 right-0 bg-white shadow-md rounded-lg p-2 w-32">
                <p
                  className="cursor-pointer hover:bg-gray-200 p-2"
                  onClick={() => handleLanguageSelect("English")}
                >
                  English
                </p>
                <p
                  className="cursor-pointer hover:bg-gray-200 p-2"
                  onClick={() => handleLanguageSelect("Arbi")}
                >
                  Arbi
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu (Hidden by Default) */}
        {menuOpen && (
          <div className="md:hidden bg-[#a99056] absolute w-[50%] top-16 right-0 p-4 shadow-lg">
            <ul className="flex flex-col space-y-4 font-bold text-lg text-center text-white">
              <li>
                <Link
                  to="#"
                  className="block py-2 px-3 hover:text-[#96193a]"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 px-3 hover:text-[#96193a]"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 px-3 hover:text-[#96193a]"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 px-3 hover:text-[#96193a]"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 px-3 hover:text-[#96193a]"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Language Selector for Mobile */}
            <div className="mt-4">
              <button
                type="button"
                className="w-full flex justify-between items-center text-white border border-2xl focus:ring-4 font-medium rounded-lg text-sm px-4 py-2"
                onClick={() => setShowLanguages(!showLanguages)}
              >
                {selectedLanguage}{" "}
                {showLanguages ? <FaChevronUp /> : <FaAngleDown />}
              </button>
              {showLanguages && (
                <div className="bg-white shadow-md rounded-lg mt-2 p-2">
                  <p
                    className="cursor-pointer hover:bg-gray-200 p-2"
                    onClick={() => handleLanguageSelect("English")}
                  >
                    English
                  </p>
                  <p
                    className="cursor-pointer hover:bg-gray-200 p-2"
                    onClick={() => handleLanguageSelect("Arbi")}
                  >
                    Arbi
                  </p>
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
