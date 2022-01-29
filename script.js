const btn = document.getElementById("btn");
const boxContainer = document.getElementById("boxes");

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const boxEl = document.createElement("div");
      boxEl.classList.add("box");
      boxEl.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxContainer.appendChild(boxEl);
    }
  }
}

btn.addEventListener("click", () => {
  boxContainer.classList.toggle("big");
});

createBoxes();

window.addEventListener("load", () => {
  const sound = document.getElementById("dogo");
  sound.play();
});
