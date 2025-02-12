import React from "react";
import { motion } from "framer-motion";
import Hero from "../../components/services/Hero";
import ResponsiveDesign from "../ResponsiveDesign";

// Define the services
const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Enhances website visibility on search engines to attract organic traffic.",
    svg: "/services/DigiCard1.svg",
  },
  {
    title: "Social Media Marketing (SMM)",
    description:
      " Promotes brands on social platforms to engage audiences and boost awareness.",
    svg: "/services/DigiCard2.svg",
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    description:
      "Runs paid ads on search engines and social media for instant traffic and conversions.",
    svg: "/services/DigiCard3.svg", // Example path for svg3
  },
  {
    title: "Content Marketing",
    description:
      "Creates valuable content to educate, engage, and convert potential customers.",
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

const DigitalMaketing = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Hero title="Digital Marketing" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col lg:flex-row gap-10 items-center mb-10"
      >
        <div className="w-full lg:w-[57%] p-4 my-10">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
            Digital Marketing
          </h2>
          <p>
            Novietaa Company is a leading provider of digital marketing
            solutions, helping businesses grow their online presence with
            cutting-edge strategies. Specializing in SEO, social media
            marketing, content creation, and paid advertising, Novitta ensures
            brands reach their target audience effectively. Their expert team
            crafts data-driven campaigns that boost engagement, drive traffic,
            and increase conversions.With a focus on innovation, Novitta
            utilizes the latest tools and trends to optimize marketing
            performance. Whether it's brand awareness, lead generation, or
            customer retention, their customized solutions cater to diverse
            business needs. They offer website development, email marketing, and
            influencer collaborations to maximize reach.tta’s commitment to
            excellence ensures clients achieve measurable results. From small
            startups to established enterprises, they provide scalable
            strategies that enhance digital visibility. With transparent
            reporting and continuous optimization, they drive sustainable
            growth. Partner with Novitta today to transform your digital
            marketing efforts into long-term success!
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
            Professional Digital Marketing Services
          </h2>
          <p>
            In today’s digital age, having a strong online presence is essential
            for business growth. Professional digital marketing services help
            businesses reach their target audience, increase brand awareness,
            and drive sales. With a strategic approach, these services include
            SEO (Search Engine Optimization),social media marketing, content
            marketing, PPC (Pay-Per-Click) advertising, and email marketing to
            ensure a comprehensive online strategy.A well-optimized website,
            engaging content, and effective ad campaigns can significantly
            improve visibility and customer engagement. Digital marketing
            experts analyze market trends, consumer behavior, and competitors to
            create tailored strategies for maximum impact. Whether it's managing
            social media accounts, running Google Ads, or improving search
            rankings, professional marketers ensure businesses stay ahead of the
            competition.Additionally, data-driven decision-making allows for
            continuous optimization, ensuring better ROI (Return on Investment).
            With advanced analytics, businesses can track performance and refine
            their strategies for sustained growth.
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
            Professional Marketing Services
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
          <div className="w-full md:w-[60%] text-center md:text-left">
            <p className="font-bold text-xl sm:text-2xl md:text-3xl">
              What’s included in our Digital Marketing Services and Package?
            </p>
            <p className="mt-5 text-base sm:text-lg leading-relaxed">
            At novietaa, we provide comprehensive digital marketing solutions to help businesses grow, engage customers, and boost sales. Our expert team uses data-driven strategies to enhance your online presence and ensure maximum ROI.By choosing our digital marketing services, businesses can reach the right audience, increase conversions, and stay ahead of the competition. Our tailored strategies ensure measurable results and long-term success.
            </p>

            <ul className="mt-4 pl-5 text-left">
              {[
                "Increased Brand Visibility",
                "Targeted Audience Reach",
                "Higher Conversion Rates",
                "Real-Time Performance Tracking",
                "Stronger Customer Engagement",
              ].map((item, idx) => (
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
    </div>
  );
};

export default DigitalMaketing;
