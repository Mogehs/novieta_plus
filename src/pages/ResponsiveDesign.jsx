import React from "react";

const ResponsiveDesign = () => {
  return (
    <div className="p-4 light-color w-[98%] mx-auto mt-20 rounded-xl">
      {/* Header */}
      <div className="flex items-center gap-3">
        <img
          src="/services/arrow.svg"
          alt=""
          className="h-16 w-16 sm:h-20 sm:w-20"
        />
        <p className="redText font-bold text-lg sm:text-xl md:text-2xl mt-3">
          Responsive Design
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
        {/* Text Content */}
        <div className="w-full md:w-[60%] text-center md:text-left">
          <p className="font-bold text-xl sm:text-2xl md:text-3xl">
            What’s included in our web design and development packages?
          </p>
          <p className="mt-5 text-base sm:text-lg leading-relaxed">
            Responsive web design refers to the process of designing and
            developing websites that can adapt to different screen sizes and
            devices, providing an optimal viewing experience for users. At Bit
            technologies, we specialize in responsive web design and develop
            websites that provide a seamless user experience across all devices,
            from desktops to smartphones.
          </p>

          {/* Feature List */}
          <ul className="mt-4 pl-5 text-left">
            {[
              "Mobile-friendly",
              "Bespoke design",
              "Unlimited revisions",
              "Edit anytime",
              "Free optimization",
              "Fast & reliable",
              "Domain & email",
            ].map((item, idx) => (
              <li key={idx} className="mt-2 list-disc text-sm sm:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[40%] flex justify-center">
          <img
            src="/services/service-preview.webp"
            alt="Service Preview"
            className="w-full max-w-[400px] rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveDesign;
