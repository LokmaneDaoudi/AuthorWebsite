var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("la-bars");
        icon.classList.add("la-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("la-times");
        icon.classList.add("la-bars");
        changeIcon = true;
    }
});