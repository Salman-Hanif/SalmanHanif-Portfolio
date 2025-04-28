let after = document.querySelector(".after");
after.classList.remove("hatao");
let type2 = new Typed(".type2", {
  strings: ["CODER", "FRONTEND DEVELOPER", "WEB DESIGNER"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(`header nav a[href*="${id}"]`)
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let preLoader  = document.getElementById('pre-loader')
window.addEventListener("load",()=>{
  preLoader.style.display="none"
})