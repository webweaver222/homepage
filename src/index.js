import "bootstrap-4-grid";
import "./sass/fonts.sass";
import "./sass/reset.sass";
import "./sass/main.sass";
import "./sass/bgc.sass";
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
var phone = window.matchMedia("(max-width: 480px)");

document.addEventListener("DOMContentLoaded", () => {
  // Custom JS

  const body = document.querySelector("body");

  cx = window.innerWidth / 2;
  cy = window.innerHeight / 2;

  body.addEventListener("mousemove", (e) => {
    clientX = e.pageX;
    clientY = e.pageY;

    requestAnimationFrame(updateMe);
  });

  function updateMe() {
    dx = clientX - cx;
    dy = clientY - cy;
    tiltx = dy / cy;
    tilty = dx / cx;
    radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
    degree = radius * (lg ? 5 : 4);
    gsap.to(".content", {
      transform: `rotate3d( ${-tiltx}, ${tilty}, 0, ${degree}deg )`,
      duration: 1,
    });
  }
});

import "./sass/media.sass";
