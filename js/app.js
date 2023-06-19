let search = document.querySelector(".search");
search.addEventListener("click",function(){
    let box = document.querySelector(".box");
    let icon = document.querySelector(".input-icon i");
    box.classList.toggle("d-none");
    icon.onclick = function(){
        box.classList.add("d-none");
    }
})