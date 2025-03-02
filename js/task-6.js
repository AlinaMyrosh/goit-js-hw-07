const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", createMarkup);

function createMarkup() {
  const value = Number(input.value);
  if (value < input.min || value > input.max) {
    return;
  } else {
    boxesContainer.innerHTML = createBoxes(value);
    input.value = "";
  }
}

function createBoxes(amount) {
  const boxArray = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = {};
    box.width = `${size}px`;
    box.height = `${size}px`;
    box.backgroundColor = getRandomHexColor();
    boxArray.push(box);
    size += 10;
  }
  return boxArray
    .map(
      (item) =>
        `<div style="width: ${item.width}; height: ${item.height}; background-color: ${item.backgroundColor}"></div>`
    )
    .join("");
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

destroyBtn.addEventListener("click", () => {
  boxesContainer.innerHTML = "";
});
