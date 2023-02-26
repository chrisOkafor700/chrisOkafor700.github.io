const preloader = document.querySelector("[data-preload]");

window.addEventListener("load",function(){preloader.classList.add("loaded");
document.body.classList.add("loaded")});

const hamburger = document.querySelector(".hamburger");
const hamburger_icon = hamburger.querySelector("span");
const mobile_menu =document.querySelector("ul");

hamburger.addEventListener("click", function() {
    hamburger_icon.innerText= hamburger_icon.innerText === "menu"
    ? "close"
    : "menu";

    mobile_menu.classList.toggle("is-open");
})
// code for form emptying begins here
// setTimeout(f1, 3000);
// function f1()      
// {
//     var input = document.getElementById("empty");
//     input.value=null;
//     var input2 = document.getElementById("empty2");
//     input2.value=null;
//     var input3 = document.getElementById("empty3");
//     input3.value=null;
//     var input4 = document.getElementById("empty4");
//     input4.value=null;
// };

