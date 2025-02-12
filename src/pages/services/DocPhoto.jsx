import React, { useContext } from "react";
import { motion } from "framer-motion";
import Hero from "../../components/services/Hero";
import ResponsiveDesign from "../ResponsiveDesign";
import { LanguageContext } from "../../context/LanguageContext";

// Define the services
const services = [
  {
    title: { en: "Business Documentation", ar: "توثيق الأعمال" },
    description: {
      en: "Structured and professional documentation for corporate reports, proposals, and records.",
      ar: "توثيق منظم واحترافي للتقارير والتقارير المقترحة والسجلات الخاصة بالشركات.",
    },
    svg: "/services/photo3a.svg",
  },
  {
    title: { en: "Technical Writing Services", ar: "خدمات الكتابة التقنية" },
    description: {
      en: "Clear and precise technical documents, manuals, and guides for businesses.",
      ar: "مستندات تقنية واضحة ودقيقة، وأدلة وكتيبات للأعمال.",
    },
    svg: "/services/photo3bb.svg",
  },
  {
    title: {
      en: "Corporate Event Photography",
      ar: "تصوير الفعاليات الشركاتية",
    },
    description: {
      en: "Capturing high-quality images of business events, conferences, and meetings.",
      ar: "التقاط صور عالية الجودة للفعاليات التجارية والمؤتمرات والاجتماعات.",
    },
    svg: "/services/photo3c.svg",
  },
  {
    title: { en: "Product Photography", ar: "تصوير المنتجات" },
    description: {
      en: "Professional photos that highlight product features for marketing and eCommerce.",
      ar: "صور احترافية تبرز ميزات المنتجات للتسويق والتجارة الإلكترونية.",
    },
    svg: "/services/photo3d.svg",
  },
];

// Card component with added SVG
const Card = ({ title, description, svg }) => {
  const { language } = useContext(LanguageContext);
  return (
    <motion.div
      className="relative w-60 h-72 red-color text-gray-200 rounded-lg shadow-xl overflow-hidden group transition-all duration-500 transform hover:scale-105"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 opacity-40 group-hover:opacity-60 transition-all"></div>
      <div className="relative z-10 p-6">
        <div className="mb-3">
          {/* SVG Icon */}
          <img src={svg} alt="SVG Icon" className="w-12 h-12 mb-3" />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title[language]}</h3>
        <p className="text-sm text-white">{description[language]}</p>
      </div>
      <div className="absolute inset-0 bg-blur opacity-25 glow-effect"></div>
    </motion.div>
  );
};

