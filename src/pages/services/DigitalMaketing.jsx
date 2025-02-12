import React, { useContext } from "react";
import { motion } from "framer-motion";
import Hero from "../../components/services/Hero";
import { LanguageContext } from "../../context/LanguageContext";

const DigitalMaketing = () => {
  const { language } = useContext(LanguageContext);

  const servicesText = {
    en: {
      seo: "Search Engine Optimization (SEO)",
      seoDescription:
        "Enhances website visibility on search engines to attract organic traffic.",
      smm: "Social Media Marketing (SMM)",
      smmDescription:
        "Promotes brands on social platforms to engage audiences and boost awareness.",
      ppc: "Pay-Per-Click Advertising (PPC)",
      ppcDescription:
        "Runs paid ads on search engines and social media for instant traffic and conversions.",
      contentMarketing: "Content Marketing",
      contentMarketingDescription:
        "Creates valuable content to educate, engage, and convert potential customers.",
      professionalDigitalMarketing: "Professional Digital Marketing Services",
      professionalDescription:
        "In today’s digital age, having a strong online presence is essential for business growth. Professional digital marketing services help businesses reach their target audience, increase brand awareness, and drive sales. With a strategic approach, these services include SEO (Search Engine Optimization), social media marketing, content marketing, PPC (Pay-Per-Click) advertising, and email marketing to ensure a comprehensive online strategy. A well-optimized website, engaging content, and effective ad campaigns can significantly improve visibility and customer engagement. Digital marketing experts analyze market trends, consumer behavior, and competitors to create tailored strategies for maximum impact. Whether it's managing social media accounts, running Google Ads, or improving search rankings, professional marketers ensure businesses stay ahead of the competition. Additionally, data-driven decision-making allows for continuous optimization, ensuring better ROI (Return on Investment). With advanced analytics, businesses can track performance and refine their strategies for sustained growth.",
      whatsIncluded:
        "What’s included in our Digital Marketing Services and Package?",
      whatsIncludedDescription:
        "At novietaa, we provide comprehensive digital marketing solutions to help businesses grow, engage customers, and boost sales. Our expert team uses data-driven strategies to enhance your online presence and ensure maximum ROI. By choosing our digital marketing services, businesses can reach the right audience, increase conversions, and stay ahead of the competition. Our tailored strategies ensure measurable results and long-term success.",
      benefits: [
        "Increased Brand Visibility",
        "Targeted Audience Reach",
        "Higher Conversion Rates",
        "Real-Time Performance Tracking",
        "Stronger Customer Engagement",
      ],
      userExperience:
        "User Digital Marketing Experience After purchasing Our Digital Marketing Services",
      userExperienceDescription:
        "You’ll notice increased website traffic, improved brand engagement, higher conversion rates, and a stronger online presence. With real-time analytics and performance tracking, you’ll always be informed about the success of your campaigns. Our commitment to continuous optimization ensures sustainable growth and long-term success.",
      userExperienceBenefits: [
        "Competitive Edge ",
        "Expert Support & Guidance",
        "Higher Conversion Rates",
        "Personalized Marketing Strategy",
        "Higher ROI & Business Growth",
      ],
    },
    ar: {
      seo: "تحسين محركات البحث (SEO)",
      seoDescription:
        "يعزز ظهور الموقع على محركات البحث لجذب الزيارات العضوية.",
      smm: "التسويق عبر وسائل التواصل الاجتماعي (SMM)",
      smmDescription:
        "يروج للعلامات التجارية على منصات التواصل الاجتماعي لجذب الجمهور وزيادة الوعي.",
      ppc: "الإعلانات المدفوعة لكل نقرة (PPC)",
      ppcDescription:
        "تشغيل إعلانات مدفوعة على محركات البحث ووسائل التواصل الاجتماعي لجذب حركة المرور الفورية وزيادة التحويلات.",
      contentMarketing: "تسويق المحتوى",
      contentMarketingDescription:
        "إنشاء محتوى قيم لتثقيف الجمهور، وجذبهم، وتحويلهم إلى عملاء.",
      professionalDigitalMarketing: "خدمات التسويق الرقمي المهنية",
      professionalDescription:
        "في عصرنا الرقمي، يعد وجود حضور قوي على الإنترنت أمرًا أساسيًا لنمو الأعمال. تساعد خدمات التسويق الرقمي المهنية الشركات على الوصول إلى جمهورها المستهدف وزيادة الوعي بالعلامة التجارية وزيادة المبيعات. تشمل هذه الخدمات، باستخدام نهج استراتيجي، تحسين محركات البحث (SEO)، التسويق عبر وسائل التواصل الاجتماعي، تسويق المحتوى، الإعلانات المدفوعة لكل نقرة (PPC)، والتسويق عبر البريد الإلكتروني لضمان استراتيجية شاملة على الإنترنت. يمكن أن يساعد الموقع المحسن والمحتوى الجذاب والحملات الإعلانية الفعالة في تحسين الرؤية وزيادة التفاعل مع العملاء. يقوم خبراء التسويق الرقمي بتحليل اتجاهات السوق وسلوك المستهلكين والمنافسين لإنشاء استراتيجيات مخصصة لتحقيق أقصى تأثير. سواء كان الأمر يتعلق بإدارة حسابات الوسائط الاجتماعية أو تشغيل إعلانات Google أو تحسين تصنيفات البحث، يضمن المسوقون المحترفون أن تظل الشركات في صدارة المنافسة. بالإضافة إلى ذلك، يسمح اتخاذ قرارات مدفوعة بالبيانات بتحقيق التحسين المستمر وضمان عائد استثمار (ROI) أفضل. مع التحليلات المتقدمة، يمكن للشركات تتبع الأداء وتحسين استراتيجياتها للنمو المستدام.",
      whatsIncluded: "ما الذي يتضمنه خدمات وحزمة التسويق الرقمي لدينا؟",
      whatsIncludedDescription:
        "في نوفيتا، نقدم حلول التسويق الرقمي الشاملة لمساعدة الشركات على النمو، وجذب العملاء، وزيادة المبيعات. يستخدم فريقنا الخبير استراتيجيات معتمدة على البيانات لتعزيز وجودك على الإنترنت وضمان أقصى عائد استثمار. من خلال اختيار خدمات التسويق الرقمي الخاصة بنا، يمكن للشركات الوصول إلى الجمهور المناسب، وزيادة التحويلات، والبقاء في صدارة المنافسة. تضمن استراتيجياتنا المخصصة نتائج قابلة للقياس ونجاح طويل الأمد.",
      benefits: [
        "زيادة رؤية العلامة التجارية",
        "الوصول إلى الجمهور المستهدف",
        "معدلات تحويل أعلى",
        "تتبع الأداء في الوقت الفعلي",
        "تعزيز التفاعل مع العملاء",
      ],
      userExperience:
        "تجربة المستخدم في التسويق الرقمي بعد شراء خدمات التسويق الرقمي لدينا",
      userExperienceDescription:
        "ستلاحظ زيادة في حركة المرور على الموقع، وتحسن في التفاعل مع العلامة التجارية، ومعدلات تحويل أعلى، وحضور أقوى على الإنترنت. مع التحليلات في الوقت الفعلي وتتبع الأداء، ستكون دائمًا على اطلاع بنجاح حملاتك. يضمن التزامنا بالتحسين المستمر نموًا مستدامًا ونجاحًا طويل الأمد.",
      userExperienceBenefits: [
        "ميزة تنافسية",
        "دعم وإرشادات الخبراء",
        "معدلات تحويل أعلى",
        "استراتيجية تسويقية مخصصة",
        "عائد أعلى على الاستثمار ونمو الأعمال",
      ],
    },
  };

  const services = [
    {
      title: servicesText[language].seo,
      description: servicesText[language].seoDescription,
      svg: "/services/DigiCard1.svg",
    },
    {
      title: servicesText[language].smm,

      description: servicesText[language].smmDescription,

      svg: "/services/DigiCard2.svg",
    },
    {
      title: servicesText[language].ppc,

      description: servicesText[language].ppcDescription,

      svg: "/services/DigiCard3.svg",
    },
    {
      title: servicesText[language].contentMarketing,

      description: servicesText[language].contentMarketingDescription,

      svg: "/services/DigiCard4.svg",
    },
  ];

  // Card component with added SVG
  const Card = ({ title, description, svg }) => {
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
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-sm text-white">{description}</p>
        </div>
        <div className="absolute inset-0 bg-blur opacity-25 glow-effect"></div>
      </motion.div>
    );
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Hero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col lg:flex-row gap-10 items-center mb-10"
      >
        <div className="w-full lg:w-[57%] p-4 my-10">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
            {language === "en" ? "Digital Marketing" : "التسويق الرقمي"}
          </h2>
          <p>
            {language === "en"
              ? servicesText[language].professionalDescription
              : servicesText[language].professionalDescription}
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-[40%]"
        >
          <img
            src="/services/Digi_1.avif"
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
            src="/services/Digi2.jpg"
            alt="Website Design"
            className="rounded-lg w-full"
          />
        </motion.div>
        <div className="w-full lg:w-[57%] mb-10">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
            {language === "en"
              ? servicesText[language].whatsIncluded
              : servicesText[language].whatsIncluded}
          </h2>
          <p>
            {language === "en"
              ? servicesText[language].whatsIncludedDescription
              : servicesText[language].whatsIncludedDescription}
          </p>
          <ul className="mt-4 pl-5 text-left">
            {(language === "en"
              ? servicesText[language].benefits
              : servicesText[language].benefits
            ).map((item, idx) => (
              <li key={idx} className="mt-2 list-disc text-sm sm:text-base">
                {item}
              </li>
            ))}
          </ul>
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
              ? "Professional Marketing Services"
              : "خدمات التسويق المهنية"}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
          <div className="w-full md:w-[60%] text-center md:text-left">
            <p className="font-bold text-xl sm:text-2xl md:text-3xl">
              {language === "en"
                ? servicesText[language].userExperience
                : servicesText[language].userExperience}
            </p>
            <p className="mt-5 text-base sm:text-lg leading-relaxed">
              {language === "en"
                ? servicesText[language].userExperienceDescription
                : servicesText[language].userExperienceDescription}
            </p>

            <ul className="mt-4 pl-5 text-left">
              {(language === "en"
                ? servicesText[language].userExperienceBenefits
                : servicesText[language].userExperienceBenefits
              ).map((item, idx) => (
                <li key={idx} className="mt-2 list-disc text-sm sm:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-[40%] flex justify-center">
            <img
              src="/services/Digi4.webp"
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
            src="/services/Digi3.avif"
            alt="Website Design"
            className="rounded-lg w-full"
          />
        </motion.div>
        <div className="w-full lg:w-[57%] mb-10">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
            {language === "en"
              ? "User Digital Marketing Experience After purchasing Our Digital Marketing Services"
              : "تجربة التسويق الرقمي للمستخدم بعد شراء خدمات التسويق الرقمي لدينا"}
          </h2>
          <p>
            {language === "en"
              ? "You’ll notice increased website traffic, improved brand engagement, higher conversion rates, and a stronger online presence. With real-time analytics and performance tracking, you’ll always be informed about the success of your campaigns. Our commitment to continuous optimization ensures sustainable growth and long-term success."
              : "ستلاحظ زيادة في حركة مرور الموقع، وتحسين التفاعل مع العلامة التجارية، وزيادة معدلات التحويل، ووجود أقوى على الإنترنت. مع تحليلات حية وتتبع الأداء، ستكون دائمًا على اطلاع حول نجاح حملاتك. التزامنا بالتحسين المستمر يضمن نموًا مستدامًا ونجاحًا طويل الأمد."}
            <h1 className="font-bold">
              {language === "en" ? "Benefits :-" : "الفوائد :-"}
            </h1>
            <ul className="mt-4 pl-5 text-left">
              {[
                language === "en" ? "Competitive Edge" : "ميزة تنافسية",
                language === "en"
                  ? "Expert Support & Guidance"
                  : "الدعم والإرشاد من الخبراء",
                language === "en"
                  ? "Higher Conversion Rates"
                  : "معدلات تحويل أعلى",
                language === "en"
                  ? "Personalized Marketing Strategy"
                  : "استراتيجية تسويق مخصصة",
                language === "en"
                  ? "Higher ROI & Business Growth"
                  : "عائد استثمار أعلى ونمو الأعمال",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default DigitalMaketing;
