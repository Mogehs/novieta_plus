import { createContext, useState } from "react";

// Create Context
export const LanguageContext = createContext();

// Define Translations
const translations = {
  en: {
    home: "Home",
    about: "About Us",
    services: "Services",
    contact: "Contact Us",
    language: "English",
    welcome: "Welcome to our website!",
  },
  ar: {
    home: "الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    contact: "اتصل بنا",
    language: "Arabic",
    welcome: "مرحبًا بك في موقعنا!",
  },
};

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  // Function to toggle language
  const toggleLanguage = (lang) => {
    // Only change the language if the selected language is different from the current language
    if (language !== lang) {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
