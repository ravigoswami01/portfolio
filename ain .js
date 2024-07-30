/*--------------nav bar----------------*/
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavmenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += "responsive";
    } else (
        menuBtn.className = "nav-menu"
    )
}


window.onscroll = function () {
    headerShadow()
};
function headerShadow() {
    const navHeader = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}
/*----------------------typinh------*/
var typingEffect = new  typed (".typedText", {
    strings: ["Desiner", "youtuber", "Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})
/*--------------------scroll----------------*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*-------------------home----------*/
sr.revea1('.ferather-text-card', {})
sr.revea1('.ferather-name', { delay: 100 })
sr.revea1('.ferather-text-info', { delay: 200 })
sr.revea1('.ferather-text-btn', { delay: 200 })
sr.revea1('.social-icon', { delay: 200 })
sr.revea1('.ferather-image', { delay: 300 })