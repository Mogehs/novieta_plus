import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext"; // adjust import as needed

const ResponsiveDesign = () => {
  const { language } = useContext(LanguageContext);

  // Define content based on language
  const content = {
    en: {
      title: "Responsive Design",
      description:
        "Responsive web design refers to the process of designing and developing websites that can adapt to different screen sizes and devices, providing an optimal viewing experience for users. At Bit technologies, we specialize in responsive web design and develop websites that provide a seamless user experience across all devices, from desktops to smartphones.",
      items: [
        "Mobile-friendly",
        "Bespoke design",
        "Unlimited revisions",
        "Edit anytime",
      ],
      sectionTitle:
        "What’s included in our web design and development packages?",
    },
    ar: {
      title: "تصميم استجابة",
      description:
        "يشير تصميم الويب المتجاوب إلى عملية تصميم وتطوير مواقع الويب التي يمكن أن تتكيف مع أحجام الشاشات والأجهزة المختلفة، مما يوفر تجربة مشاهدة مثالية للمستخدمين. في تقنيات بيت، نحن متخصصون في تصميم الويب المتجاوب ونطور مواقع الويب التي تقدم تجربة مستخدم سلسة عبر جميع الأجهزة، من أجهزة الكمبيوتر المكتبية إلى الهواتف الذكية.",
      items: [
        "متوافق مع الهاتف المحمول",
        "تصميم حسب الطلب",
        "تعديلات غير محدودة",
        "تحرير في أي وقت",
      ],
      sectionTitle: "ماذا يتضمن حزم تصميم وتطوير الويب لدينا؟",
    },
  };

  const currentContent = language === "en" ? content.en : content.ar;

  return (
    <div className="p-4 light-color w-[98%] mx-auto mt-20 rounded-xl my-10">
      <div className="flex items-center gap-3">
        <img
          src="/services/arrow.svg"
          alt=""
          className="h-16 w-16 sm:h-20 sm:w-20"
        />
        <p className="redText font-bold text-lg sm:text-xl md:text-2xl mt-3">
          {currentContent.title}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
        <div className="w-full md:w-[60%] text-center md:text-left">
          <p className="font-bold text-xl sm:text-2xl md:text-3xl">
            {currentContent.sectionTitle}
          </p>
          <p className="mt-5 text-base sm:text-lg leading-relaxed">
            {currentContent.description}
          </p>

          <ul className="mt-4 pl-5 text-left">
            {currentContent.items.map((item, idx) => (
              <li key={idx} className="mt-2 list-disc text-sm sm:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-[40%] flex justify-center">
          <img
            src="/services/service-preview.webp"
            alt="Service Preview"
            className="w-full max-w-[400px] rounded-xl "
          />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveDesign;
