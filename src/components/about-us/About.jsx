import { useState, useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LanguageContext } from "../../context/LanguageContext";
import Banner from "../services/Banner";
import Testimonials from "./Testimonials";
import Hero from "../services/Hero";

const workProcess = {
  en: [
    {
      id: "consultation",
      title: "Consultation",
      description:
        "We start by analyzing your business needs, identifying your target audience, and discussing your advertising goals to create a solid foundation for success.",
    },
    {
      id: "planning",
      title: "Planning",
      description:
        "Our team crafts a strategic plan based on your objectives, utilizing market research, audience insights, and the latest advertising trends to maximize impact.",
    },
    {
      id: "execution",
      title: "Execution",
      description:
        "We launch your campaigns with precision, leveraging advanced tools and techniques to ensure effective reach and engagement with your target audience.",
    },
    {
      id: "support",
      title: "Support",
      description:
        "Our work doesn’t stop after execution; we provide ongoing support, optimization, and performance tracking to keep your campaigns running smoothly and effectively.",
    },
  ],
  ar: [
    {
      id: "consultation",
      title: "استشارة",
      description:
        "نبدأ بتحليل احتياجات عملك، وتحديد جمهورك المستهدف، ومناقشة أهدافك الإعلانية لإنشاء أساس قوي للنجاح.",
    },
    {
      id: "planning",
      title: "التخطيط",
      description:
        "يقوم فريقنا بإعداد خطة استراتيجية بناءً على أهدافك، باستخدام أبحاث السوق، ورؤى الجمهور، وأحدث اتجاهات الإعلان لتعظيم التأثير.",
    },
    {
      id: "execution",
      title: "التنفيذ",
      description:
        "نطلق حملاتك بدقة، مستفيدين من الأدوات والتقنيات المتقدمة لضمان الوصول الفعّال والتفاعل مع جمهورك المستهدف.",
    },
    {
      id: "support",
      title: "الدعم",
      description:
        "عملنا لا يتوقف بعد التنفيذ؛ نحن نقدم الدعم المستمر، والتحسين، وتتبع الأداء للحفاظ على تشغيل حملاتك بسلاسة وفعالية.",
    },
  ],
};

const teamMembers = [
  { name: "John Doe", role: "CEO & Founder", img: "/images/john.jpg" },
  { name: "Sarah Smith", role: "Marketing Lead", img: "/images/sarah.jpg" },
  { name: "Michael Lee", role: "Tech Director", img: "/images/michael.jpg" },
];

