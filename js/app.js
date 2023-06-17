let search = document.querySelector(".search");
search.addEventListener("click",function(){
    let div = document.createElement("div");
    let input = document.createElement("input");
    let icon = document.createElement("i");
    div.setAttribute("class","input-icon");
    input.setAttribute("type","text");
    input.setAttribute("size","50");
    input.setAttribute("placeholder","Sizə necə kömək edə bilərik?");
    icon.setAttribute("class","fa-solid fa-xmark")
    div.appendChild(input);
    div.appendChild(icon);
    document.querySelector(".box").appendChild(div);
    icon.onclick = function(){
        this.parentElement.remove();
    }
})


