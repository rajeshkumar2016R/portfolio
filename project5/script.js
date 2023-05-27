// ====== menubtn variable ==============
let menu = document.querySelector(".menu");
let menubtn = document.querySelector(".menu-btn");

// ====== messanger variable ==============
let messagebtn = document.querySelector(".message-btn");
let messenger = document.querySelector(".messenger");

// ====== messanger chat box variable ==============
let messageBox = document.querySelector(".messanger-chat-box-container");
let messageName = document.querySelector(".messenger-message");
let contactImg = document.querySelector(".contact-img");
let closeBtn = document.querySelector(".close");

// ====== notificatio variable ==============
let notificationbtn = document.querySelector(".noti-btn");
let notification = document.querySelector(".notification");

// ====== profile variable ==============
let profileImg = document.querySelector(".profile-slide");
let profile = document.querySelector(".profile");

// ====== see-more variable ==============
let seeMore = document.querySelector(".see");
let seeIcon = document.querySelector(".see-more");

// ================= menu-function ================
menubtn.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
});
menubtn.addEventListener("click", () => {
    messenger.classList.remove("messenger-active");
    notification.classList.remove("notification-active");
    profile.classList.remove("profile-active");
});

// ================= messanger-function ================
messagebtn.addEventListener("click", () => {
    messenger.classList.toggle("messenger-active");
});
messagebtn.addEventListener("click", () => {
    menu.classList.remove("menu-active");
    notification.classList.remove("notification-active");
    profile.classList.remove("profile-active");
});

// ================= notification-function ================
notificationbtn.addEventListener("click", () => {
    notification.classList.toggle("notification-active");
});
notificationbtn.addEventListener("click", () => {
    messenger.classList.remove("messenger-active");
    menu.classList.remove("menu-active");
    profile.classList.remove("profile-active");
});

// ================= profile-function ================
profileImg.addEventListener("click", () => {
    profile.classList.toggle("profile-active");
});
profileImg.addEventListener("click", () => {
    menu.classList.remove("menu-active");
    messenger.classList.remove("messenger-active");
    notification.classList.remove("notification-active");
});

// ================= menu-function ================
seeMore.addEventListener("click", () => {
    seeIcon.classList.toggle("see-more-active");
});

// =========== messanger chat box function ===============
messageName.addEventListener("click", () => {
    messageBox.classList.toggle("messanger-chat-box-container-active");
});
contactImg.addEventListener("click", () => {
    messageBox.classList.toggle("messanger-chat-box-container-active");
});
closeBtn.addEventListener("click", () => {
    messageBox.classList.remove("messanger-chat-box-container-active");
});



