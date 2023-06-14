const accordionQuestions = document.querySelectorAll(".container-questions");

accordionQuestions.forEach((accordion) => {
  const header = accordion.querySelector(".accordion-header");
  const answer = accordion.querySelector(".answer");
  const icon = header.querySelector(".icon");

  header.addEventListener("click", () => {
    const isOpen = accordion.classList.contains("open");
    closeAllQuestions();
    if (!isOpen) {
      accordion.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.classList.remove("closed");
      icon.innerHTML = "-";
    } else {
      icon.innerHTML = "+";
    }
  });

  accordion.addEventListener("click", (e) => {
    if (!e.target.closest(".accordion-header")) {
      const isOpen = accordion.classList.contains("open");

      closeAllQuestions();

      if (!isOpen) {
        accordion.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.classList.remove("closed");
      }
    }
  });
});

function closeAllQuestions() {
  const openQuestions = document.querySelectorAll(".container-questions.open");

  openQuestions.forEach((question) => {
    const answer = question.querySelector(".answer");
    const icon = question.querySelector(".icon");
    question.classList.remove("open");
    answer.style.maxHeight = null;
    answer.classList.add("closed");
    icon.innerHTML = "+";
  });
}
