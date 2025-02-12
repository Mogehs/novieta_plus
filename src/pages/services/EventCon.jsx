import React from "react";
import { motion } from "framer-motion";
import Hero from "../../components/services/Hero";

import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext"; // Adjust the import path as needed

// Define the services
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

// Card component with multilingual support
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

const EventCon = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Hero title="Events & Conference Organization" />
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
              ? "Events & Conference Organization"
              : "تنظيم الفعاليات والمؤتمرات"}
          </h2>
          <p>
            {language === "en"
              ? "We specialize in professional event and conference organization, ensuring seamless planning, execution, and management. From corporate meetings and seminars to large-scale conferences and networking events, we handle every detail with precision. Our services include venue selection, event branding, speaker coordination, audio-visual setup, guest management, and on-site support to create a flawless experience. We focus on delivering engaging, well-structured, and smoothly executed events that leave a lasting impact. With our expertise, businesses can host memorable, hassle-free events that enhance brand reputation, encourage collaboration, and achieve their goals."
              : "نحن متخصصون في تنظيم الفعاليات والمؤتمرات بشكل احترافي، مما يضمن التخطيط والتنفيذ والإدارة بسلاسة. بدءًا من الاجتماعات والندوات التجارية إلى المؤتمرات الكبرى وفعاليات التواصل، نهتم بكل التفاصيل بدقة. تشمل خدماتنا اختيار المكان، تصميم العلامة التجارية للحدث، تنسيق المتحدثين، تجهيزات الصوت والصورة، إدارة الضيوف، والدعم في الموقع لضمان تجربة سلسة. نحن نركز على تقديم فعاليات جذابة، منظمة، ومنفذة بسلاسة تترك انطباعًا دائمًا. من خلال خبرتنا، يمكن للشركات تنظيم فعاليات ناجحة وخالية من المتاعب تعزز سمعة العلامة التجارية، وتشجع التعاون، وتحقق أهدافها."}
          </p>
          <ul className="mt-4 pl-5 text-left">
            {(language === "en"
              ? [
                  "1. Seamless Planning & Execution",
                  "2. Professional Venue & Setup",
                  "3. Expert Coordination",
                  "4. Enhanced Brand Image",
                  "5. Customized Solutions",
                ]
              : [
                  "١. تخطيط وتنفيذ سلس",
                  "٢. أماكن وتجهيزات احترافية",
                  "٣. تنسيق احترافي",
                  "٤. تعزيز صورة العلامة التجارية",
                  "٥. حلول مخصصة",
                ]
            ).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-[40%]"
        >
          <img
            src="/services/e1.avif"
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
            src="/services/e2.avif"
            alt="Website Design"
            className="rounded-lg w-full"
          />
        </motion.div>
        <div className="w-full lg:w-[57%] mb-10">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
            {language === "en"
              ? "Professional Events & Conference Organization"
              : "تنظيم الفعاليات والمؤتمرات الاحترافية"}
          </h2>
          <p>
            {language === "en"
              ? "We provide expert event and conference organization services, ensuring smooth execution and a memorable experience. From corporate meetings and seminars to large-scale conferences and networking events, we handle every aspect with professionalism and precision. Our services include venue selection, event branding, speaker coordination, audio-visual setup, guest management, and on-site support to create seamless, well-structured events. We focus on delivering engaging, high-impact experiences that align with your business goals. With a commitment to quality, efficiency, and attention to detail, we ensure every event reflects professionalism, enhances brand reputation, and fosters meaningful connections."
              : "نحن نقدم خدمات احترافية لتنظيم الفعاليات والمؤتمرات، مما يضمن تنفيذًا سلسًا وتجربة لا تُنسى. من الاجتماعات والندوات التجارية إلى المؤتمرات الكبرى وفعاليات التواصل، ندير كل جانب باحترافية ودقة. تشمل خدماتنا اختيار المكان، تصميم العلامة التجارية للحدث، تنسيق المتحدثين، تجهيزات الصوت والصورة، إدارة الضيوف، والدعم في الموقع لضمان أحداث سلسة ومنظمة. نركز على تقديم تجارب جذابة وعالية التأثير تتماشى مع أهداف عملك. من خلال التزامنا بالجودة والكفاءة والاهتمام بالتفاصيل، نضمن أن يعكس كل حدث الاحترافية، ويعزز سمعة العلامة التجارية، ويشجع على بناء علاقات هادفة."}
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
              ? "Professional Events & Conference Organization Services"
              : "خدمات تنظيم الفعاليات والمؤتمرات الاحترافية"}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
          <div className="w-full md:w-[60%] text-center md:text-left">
            <p className="font-bold text-xl sm:text-2xl md:text-3xl">
              {language === "en"
                ? "What’s included in our Professional Events & Conference Organization?"
                : "ما الذي تتضمنه خدماتنا لتنظيم الفعاليات والمؤتمرات؟"}
            </p>
            <p className="mt-5 text-base sm:text-lg leading-relaxed">
              {language === "en"
                ? "Our events and conference organization services cover every detail to ensure a seamless and impactful experience. We provide comprehensive event planning, venue selection, branding, speaker coordination, guest management, and on-site execution to deliver flawless events. From corporate meetings and product launches to large-scale conferences and networking events, we handle logistics, audio-visual setup, catering, and event promotion, ensuring a professional and engaging atmosphere."
                : "تغطي خدماتنا لتنظيم الفعاليات والمؤتمرات جميع التفاصيل لضمان تجربة سلسة وفعالة. نقدم تخطيطًا شاملاً للفعاليات، واختيار المواقع، وتصميم العلامة التجارية، وتنسيق المتحدثين، وإدارة الضيوف، والتنفيذ في الموقع لضمان أحداث خالية من الأخطاء. من الاجتماعات التجارية وإطلاق المنتجات إلى المؤتمرات الكبرى وفعاليات التواصل، ندير اللوجستيات، والتجهيزات السمعية والبصرية، وخدمات الضيافة، والترويج للحدث، مما يضمن أجواءً احترافية وجذابة."}
            </p>

            <ul className="mt-4 pl-5 text-left">
              {[
                {
                  en: "End-to-End Event Planning",
                  ar: "التخطيط الشامل للفعاليات",
                },
                {
                  en: "Venue & Logistics Management",
                  ar: "إدارة المواقع واللوجستيات",
                },
                {
                  en: "Speaker & Guest Coordination",
                  ar: "تنسيق المتحدثين والضيوف",
                },
                {
                  en: "Branding & Promotional Support",
                  ar: "دعم العلامة التجارية والترويج",
                },
                {
                  en: "On-Site Execution & Support",
                  ar: "التنفيذ والدعم في الموقع",
                },
              ].map((item, idx) => (
                <li key={idx} className="mt-2 list-disc text-sm sm:text-base">
                  {item[language]}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-[40%] flex justify-center">
            <img
              src="/services/e3.avif"
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
            src="/services/e5.avif"
            alt="Website Design"
            className="rounded-lg w-full"
          />
        </motion.div>
        <div className="w-full lg:w-[57%] mb-10">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
            {language === "en"
              ? "User Experience After purchasing Our Professional Events & Conference Organization Services"
              : "تجربة العملاء بعد شراء خدمات تنظيم الفعاليات والمؤتمرات الاحترافية لدينا"}
          </h2>
          <p>
            {language === "en"
              ? "Clients experience a smooth, stress-free, and professionally managed event from start to finish. Our expert team ensures seamless planning, flawless execution, and real-time coordination, allowing businesses to focus on their goals while we handle the logistics. With our attention to detail, high-quality setups, and expert coordination, every event is well-structured, engaging, and impactful. From venue selection to guest management, we provide a hassle-free experience, ensuring that clients and attendees enjoy a well-organized and memorable event. We prioritize timely execution, brand enhancement, and meaningful engagement, delivering events that leave a lasting impression."
              : "يختبر العملاء حدثًا سلسًا وخاليًا من التوتر يتم إدارته بشكل احترافي من البداية إلى النهاية. يضمن فريقنا الخبير التخطيط السلس، والتنفيذ الخالي من العيوب، والتنسيق الفوري، مما يسمح للشركات بالتركيز على أهدافها بينما نتولى نحن اللوجستيات. من خلال اهتمامنا بالتفاصيل، والإعدادات عالية الجودة، والتنسيق الخبير، يكون كل حدث منظمًا بشكل جيد، وجذابًا، وله تأثير. من اختيار الموقع إلى إدارة الضيوف، نقدم تجربة خالية من المتاعب، مما يضمن أن يستمتع العملاء والحضور بحدث منظم لا يُنسى. نحن نولي أهمية كبيرة للتنفيذ في الوقت المناسب، وتعزيز العلامة التجارية، والتفاعل الهادف، مما يؤدي إلى تنظيم فعاليات تترك انطباعًا دائمًا."}
            <h1 className="font-bold">
              {language === "en" ? "Benefits :-" : "الفوائد :-"}
            </h1>
            <ul className="mt-4 pl-5 text-left">
              {[
                {
                  en: "Stress-Free Event Management",
                  ar: "إدارة الفعاليات بدون توتر",
                },
                {
                  en: "High-Quality & Well-Structured Events",
                  ar: "فعاليات عالية الجودة ومنظمة بشكل جيد",
                },
                {
                  en: "Enhanced Brand Image",
                  ar: "تعزيز صورة العلامة التجارية",
                },
                {
                  en: "Increased Engagement & Networking",
                  ar: "زيادة التفاعل والشبكات",
                },
                {
                  en: "Time & Cost Efficiency",
                  ar: "الكفاءة في الوقت والتكلفة",
                },
              ].map((item, idx) => (
                <li key={idx}>{language === "en" ? item.en : item.ar}</li>
              ))}
            </ul>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default EventCon;
