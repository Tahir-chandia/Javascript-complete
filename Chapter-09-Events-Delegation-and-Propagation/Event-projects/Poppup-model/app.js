let btn = document.querySelector("button");
let div = document.querySelector(".modelContainer");

btn.addEventListener("click", () => {
  div.style.display = "flex";
});

div.addEventListener("click", (event) => {
  let target = event.target;
  if (target.className === "modelContainer") {
    div.style.display = "none";
  }
});
