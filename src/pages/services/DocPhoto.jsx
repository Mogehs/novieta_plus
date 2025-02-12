import React from "react";
import { motion } from "framer-motion";
import Hero from "../../components/services/Hero";
import ResponsiveDesign from "../ResponsiveDesign";

// Define the services
const services = [
  {
    title: "Business Documentation",
    description:
      "Structured and professional documentation for corporate reports, proposals, and records.",
    svg: "/services/photo3a.svg",
  },
  {
    title: "Technical Writing Services",
    description:
      "Clear and precise technical documents, manuals, and guides for businesses.",
    svg: "/services/photo3bb.svg",
  },
  {
    title: "Corporate Event Photography",
    description:
      "Capturing high-quality images of business events, conferences, and meetings.",
    svg: "/services/photo3c.svg", // Example path for svg3
  },
  {
    title: "Product Photography",
    description:
      "Professional photos that highlight product features for marketing and eCommerce.",
    svg: "/services/photo3d.svg",
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

const DocPhoto = () => {
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
            Documentaion and Photography
          </h2>
          <p>
          At novietaa, we provide expert documentation and photography services to capture, preserve, and enhance your business and personal milestones with precision.Our documentation services include business reports, corporate profiles, legal documents, and technical writing—ensuring clarity, accuracy, and professionalism. We help businesses maintain structured records and streamline operations.Our photography services cover corporate events, product shoots, real estate visuals, and professional portraits. Using high-resolution cameras and advanced editing, we deliver stunning visuals that enhance branding and marketing efforts.
          <ul className="mt-4 pl-5 text-left">
              {[
                "1. High-Quality Content ",
                "2. Tailored Solutions",
                "3. Attention to Detail",
                "4. RPersonalized Marketing Strategy",
                "5. Fast & Reliable Delivery",
              ].map((item)=>(
                <li>{item}</li>
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
            Professional Documentation and Photography Services
          </h2>
          <p>
          We provide expert documentation and photography services, ensuring accuracy, clarity, and creativity in every project. Our documentation services cover business reports, corporate profiles, legal documents, and technical writing, delivering structured and professional content.Our photography services include corporate events, product shoots, real estate visuals, and professional portraits. Using high-resolution photography and expert editing, we create stunning visuals that enhance branding and marketing.With a focus on quality, efficiency, and attention to detail, we ensure every document and image reflects professionalism and excellence. Capture success with precision and creativity!
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
          <Card  className="bg-amber-400"
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
            Professional Documentaion and Photography Services
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
          <div className="w-full md:w-[60%] text-center md:text-left">
            <p className="font-bold text-xl sm:text-2xl md:text-3xl">
              What’s included in our Documentaion and Photography Services and Package?
            </p>
            <p className="mt-5 text-base sm:text-lg leading-relaxed">
            Our documentation services cover business reports, technical writing, legal documents, and project summaries, ensuring clarity and professionalism.Our photography services include corporate events, product photography, real estate visuals, and professional portraits, delivering high-quality, expertly edited images.Each package is tailored for comprehensive, high-quality results with professional execution and editing.
            </p>

            <ul className="mt-4 pl-5 text-left">
              {[
                "Comprehensive Documentation",
                "High-Quality Photography",
                "Expert Editing & Refinement",
                "Tailored Solutions",
                "Professional Execution ",
              ].map((item, idx) => (
                <li key={idx} className="mt-2 list-disc text-sm sm:text-base">
                  {item}
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
                User Experience  After purchasing Our Documentaion and Photography Services
                </h2>
                <p>
                Clients enjoy a seamless, professional experience with clear communication, timely delivery, and high-quality results.Our documentation services provide accurate, well-structured content that enhances business operations and meets industry standards.Our photography services deliver high-resolution, expertly edited images, capturing key moments and boosting brand presence.With a focus on precision, creativity, and client satisfaction, we ensure every project exceeds expectations and adds lasting value.
                <h1 className="font-bold">Benefits :-</h1>
                <ul className="mt-4 pl-5 text-left">
              {[
                "Professional & Accurate Content ",
                " High-Quality Visuals ",
                " Time & Effort Savings",
                "Enhanced Brand Presence",
                "Customized Solutions ",
              ].map((item)=>(
                <li>{item}</li>
              ))}
              </ul>
                </p>
              </div>
            </motion.div>
    </div>
  );
};

export default DocPhoto;
