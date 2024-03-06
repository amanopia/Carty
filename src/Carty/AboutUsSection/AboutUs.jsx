import "./AboutUs.css";
import { aboutDataArray } from "../FeaturesSection/MiniCardDataArray.js";
import MiniCard from "../FeaturesSection/MiniCard.jsx";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Heading, Super, BodyText } from "../StyledComponents/Heading.js";

export default function AboutUs() {
  const numberRef = useRef();
  const statsRef = useRef();
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let numberTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: numberRef.current,
        // markers: true,
        start: "top 50%",
        end: "120% 50%",
        scrub: 0.2,
      },
    });

    numberTimeline
      .from(numberRef.current, {
        x: -470,
        opacity: 1,
      })
      .to(numberRef.current, {
        x: 0,
        opacity: 0.1,
      });

    const tl = gsap.timeline({
      default: { ease: "power4.inOut", duration: 2 },
      scrollTrigger: {
        trigger: statsRef.current,
        markers: true,
        start: "-80% 50%",
        end: "200% 50%",
        toggleActions: "play pause resume reset",
      },
    });
    tl.to(".about-us-stats .actual-card-container div", {
      opacity: 1,
      y: "0px",
      delay: 0.5,
      stagger: 0.2,
    });
  });

  return (
    <div className="about-us-parent">
      <div className="number">
        <p ref={numberRef}>02</p>
      </div>
      <div className="about-us-content-top">
        {/* all the aboove content */}
        <div className="about-us-content-left">
          <Super>About Us</Super>
          <Heading>Get to know more about Chase</Heading>
        </div>
        <div className="about-us-content-right">
          <BodyText>
            We are a customer - focused, result driven, digital bank that
            provides complete financial solutions to meet your entire financial
            needs
          </BodyText>
        </div>
      </div>
      {/* all the percentage cards */}
      <div className="about-us-stats" ref={statsRef}>
        {aboutDataArray.map((element, index) => (
          <MiniCard
            key={index}
            percentage={element.percentage}
            description={element.description}
          />
        ))}
      </div>
    </div>
  );
}
