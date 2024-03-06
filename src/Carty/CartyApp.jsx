import "./CartyApp.css";
import Hero from "./HeroSection/Hero";
import Wrapper from "./Wrapper";
import Features from "./FeaturesSection/Features";
import AboutUs from "./AboutUsSection/AboutUs";
import CtaSection from "./CtaSection/CtaSection";
import PartnersSection from "./PartnersSection/PartnersSection";
import StrategySection from "./StrategySection/Strategy";
import EndSection from "./EndSection/EndSection";
export default function CartyApp() {
  return (
    <div>
      <Wrapper>
        <Hero></Hero>
        <Features></Features>
        <AboutUs></AboutUs>
        <CtaSection></CtaSection>
        <PartnersSection></PartnersSection>
        <StrategySection></StrategySection>
        <EndSection></EndSection>
      </Wrapper>
    </div>
  );
}
