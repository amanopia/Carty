import "./CtaSection.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import sim from "../assets/sim.png";
import { Heading, BtnLight } from "../StyledComponents/Heading.js";
import handImg from "../assets/hand.png";
import starImg from "../assets/star.png";

import { useRef, useState } from "react";
import Card from "../Cards/Cards.jsx";
export default function CtaSection() {
  const ctaContentLeftRef = useRef();
  const headingRef = useRef();
  const buttonRef = useRef();

  const ctaContentRightRef = useRef();
  const handIconRef = useRef();

  //! GSAP STUFF
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let contentLeftTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ctaContentLeftRef.current,
        markers: true,
        start: "top 50%",
        end: "bottom 50%",
      },
    });

    let contentRightTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ctaContentRightRef.current,
        markers: true,
        start: "top 50%",
        end: "bottom 50%",
      },
    });

    contentRightTimeline
      .to(".cta-content-right .card, .cta-content-right .card .card-overlay", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
      })
      .to(
        handIconRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=0.2"
      )
      .to(
        ".star-images img",
        {
          opacity: 1,
          y: 10,
          stagger: 0.2,
        },
        "-=0.2"
      )
      .to(".cta-content-right .card, .cta-content-right .card .card-overlay", {
        y: -15,
        repeat: -1,
        duration: 2.5,
        ease: "power1.out",
        yoyo: true,
      });

    contentLeftTimeline
      .to(headingRef.current, {
        transform: "translateY(0)",
        delay: 0.2,
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      })
      .to(buttonRef.current, {
        opacity: 1,
      });
  });
  return (
    <div className="cta-parent">
      <div className="cta-content-left" ref={ctaContentLeftRef}>
        <Heading ref={headingRef}>
          Embark on your banking journey into the future with Chase today
        </Heading>
        <BtnLight ref={buttonRef}>Try Chase Now</BtnLight>
      </div>
      <div className="cta-content-right" ref={ctaContentRightRef}>
        {/* <Card
          R={169}
          G={31}
          B={255}
          id="cf"
          src="https://img.icons8.com/sf-regular-filled/48/wifi.png"
          username={username}
          exp={exp}
          visaIcon={visaIcon}
          img={sim}></Card> */}
        <img
          className="handImage"
          src={handImg}
          alt="some-img"
          height="300"
          ref={handIconRef}
        />

        <div className="star-images">
          <img className="star" src={starImg} alt="some-img" />
          <img className="star" src={starImg} alt="some-img" />
          <img className="star" src={starImg} alt="some-img" />
        </div>
      </div>
    </div>
  );
}

//  R: 169,
//     G: 31,
//     B: 255,
//     id: "c2",
//     person: "John Frank Chena",
//     exp: "09/24",
//     src: "https://img.icons8.com/sf-regular-filled/48/wifi.png",
//     sim: sim,

const username = "John Frank Chena";
const exp = "09/24";
const visaIcon =
  "data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMy45NjcgMTMuODM3Yy0uNzY2IDAtMS4xODYtLjEwNS0xLjgzMS0uMzdsLS4yMzktLjEwOS0uMjcxIDEuNTc1Yy40NjYuMTkyIDEuMzA2LjM1NyAyLjE3NS4zNyAyLjA0MSAwIDMuMzc1LS45NDcgMy4zOTEtMi40MDQuMDE2LS44MDEtLjUxLTEuNDA5LTEuNjIxLTEuOTEtLjY3NC0uMzI1LTEuMDk0LS41NDMtMS4wOTQtLjg3MyAwLS4yOTIuMzU5LS42MDMgMS4xMDktLjYwMy42NDUtLjAxIDEuMDk2LjEyNyAxLjQ1NS4yNjlsLjE4LjA4LjI3MS0xLjUyMi0uMDQ3LjAxYy0uMzg3LS4xNDQtLjk5LS4yOTctMS43NC0uMjk3LTEuOTIgMC0zLjI3NS45NTQtMy4yODUgMi4zMjEtLjAxMiAxLjAwNS45NjQgMS41NzEgMS43MDEgMS45MDguNzU3LjM0NSAxLjAxLjU2MiAxLjAwOC44NzJDMTUuMTI0IDEzLjYyNSAxNC41MjQgMTMuODM3IDEzLjk2NyAxMy44Mzd6TTIyLjQyOCA4LjE4MmgtMS41Yy0uNDY3IDAtLjgxNi4xMjUtMS4wMjEuNTgzbC0yLjg4NSA2LjQ0aDIuMDQxbC40MDgtMS4wNTQgMi40OS4wMDJjLjA2MS4yNDYuMjQgMS4wNTIuMjQgMS4wNTJIMjRMMjIuNDI4IDguMTgyek0yMC4wMyAxMi43MWwuNzc0LTEuOTYzYy0uMDEuMDIuMTYtLjQwNi4yNTgtLjY3bC4xMzMuNjA2LjQ0OSAyLjAyN0gyMC4wM3oiLz48cG9seWdvbiBwb2ludHM9IjguNDQ0IDE1LjE0OSAxMC4zODggMTUuMTQ5IDExLjYwMyA4LjEyMyA5LjY2IDguMTIzIDkuNjYgOC4xMjEiLz48cGF0aCBkPSJNNC45MjMsMTIuOTcxbC0wLjIwMi0wLjk3NnYwLjAwM0w0LjAzOSw4Ljc3MkMzLjkyMiw4LjMyNSwzLjU4LDguMTkzLDMuMTU2LDguMTc3SDAuMDI1TDAsOC4zMjVDMC43MDUsOC40OSwxLjM0LDguNzI5LDEuOTA4LDkuMDIyYzAuMTAyLDAuMDYzLDAuMTQ1LDAuMTMyLDAuMTgsMC4yMzRsMS42OCw1LjkzOWgyLjA1NGwzLjA2MS03LjAxM0g2LjgyNEw0LjkyMywxMi45NzF6Ii8+PC9zdmc+";

