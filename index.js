let menuIcon = document.getElementById("menu-icon");

let zuriArt = document.getElementById("zuri-art");
let afroArt = document.getElementById("afro-art");
let hngArt = document.getElementById("hng-art");
let contactForm = document.getElementById("contact-form");
let zurichatArt = document.getElementById("zurichat-art");
let blockgamesArt = document.getElementById("blockgames-art");
let fullstackArt = document.getElementById("fullstack-art");

let zuriHead = document.getElementById("zuri-header");
let afroHead = document.getElementById("afro-header");
let hngHead = document.getElementById("hng-header");
let contactHead = document.getElementById("contact-header");
let zurichatHead = document.getElementById("zurichat-header");
let blockgamesHead = document.getElementById("blockgames-header");
let fullstackHead = document.getElementById("fullstack-header");

let toggleNav = document.querySelector(".nav-bar");


let headers = [zuriHead, afroHead, hngHead, zurichatHead, blockgamesHead, fullstackHead, contactHead];
let subArticles = [zuriArt, afroArt, hngArt, zurichatArt, blockgamesArt, fullstackArt, contactForm];

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle('menu-open');
    toggleNav.classList.toggle('menu-open')
});

for (let i = 0; i < headers.length; i++) {
    headers[i].addEventListener("click", () => {
        subArticles[i].classList.toggle('hidden');
    })
}