const btn= document.getElementById("btn");
const output = document.querySelector(".output");

let quote = [
   "Coding like poetry should be short and concise. ― Santosh Kalwar",
   "It’s not a bug; it’s an undocumented feature. ― Anonymous",
   "First, solve the problem. Then, write the code. – John Johnson",
   "Code is like humor. When you have to explain it, it’s bad. – Cory House",
   "Make it work, make it right, make it fast. – Kent Beck",
   "Clean code always looks like it was written by someone who cares. — Robert C. Martin",
   "Of course, bad code can be cleaned up. But it’s very expensive.” — Robert C. Martin"
]

btn.addEventListener("click",()=>{
    console.log("clicked");
    let random = Math.floor(Math.random()*quote.length);
    output.textContent = quote[random];
})