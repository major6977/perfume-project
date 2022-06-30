// Blinking Text

let speed = 500;
setInterval(function () {
  let blink = document.getElementById("blink");

  blink.style.visibility =
    blink.style.visibility == "hidden" ? "visible" : "hidden";
  blink.style.color = "red";
  blink.style.fontSize = "20px";
}, speed);
