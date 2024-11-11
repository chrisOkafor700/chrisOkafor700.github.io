let navbar=document.querySelector('.menu');
let list=document.querySelector(".list");
let nav=document.querySelector('.navbar');
let select=document.getElementById("select");
let footer=document.getElementById("footer");



for(let i=0;i<navbar.length;i++){
  navbar[i].addEventListener('click',openmenu
  )
}

navbar.addEventListener("click",openmenu);
function openmenu(){
    if(navbar.innerText==="menu"){
        navbar.innerText="close";
        list.classList.add('open');

    }
    else{
        navbar.innerText="menu"
        list.classList.remove("open")

    }
}


window.addEventListener("scroll",function(){
    if(scrollY>=200){
       nav.style.position='fixed';
       nav.style.top='0';
       nav.style.width='100%';
    }
    else{
        nav.style.position='static';
        nav.style.width='100%';
    }
})



