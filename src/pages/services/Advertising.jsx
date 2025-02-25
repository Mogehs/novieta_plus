import React, { useContext } from "react";

import { motion } from "framer-motion";
import { LanguageContext } from "../../context/LanguageContext";
import Hero from "../../components/Hero";

const Advertising = () => {
  const { language } = useContext(LanguageContext);
  const servicesText = {
    en: {
      mediaAdvertising: "Media Advertising",
      mediaAdvertisingDescription:
        "Maximize your brand’s reach through strategic advertising across digital, print, and broadcast media channels.",
      digitalMarketing: "Digital Marketing",
      digitalMarketingDescription:
        "Engage your audience through targeted online campaigns, including social media, search engine marketing, and display ads.",
      outdoorAdvertising: "Outdoor Advertising",
      outdoorAdvertisingDescription:
        "Increase brand visibility with billboards, transit ads, and outdoor displays placed in high-traffic areas.",
      tvRadioAdvertising: "TV & Radio Advertising",
      tvRadioAdvertisingDescription:
        "Leverage the power of television and radio to create impactful advertisements that capture audience attention.",
      professionalAdvertisingServices: "Professional Advertising Services",
      professionalDescription:
        "In a fast-paced and competitive market, strategic advertising is key to brand recognition and customer engagement. Our professional advertising services provide businesses with tailored solutions across digital, print, TV, radio, and outdoor media to effectively reach their target audience. Whether you need social media campaigns, Google Ads, billboards, or broadcast advertising, we ensure high-impact marketing that drives results. From creative ad design to audience targeting and campaign execution, we help brands maximize exposure, generate leads, and boost conversions.",
      whatsIncluded: "What’s Included in Our Advertising Services?",
      whatsIncludedDescription:
        "At Novietaa, we provide end-to-end advertising solutions that align with your brand’s goals. Our services include social media marketing, SEO, pay-per-click (PPC) campaigns, outdoor billboards, and TV & radio commercials. We tailor every campaign to maximize engagement and ensure optimal return on investment.",
      benefits: [
        "Multi-Channel Advertising Strategies",
        "Data-Driven Targeting & Optimization",
        "Creative Ad Development & Branding",
        "High ROI with Measurable Results",
        "Custom Campaigns for Every Business",
      ],
      userExperience: "User Experience After Choosing Our Advertising Services",
      userExperienceDescription:
        "Expect a seamless advertising experience with expert campaign management, detailed analytics, and creative strategies tailored to your brand. Our team ensures maximum reach, audience engagement, and conversion-driven marketing that enhances your brand’s visibility and impact.",
      userExperienceBenefits: [
        "Enhanced Brand Awareness",
        "Targeted Audience Engagement",
        "Expert Consultation & Strategy",
        "Data-Driven Campaign Performance",
        "Scalable & Cost-Effective Solutions",
      ],
    },
    ar: {
      mediaAdvertising: "الإعلان عبر وسائل الإعلام",
      mediaAdvertisingDescription:
        "قم بتوسيع نطاق علامتك التجارية من خلال الإعلانات الإستراتيجية عبر القنوات الرقمية والمطبوعة والمسموعة والمرئية.",
      digitalMarketing: "التسويق الرقمي",
      digitalMarketingDescription:
        "تفاعل مع جمهورك عبر حملات إعلانية مستهدفة عبر الإنترنت، بما في ذلك وسائل التواصل الاجتماعي وإعلانات البحث والعروض الإعلانية.",
      outdoorAdvertising: "الإعلان الخارجي",
      outdoorAdvertisingDescription:
        "زيادة الوعي بالعلامة التجارية من خلال اللوحات الإعلانية والإعلانات على وسائل النقل والعروض الخارجية في المناطق ذات الكثافة المرورية العالية.",
      tvRadioAdvertising: "الإعلان عبر التلفزيون والراديو",
      tvRadioAdvertisingDescription:
        "استفد من قوة التلفزيون والراديو لإنشاء إعلانات مؤثرة تجذب انتباه الجمهور.",
      professionalAdvertisingServices: "خدمات الإعلان الاحترافية",
      professionalDescription:
        "في سوق تنافسي وسريع التغير، يمثل الإعلان الاستراتيجي عنصرًا أساسيًا في التعريف بالعلامة التجارية والتفاعل مع العملاء. توفر خدماتنا الإعلانية الاحترافية حلولًا مخصصة عبر القنوات الرقمية والمطبوعة والتلفزيونية والراديو والإعلانات الخارجية لضمان الوصول الفعّال إلى الجمهور المستهدف. سواء كنت بحاجة إلى حملات وسائل التواصل الاجتماعي، إعلانات Google، لوحات إعلانية، أو إعلانات بث إذاعية وتلفزيونية، فإننا نقدم تسويقًا عالي التأثير يعزز النتائج. من تصميم الإعلانات الإبداعي إلى استهداف الجمهور وتنفيذ الحملات، نساعد العلامات التجارية على تحقيق أقصى درجات الانتشار وزيادة العملاء وتحقيق أعلى معدلات التحويل.",
      whatsIncluded: "ما الذي تتضمنه خدمات الإعلان لدينا؟",
      whatsIncludedDescription:
        "في نوفيتا، نقدم حلول إعلانية شاملة تتماشى مع أهداف علامتك التجارية. تشمل خدماتنا التسويق عبر وسائل التواصل الاجتماعي، تحسين محركات البحث (SEO)، الحملات المدفوعة (PPC)، الإعلانات الخارجية، والإعلانات التلفزيونية والإذاعية. نقوم بتخصيص كل حملة لضمان التفاعل الأمثل وتحقيق أعلى عائد استثماري.",
      benefits: [
        "استراتيجيات إعلان متعددة القنوات",
        "تحليل البيانات للاستهداف الأمثل",
        "تصميم إعلانات إبداعي يعزز العلامة التجارية",
        "نتائج قابلة للقياس لتحقيق عائد استثماري عالي",
        "حملات مخصصة لكل نوع من الأعمال",
      ],
      userExperience: "تجربة العملاء بعد اختيار خدمات الإعلان لدينا",
      userExperienceDescription:
        "احصل على تجربة إعلانية سلسة مع إدارة حملات احترافية، تحليلات مفصلة، واستراتيجيات إبداعية مصممة لعلامتك التجارية. يضمن فريقنا تحقيق أقصى درجات الانتشار، وزيادة التفاعل مع الجمهور، وتحقيق نتائج تسويقية متميزة.",
      userExperienceBenefits: [
        "زيادة الوعي بالعلامة التجارية",
        "استهداف فعال للجمهور المناسب",
        "استشارات واستراتيجيات إعلانية من الخبراء",
        "تحليلات أداء الحملات لتعظيم النتائج",
        "حلول إعلانية مرنة وفعّالة من حيث التكلفة",
      ],
    },
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
            {servicesText[language].mediaAdvertising}
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
            src="/new-services/adver-2.jpg"
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
            src="/new-services/adver-3.jpg"
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
      ></motion.div>
      <div className="p-4 light-color w-[98%] mx-auto mt-20 rounded-xl my-10">
        <div className="flex items-center gap-3">
          <img
            src="/services/arrow.svg"
            alt=""
            className="h-16 w-16 sm:h-20 sm:w-20"
          />
          <p className="redText font-bold text-lg sm:text-xl md:text-2xl mt-3">
            {servicesText[language].mediaAdvertising}
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
              src="/new-services/adver.jpg"
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
      ></motion.div>
    </div>
  );
};

export default Advertising;
