


const sidebar = document.querySelector("#sidebar");
const toggleSidebar = document.querySelector("#toggle-sidebar");
const overlay = document.querySelector("#overlay");
const backToTop = document.querySelector("#back-to-top");

document.addEventListener("DOMContentLoaded", domContentLoaded);
document.addEventListener("scroll", scrollFunc);


function sidebarToggleFunc (){
   if (sidebar.classList.contains("active")){
       toggleSidebar.textContent = "menu";
       sidebar.classList.remove("active");
       overlay.classList.remove("active");
   }else{
       toggleSidebar.textContent = "close";
       sidebar.classList.add("active");
       overlay.classList.add("active");
   }
}

toggleSidebar.addEventListener("click", sidebarToggleFunc);




function scrollFunc(){
    if (scrollY > 300){
        backToTop.classList.add("active");
    }else{
        backToTop.classList.remove("active");
    }
}

function domContentLoaded(){
    scrollFunc();
}

backToTop.addEventListener("click", function (){
    document.documentElement.scrollTop = 0;
});


document.addEventListener("click", function (event){
    if (overlay.contains(event.target) && sidebar.classList.contains("active")){
        sidebarToggleFunc();
    }
});