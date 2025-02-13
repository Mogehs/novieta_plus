import React, { useContext } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

const ContactUs = () => {
  const { language } = useContext(LanguageContext);

  const contactDetails = [
    {
      title: { en: "Address", ar: "العنوان" },
      icon: FaMapMarkerAlt,
      info1: { en: "640 Chestnut Ridge Road", ar: "640 شارع شستنت ريدج" },
      info2: { en: "Spring Valley, NY 10977", ar: "وادي الربيع، نيويورك 10977" },
    },
    {
      title: { en: "Email", ar: "البريد الإلكتروني" },
      icon: FaEnvelope,
      info1: { en: "Contact@carlyrent.com", ar: "Contact@carlyrent.com" },
      info2: { en: "Support@carlyrent.com", ar: "دعم@carlyrent.com" },
    },
    {
      title: { en: "Phone", ar: "الهاتف" },
      icon: FaPhoneAlt,
      info1: { en: "+(62) 800-567-8990", ar: "+(62) 800-567-8990" },
      info2: { en: "+(62) 800-567-8990", ar: "+(62) 800-567-8990" },
    },
    {
      title: { en: "Working Hours", ar: "ساعات العمل" },
      icon: FaClock,
      info1: { en: "Mon – Fri: 9 AM – 11 PM", ar: "من الإثنين إلى الجمعة: 9 صباحًا - 11 مساءً" },
      info2: { en: "Sat – Sun: 9 AM – 5 AM", ar: "السبت - الأحد: 9 صباحًا - 5 صباحًا" },
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
    <div className="container mx-auto px-6 md:px-12 py-12 mt-20" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-12">
        {language === "en" ? "Let Us " : "دعونا "} <span className="text-[#960037]">{language === "en" ? "Help You" : "نساعدك"}</span>
      </h1>

      {/* Contact Options */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {contactDetails.map((detail, index) => (
          <div
            key={index}
            className="border-2 border-[#960037] shadow-lg rounded-xl p-6 bg-white hover:shadow-2xl transition"
          >
            <detail.icon className="redText text-5xl mx-auto mb-3" />
            <h2 className="text-xl font-semibold redText">{detail.title[language]}</h2>
            <p className="text-gray-700">{detail.info1[language]}</p>
            {detail.info2 && <p className="text-gray-700">{detail.info2[language]}</p>}
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
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-center textRed mb-6">
          {formLabels[language].mapTitle}
        </h2>
        <iframe
          className="w-full h-80 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094096!2d144.95373531531577!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e0a2720a567!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633970294483!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