export default function AboutUs() {
  const [expanded, setExpanded] = useState(false);
  const { language } = useContext(LanguageContext);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="text-black">
      {/* Hero Section */}
      <Hero />

      <div className="flex flex-col sm:flex-row justify-between p-10 gap-20 ">
        <div className="flex gap-10 w-full sm:w-[60%] ">
          <div className="">
            <img src="/about/about-1.jpg" alt="" />
          </div>
          <div className=" mt-10">
            <img src="/about/about-2.jpg" alt="" />
          </div>
        </div>
        <div className="mt-10 w-full sm:w-[50%] ">
          <p className="redText font-bold ">
            {language === "en" ? "Who we are" : "من نحن"}
          </p>
          <p className="text-5xl font-bold sm:w-[96.8%]">
            {language === "en"
              ? "  Highly Tailored IT Design, Management & Support Services."
              : "خدمات تصميم وإدارة ودعم تكنولوجيا المعلومات مصممة خصيصًا بدقة."}
          </p>
          <p className="mt-3 text-lg sm:w-[80%]">
            {language === "en"
              ? "Accelerate innovation with world-class tech teams. We’ll match you to an entire remote team of incredible freelance talent for all your software development needs. Empower your business with cutting-edge solutions and seamless collaboration."
              : "سرّع الابتكار مع فرق تقنية عالمية المستوى. سنوصلك بفريق كامل من المواهب المستقلة المذهلة عن بُعد لتلبية جميع احتياجاتك في تطوير البرمجيات. عزّز أعمالك بحلول متطورة وتعاون سلس لتحقيق النجاح."}
          </p>
        </div>
      </div>

      {/* How We Work Section */}
      <div className="flex justify-center items-center p-6">
        <div className="w-full max-w-6xl brown-color shadow-xl rounded-lg p-6">
          <h2 className="text-center text-3xl font-bold mb-2">
            {language === "en"
              ? " We provide truly prominent IT solutions."
              : "نحن نوفر حلول تكنولوجيا المعلومات البارزة حقًا"}
          </h2>
          <p className="text-center font-semibold redText text-xl mb-4">
            {language === "en" ? "How We Work" : "كيف نعمل"}
          </p>
          {workProcess[language].map((item) => (
            <Accordion
              key={item.id}
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
              className="rounded-lg shadow-md transition-all p-3 duration-300 border border-gray-300 hover:border-black hover:shadow-xl"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-black" />}
                aria-controls={`${item.id}-content`}
                id={`${item.id}-header`}
                className="hover:bg-gray-100 transition-all duration-300 rounded-lg p-3"
              >
                <Typography
                  component="span"
                  className="text-lg md:text-2xl font-semibold text-black"
                  style={{ fontSize: "1.5rem" }}
                >
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-sm md:text-base text-black">
                  {item.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>

      <div className="p-10 flex flex-col sm:flex-row max-sm:gap-10">
        <div className="sm:w-[60%] ">
          <h2 className="text-5xl sm:w-[85%] font-bold">
            {language === "en"
              ? "Preparing for your success, we provide truly prominent IT solutions."
              : ".نحن نعدك للنجاح، ونوفر حلول تكنولوجيا المعلومات البارزة حقًا."}
          </h2>
          <ul className="list-disc pl-5 mt-4 text-lg">
            <li>
              {language === "en"
                ? "We always focus on technical excellence"
                : "نحن دائمًا نركز على التفوق الفني"}
            </li>
            <li>
              {language === "en"
                ? "Wherever you’re going, we bring ideas and excitement"
                : "أينما كنت ذاهبًا، نأتي بالأفكار والحماس"}
            </li>
            <li>
              {language === "en"
                ? "We’re consultants, guides, and partners for brands"
                : "نحن مستشارون ومرشدون وشركاء للعلامات التجارية"}
            </li>
          </ul>
        </div>
        <div className="sm:w-[50%]">
          <p>
            {language === "en"
              ? "  Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs. building cloud, infrastructure, network,etc. We put a strong focus on the needs of your business to figure out solutions that best fits your demand and nail it"
              : " تسريع الابتكار مع فرق تكنولوجيا عالمية المستوى. سنوفر لك فريقًا كاملًا من المواهب الحرة الرائعة عن بُعد لتلبية جميع احتياجات تطوير البرمجيات الخاصة بك، مثل بناء السحابة، البنية التحتية، الشبكات، وغيرها. نحن نركز بشكل كبير على احتياجات عملك لنجد الحلول التي تناسب متطلباتك ونحققها بنجاح."}
          </p>
          <div>
            <p className="mt-10 font-extrabold text-2xl">
              {language === "en"
                ? " Call To Ask Any Question"
                : "اتصل لطرح أي سؤال"}
            </p>
            <div className="mt-4 flex gap-2 flex-col text-xl redText font-semibold">
              <p>+(62) 800-567-8990</p>
              <p> +(62) 800-567-8990</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center my-10 brown-color w-[80%] mx-auto p-10 rounded-2xl">
        <p className="redText font-bold text-lg">
          {language === "en" ? "Testimonials" : "شهادة"}
        </p>
        <h1 className="font-semibold text-4xl text-center">
          {language === "en"
            ? "20k+ satisfied clients worldwide"
            : "20 ألف+ عملاء راضين في جميع أنحاء العالم"}
        </h1>
      </div>
      <Testimonials />
      <Banner />
    </div>
  );
}
