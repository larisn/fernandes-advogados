
const navMobile = document.querySelector('.nav-mobile');
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-list a");
const nav = document.querySelector(".navbar");

navMobile.addEventListener('click', () => {
  navMobile.classList.toggle('active');
  navList.classList.toggle('visible');
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
  navMobile.classList.remove("active");
  navList.classList.remove("visible");
  });
});

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 0) {
    nav.classList.add("solid-nav");
  } else {
    nav.classList.remove("solid-nav");
  }
});

