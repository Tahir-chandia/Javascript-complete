let smallCursor = document.querySelector(".smallCursor");
let big = document.querySelector(".bigCursor");

let mouseX = 0;
let mouseY = 0;
let animationId = null;
let timer = null;

function animateCursor() {
  let currentX = parseFloat(big.style.left) || 0;
  let currentY = parseFloat(big.style.top) || 0;

  let distanceX = mouseX - currentX;
  let distanceY = mouseY - currentY;

  big.style.left = currentX + distanceX * 0.05 + "px";
  big.style.top = currentY + distanceY * 0.05 + "px";
  animationId = requestAnimationFrame(animateCursor);
  //function ko loop me chalata h 1 second me 60 time chalta h
}
document.addEventListener("mousemove", function (eventObj) {
  mouseX = eventObj.clientX;
  mouseY = eventObj.clientY;

  smallCursor.style.left = mouseX + "px";
  smallCursor.style.top = mouseY + "px";

  if (!animationId) {
    animateCursor();
  }
  clearTimeout(timer);
  timer = setTimeout(() => {
    cancelAnimationFrame(animationId);
    animationId = null;
  }, 2000);
});
