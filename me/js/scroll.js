// reference https://codepen.io/emgiust/pen/rdOJwQ
const body = document.body,
scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
height = scrollWrap.getBoundingClientRect().height - 1,
speed = 0.04;

var offset = 1000;

body.style.height = Math.floor(height) + "px";

function scrolls() {
offset += (window.pageYOffset - offset) * speed;

var scroll = "translateY(-" + offset + "px) translateZ(0)";
scrollWrap.style.transform = scroll;

callScroll = requestAnimationFrame(scrolls);
}

scrolls();
const content = document.querySelector("section");
let currentPos = window.pageYOffset;

const Distort = function () {
const newPos = window.pageYOffset;
const diff = newPos - currentPos;
const speed = diff * 0.35;

content.style.transform = "skewY(" + speed + "deg)";
currentPos = newPos;
requestAnimationFrame(Distort);
};

Distort();