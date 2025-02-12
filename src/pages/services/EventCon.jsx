import React from "react";
import { motion } from "framer-motion";
import Hero from "../../components/services/Hero";
import ResponsiveDesign from "../ResponsiveDesign";

// Define the services
const services = [
  {
    title: "Corporate Event Planning",
    description:
      "End-to-end planning and execution of business meetings, product launches, and corporate gatherings.",
    svg: "/services/ea1.svg",
  },
  {
    title: "Conference Management Services",
    description:
      " Professional organization of large-scale conferences, including venue setup, speaker coordination, and logistics.",
    svg: "/services/eab.svg",
  },
  {
    title: "Seminar & Workshop Coordination",
    description:
      "Structured planning of educational seminars and interactive workshops for businesses and professionals.",
    svg: "/services/ea3.svg", // Example path for svg3
  },
  {
    title: "Networking Event Organization",
    description:
      " Seamless arrangement of industry networking events to foster connections and business growth.",
    svg: "/services/ea4.svg",
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

const EventCon = () => {
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
          Events & Conference Organization
          </h2>
          <p>
          We specialize in professional event and conference organization, ensuring seamless planning, execution, and management. From corporate meetings and seminars to large-scale conferences and networking events, we handle every detail with precision.Our services include venue selection, event branding, speaker coordination, audio-visual setup, guest management, and on-site support to create a flawless experience. We focus on delivering engaging, well-structured, and smoothly executed events that leave a lasting impact.With our expertise, businesses can host memorable, hassle-free events that enhance brand reputation, encourage collaboration, and achieve their goals.
          <ul className="mt-4 pl-5 text-left">
              {[
                "1. Seamless Planning & Execution ",
                "2. Professional Venue & Setup",
                "3. Expert Coordination",
                "4. Enhanced Brand Image",
                "5. Customized Solutions",
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
            Professional Events & Conference Organization
          </h2>
          <p>
          We provide expert event and conference organization services, ensuring smooth execution and a memorable experience. From corporate meetings and seminars to large-scale conferences and networking events, we handle every aspect with professionalism and precision.Our services include venue selection, event branding, speaker coordination, audio-visual setup, guest management, and on-site support to create seamless, well-structured events. We focus on delivering engaging, high-impact experiences that align with your business goals.With a commitment to quality, efficiency, and attention to detail, we ensure every event reflects professionalism, enhances brand reputation, and fosters meaningful connections.
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
          Professional Events & Conference Organization Services
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
          <div className="w-full md:w-[60%] text-center md:text-left">
            <p className="font-bold text-xl sm:text-2xl md:text-3xl">
              What’s included in our Professional Events & Conference Organization
            </p>
            <p className="mt-5 text-base sm:text-lg leading-relaxed">
            Our events and conference organization services cover every detail to ensure a seamless and impactful experience. We provide comprehensive event planning, venue selection, branding, speaker coordination, guest management, and on-site execution to deliver flawless events.From corporate meetings and product launches to large-scale conferences and networking events, we handle logistics, audio-visual setup, catering, and event promotion, ensuring a professional and engaging atmosphere.
            </p>

            <ul className="mt-4 pl-5 text-left">
              {[
                "End-to-End Event Planning",
                "Venue & Logistics Management",
                "Speaker & Guest Coordination",
                "randing & Promotional Support ",
                "On-Site Execution & Support  ",
              ].map((item, idx) => (
                <li key={idx} className="mt-2 list-disc text-sm sm:text-base">
                  {item}
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
                User Experience  After purchasing Our Professional Events & Conference Organization Services
                </h2>
                <p>
                Clients experience a smooth, stress-free, and professionally managed event from start to finish. Our expert team ensures seamless planning, flawless execution, and real-time coordination, allowing businesses to focus on their goals while we handle the logistics.With our attention to detail, high-quality setups, and expert coordination, every event is well-structured, engaging, and impactful. From venue selection to guest management, we provide a hassle-free experience, ensuring that clients and attendees enjoy a well-organized and memorable event.We prioritize timely execution, brand enhancement, and meaningful engagement, delivering events that leave a lasting impression.
                <h1 className="font-bold">Benefits :-</h1>
                <ul className="mt-4 pl-5 text-left">
              {[
                "Stress-Free Event Management ",
                "  High-Quality & Well-Structured Events  ",
                " Enhanced Brand Image ",
                "Increased Engagement & Networking",
                " Time & Cost Efficiency ",
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

export default EventCon;
