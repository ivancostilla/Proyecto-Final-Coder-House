const hamburger = document.querySelector(".navbar__hamburger");
const navLinks = document.querySelector(".navbar__nav-links");
const links = document.querySelectorAll(".navbar__nav-links li");
const contactOff = document.getElementById('contact-menu-off');
const acordeon = document.getElementsByClassName('acordeon__box');


/* glidr.js el carrousel del index.html */
window.addEventListener('load', function() {
    new Glider(document.querySelector('.carrousel__lista'), {
        rewind: true,
        dots: '.carrousel__indicadores',
        arrows: {
            prev: '.carrousel__anterior',
            next: '.carrousel__siguiente'
        },
    });
});


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
window.sr = ScrollReveal();

sr.reveal('.scroll-r-group', {
    duration: 2000,
    origin: 'bottom',
    distance: '-50px',
});

sr.reveal('.sections-scroll-left-delay', {
    duration: 2000,
    delay: 2000,
    origin: 'left',
    distance: '500px',
});
sr.reveal('.sections-scroll-left', {
    duration: 2000,
    origin: 'left',
    distance: '500px',
});
sr.reveal('.sections-scroll-bottom', {
    duration: 2000,
    origin: 'bottom',
    distance: '500px',
});
sr.reveal('.spin', {
    delay: 100,
    duration: 2000,
    rotate: {
        x: 1,
        y: 180,
    }
});

sr.reveal('.sections-scroll-bottom-1', {
    duration: 1600,
    origin: 'bottom',
    distance: '500px',
});

sr.reveal('.sections-scroll-bottom-2', {
    duration: 1800,
    origin: 'bottom',
    distance: '500px',
});
sr.reveal('.sections-scroll-bottom-3', {
    duration: 2000,
    origin: 'bottom',
    distance: '500px',
});