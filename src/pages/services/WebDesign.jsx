import React, { useContext } from "react";
import { motion } from "framer-motion";
import Hero from "../../components/services/Hero";
import ResponsiveDesign from "../ResponsiveDesign";
import { LanguageContext } from "../../context/LanguageContext"; // Assuming you have a LanguageContext to manage language

const services = [
  {
    title: { en: "Make Strategy", ar: "وضع الاستراتيجية" },
    description: {
      en: "We work with you to create a tailored strategy to drive results and meet your business goals.",
      ar: "نعمل معك لإنشاء استراتيجية مخصصة لتحقيق النتائج وتحقيق أهداف عملك.",
    },
    svg: "/services/development-idea-svgrepo-com.svg",
  },
  {
    title: { en: "Web Design", ar: "تصميم المواقع" },
    description: {
      en: "Our design team ensures your website is visually appealing, user-friendly, and responsive across devices.",
      ar: "يضمن فريق التصميم لدينا أن يكون موقعك جذابًا بصريًا وسهل الاستخدام ومتوافقًا عبر الأجهزة.",
    },
    svg: "/services/design-svgrepo-com.svg",
  },
  {
    title: { en: "Web Testing", ar: "اختبار المواقع" },
    description: {
      en: "We thoroughly test your website to ensure it functions smoothly and provides the best user experience.",
      ar: "نختبر موقعك بدقة لضمان عمله بسلاسة وتوفير أفضل تجربة للمستخدم.",
    },
    svg: "/services/optimization-svgrepo-com.svg",
  },
  {
    title: { en: "Web Live", ar: "إطلاق الموقع" },
    description: {
      en: "We take your website live with seamless deployment, ensuring it performs perfectly for your audience.",
      ar: "نقوم بإطلاق موقعك الإلكتروني بسلاسة مع ضمان أدائه المثالي لجمهورك.",
    },
    svg: "/services/rocket-2-svgrepo-com.svg",
  },
];

