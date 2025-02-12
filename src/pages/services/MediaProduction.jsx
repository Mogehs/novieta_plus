import React, { useContext } from "react";
import { motion } from "framer-motion";
import Hero from "../../components/services/Hero";
import ResponsiveDesign from "../ResponsiveDesign";
import { LanguageContext } from "../../context/LanguageContext";

const services = [
  {
    title: {
      en: "Video Production Services",
      ar: "خدمات إنتاج الفيديو",
    },
    description: {
      en: "High-quality video content creation for branding, advertisements, and storytelling.",
      ar: "إنشاء محتوى فيديو عالي الجودة للعلامات التجارية والإعلانات وفن السرد.",
    },
    svg: "/services/stra1.svg",
  },
  {
    title: {
      en: "Commercial Photography",
      ar: "التصوير التجاري",
    },
    description: {
      en: "Professional photography for products, corporate events, and marketing campaigns.",
      ar: "التصوير الفوتوغرافي الاحترافي للمنتجات والفعاليات الشركات والحملات التسويقية.",
    },
    svg: "/services/strab2.svg",
  },
  {
    title: {
      en: "Content Strategy Development",
      ar: "تطوير استراتيجية المحتوى",
    },
    description: {
      en: "Data-driven content planning to enhance brand engagement and audience reach.",
      ar: "تخطيط المحتوى المعتمد على البيانات لتعزيز التفاعل مع العلامة التجارية وزيادة الوصول إلى الجمهور.",
    },
    svg: "/services/strac3.svg",
  },
  {
    title: {
      en: "Brand Identity & Visual Design",
      ar: "هوية العلامة التجارية والتصميم البصري",
    },
    description: {
      en: "Creation of logos, graphics, and branding materials for a strong market presence.",
      ar: "إنشاء الشعارات والرسوم البيانية ومواد العلامة التجارية لوجود قوي في السوق.",
    },
    svg: "/services/strad4.svg",
  },
];

// Card component with added SVG
const Card = ({ title, description, svg }) => {
  const { language } = useContext(LanguageContext); // Assuming you have a LanguageContext

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
        <h3 className="text-xl font-semibold mb-3">
          {language === "en" ? title.en : title.ar}
        </h3>
        <p className="text-sm text-white">
          {language === "en" ? description.en : description.ar}
        </p>
      </div>
      <div className="absolute inset-0 bg-blur opacity-25 glow-effect"></div>
    </motion.div>
  );
};

