const yesButton = document.querySelector(".yes");
const noButton = document.getElementById("noButton");
const hiddenMessage = document.getElementById("hiddenMessage");
const buttonsContainer = document.querySelector(".buttons");

yesButton.addEventListener("click", () => {
  hiddenMessage.classList.add("show");
  yesButton.textContent = "Sim ❤️";
  noButton.style.display = "none";
});

noButton.addEventListener("mouseenter", moveButton);
noButton.addEventListener("click", moveButton);

function moveButton() {
  const maxX = Math.max(
    buttonsContainer.clientWidth - noButton.offsetWidth,
    0
  );
  const maxY = Math.max(
    buttonsContainer.clientHeight - noButton.offsetHeight,
    0
  );

  noButton.style.position = "absolute";
  noButton.style.left = `${Math.random() * maxX}px`;
  noButton.style.top = `${Math.random() * maxY}px`;
}