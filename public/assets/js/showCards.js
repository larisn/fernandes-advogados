
const hiddenCards = document.querySelector(".hidden-cards");
const buttonShowCards = document.querySelector(".show-cards");

buttonShowCards.addEventListener("click", () => {
  hiddenCards.classList.toggle("visible");
  
  if (hiddenCards.classList.contains("visible")) {
    buttonShowCards.querySelector("h3").textContent = "Ver menos áreas";
  } else {
    buttonShowCards.querySelector("h3").textContent = "Ver todas as áreas";
  }
});
