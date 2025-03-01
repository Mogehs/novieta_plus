import CoreValue1 from "../components/home/CoreValue1";
import CorValue3 from "../components/home/CoreValue3";
import CorValue2 from "../components/home/CorValue2";
import Development from "../components/home/Development";
import Hero from "../components/home/Hero";
import Marquee from "../components/home/Marquee";
import Novita from "../components/home/Novita";
import OurVision from "../components/home/OurVision";
import WeAreProviding from "../components/services/WeAreProviding";

const Home = () => {
  return (
    <div>
      <Novita />
      <Marquee />
      <OurVision />
      <WeAreProviding />
      <CoreValue1 />
      <CorValue2 />
      <CorValue3 />
      <Development />
      <Hero />
    </div>
  );
};

export default Home;
