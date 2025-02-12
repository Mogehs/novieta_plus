import React from "react";
import { motion } from "framer-motion";
import Hero from "../../components/services/Hero";
import ResponsiveDesign from "../ResponsiveDesign";

// Define the services
const services = [
  {
    title: "Video Production Services",
    description:
      " High-quality video content creation for branding, advertisements, and storytelling.",
    svg: "/services/stra1.svg",
  },
  {
    title: "Commercial Photography",
    description:
      " Professional photography for products, corporate events, and marketing campaigns.",
    svg: "/services/strab2.svg",
  },
  {
    title: "Content Strategy Development ",
    description:
      "Data-driven content planning to enhance brand engagement and audience reach.",
    svg: "/services/strac3.svg", // Example path for svg3
  },
  {
    title: "Brand Identity & Visual Design ",
    description:
      "Creation of logos, graphics, and branding materials for a strong market presence.",
    svg: "/services/strad4.svg",
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

const MediaProduction = () => {
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
          Media Production and Marketing Strategy Development
          </h2>
          <p>
          We offer professional media production and marketing strategy development to help businesses create impactful content and execute result-driven marketing campaigns. Our media production services include high-quality video production, commercial photography, branding visuals, and content creation that enhance brand presence and engagement.Our marketing strategy development focuses on crafting customized, data-driven plans that align with business goals. From market research and competitor analysis to content planning and digital advertising, we develop strategies that maximize reach, boost conversions, and drive business growth.
          <ul className="mt-4 pl-5 text-left">
              {[
                "1. High-Quality Content Creation ",
                "2. Data-Driven Marketing Strategies",
                "3. Enhanced Brand Visibility",
                "4. Optimized Customer Engagement",
                "5.  Increased Business Growth & ROI",
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
            Professional Media Production and Marketing Strategy Development Services
          </h2>
          <p>
          We provide expert media production and marketing strategy development services to help businesses create compelling content and execute effective marketing campaigns. Our media production services include high-quality video production, photography, branding visuals, and content creation, ensuring strong brand storytelling and engagement.Our marketing strategy development focuses on data-driven planning, including market research, competitor analysis, content strategy, and digital advertising. We design customized strategies that enhance brand visibility, drive customer engagement, and maximize business growth.With a blend of creativity, strategic insight, and advanced analytics, we help businesses establish a powerful market presence and achieve long-term success.
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
            Professional Media Production and Marketing Strategy Development
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
          <div className="w-full md:w-[60%] text-center md:text-left">
            <p className="font-bold text-xl sm:text-2xl md:text-3xl">
              What’s included in our  Media Production and Marketing Strategy Development Services and Package?
            </p>
            <p className="mt-5 text-base sm:text-lg leading-relaxed">
            Our media production and marketing strategy development services provide a complete solution for businesses to enhance their brand presence and reach their target audience effectively.We offer high-quality video production, commercial photography, branding visuals, and content creation to ensure compelling storytelling and strong brand identity. Our marketing strategy services include market research, competitor analysis, content planning, digital advertising, and social media strategies to drive engagement and business growth.
            </p>

            <ul className="mt-4 pl-5 text-left">
              {[
                "High-Quality Media Production",
                "Data-Driven Marketing Strategies",
                "Effective Digital Advertising",
                " Social Media & Content Planning ",
                "Comprehensive Brand Development",
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
                User Experience  After purchasing Our Media Production and Marketing Strategy Development Services
                </h2>
                <p>
                Clients experience a seamless, professional, and results-driven approach to media production and marketing strategy. Our team ensures high-quality content creation, strategic planning, and targeted execution, allowing businesses to enhance brand visibility and connect with their audience effectively.With expertly produced videos, photography, and branding materials, clients receive visually compelling content that strengthens their identity. Our marketing strategies, backed by data and industry insights, help businesses maximize reach, engagement, and conversions.
                <h1 className="font-bold">Benefits :-</h1>
                <ul className="mt-4 pl-5 text-left">
              {[
                "Engaging & High-Quality Content ",
                " Strategic Market Positioning ",
                "  Increased Customer Engagement",
                " Optimized Business Growth",
                " Seamless & Professional Execution",
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

export default MediaProduction;
