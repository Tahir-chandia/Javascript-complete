let display = document.querySelector(".display");
function appeneValue(number) {
  if (display.innerHTML == "0" ||display.innerHTML == "Infinity" || display.innerHTML == "Error") {
    display.innerHTML = number;
    return;
  }
  display.innerHTML = `${display.innerHTML}${number}`;
}
function cleardisplay() {
  display.innerHTML = "0";
}
function calculate() {
  try {
    display.innerHTML = eval(display.innerHTML);
  } catch (error) {
    display.innerHTML = "Error";
  }
}
