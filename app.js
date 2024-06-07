const navBtn = document.querySelector(".nav__btn")
let navOpen = 1;
navBtn.addEventListener("click", function () {
    if (navOpen==1) {
        navBtn.classList.add("nav__btn--open")
        navOpen ++; 
    } else {
        navBtn.classList.remove("nav__btn--open")
        navOpen = 1;
    }
})
const navmenu = document.querySelector(".nav-menu")
let navOpenmenu = 1;
navBtn.addEventListener("click", function () {
    if (navOpenmenu==1) {
        navmenu.classList.add("nav-menu--open")
        navOpenmenu ++; 
    } else {
        navmenu.classList.remove("nav-menu--open")
        navOpenmenu = 1;
    }
})