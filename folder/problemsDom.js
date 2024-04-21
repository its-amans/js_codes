//Ctreate a h2 heading elements with text -"hello javascript". Append the text by - From apna college using js
let x=document.querySelector("h2");
x.innerText=x.innerText +" From apna college"





//2.Create 3 divs with common class name box .acess them and add some unique text to each of them
let y=document.querySelectorAll(".box");
for(let i=0;i<y.length;i++){
    y[i].innerText="unique text is added through js";
}

console.log(y[1]);