const DocPhoto = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Hero title=" Documentaion & Photography" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col lg:flex-row gap-10 items-center mb-10"
      >
        <div className="w-full lg:w-[57%] p-4 my-10">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
            {language === "en"
              ? "Documentaion and Photography"
              : "التوثيق والتصوير"}
          </h2>
          <p>
            {language === "en"
              ? "At Novietaa, we provide expert documentation and photography services to capture, preserve, and enhance your business and personal milestones with precision. Our documentation services include business reports, corporate profiles, legal documents, and technical writing—ensuring clarity, accuracy, and professionalism. We help businesses maintain structured records and streamline operations. Our photography services cover corporate events, product shoots, real estate visuals, and professional portraits. Using high-resolution cameras and advanced editing, we deliver stunning visuals that enhance branding and marketing efforts."
              : "في Novietaa، نقدم خدمات التوثيق والتصوير الاحترافية لالتقاط وحفظ وتعزيز إنجازاتك التجارية والشخصية بدقة. تشمل خدمات التوثيق لدينا تقارير الأعمال، الملفات التعريفية للشركات، المستندات القانونية، والكتابة التقنية—مما يضمن الوضوح، الدقة، والاحترافية. نساعد الشركات في الحفاظ على السجلات المنظمة وتبسيط العمليات. تشمل خدمات التصوير لدينا الفعاليات التجارية، تصوير المنتجات، التصوير العقاري، والصور الشخصية الاحترافية. باستخدام كاميرات عالية الدقة وتقنيات تحرير متقدمة، نقدم صورًا مذهلة تعزز العلامة التجارية وجهود التسويق."}

            <ul className="mt-4 pl-5 text-left">
              {[
                { en: "1. High-Quality Content", ar: "١. محتوى عالي الجودة" },
                { en: "2. Tailored Solutions", ar: "٢. حلول مخصصة" },
                { en: "3. Attention to Detail", ar: "٣. الاهتمام بالتفاصيل" },
                {
                  en: "4. Personalized Marketing Strategy",
                  ar: "٤. استراتيجية تسويق مخصصة",
                },
                {
                  en: "5. Fast & Reliable Delivery",
                  ar: "٥. تسليم سريع وموثوق",
                },
              ].map((item, index) => (
                <li key={index}>{language === "en" ? item.en : item.ar}</li>
              ))}
            </ul>
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-[40%]"
        >
          <img
            src="/services/Photo1.avif"
            alt="Website Design"
            className="rounded-lg w-full"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col-reverse lg:flex-row gap-10 items-center px-4 mb-10"
      >
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-[40%]"
        >
          <img
            src="/services/photo2.avif"
            alt="Website Design"
            className="rounded-lg w-full"
          />
        </motion.div>
        <div className="w-full lg:w-[57%] mb-10">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
            {language === "en"
              ? "Professional Documentation and Photography Services"
              : "خدمات التوثيق والتصوير الاحترافية"}
          </h2>
          <p>
            {language === "en"
              ? "We provide expert documentation and photography services, ensuring accuracy, clarity, and creativity in every project. Our documentation services cover business reports, corporate profiles, legal documents, and technical writing, delivering structured and professional content. Our photography services include corporate events, product shoots, real estate visuals, and professional portraits. Using high-resolution photography and expert editing, we create stunning visuals that enhance branding and marketing. With a focus on quality, efficiency, and attention to detail, we ensure every document and image reflects professionalism and excellence. Capture success with precision and creativity!"
              : "نحن نقدم خدمات التوثيق والتصوير الاحترافية، مما يضمن الدقة والوضوح والإبداع في كل مشروع. تشمل خدمات التوثيق لدينا تقارير الأعمال، الملفات التعريفية للشركات، المستندات القانونية، والكتابة التقنية، مع تقديم محتوى منظم واحترافي. تشمل خدمات التصوير لدينا الفعاليات التجارية، تصوير المنتجات، التصوير العقاري، والصور الشخصية الاحترافية. باستخدام التصوير عالي الدقة والتحرير الاحترافي، نقوم بإنشاء صور مذهلة تعزز العلامة التجارية والتسويق. من خلال التركيز على الجودة والكفاءة والاهتمام بالتفاصيل، نضمن أن يعكس كل مستند وصورة الاحترافية والتميز. التقط النجاح بدقة وإبداع!"}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-6 p-6"
      >
        {services.map((service, index) => (
          <Card
            className="bg-amber-400"
            key={index}
            title={service.title}
            description={service.description}
            svg={service.svg} // Pass the SVG path to Card
          />
        ))}
      </motion.div>
      <div className="p-4 light-color w-[98%] mx-auto mt-20 rounded-xl my-10">
        <div className="flex items-center gap-3">
          <img
            src="/services/arrow.svg"
            alt=""
            className="h-16 w-16 sm:h-20 sm:w-20"
          />
          <p className="redText font-bold text-lg sm:text-xl md:text-2xl mt-3">
            {language === "en"
              ? "Professional Documentation and Photography Services"
              : "خدمات التوثيق والتصوير الاحترافية"}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
          <div className="w-full md:w-[60%] text-center md:text-left">
            <p className="font-bold text-xl sm:text-2xl md:text-3xl">
              {language === "en"
                ? "What’s included in our Documentation and Photography Services and Package?"
                : "ما الذي يتضمنه خدمات وحزم التوثيق والتصوير لدينا؟"}
            </p>
            <p className="mt-5 text-base sm:text-lg leading-relaxed">
              {language === "en"
                ? "Our documentation services cover business reports, technical writing, legal documents, and project summaries, ensuring clarity and professionalism. Our photography services include corporate events, product photography, real estate visuals, and professional portraits, delivering high-quality, expertly edited images. Each package is tailored for comprehensive, high-quality results with professional execution and editing."
                : "تشمل خدمات التوثيق لدينا تقارير الأعمال، الكتابة التقنية، المستندات القانونية، وملخصات المشاريع، مما يضمن الوضوح والاحترافية. تشمل خدمات التصوير لدينا الفعاليات التجارية، تصوير المنتجات، التصوير العقاري، والصور الشخصية الاحترافية، مع تقديم صور عالية الجودة ومعدلة باحترافية. يتم تخصيص كل حزمة للحصول على نتائج شاملة وعالية الجودة مع تنفيذ وتحرير احترافي."}
            </p>

            <ul className="mt-4 pl-5 text-left">
              {[
                { en: "Comprehensive Documentation", ar: "توثيق شامل" },
                { en: "High-Quality Photography", ar: "تصوير عالي الجودة" },
                { en: "Expert Editing & Refinement", ar: "تحرير وصقل احترافي" },
                { en: "Tailored Solutions", ar: "حلول مخصصة" },
                { en: "Professional Execution", ar: "تنفيذ احترافي" },
              ].map((item, idx) => (
                <li key={idx} className="mt-2 list-disc text-sm sm:text-base">
                  {language === "en" ? item.en : item.ar}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-[40%] flex justify-center">
            <img
              src="/services/photo4.jpeg"
              alt="Service Preview"
              className="w-full max-w-[400px] rounded-xl "
            />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col-reverse lg:flex-row gap-10 items-center px-4 my-20"
      >
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-[40%]"
        >
          <img
            src="/services/photo5.avif"
            alt="Website Design"
            className="rounded-lg w-full"
          />
        </motion.div>
        <div className="w-full lg:w-[57%] mb-10">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
            {language === "en"
              ? "User Experience After Purchasing Our Documentation and Photography Services"
              : "تجربة المستخدم بعد شراء خدمات التوثيق والتصوير لدينا"}
          </h2>
          <p>
            {language === "en"
              ? "Clients enjoy a seamless, professional experience with clear communication, timely delivery, and high-quality results. Our documentation services provide accurate, well-structured content that enhances business operations and meets industry standards. Our photography services deliver high-resolution, expertly edited images, capturing key moments and boosting brand presence. With a focus on precision, creativity, and client satisfaction, we ensure every project exceeds expectations and adds lasting value."
              : "يستمتع العملاء بتجربة سلسة واحترافية مع تواصل واضح وتسليم في الوقت المحدد ونتائج عالية الجودة. توفر خدمات التوثيق لدينا محتوى دقيقًا ومنظمًا يعزز عمليات الأعمال ويلبي المعايير الصناعية. تقدم خدمات التصوير لدينا صورًا عالية الدقة معدلة باحترافية، تلتقط اللحظات المهمة وتعزز وجود العلامة التجارية. مع التركيز على الدقة والإبداع ورضا العملاء، نضمن أن يتجاوز كل مشروع التوقعات ويضيف قيمة دائمة."}
          </p>
          <h1 className="font-bold">
            {language === "en" ? "Benefits :-" : "الفوائد :-"}
          </h1>
          <ul className="mt-4 pl-5 text-left">
            {[
              {
                en: "Professional & Accurate Content",
                ar: "محتوى احترافي ودقيق",
              },
              { en: "High-Quality Visuals", ar: "مرئيات عالية الجودة" },
              { en: "Time & Effort Savings", ar: "توفير الوقت والجهد" },
              {
                en: "Enhanced Brand Presence",
                ar: "تعزيز وجود العلامة التجارية",
              },
              { en: "Customized Solutions", ar: "حلول مخصصة" },
            ].map((item, idx) => (
              <li key={idx}>{language === "en" ? item.en : item.ar}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default DocPhoto;
