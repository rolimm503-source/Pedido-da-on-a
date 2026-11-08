const yesButton = document.querySelector(".yes");
const noButton = document.getElementById("noButton");
const hiddenMessage = document.getElementById("hiddenMessage");

yesButton.addEventListener("click", () => {
  hiddenMessage.classList.add("show");
  yesButton.textContent = "Sim ❤️";
  noButton.style.display = "none";
});

noButton.addEventListener("mouseenter", moveButton);
noButton.addEventListener("click", moveButton);

function moveButton() {
  const margin = 12;
  const maxX = Math.max(
    window.innerWidth - noButton.offsetWidth - margin * 2,
    0
  );
  const maxY = Math.max(
    window.innerHeight - noButton.offsetHeight - margin * 2,
    0
  );

  noButton.style.position = "fixed";
  noButton.style.zIndex = "10";
  noButton.style.left = `${margin + Math.random() * maxX}px`;
  noButton.style.top = `${margin + Math.random() * maxY}px`;
}