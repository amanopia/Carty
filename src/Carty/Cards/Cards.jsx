import "./Cards.css";
import { useEffect, useRef } from "react";

export default function Card({
  R,
  G,
  B,
  id,
  src,
  img,
  username,
  exp,
  visaIcon,
  radialGradient,
  height,
  width,
}) {
  const overlayRef = useRef();
  useEffect(() => {
    // portrait mode
    if (width <= 430 && height <= 932) {
      overlayRef.current.style.backgroundImage = radialGradient;
    } else if (width <= 932 && height <= 430) {
      overlayRef.current.style.backgroundImage = radialGradient;
    } else {
      overlayRef.current.style.backgroundImage = "";
      animateCardOne(R, G, B, id);
    }
  });

  return (
    <div className="card my-card">
      <div ref={overlayRef} className="card-overlay">
        <div className="card-content-top">
          <div className="card-content-left">
            <h1>Chase</h1>
            <img src={src} alt="" height="48" width="48" />
          </div>
          <img src={img} alt="" height="70" width="70" />
        </div>
        <div className="card-content-bottom">
          <div className="card-content-bottom-left">
            <p>{username}</p>
            <p>
              Exp &nbsp;<span>{exp}</span>
            </p>
          </div>
          <div className="card-content-bottom-right">
            <img src={visaIcon} alt="" />
          </div>
        </div>
      </div>
      <canvas id={id} className="card" height="35" width="35"></canvas>
    </div>
  );
}

function cycleGradients() {}

function animateCardOne(red, green, blue, id) {
  let c = document.getElementById(id);
  let $ = c.getContext("2d");

  let col = function (x, y, r, g, b) {
    $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
    $.fillRect(x, y, 1, 1);
  };

  let R = function (x, y, t) {
    return Math.floor(
      red +
        64 *
          Math.sin(
            5 * Math.sin(t / 9) +
              ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
          )
    );
  };

  let G = function (x, y, t) {
    return Math.floor(green + 64 * Math.cos((x * x - y * y) / 300 + t));
  };

  let B = function (x, y, t) {
    return Math.floor(
      blue +
        64 * Math.sin((x * x * Math.sin(t / 4) + y * y * Math.sin(t / 3)) / 300)
    );
  };

  let t = 0;

  let run = function () {
    for (let x = 0; x <= 35; x++) {
      for (let y = 0; y <= 35; y++) {
        col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
      }
    }
    t = t + 0.05;
    window.requestAnimationFrame(run);
  };

  run();
}
