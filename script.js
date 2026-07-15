const buttons=document.querySelectorAll(".button")
const p=document.querySelector("p");
buttons.forEach((button) => {
    button.addEventListener("click",(e) =>{
        document.body.style.backgroundColor=e.target.id;
        p.innerHTML="Yeah I do that";
    })
})
