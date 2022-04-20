var element = document.getElementById("spin");
text = ["dolphins", "whales", "turtles", "seabirds"];
element.innerHTML = text[0];
let timer = 0;

setInterval(function () {
  element.innerHTML = text[timer];
  element.className = "";
  if (timer % 4 == 0) {
    element.classList.add("dolphins");
  }
  if (timer % 4 == 1) {
    element.classList.add("whales");
  }
  if (timer % 4 == 2) {
    element.classList.add("turtles");
  }
  if (timer % 4 == 3) {
    element.classList.add("seabirds");
  }
  if (timer == 3) {
    timer = 0;
  } else {
    timer++;
  }
}, 2000);

function fadeInUp(elem) {}

function fadeOutUp(elem) {}
