const closeBtn = document.querySelectorAll(".close-button");
const gamedeveloper = document.querySelector("#gamedeveloper");
const systemdeveloper = document.querySelector("#systemdeveloper");
const modelerandanimation = document.querySelector("#modelerandanimations");
const uiDesigner = document.querySelector("#ui-designer");
const builder = document.querySelector("#builder");
const overlay = document.querySelector("#overlay");

gamedeveloper.addEventListener("click", function() {
    document.querySelector("#gamedeveloper-pop-up").classList.toggle("opened");
    overlay.classList.toggle("opened");
});

systemdeveloper.addEventListener("click", function() {
    document.querySelector("#systemdeveloper-pop-up").classList.toggle("opened");
    overlay.classList.toggle("opened");
});

modelerandanimation.addEventListener("click", function() {
    document.querySelector("#modelerandanimations-pop-up").classList.toggle("opened");
    overlay.classList.toggle("opened");
});

uiDesigner.addEventListener("click", function() {
    document.querySelector("#ui-designer-pop-up").classList.toggle("opened");
    overlay.classList.toggle("opened");
});

builder.addEventListener("click", function() {
    document.querySelector("#builder-pop-up").classList.toggle("opened");
    overlay.classList.toggle("opened");
});

closeBtn.forEach(function(btn) {
    btn.addEventListener("click", function() {
        btn.parentElement.parentElement.classList.toggle("opened");
        overlay.classList.toggle("opened");
    });
});