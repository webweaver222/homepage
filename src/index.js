import "bootstrap-4-grid";
import "./sass/fonts.sass";
import "./sass/reset.sass";
import "./sass/main.sass";
import { gsap } from "gsap";

let cx,
  cy,
  mouseX,
  mouseY,
  posX,
  posY,
  clientX,
  clientY,
  dx,
  dy,
  tiltx,
  tilty,
  request,
  radius,
  degree;

var lg = window.matchMedia("(max-width: 1700px)");

document.addEventListener("DOMContentLoaded", () => {
  // Custom JS

  const body = document.querySelector("body");

  cx = window.innerWidth / 2;
  cy = window.innerHeight / 2;

  body.addEventListener("mousemove", (e) => {
    clientX = e.pageX;
    clientY = e.pageY;

    request = requestAnimationFrame(updateMe);
  });

  function updateMe() {
    dx = clientX - cx;
    dy = clientY - cy;
    tiltx = dy / cy;
    tilty = dx / cx;
    radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
    degree = radius * 8;
    gsap.to(".content", lg ? 0.5 : 0.7, {
      transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )`,
    });
  }
});

import "./sass/media.sass";
