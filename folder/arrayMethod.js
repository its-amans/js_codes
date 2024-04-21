//1.We are given array of marks of students.Filter out of the marks of students that scored 90.
// let arr=[10,20,67,90,94,97,30,50];

// let result= arr.filter((val)=> {return val>=90;});
// console.log(result);

// let r= arr.map((val)=> {return val>=90;});
// console.log(result);

//Takee a number n as input from user.Create an array of numbersfrom 1 to n.
// Use the reduce method to calculate sum of all number in Array.
// Use the reduce method to calculate product of all numbers in the Array.


let x=prompt("enter the size of the array");
let arr=[];
for(let i=0;i<x;i++){
    arr[i-1]=i;  //1{0} ,2{1}
}

//
let result1=arr.reduce((prev,curr)=> {return prev+curr;});
console.log(`The sum is the ${result1}`);

//the prev argument always hold the prev value and curr will hold the current value.suppose array like  [1,2,3,4,5,...]
let result2=arr.reduce((prev,curr)=>{return prev*curr;});
console.log(`The mul is the ${result2}`);