/*show and  hide the nav with hamburger menu*/
const hamburger = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".close");
const nav = document.querySelector("nav");
hamburger.addEventListener("click", function(){
    this.style.display = "none";
    closeMenu.style.display = "block";
    nav.style.display = "block";
});
closeMenu.addEventListener("click", function(){
    this.style.display = "none";
    hamburger.style.display = "block";
    nav.style.display = "none";
})