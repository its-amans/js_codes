//Get user to input a number using prompt.Check if the number is multiple of 5 or not.
let number=prompt("Enter the number");
if(number%5==0){
    console.log("This is multiple of 5");
}
else{
    console.log("not multiple of 5");
}



//Write a code which can give grades to students according to their scores.
let marksPercentage=prompt("Enter your marks:");

if(marksPercentage>=80  && marksPercentage<=100){
    console.log("A-->Grade")
}
else if(marksPercentage<=70 && marksPercentage<=89){
    console.log(B-->Grade);
}
else if(marksPercentage<=60 && marksPercentage<=69){
    console.log(B-->Grade);
}
else if(marksPercentage<=50 && marksPercentage<=59){
    console.log(B-->Grade);
}
else{
    console.log(F-->Grade);
}