import "./PartnersSection.css";
import MiniCard from "../FeaturesSection/MiniCard";
import { partnersDataArray } from "../FeaturesSection/MiniCardDataArray";
import { Heading, Super, BodyText } from "../StyledComponents/Heading";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function PartnersSection() {
  const numberRef = useRef();
  const partnersRef = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let numberTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: numberRef.current,
        start: "top 50%",
        end: "80% 50%",
        // markers: true,
        scrub: 0.2,
      },
    });
    let cardsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: partnersRef.current,
        start: "-30% 50%",
        bottom: "50% 50%",
        markers: true,
        toggleActions: "play pause resume reset",
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

    cardsTimeline
      .from(".partners-content-bottom div", {
        opacity: 0,
        y: -50,
      })
      .to(".partners-content-bottom div", {
        y: 0,
        opacity: 1,
        stagger: 0.05,
      });
  });

  return (
    <div className="partners-parent">
      <div className="number">
        <p ref={numberRef}>04</p>
      </div>
      <div className="partners-content-top">
        <div className="partners-content-left">
          <Super>Partners</Super>
          <Heading>Meet our most trusted partners </Heading>
        </div>
        <div className="partners-content-right">
          <BodyText>
            Chase's adaptability to meet the specific process requirements of
            global companies is demonstrated through its support for numerous
            banking channels
          </BodyText>
        </div>
      </div>
      <div ref={partnersRef} className="partners-content-bottom">
        {partnersDataArray.map((element, index) => {
          return (
            <MiniCard
              src={element.src}
              alt={element.alt}
              key={element.alt}></MiniCard>
          );
        })}
      </div>
    </div>
  );
}
