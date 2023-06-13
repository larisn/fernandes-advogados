
const accordionQuestions = document.querySelectorAll(".container-questions");

accordionQuestions.forEach((accordion) => {
  const header = accordion.querySelector(".accordion-header");
  const answer = accordion.querySelector(".answer");
  
  header.addEventListener("click", () => {
    const isOpen = accordion.classList.contains("open");
    closeAllQuestions();
    if (!isOpen) {
      accordion.classList.add("open");
      answer.classList.remove("closed");
    }
  });

  accordion.addEventListener("click", (e) => {
    if (!e.target.closest(".accordion-header")) {
      const isOpen = accordion.classList.contains("open");

      closeAllQuestions();

      if (!isOpen) {
        accordion.classList.add("open");
        answer.classList.remove("closed");
      }
    }
  });
});

function closeAllQuestions() {
  const openQuestions = document.querySelectorAll(".container-questions.open");
  const openAnswers = document.querySelectorAll(".container-questions .answer:not(.closed)");
  
  openQuestions.forEach((question) => {
    question.classList.remove("open");
  });
  openAnswers.forEach((answer) => {
    answer.classList.add("closed");
  });
}