const MediaProduction = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Hero title="Media Production & Market Strategy" />
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
              ? "Media Production and Marketing Strategy Development"
              : "إنتاج الوسائط وتطوير استراتيجيات التسويق"}
          </h2>
          <p>
            {language === "en"
              ? "We offer professional media production and marketing strategy development to help businesses create impactful content and execute result-driven marketing campaigns. Our media production services include high-quality video production, commercial photography, branding visuals, and content creation that enhance brand presence and engagement. Our marketing strategy development focuses on crafting customized, data-driven plans that align with business goals. From market research and competitor analysis to content planning and digital advertising, we develop strategies that maximize reach, boost conversions, and drive business growth."
              : "نقدم خدمات إنتاج الوسائط الاحترافية وتطوير استراتيجيات التسويق لمساعدة الشركات على إنشاء محتوى مؤثر وتنفيذ حملات تسويقية مدفوعة بالنتائج. تشمل خدمات إنتاج الوسائط لدينا إنتاج الفيديو عالي الجودة، وتصوير الإعلانات التجارية، والمرئيات الخاصة بالعلامة التجارية، وإنشاء المحتوى الذي يعزز وجود العلامة التجارية والتفاعل. يركز تطوير استراتيجيات التسويق لدينا على صياغة خطط مخصصة تعتمد على البيانات التي تتماشى مع أهداف العمل. من البحث في السوق وتحليل المنافسين إلى تخطيط المحتوى والإعلانات الرقمية، نطور استراتيجيات تزيد من الوصول، وتعزز التحويلات، وتدفع نمو الأعمال."}
            <ul className="mt-4 pl-5 text-left">
              {[
                {
                  en: "High-Quality Content Creation",
                  ar: "إنشاء محتوى عالي الجودة",
                },
                {
                  en: "Data-Driven Marketing Strategies",
                  ar: "استراتيجيات تسويق معتمدة على البيانات",
                },
                {
                  en: "Enhanced Brand Visibility",
                  ar: "تعزيز رؤية العلامة التجارية",
                },
                {
                  en: "Optimized Customer Engagement",
                  ar: "تحسين تفاعل العملاء",
                },
                {
                  en: "Increased Business Growth & ROI",
                  ar: "زيادة نمو الأعمال والعائد على الاستثمار",
                },
              ].map((item, idx) => (
                <li key={idx}>{language === "en" ? item.en : item.ar}</li>
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
            src="/services/strategy1.webp"
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
            src="/services/strategy2.webp"
            alt="Website Design"
            className="rounded-lg w-full"
          />
        </motion.div>
        <div className="w-full lg:w-[57%] mb-10">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
            {language === "en"
              ? "Professional Media Production and Marketing Strategy Development Services"
              : "خدمات إنتاج الوسائط الاحترافية وتطوير استراتيجيات التسويق"}
          </h2>
          <p>
            {language === "en"
              ? "We provide expert media production and marketing strategy development services to help businesses create compelling content and execute effective marketing campaigns. Our media production services include high-quality video production, photography, branding visuals, and content creation, ensuring strong brand storytelling and engagement. Our marketing strategy development focuses on data-driven planning, including market research, competitor analysis, content strategy, and digital advertising. We design customized strategies that enhance brand visibility, drive customer engagement, and maximize business growth. With a blend of creativity, strategic insight, and advanced analytics, we help businesses establish a powerful market presence and achieve long-term success."
              : "نقدم خدمات إنتاج الوسائط الاحترافية وتطوير استراتيجيات التسويق لمساعدة الشركات على إنشاء محتوى مؤثر وتنفيذ حملات تسويقية فعالة. تشمل خدمات إنتاج الوسائط لدينا إنتاج الفيديو عالي الجودة، والتصوير الفوتوغرافي، والمرئيات الخاصة بالعلامة التجارية، وإنشاء المحتوى، مما يضمن سرد قوي للعلامة التجارية وتفاعلًا فعالًا. يركز تطوير استراتيجيات التسويق لدينا على التخطيط المعتمد على البيانات، بما في ذلك البحث في السوق، وتحليل المنافسين، واستراتيجية المحتوى، والإعلانات الرقمية. نصمم استراتيجيات مخصصة تعزز رؤية العلامة التجارية، وتحفز تفاعل العملاء، وتعظم نمو الأعمال. من خلال مزيج من الإبداع، والرؤية الاستراتيجية، والتحليلات المتقدمة، نساعد الشركات على إنشاء حضور قوي في السوق وتحقيق النجاح على المدى الطويل."}
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
              ? "Professional Media Production and Marketing Strategy Development"
              : "إنتاج الوسائط الاحترافي وتطوير استراتيجيات التسويق"}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
          <div className="w-full md:w-[60%] text-center md:text-left">
            <p className="font-bold text-xl sm:text-2xl md:text-3xl">
              {language === "en"
                ? "What’s included in our Media Production and Marketing Strategy Development Services and Package?"
                : "ماذا يتضمن عرض خدمات ومنتجات إنتاج الوسائط وتطوير استراتيجيات التسويق لدينا؟"}
            </p>
            <p className="mt-5 text-base sm:text-lg leading-relaxed">
              {language === "en"
                ? "Our media production and marketing strategy development services provide a complete solution for businesses to enhance their brand presence and reach their target audience effectively. We offer high-quality video production, commercial photography, branding visuals, and content creation to ensure compelling storytelling and strong brand identity. Our marketing strategy services include market research, competitor analysis, content planning, digital advertising, and social media strategies to drive engagement and business growth."
                : "تقدم خدمات إنتاج الوسائط وتطوير استراتيجيات التسويق لدينا حلًا كاملًا للأعمال لتعزيز وجود علامتهم التجارية والوصول إلى جمهورهم المستهدف بشكل فعال. نحن نقدم إنتاج فيديو عالي الجودة، والتصوير الفوتوغرافي التجاري، والمرئيات الخاصة بالعلامة التجارية، وإنشاء المحتوى لضمان السرد المقنع والهوية القوية للعلامة التجارية. تشمل خدمات استراتيجيات التسويق لدينا أبحاث السوق، وتحليل المنافسين، وتخطيط المحتوى، والإعلانات الرقمية، واستراتيجيات وسائل التواصل الاجتماعي لتحفيز المشاركة ونمو الأعمال."}
            </p>

            <ul className="mt-4 pl-5 text-left">
              {[
                language === "en"
                  ? "High-Quality Media Production"
                  : "إنتاج الوسائط عالي الجودة",
                language === "en"
                  ? "Data-Driven Marketing Strategies"
                  : "استراتيجيات التسويق المعتمدة على البيانات",
                language === "en"
                  ? "Effective Digital Advertising"
                  : "الإعلانات الرقمية الفعالة",
                language === "en"
                  ? "Social Media & Content Planning"
                  : "التخطيط لوسائل التواصل الاجتماعي والمحتوى",
                language === "en"
                  ? "Comprehensive Brand Development"
                  : "تطوير العلامة التجارية الشامل",
              ].map((item, idx) => (
                <li key={idx} className="mt-2 list-disc text-sm sm:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-[40%] flex justify-center">
            <img
              src="/services/strategy3.avif"
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
            src="/services/strategy4.avif"
            alt="Website Design"
            className="rounded-lg w-full"
          />
        </motion.div>
        <div className="w-full lg:w-[57%] mb-10">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
            {language === "en"
              ? "User Experience After purchasing Our Media Production and Marketing Strategy Development Services"
              : "تجربة العملاء بعد شراء خدمات إنتاج الوسائط وتطوير استراتيجيات التسويق لدينا"}
          </h2>
          <p>
            {language === "en"
              ? "Clients experience a seamless, professional, and results-driven approach to media production and marketing strategy. Our team ensures high-quality content creation, strategic planning, and targeted execution, allowing businesses to enhance brand visibility and connect with their audience effectively. With expertly produced videos, photography, and branding materials, clients receive visually compelling content that strengthens their identity. Our marketing strategies, backed by data and industry insights, help businesses maximize reach, engagement, and conversions."
              : "يختبر العملاء نهجًا سلسًا واحترافيًا مدفوعًا بالنتائج في إنتاج الوسائط واستراتيجيات التسويق. يضمن فريقنا إنشاء محتوى عالي الجودة، والتخطيط الاستراتيجي، والتنفيذ المستهدف، مما يسمح للأعمال التجارية بتحسين رؤية العلامة التجارية والتواصل مع جمهورهم بشكل فعال. مع الفيديوهات عالية الجودة، والتصوير الفوتوغرافي، ومواد العلامة التجارية، يتلقى العملاء محتوى بصريًا جذابًا يعزز هويتهم. تساعد استراتيجياتنا التسويقية، المدعومة بالبيانات والرؤى الصناعية، الأعمال التجارية على زيادة الوصول، والمشاركة، والتحويلات."}
            <h1 className="font-bold">
              {language === "en" ? "Benefits :-" : "الفوائد :-"}
            </h1>
            <ul className="mt-4 pl-5 text-left">
              {[
                language === "en"
                  ? "Engaging & High-Quality Content"
                  : "محتوى جذاب وعالي الجودة",
                language === "en"
                  ? "Strategic Market Positioning"
                  : "تحديد موقع استراتيجي في السوق",
                language === "en"
                  ? "Increased Customer Engagement"
                  : "زيادة التفاعل مع العملاء",
                language === "en"
                  ? "Optimized Business Growth"
                  : "نمو الأعمال المحسن",
                language === "en"
                  ? "Seamless & Professional Execution"
                  : "تنفيذ سلس واحترافي",
              ].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default MediaProduction;
