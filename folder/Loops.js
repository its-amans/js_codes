//Print all even numbers from 0 to 100
//let i=0;


// while(i<=100){
//     console.log(i);
//     i++;
// }

// do {
//     console.log(i);
//     i++;
// }while(i<=100);


// for(i=0;i<=100;i++){
//     console.log(i);
// }


//Create a game where you start with any random game number.
// Ask the user to keep guessing the game number until the user enters the correct value
let usernum=20;
let getnum=prompt("Enter the number until you guess the digit right");
while(usernum!=getnum){
    getnum=prompt("You entered the wrong choice .Enter again");
}
console.log("Congratulation ! You got that right ");