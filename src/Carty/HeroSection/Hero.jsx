import "./Hero.css";
import Navigation from "./Navigtion/Navigation";
import MidSection from "./MidSection";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Card from "../Cards/Cards";

import dataArray from "../Cards/cardsDataArray.js";
import useWindowResizing from "../WindowResizing.jsx";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
// handy replacement or useEffect, hnadles cleanup automatically , allows to scope animations in the componnet ,
// helps react to changes in state
// cleanup is encessary when components unmount becasue we dont' twant them sticking around and taking memory
export default function Hero() {
  const box = useRef();
  const animatedDiv = useRef();
  const btn = useRef();

  // Returns an object with height and width
  const windowSize = useWindowResizing();

  new SplitType(box.current, { types: "words, lines" });
  new SplitType(animatedDiv.current, { types: "words, lines" });

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();
    tl.from("h1 .line .word", { opacity: 0 }).to("h1 .line .word", {
      y: 0,
      stagger: "0.1",
      duration: 1.6,
      delay: 0.2,
      opacity: 1,
      ease: "expo.out",
    });

    // .from(animatedDiv.current, { y: 50, opacity: 0, duration: 1.5 })
    tl2.to(".div2 p .word", {
      y: 0,

      duration: 1.6,
      delay: 0.2,
      opacity: 1,
      ease: "expo.out",
    });
    tl2.from(btn.current, {
      opacity: 0,

      duration: 1.2,
    });
    tl2.to(btn.current, {
      opacity: 1,
    });

    let animationDataArray = [-20, 20];
    let xPositionArray = ["30%", "70%"];

    let triggerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards-main-container",
        markers: true,
        start: `${
          windowSize.width < "575.98" && windowSize.height <= 670
            ? "-70%"
            : windowSize.width > "575.98"
            ? "top"
            : ""
        } 1%`,
        end: "bottom 1%",
        scrub: 0.8,
        duration: 0.4,
        pin: ".hero_container",
      },
    });

    let yPositionArray = [0, 300, 500];
    let yFinalPositionArray = [0, 40, -100];
    let indexArray = [1, 2, 3];

    // gsap.set(
    //   [
    //     ".cards-main-container .my-card:nth-child(1)",
    //     ".cards-main-container .my-card:nth-child(2)",
    //     ".cards-main-container .my-card:nth-child(3)",
    //   ],
    //   {
    //     yPercent: (index) => 180 * index,
    //   }
    // );
    if (windowSize.width < 575.98) {
      triggerTimeline
        .from(
          [
            ".cards-main-container .my-card:nth-child(1)",
            ".cards-main-container .my-card:nth-child(2)",
            ".cards-main-container .my-card:nth-child(3)",
          ],
          {
            index: (index) => indexArray[index],
            y: (index) => yPositionArray[index],
          }
        )
        .to(
          [
            ".cards-main-container .my-card:nth-child(1)",
            ".cards-main-container .my-card:nth-child(2)",
            ".cards-main-container .my-card:nth-child(3)",
          ],
          {
            y: (index) => yFinalPositionArray[index],
          }
        );
    } else {
      triggerTimeline.to(
        [
          ".cards-main-container .my-card:nth-child(1)",
          ".cards-main-container .my-card:nth-child(3)",
        ],
        {
          rotate: (index) => animationDataArray[index],
          left: (index) => xPositionArray[index],
          opacity: 1,
        }
      );
    }
  });

  return (
    <div className="hero_container">
      <Navigation></Navigation>
      <div className="hero_title_content">
        <div className="div1">
          <h1 ref={box}>Digitize your finances</h1>
        </div>
        <div className="div2">
          <p ref={animatedDiv}>
            Money should be easy. It's time to say goodbye to banks and
            financial services that don't work for you
          </p>
          <div ref={btn} className="hero_title_content_buttons">
            <button className="cta">Digitize Now</button>
            <button className="play">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvUlEQVR4nO3WoWqCURjH4Q8mYlo0WAxegDdgWrR4F1aj1bhbsC5ajZbBEItF8Ao0CivDIrhHBF9YnIOdg58+N/Arh/95i+IhJ8yxQi91+KcFOjnCYYpWjvDZAWPUU4fDF0aopQ6HLfp4Sh0Oa3RzhMMM7RzhsyMmaKYOhz1e8Zw6HHYYopo6HN7vJrzDAJXSPq4j3tD4dTDc0oAs8fLnYLgiuEn9SXxeRqFW2kPg+zL8rdIeex9ZztuH4h+cANx73pV8PrVwAAAAAElFTkSuQmCC" />
            </button>
          </div>
        </div>
      </div>

      <MidSection></MidSection>
      <div className="con">
        <div className="cards-main-container">
          {dataArray.map((element, index) => {
            return (
              <Card
                key={element.id}
                R={element.R}
                G={element.G}
                B={element.B}
                id={element.id}
                src={element.src}
                img={element.sim}
                username={element.username}
                exp={element.exp}
                visaIcon={element.visaIcon}
                radialGradient={element.radialGradient}
                height={windowSize.height}
                width={windowSize.width}></Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// const line = document.querySelectorAll(".line");
