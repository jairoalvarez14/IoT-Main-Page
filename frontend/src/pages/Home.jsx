import Header from "../components/Header.jsx";
import Welcome from "../components/Welcome.jsx";
import InfoMainPage from "../components/InfoMainPage.jsx";
import Gallery from "../components/Gallery.jsx";
import Farms from "../components/Farms.jsx";
import HowPlantsGrow from "../components/HowPlantsGrow.jsx";
import AboutUs from "../components/AboutUs.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <InfoMainPage />
      <Gallery />
      <Farms />
      <HowPlantsGrow />
      <AboutUs className="hidden" />
      <Footer />
    </div>
  );
};

export default Home;
