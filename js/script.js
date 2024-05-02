let slider = document.getElementById("slider");
let scroll = document.getElementById("scroll");
let sliderBtn = document.getElementById("scroll-btn");
let card = document.querySelectorAll("#card");
console.log(card);
console.log(sliderBtn);

sliderBtn.addEventListener("mousedown", function (e) {
  console.log(1);
  e.preventDefault();
  let shiftX = e.clientX - sliderBtn.getBoundingClientRect().left;

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);

  function onMouseMove(e) {
    let newLeft = e.clientX - shiftX - scroll.getBoundingClientRect().left;
    if (newLeft < 0) newLeft = 0;
    let rightEdge = scroll.offsetWidth - sliderBtn.offsetWidth;
    if (newLeft > rightEdge) newLeft = rightEdge;

    sliderBtn.style.left = newLeft + "px";
    card.forEach((card) => (card.style.left = -newLeft * 1.2 + "px"));
  }

  function onMouseUp() {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }
});

sliderBtn.addEventListener("touchstart", function (e) {
  e.preventDefault();

  let shiftX = e.touches[0].clientX - sliderBtn.getBoundingClientRect().left;

  document.addEventListener("touchmove", onMouseMove);
  document.addEventListener("touchend", onMouseUp);

  function onMouseMove(e) {
    let newLeft =
      e.touches[0].clientX - shiftX - scroll.getBoundingClientRect().left;

    if (newLeft < 0) newLeft = 0;
    let rightEdge = scroll.offsetWidth - sliderBtn.offsetWidth;
    if (newLeft > rightEdge) newLeft = rightEdge;

    sliderBtn.style.left = newLeft + "px";
    card.forEach((card) => (card.style.left = -newLeft * 1.2 + "px"));
  }

  function onMouseUp() {
    document.removeEventListener("touchmove", onMouseMove);
    document.removeEventListener("touchend", onMouseUp);
  }
});

sliderBtn.ondragstart = function () {
  return false;
};
