import "./Features.css";
import MiniCard from "./MiniCard";
import { miniCardDataArray } from "./MiniCardDataArray.js";
import {
  Heading,
  Super,
  BodyText,
  BtnDark,
  BtnLight,
} from "../StyledComponents/Heading.js";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Features() {
  const numberRef = useRef();
  const parentRef = useRef();
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ScrollTrigger.normalizeScroll(true);
    // ScrollTrigger.config({
    //   ignoreMobileResize: true,
    // });

    let numberTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: numberRef.current,
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
    <div ref={parentRef} className="features-parent">
      <div className="number">
        <p ref={numberRef}>01</p>
      </div>
      <div className="features-content-left">
        <Super>Features</Super>
        <Heading>Best features provided by Chase</Heading>
        <BodyText>
          Chase embodies a mindset rather than merely being a technology or an
          industry. Our product, crafted by industry veterans, is aimed at
          addressing these challenges. It promises to save you time, money, and
          the headaches associated with them.
        </BodyText>
        <div className="features-btn-container">
          <BtnDark>Get Started</BtnDark>
          <BtnLight>Learn More</BtnLight>
        </div>
      </div>
      <div className="features-content-right">
        {miniCardDataArray.map((element, index) => {
          return (
            <MiniCard
              key={element.title}
              title={element.title}
              description={element.description}
              src={element.src}
            />
          );
        })}
      </div>
    </div>
  );
}

// extra code
// <div>
//   {aboutDataArray.map((element, index) => {
//     return (
//       <MiniCard
//         key={element.percentage}
//         percentage={element.percentage}
//         description={element.description}
//       />
//     );
//   })}
// </div>
// <div>
//   {partnersDataArray.map((element, index) => {
//     return (
//       <MiniCard key={element.alt} src={element.src} alt={element.alt} />
//     );
//   })}
// </div>

//minicard component
