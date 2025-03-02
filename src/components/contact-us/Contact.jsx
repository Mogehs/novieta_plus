import React, { useContext } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

const ContactUs = () => {
  const { language } = useContext(LanguageContext);

  const contactDetails = [
    {
      title: { en: "Address", ar: "العنوان" },
      icon: FaMapMarkerAlt,
      info1: {
        en: "Address: Doha - Al Muntazah - Street 830, Building 16",
        ar: "الدوحة – المنتزه – شارع ،830 مبنى 16 ",
      },
      info2: {
        en: "Spring Valley, NY 10977",
        ar: "وادي الربيع، نيويورك 10977",
      },
    },
    {
      title: { en: "Email", ar: "البريد الإلكتروني" },
      icon: FaEnvelope,
      info1: {
        en: " novietaa@novietaaplus.com",
        ar: " novietaa@novietaaplus.com",
      },
    },
    {
      title: { en: "Phone", ar: "الهاتف" },
      icon: FaPhoneAlt,
      info1: { en: "+974 70809767", ar: "70809767 974+" },
      info2: { en: "+974 70809768", ar: "70809768 974+" },
    },
    {
      title: { en: "Working Hours", ar: "ساعات العمل" },
      icon: FaClock,
      info1: {
        en: "Mon – Fri: 9 AM – 11 PM",
        ar: "من الإثنين إلى الجمعة: 9 صباحًا - 11 مساءً",
      },
      info2: {
        en: "Sat – Sun: 9 AM – 5 AM",
        ar: "السبت - الأحد: 9 صباحًا - 5 صباحًا",
      },
    },
  ];

  // Translations for the form section and other labels
  const formLabels = {
    en: {
      title: "Get in Touch",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      sendMessage: "Send Message",
      mapTitle: "Find Us on the Map",
    },
    ar: {
      title: "تواصل معنا",
      name: "اسمك",
      email: "بريدك الإلكتروني",
      message: "رسالتك",
      sendMessage: "إرسال الرسالة",
      mapTitle: "اعثر علينا على الخريطة",
    },
  };

  return (
    <div
      className="container mx-auto px-6 md:px-12 py-12 mt-20"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-12">
        {language === "en" ? "Let Us " : "دعونا "}{" "}
        <span className="text-[#960037]">
          {language === "en" ? "Help You" : "نساعدك"}
        </span>
      </h1>

      {/* Contact Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 text-center px-4 sm:px-6">
        {contactDetails.map((detail, index) => (
          <div
            key={index}
            className="border-2 border-[#960037] shadow-lg rounded-xl p-6 bg-white hover:shadow-2xl transition flex flex-col items-center justify-between h-full min-h-[250px]"
          >
            <detail.icon className="redText text-5xl mb-3" />
            <h2 className="text-xl font-semibold redText">
              {detail.title[language]}
            </h2>
            <p className="text-gray-700">{detail.info1[language]}</p>
            {detail.info2 && (
              <p className="text-gray-700">{detail.info2[language]}</p>
            )}
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="mt-16 bg-white shadow-lg rounded-xl p-8 max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          {formLabels[language].title}
        </h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder={formLabels[language].name}
            className="border p-3 rounded-md w-full focus:ring-2 focus:ring-[#960037] outline-none"
            required
          />
          <input
            type="email"
            placeholder={formLabels[language].email}
            className="border p-3 rounded-md w-full focus:ring-2 focus:ring-[#960037] outline-none"
            required
          />
          <textarea
            rows="5"
            placeholder={formLabels[language].message}
            className="border p-3 rounded-md w-full focus:ring-2 focus:ring-[#960037] outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="red-color text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
          >
            {formLabels[language].sendMessage}
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="mt-16 h-[500px] my-50">
        <h2 className="text-3xl font-semibold text-center textRed mb-6">
          {formLabels[language].mapTitle}
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d14481140.236100959!2d48.99103119502275!3d27.611052757065927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d29.376511999999998!2d71.75208959999999!4m5!1s0x3e45c5039c2200a5%3A0xed769c069bbae1a6!2z2KfZhNiv2YjYrdipIOKAkyDYp9mE2YXZhtiq2LLZhyDigJMg2LTYp9ix2Lkg2Iw4MzAg2YXYqNmG2YkgMTbigK0!3m2!1d25.2670297!2d51.5204622!5e0!3m2!1sen!2s!4v1740070115357!5m2!1sen!2s"
          className="w-full h-full rounded-2xl"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
