import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

const MainLayout = () => (
  <div className="lg:mx-auto lg:max-w-7xl">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/projects", element: <Projects /> },
      { path: "/about-us", element: <About /> },
      { path: "/contact-us", element: <Contact /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
