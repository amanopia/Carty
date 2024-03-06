import "./EndSection.css";
import { Heading, BtnLight, BodyText } from "../StyledComponents/Heading";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function EndSection() {
  const containerRef = useRef();
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const containerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        markers: true,
        start: "-40% 90%",
        end: "60% 90%",
        scrub: 0.2,
      },
    });
    containerTimeline
      .from(containerRef.current, {
        scale: 0.9,
        y: 100,
      })
      .to(containerRef.current, {
        scale: 1,
        y: 0,
      });
  });
  return (
    <div ref={containerRef} className="end-section-parent">
      <div className="content-top">
        <Heading>Connect your finances with Chase</Heading>
        <BtnLight>Join Chase Now</BtnLight>
      </div>
      <div className="content-bottom">
        <p id="brandName">Chase</p>
        <div className="footer-text">
          <BodyText>Terms & Agreements</BodyText>
          <BodyText>©Copyright 2024 Chase, All rights reserved </BodyText>
          <BodyText>Privacy Policy</BodyText>
        </div>
      </div>
    </div>
  );
}
