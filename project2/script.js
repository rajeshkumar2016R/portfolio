window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


var navbar = document.querySelector(".nav");
document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("nav-mobile");
}
document.querySelector("#close-btn-nav").onclick = () => {
    navbar.classList.remove("nav-mobile");
}

var logInform = document.querySelector(".login-form");
document.querySelector("#login-btn").onclick = () => {
    logInform.classList.add("active");
}
document.querySelector(".close-btn").onclick = () => {
    logInform.classList.remove("active");
}
