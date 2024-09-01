let buttons=document.querySelectorAll(".colors");
let body=document.querySelector("body")
buttons.forEach(element => {
    element.style.backgroundColor = element.getAttribute("data-bg");
    element.addEventListener("click",()=>{
        body.className= element.getAttribute("data-name");
    })
});
document.querySelector("#color_change_container").addEventListener("click",()=>{
    document.querySelector(".color_buttons").classList.toggle("active");
});
let btn_forward = document.querySelector("#btn-forward");
let btn_backward = document.querySelector("#btn-backward");
let scrollInterval;
btn_forward.addEventListener("mouseover",()=>{
    scrollInterval = setInterval(()=>{
        window.scrollBy(10,0)
    },50)
});
btn_backward.addEventListener("mouseover",()=>{
    scrollInterval = setInterval(()=>{
        window.scrollBy(-10,0)
    },50)
})
btn_forward.addEventListener("mouseout",reset);
btn_backward.addEventListener("mouseout",reset)
function reset(){
    clearInterval(scrollInterval);
}