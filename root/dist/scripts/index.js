const hamburger = document.querySelector(".navbar__hamburger");
const navLinks = document.querySelector(".navbar__nav-links");
const links = document.querySelectorAll(".navbar__nav-links li");
const contactOff = document.getElementById('contact-menu-off');
const acordeon = document.getElementsByClassName('acordeon__box');

/* menu responsive */
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

/* acordeon */
for (i = 0; i < acordeon.length; i++) {
    acordeon[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
};

/* scrollreveal */

ScrollReveal().reveal('.nabvar', {
    duration: 3000
});