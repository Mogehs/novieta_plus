import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-[#a99056] text-white">
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
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-md font-bold">
              Product
            </h3>
            <ul className="space-y-1 font-base">
              <li>
                <Link to="">Features</Link>
              </li>
              <li>
                <Link to="">Integrations</Link>
              </li>
              <li>
                <Link to="">Pricing</Link>
              </li>
              <li>
                <Link to="">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-md font-bold">
              Company
            </h3>
            <ul className="space-y-1 font-base">
              <li>
                <Link to="">Privacy</Link>
              </li>
              <li>
                <Link to="">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-md font-bold">
              Developers
            </h3>
            <ul className="space-y-1 font-base">
              <li>
                <Link to="">Public API</Link>
              </li>
              <li>
                <Link to="">Documentation</Link>
              </li>
              <li>
                <Link to="">Guides</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-md font-bold">
              Social media
            </h3>
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
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center font-semibold">
        © 2025 codesthinker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
