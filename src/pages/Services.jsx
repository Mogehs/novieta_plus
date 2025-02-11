import React from "react";
import Service from "../components/services/Service";
import Hero from "../components/services/Hero";
import ResponsiveDesign from "./ResponsiveDesign";
import Banner from "../components/services/Banner";

const Services = () => {
  return (
    <div>
      <Hero title="Services" />
      <Service />
      {/* <ResponsiveDesign /> */}
      <Banner />
    </div>
  );
};

export default Services;
