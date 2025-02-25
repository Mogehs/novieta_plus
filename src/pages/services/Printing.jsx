import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { motion } from "framer-motion";
import Hero from "../../components/services/Hero";

const Printing = () => {
  const { language } = useContext(LanguageContext);

  const servicesText = {
    en: {
      digitalPrinting: "Digital Printing",
      digitalPrintingDescription:
        "Fast and cost-effective printing for short-run jobs, ideal for personalized and on-demand prints.",
      offsetPrinting: "Offset Printing",
      offsetPrintingDescription:
        "High-quality bulk printing with precise color accuracy, perfect for large-scale production.",
      professionalPrintingServices:
        "Professional Digital & Offset Printing Services",
      professionalDescription:
        "In today’s competitive market, high-quality printed materials play a vital role in branding and communication. Professional printing services ensure crisp, vibrant, and long-lasting prints that leave a lasting impression. Whether you need digital printing for small-scale, on-demand jobs or offset printing for large-volume production, we offer tailored solutions to meet your needs. Digital printing provides flexibility, quick turnaround, and cost efficiency, while offset printing guarantees superior quality and consistency for mass production. Our advanced printing technologies ensure rich colors, sharp details, and durable finishes, making your marketing materials, packaging, business cards, and promotional items stand out. From brochures and flyers to banners and catalogs, our professional printing solutions help businesses enhance their brand visibility and credibility.",
      whatsIncluded: "What’s Included in Our Printing Services?",
      whatsIncludedDescription:
        "At Novietaa, we offer premium digital and offset printing solutions to meet all your business and personal printing needs. Whether you require short-run digital prints for urgent projects or high-volume offset printing for consistent branding, we ensure top-quality results. Our team specializes in **customized print solutions**, including material selection, finishing options, and color management, to guarantee satisfaction.",
      benefits: [
        "High-Quality Prints with Sharp Details",
        "Flexible Short-Run and Bulk Printing",
        "Fast Turnaround Time for Urgent Orders",
        "Eco-Friendly and Cost-Effective Solutions",
        "Customizable Paper, Finishes & Sizes",
      ],
      userExperience: "User Experience After Choosing Our Printing Services",
      userExperienceDescription:
        "Expect premium-quality prints with vibrant colors and durable finishes. Our expert team ensures **precision, consistency, and timely delivery**, making your marketing and branding materials more impactful. With a seamless ordering process and tailored recommendations, your experience will be smooth and hassle-free.",
      userExperienceBenefits: [
        "Superior Print Quality",
        "Expert Consultation & Support",
        "Fast & Reliable Service",
        "Cost-Effective Bulk Printing",
        "Eco-Friendly Printing Options",
      ],
    },
    ar: {
      digitalPrinting: "الطباعة الرقمية",
      digitalPrintingDescription:
        "طباعة سريعة وفعالة من حيث التكلفة للمشاريع ذات الكميات الصغيرة، مثالية للطباعة الشخصية وعند الطلب.",
      offsetPrinting: "الطباعة الأوفست",
      offsetPrintingDescription:
        "طباعة عالية الجودة بدقة ألوان مثالية، مناسبة للإنتاج على نطاق واسع.",
      professionalPrintingServices: "خدمات الطباعة الرقمية والأوفست الاحترافية",
      professionalDescription:
        "في السوق التنافسي اليوم، تلعب المواد المطبوعة عالية الجودة دورًا مهمًا في تعزيز العلامة التجارية والتواصل الفعّال. توفر خدمات الطباعة الاحترافية **ألوانًا غنية وتفاصيل دقيقة ومواد متينة** تترك انطباعًا قويًا. سواء كنت بحاجة إلى **الطباعة الرقمية** للمشاريع القصيرة والمرنة أو **الطباعة الأوفست** للإنتاج بكميات كبيرة، فإننا نقدم حلولًا مخصصة تلبي احتياجاتك. توفر الطباعة الرقمية مرونة وسرعة في الإنجاز وتكلفة مناسبة، بينما تضمن الطباعة الأوفست جودة فائقة وثباتًا في الإنتاج. باستخدام أحدث التقنيات، نضمن نتائج طباعة استثنائية، مما يجعل موادك التسويقية، والبطاقات الشخصية، والعروض الترويجية أكثر جاذبية واحترافية.",
      whatsIncluded: "ما الذي تتضمنه خدمات الطباعة لدينا؟",
      whatsIncludedDescription:
        "في **نوفيتا**، نقدم حلول طباعة رقمية وأوفست عالية الجودة تناسب جميع احتياجات الأعمال والأفراد. سواء كنت بحاجة إلى طباعة رقمية سريعة للمشاريع العاجلة أو طباعة أوفست لكميات كبيرة مع دقة ألوان مثالية، نضمن لك نتائج ممتازة. يتخصص فريقنا في **تخصيص حلول الطباعة**، بما في ذلك اختيار المواد، والتشطيبات، وإدارة الألوان لضمان رضا العملاء.",
      benefits: [
        "طباعة عالية الجودة بتفاصيل دقيقة",
        "مرونة في الطباعة للكميات الصغيرة والكبيرة",
        "سرعة التنفيذ للطلبات العاجلة",
        "حلول صديقة للبيئة وفعّالة من حيث التكلفة",
        "خيارات متعددة للأوراق والتشطيبات والأحجام",
      ],
      userExperience: "تجربة العملاء بعد اختيار خدمات الطباعة لدينا",
      userExperienceDescription:
        "ستحصل على مطبوعات ذات جودة ممتازة وألوان نابضة بالحياة وتشطيبات متينة. يضمن فريقنا **الدقة والاتساق والتسليم في الوقت المحدد**، مما يجعل موادك التسويقية والعلامة التجارية أكثر تأثيرًا. مع عملية طلب سهلة واستشارات مخصصة، ستكون تجربتك سلسة وخالية من المتاعب.",
      userExperienceBenefits: [
        "جودة طباعة فائقة",
        "استشارات ودعم من الخبراء",
        "خدمة سريعة وموثوقة",
        "طباعة اقتصادية للكميات الكبيرة",
        "خيارات طباعة صديقة للبيئة",
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
            {language === "en"
              ? "Digital and Off set printing"
              : "الطباعة الرقمية والأوفست"}
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
            src="/new-services/printing-2.jpg"
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
            src="/new-services/printing-1.jpg"
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
            {language === "en"
              ? "Digital and Off set printing"
              : "الطباعة الرقمية والأوفست"}
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
              src="/new-services/offset-printing.jpg"
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

export default Printing;
