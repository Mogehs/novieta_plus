import React from "react";
import { motion } from "framer-motion";
import Hero from "../../components/services/Hero";
import ResponsiveDesign from "../ResponsiveDesign";

// Define the services
const services = [
  {
    title: "Make Strategy",
    description:
      "We work with you to create a tailored strategy to drive results and meet your business goals.",
    svg: "/services/development-idea-svgrepo-com.svg",
  },
  {
    title: "Web Design",
    description:
      "Our design team ensures your website is visually appealing, user-friendly, and responsive across devices.",
    svg: "/services/design-svgrepo-com.svg",
  },
  {
    title: "Web Testing",
    description:
      "We thoroughly test your website to ensure it functions smoothly and provides the best user experience.",
    svg: "/services/optimization-svgrepo-com.svg", // Example path for svg3
  },
  {
    title: "Web Live",
    description:
      "We take your website live with seamless deployment, ensuring it performs perfectly for your audience.",
    svg: "/services/rocket-2-svgrepo-com.svg",
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

const WebDesign = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Hero title="Web Design" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col lg:flex-row gap-10 items-center mb-10"
      >
        <div className="w-full lg:w-[57%] p-4 my-10">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
            Web Design
          </h2>
          <p>
            At Novietaa, we take pride in being a trusted web design company in
            Qatar, recognized by industry leaders like Clutch, GoodFirms, G2,
            Design Rush, and more. Our mission is to deliver effective website
            design and development solutions that not only attract traffic but
            also engage visitors and generate valuable leads. We offer
            comprehensive services, including responsive design, 12 months of
            free technical support, seamless social media integration, live chat
            functionality, secure payment gateways, and basic SEO optimization.
            Our websites are optimized for fast page speeds, with robust
            analytics and reliable hosting, making it easy for businesses to
            manage their content through an intuitive admin panel. We serve
            various industries, including real estate, restaurants, healthcare,
            e-commerce, education, and travel, as well as marketing agencies,
            architecture firms, online stores, and more. If you're looking for a
            professional web design company in Qatar, Novietaa is here to bring
            your vision to life with cutting-edge web solutions.
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
            Professional Web Services
          </h2>
          <p>
            Our professional web design services at Novietaa are driven by a
            dedicated team of experts, including web designers, user experience
            (UX) specialists, web developers, website optimization experts,
            content writers, and web graphic designers. Novietaa specializes in
            custom web design and development solutions that stay at the cutting
            edge of technology and programming languages. We are committed to
            building long-term relationships with our clients and never rely on
            templates or off-the-shelf solutions. Instead, we stay focused on
            nurturing creativity and innovation. Our goal is to make your
            website stand out from the competition and capture your target
            audience's attention. Novietaa ensures that your website is not only
            clean and easy to navigate but also aligns with the latest design
            trends, making us your top choice for web development services in
            Qatar.
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

      <ResponsiveDesign />
    </div>
  );
};

export default WebDesign;
