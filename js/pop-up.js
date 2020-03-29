const closeBtn = document.querySelectorAll(".close-button");
const programmer = document.querySelector("#programmer");
const uiDesigner = document.querySelector("#ui-designer");
const builder = document.querySelector("#builder");
const overlay = document.querySelector("#overlay");

programmer.addEventListener("click", function() {
    document.querySelector("#programmer-pop-up").classList.toggle("opened");
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