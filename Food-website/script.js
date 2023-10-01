// ========= MENU-DISH VARIABLES =============
let slider = document.querySelector(".menu-row");
let menu = document.querySelector(".new-dish");
let dinner = document.querySelector(".new-dinner")
let lunch = document.querySelector(".lunch");
let nightDish = document.querySelector(".Dinnrer");

// =========== CONTACT VIDEO VARIABLE ==========
let play = document.querySelector(".play-btn");
let video = document.querySelector(".video-container");
let close = document.querySelector(".close-btn");

// ================ NAVBAR VARIABLE =============
let navMenu = document.querySelector(".meenu-btn");
let nav = document.querySelector(".nav");
let navClose =document.querySelector(".navclose-btn");


// ========= STICKEY NAV =============
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
});

// ========= MENU-DISH FUNCTIONS =============
slider.addEventListener("click", () => {
    slider.classList.add("active");
    dinner.classList.remove("active");
    menu.classList.remove("active");
    nightDish.classList.remove("Dinnrer-active");
    lunch.classList.remove("lunch-active");
})
menu.addEventListener("click", () => {
    slider.classList.remove("active");
    dinner.classList.remove("active");
    menu.classList.add("active");
    lunch.classList.add("lunch-active");
    nightDish.classList.remove("Dinnrer-active"); 
})
dinner.addEventListener("click", () => {
    slider.classList.remove("active");
    menu.classList.remove("active");
    dinner.classList.add("active");
    nightDish.classList.add("Dinnrer-active");
})

// ========= VIDEO POP UP FUNCTIONS =============
play.addEventListener("click", () => {
    video.classList.add("video-active");
})

close.addEventListener("click", () => {
    video.classList.remove("video-active");
})

// ========= NAVBAR FUNCTIONS =============
navMenu.addEventListener("click", () => {
    nav.classList.add("nav-active");
})
navClose.addEventListener("click", () => {
    nav.classList.remove("nav-active");
})
nav.addEventListener("click", () => {
    nav.classList.remove("nav-active");
})









