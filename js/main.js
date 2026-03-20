window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.style.background = window.scrollY > 50 ? "black" : "transparent";
});

const elements = document.querySelectorAll(".card, .review");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(50px)";
  observer.observe(el);
});