window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.style.background = window.scrollY > 50 ? "black" : "transparent";
});