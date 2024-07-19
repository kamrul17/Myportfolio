import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillSection from "./SkillSection";
import PortfolioSection from "./PortfolioSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";
function App() {
  return (
    <div className="container-fluid " id="main_body">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <PortfolioSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
