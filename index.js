let menuIcon = document.getElementById("menu-icon");
let contactHead = document.getElementById("contact-header");
let subTitles = document.getElementsByClassName("section_subtitle--exp");
let subArticles = document.getElementsByClassName("art");
let hideMe = document.getElementsByClassName("hide");

let toggleNav = document.querySelector(".nav-bar");
let headers = [...subTitles, contactHead];


menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle('menu-open');
    toggleNav.classList.toggle('menu-open')
});

for (let i = 0; i < headers.length; i++) {
    headers[i].addEventListener("click", () => {
        subArticles[i].classList.toggle('hidden');
    })
}

for (let i = 0; i < subTitles.length; i++) {
    subTitles[i].addEventListener("click", () => {
        hideMe[i].innerHTML === "&#9650"
        ? hideMe[i].innerHTML = "&#9660"
        : hideMe[i].innerHTML = "&#9650";
        console.log(hideMe);
    })
}