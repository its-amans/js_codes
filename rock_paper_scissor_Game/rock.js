let userScore=0;
let compScore=0;
let choice=document.querySelectorAll(".choices");

let showWinner=(userWin)=>{
    if(userWin){
        console.log("User won");
    }
    else{
        console.log("Comp won");
    }
}

let checkWinner=(user,comp)=>{
    if(comp===user){
        console.log("its a draw");
    }
    else{
        let userWin=true;
        if(user==="rock"){
            //scissor or paper
            userWin= comp==="scissor" ? true:false;
        }
        else if(user==="paper"){
            userWin= comp==="rock"? true:false;
        }
        else{
            userWin= comp==="rock"? false:true;
        }
        showWinner(userWin);
    }
}
let compChoice=()=>{
    let allChoice=["rock","paper","scissor"];
    let compOptions=Math.floor(Math.random()*3);
    return allChoice[compOptions];
}
let playGame=(user)=>{
    console.log("user choice =",user);
    const comp= compChoice();
    console.log("Computer choice =",comp);
    checkWinner(user,comp);
}

choice.forEach((option)=>{
    option.addEventListener("click",()=>{
        const userChoice=option.getAttribute("id");
        playGame(userChoice);     
    });
});