const Card = ({ title, description, svg }) => {
  const { language } = useContext(LanguageContext); // Get current language from context

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

const WebDesign = () => {
  const { language } = useContext(LanguageContext); // Get current language from context

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Hero title={language === "en" ? "Web Design" : "تصميم المواقع"} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col lg:flex-row gap-10 items-center mb-10"
      >
        <div className="w-full lg:w-[57%] p-4 my-10">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
            {language === "en" ? "Web Design" : "تصميم المواقع"}
          </h2>
          <p>
            {language === "en"
              ? "At Novietaa, we take pride in being a trusted web design company in Qatar, recognized by industry leaders like Clutch, GoodFirms, G2, Design Rush, and more. Our mission is to deliver effective website design and development solutions that not only attract traffic but also engage visitors and generate valuable leads. We offer comprehensive services, including responsive design, 12 months of free technical support, seamless social media integration, live chat functionality, secure payment gateways, and basic SEO optimization. Our websites are optimized for fast page speeds, with robust analytics and reliable hosting, making it easy for businesses to manage their content through an intuitive admin panel. We serve various industries, including real estate, restaurants, healthcare, e-commerce, education, and travel, as well as marketing agencies, architecture firms, online stores, and more. If you're looking for a professional web design company in Qatar, Novietaa is here to bring your vision to life with cutting-edge web solutions."
              : "في نوفيا، نحن فخورون بكوننا شركة تصميم مواقع موثوقة في قطر، ومعترف بها من قبل رواد الصناعة مثل Clutch وGoodFirms وG2 وDesign Rush وغيرها. مهمتنا هي تقديم حلول تصميم وتطوير المواقع الفعالة التي لا تجذب الزيارات فقط، بل تشرك الزوار وتولد عملاء محتملين ذوي قيمة. نحن نقدم خدمات شاملة تشمل التصميم المتجاوب، ودعم فني مجاني لمدة 12 شهرًا، وتكامل وسائل التواصل الاجتماعي السلس، ووظائف الدردشة الحية، وبوابات الدفع الآمنة، وتحسين SEO الأساسي. مواقعنا محسنّة لسرعات تحميل سريعة، مع تحليلات قوية واستضافة موثوقة، مما يجعل من السهل على الشركات إدارة محتوياتها من خلال لوحة إدارة بديهية. نحن نخدم العديد من الصناعات بما في ذلك العقارات، والمطاعم، والرعاية الصحية، والتجارة الإلكترونية، والتعليم، والسفر، وكذلك الوكالات التسويقية، والشركات المعمارية، والمتاجر الإلكترونية والمزيد. إذا كنت تبحث عن شركة تصميم مواقع محترفة في قطر، فإن نوفيا هنا لتحقيق رؤيتك بحلول ويب متطورة."}
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-[40%]"
        >
          <img
            src="/services/website.jpg"
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
            src="/services/web-design.png"
            alt="Website Design"
            className="rounded-lg w-full"
          />
        </motion.div>
        <div className="w-full lg:w-[57%] mb-10">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
            {language === "en"
              ? "Professional Web Services"
              : "خدمات الويب المهنية"}
          </h2>
          <p>
            {language === "en"
              ? "Our professional web design services at Novietaa are driven by a dedicated team of experts, including web designers, user experience (UX) specialists, web developers, website optimization experts, content writers, and web graphic designers. Novietaa specializes in custom web design and development solutions that stay at the cutting edge of technology and programming languages. We are committed to building long-term relationships with our clients and never rely on templates or off-the-shelf solutions. Instead, we stay focused on nurturing creativity and innovation. Our goal is to make your website stand out from the competition and capture your target audience's attention. Novietaa ensures that your website is not only clean and easy to navigate but also aligns with the latest design trends, making us your top choice for web development services in Qatar."
              : "خدمات تصميم المواقع المهنية لدينا في نوفيا مدفوعة بفريق من الخبراء المكرسين، بما في ذلك مصممي الويب، والمتخصصين في تجربة المستخدم (UX)، ومطوري الويب، وخبراء تحسين المواقع، وكتّاب المحتوى، ومصممي الجرافيك للويب. نوفيا متخصصة في تصميم وتطوير مواقع الإنترنت المخصصة التي تظل في طليعة التكنولوجيا ولغات البرمجة. نحن ملتزمون ببناء علاقات طويلة الأمد مع عملائنا ولا نعتمد أبدًا على القوالب أو الحلول الجاهزة. بدلاً من ذلك، نحن نركز على رعاية الإبداع والابتكار. هدفنا هو جعل موقعك يبرز بين المنافسين ويجذب انتباه جمهورك المستهدف. تضمن نوفيا أن موقعك ليس فقط نظيفًا وسهل التصفح، ولكن أيضًا يتماشى مع أحدث الاتجاهات في التصميم، مما يجعلنا خيارك الأفضل لخدمات تطوير الويب في قطر."}
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
            key={index}
            title={service.title}
            description={service.description}
            svg={service.svg}
          />
        ))}
      </motion.div>
      <ResponsiveDesign />
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
            src="/services/vector.png"
            alt="Website Design"
            className="rounded-lg w-full"
          />
        </motion.div>
        <div className="w-full lg:w-[57%] mb-10">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
            {language === "en"
              ? "Customized Web Design and Optimal User Experience"
              : "تصميم مواقع مخصص وتجربة مستخدم مثالية"}
          </h2>
          <p>
            {language === "en"
              ? "Customized web design involves creating a unique website design that effectively represents a brand’s identity and values, while providing an optimal user experience for visitors. This includes designing layouts, graphics, and user interfaces that reflect the brand’s personality and message, and developing websites with intuitive navigation and functionality. At Novietta, we specialize in customized web design and are dedicated to delivering high-quality, user-friendly websites that exceed our clients’ expectations."
              : "يشمل تصميم المواقع المخصص إنشاء تصميم موقع فريد يعكس هوية وقيم العلامة التجارية بفعالية، مع توفير تجربة مستخدم مثالية للزوار. يشمل ذلك تصميم التخطيطات والرسومات وواجهات المستخدم التي تعكس شخصية الرسالة الخاصة بالعلامة التجارية، وتطوير مواقع الويب مع التنقل البديهي والوظائف. في نوفيا، نخصص خدماتنا لتصميم المواقع المخصصة وملتزمون بتقديم مواقع ويب عالية الجودة وسهلة الاستخدام تتجاوز توقعات عملائنا."}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default WebDesign;
