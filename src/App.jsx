import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import WebDesign from "./pages/services/WebDesign";
import MediaProduction from "./pages/services/MediaProduction";
import EventCon from "./pages/services/EventCon";
import DocPhoto from "./pages/services/DocPhoto";
import DigitalMaketing from "./pages/services/DigitalMaketing";
import ContactUs from "./pages/ContactUs";
import { LanguageProvider } from "./context/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import Printing from "./pages/services/Printing";
import Advertising from "./pages/services/Advertising";

const MainLayout = () => (
  <div className="lg:mx-auto lg:max-w-7xl overflow-x-hidden tracking-wider">
    <Navbar />
    <ScrollToTop />
    <Outlet />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/our-services", element: <Services /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/services/website-design", element: <WebDesign /> },
      { path: "/services/digital-marketing", element: <DigitalMaketing /> },
      { path: "/services/media-production", element: <MediaProduction /> },
      { path: "/services/documentation-photography", element: <DocPhoto /> },
      { path: "/services/event-conference", element: <EventCon /> },
      { path: "/services/offset-printing", element: <Printing /> },
      { path: "/services/advertising", element: <Advertising /> },
    ],
  },
]);

const App = () => {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
};

export default App;
