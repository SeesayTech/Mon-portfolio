const landing = document.querySelector(".landing");
const arrow_up = document.querySelector(".hide");
window.addEventListener("scroll", () => {
  if (landing.getBoundingClientRect().top <= -110) {
    arrow_up.classList.add("arrow-up");
    arrow_up.classList.remove("hide");
    console.log(landing.getBoundingClientRect().top);
  } else {
    arrow_up.classList.add("hide");
    arrow_up.classList.remove("arrow-up");
    console.log(landing.getBoundingClientRect().top);
  }
});

// menu toggler

const menuToggler = document.getElementById("menu-toggler");
const menu = document.getElementById("menu");
let showed = false;

menuToggler.addEventListener("click", () => {
  if(showed === false){
    menu.style.transform = "translateX(0vw)";
    menu.style.transition = "all .6s";
    showed = true;
  }
  else{
    menu.style.transform = "translateX(100vw)";
    menu.style.transition = "all .6s";
    showed = false;
  }
});
