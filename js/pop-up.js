const closeBtn = document.querySelectorAll(".close-button");
const programmer = document.querySelector("#programmer");
const overlay = document.querySelector("#overlay");

programmer.addEventListener("click", function() {
    document.querySelector("#programmer-pop-up").classList.toggle("opened");
    overlay.classList.toggle("opened");
});

closeBtn.forEach(function(btn) {
    btn.addEventListener("click", function() {
        btn.parentElement.parentElement.classList.toggle("opened");
        overlay.classList.toggle("opened");
    });
});