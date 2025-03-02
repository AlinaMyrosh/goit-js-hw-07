const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const color = document.querySelector(".color");

btn.addEventListener("click", changeColor);

function changeColor(event) {
  const randomColor = getRandomHexColor();

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
}
