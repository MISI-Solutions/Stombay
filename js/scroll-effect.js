const contact = document.querySelector("#contact");

window.onscroll = function() {
    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        contact.classList.add("animation-fly-up");
    }
}