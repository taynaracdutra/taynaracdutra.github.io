const cardsNew = document.querySelectorAll(".cardNew");

cardsNew.forEach((cardNew) => {
  const cardNewContent = cardNew.querySelector(".cardNew-content");

  cardNew.addEventListener("mouseover", () => {
    cardNewContent.style.maxHeight = cardNewContent.scrollHeight + "px";
  });

  cardNew.addEventListener("mouseleave", () => {
    cardNewContent.style.maxHeight = 0;
  });
});
