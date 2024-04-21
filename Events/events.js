//Refer the notes for more

let btn=document.querySelector("#toggle");
let changeMod="light";
let body=document.querySelector("body");
btn.addEventListener("click",()=>{
    if(changeMod==="light"){
        changeMod="dark";
        //document.body.background="black"; but not more accurate.
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        changeMod="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(changeMod);
});