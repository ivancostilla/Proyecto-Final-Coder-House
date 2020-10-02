const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const contactOff = document.getElementById('contact-menu-off');
const acordeon = document.getElementsByClassName('acordeon__contenedor-box');

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});

contactOff.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});

for (i = 0; i < acordeon.length; i++) {
    acordeon[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
};