import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-[#96193a] backdrop-blur-md text-white border-t border-white/20 shadow-lg">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <span className="self-center text-xl font-bold">Brand name</span>
          </a>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          {["Product", "Company", "Developers", "Social media"].map(
            (title, index) => (
              <div className="space-y-3" key={index}>
                <h3 className="tracking-wide uppercase text-md font-bold">
                  {title}
                </h3>
                {index !== 3 ? (
                  <ul className="space-y-1 font-base">
                    {index === 0 &&
                      ["Features", "Integrations", "Pricing", "FAQ"].map(
                        (item) => (
                          <li key={item}>
                            <Link to="">{item}</Link>
                          </li>
                        )
                      )}
                    {index === 1 &&
                      ["Privacy", "Terms of Service"].map((item) => (
                        <li key={item}>
                          <Link to="">{item}</Link>
                        </li>
                      ))}
                    {index === 2 &&
                      ["Public API", "Documentation", "Guides"].map((item) => (
                        <li key={item}>
                          <Link to="">{item}</Link>
                        </li>
                      ))}
                  </ul>
                ) : (
                  <div className="flex justify-start space-x-3">
                    <Link to="" title="LinkedIn" className="p-1">
                      <FaLinkedin className="w-6 h-6 hover:text-[#0077b5]" />
                    </Link>
                    <Link to="" title="Facebook" className="p-1">
                      <FaFacebook className="w-6 h-6 hover:text-[#1877F2]" />
                    </Link>
                    <Link to="" title="Twitter" className="p-1">
                      <FaTwitter className="w-6 h-6 hover:text-[#1DA1F2]" />
                    </Link>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
      <div className="py-6 text-sm text-center font-semibold">
        © 2025 Novietta. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
