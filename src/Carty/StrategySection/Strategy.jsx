import "./Strategy.css";
import vid from "../assets/appVideo.mp4";
import { Heading, Super, BodyText } from "../StyledComponents/Heading";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function StrategySection() {
  const videoRef = useRef();
  const numberRef = useRef();
  function handleClick() {
    videoRef.current.muted = false;
  }
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
  });
  return (
    <div className="strategy-section-parent">
      <div className="number">
        <p ref={numberRef}>05</p>
      </div>
      <div className="strategy-section-top">
        <div className="strategy-content-left">
          <Super>Strategy</Super>
          <Heading>Let's learn how Chase works</Heading>
        </div>
        <div className="strategy-content-right">
          <BodyText>
            Your journey is seamless, safe and secure. No need to download apps.
            No need to enter card details
          </BodyText>
        </div>
      </div>
      <div className="strategy-section-bottom">
        <div className="video-container">
          <video
            controls
            muted
            loop
            autoPlay
            ref={videoRef}
            onClick={handleClick}>
            <track kind="captions"></track>
            <source src={vid} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
