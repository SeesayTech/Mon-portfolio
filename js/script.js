const landing = document.querySelector(".landing");
const arrow_up = document.querySelector(".hide");
window.addEventListener("scroll", () => {
  if (landing.getBoundingClientRect().top <= 60) {
    arrow_up.classList.add("arrow-up");
    arrow_up.classList.remove("hide");
    console.log(landing.getBoundingClientRect().top);
  } else {
    arrow_up.classList.add("hide");
    arrow_up.classList.remove("arrow-up");
    console.log(landing.getBoundingClientRect().top);
  }
});
