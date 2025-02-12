import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Hero from "../services/Hero";

const workProcess = [
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
];

export default function CustomAccordion() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Hero title="About Us" />
      <div className="flex justify-center items-center min-h-screen   p-6 ">
        <div className="w-full max-w-3xl gradientColor backdrop-blur-lg p-6  shadow-xl">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-6">
            How We Work
          </h2>
          {workProcess.map((item) => (
            <Accordion
              key={item.id}
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
              className="rounded-lg shadow-md transition-all p-3 duration-300 border border-white/20 hover:border-white/40 hover:shadow-xl bg-white/20 backdrop-blur-lg"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="" />}
                aria-controls={`${item.id}-content`}
                id={`${item.id}-header`}
                className="hover:bg-white/30 transition-all duration-300 rounded-lg p-3 "
              >
                <Typography
                  component="span"
                  className="text-lg md:text-2xl font-semibold bg-clip-text "
                  style={{ fontSize: "1.5rem" }}
                >
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-sm md:text-base">
                  {item.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
}