// RESERVE
// <g style="mix-blend-mode:overlay" opacity="0.25">
//   <path
//     d="M-72.8645 105.564C-52.8424 77.4503 -26.1685 59.0351 12.9917 54.7824C134.279 41.6108 240.823 146.173 360.045 88.8215"
//     stroke="url(#Standalone-paint0_linear_3014_224244)"
//     stroke-linecap="round"></path>
//   <path
//     d="M-72.511 113.162C-52.4889 85.049 -25.8149 66.6337 13.3452 62.381C134.633 49.2094 241.176 153.772 360.398 96.4201"
//     stroke="url(#Standalone-paint1_linear_3014_224244)"
//     stroke-linecap="round"></path>
//   <path
//     d="M-73.2815 99.7282C-53.2594 71.6149 -26.5855 53.1996 12.5747 48.9469C133.862 35.7754 240.406 140.338 359.628 82.9861"
//     stroke="url(#Standalone-paint2_linear_3014_224244)"
//     stroke-linecap="round"></path>
//   <path
//     d="M-75.2307 92.6618C-55.2086 64.5485 -28.5347 46.1332 10.6255 41.8805C131.913 28.709 238.456 133.271 357.679 75.9197"
//     stroke="url(#Standalone-paint3_linear_3014_224244)"
//     stroke-linecap="round"></path>
//   <path
//     d="M-76.0569 86.4221C-56.0348 58.3087 -29.3608 39.8935 9.79933 35.6408C131.087 22.4692 237.63 127.032 356.852 69.6799"
//     stroke="url(#Standalone-paint4_linear_3014_224244)"
//     stroke-linecap="round"></path>
//   <path
//     d="M-76.885 80.1838C-56.8629 52.0704 -30.189 33.6552 8.97121 29.4025C130.259 16.2309 236.802 120.793 356.024 63.4416"
//     stroke="url(#Standalone-paint5_linear_3014_224244)"
//     stroke-linecap="round"></path>
//   <path
//     d="M-68.4387 138.863C-48.4166 110.75 -21.7427 92.3349 17.4175 88.0822C138.705 74.9106 245.248 179.473 364.471 122.121"
//     stroke="url(#Standalone-paint6_linear_3014_224244)"
//     stroke-linecap="round"></path>
//   <path
//     d="M-68.0852 146.462C-48.0631 118.348 -21.3892 99.933 17.771 95.6803C139.059 82.5088 245.602 187.071 364.824 129.719"
//     stroke="url(#Standalone-paint7_linear_3014_224244)"
//     stroke-linecap="round"></path>
//   <path
//     d="M-68.8557 133.028C-48.8336 104.914 -22.1597 86.4989 17.0005 82.2462C138.288 69.0747 244.831 173.637 364.054 116.285"
//     stroke="url(#Standalone-paint8_linear_3014_224244)"
//     stroke-linecap="round"></path>
//   <path
//     d="M-70.8049 125.962C-50.7829 97.8483 -24.1089 79.433 15.0513 75.1803C136.339 62.0088 242.882 166.571 362.104 109.219"
//     stroke="url(#Standalone-paint9_linear_3014_224244)"
//     stroke-linecap="round"></path>
//   <path
//     d="M-71.6311 119.721C-51.609 91.608 -24.9351 73.1928 14.2251 68.9401C135.513 55.7685 242.056 160.331 361.278 102.979"
//     stroke="url(#Standalone-paint10_linear_3014_224244)"
//     stroke-linecap="round"></path>
//   <path
//     d="M-72.4592 113.484C-52.4372 85.3702 -25.7632 66.955 13.397 62.7023C134.685 49.5307 241.228 154.093 360.45 96.7414"
//     stroke="url(#Standalone-paint11_linear_3014_224244)"
//     stroke-linecap="round"></path>
// </g>;
