var  button = document.querySelector("#overlay")
var newsletter = document.querySelector("#text")
const close = document.querySelector("span.x")
const inputMail = document.querySelector(".input")


console.log(button)
button.addEventListener("click",() =>{
      newsletter.style.display = 'block';
})
close.addEventListener("click",()=>{
      newsletter.style.display = "none";
})    