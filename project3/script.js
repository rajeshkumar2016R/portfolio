var header = document.getElementById("header");
var ms = document.getElementById("models");
var mx = document.getElementById("modelx");
var my = document.getElementById("modely");
var m3 = document.getElementById("model3");
var mm = document.getElementById("modelm");
var mv = document.getElementById("modelv");
var range = document.getElementById("range");
var speed = document.getElementById("speed");

ms.onclick = function (){
    header.style.backgroundImage = "url(images/4k-2020-cars-tesla-roadster-electric-car-wallpaper-preview.jpg)";
    range.innerHTML = "396";
    speed.innerHTML = "250";
}
mx.onclick = function (){
    header.style.backgroundImage = "url(images/car2.webp)";
    range.innerHTML = "380";
    speed.innerHTML = "280";
}
my.onclick = function (){
    header.style.backgroundImage = "url(images/car28.jpg)";
    range.innerHTML = "480";
    speed.innerHTML = "270";
}
m3.onclick = function (){
    header.style.backgroundImage = "url(images/car7.jpg)";
    range.innerHTML = "350";
    speed.innerHTML = "220";
}
mm.onclick = function (){
    header.style.backgroundImage = "url(images/car27.webp)";
    range.innerHTML = "380";
    speed.innerHTML = "240";
}
mv.onclick = function (){
    header.style.backgroundImage = "url(images/car8.webp)";
    range.innerHTML = "399";
    speed.innerHTML = "290";
}
// ===========loginform==========
var loginform = document.querySelector(".login-form");
document.querySelector(".login").onclick = () => {
    loginform.classList.add("active");
}
document.querySelector("#close-btn").onclick = () => {
    loginform.classList.remove("active");
}
// =========== menu ==============
var navbar = document.querySelector(".navbar");
document.querySelector(".menu").onclick = () => {
    navbar.classList.add("nav-mobile-active");
}
document.querySelector("#close-nav").onclick = () => {
    navbar.classList.remove("nav-mobile-active");
}
