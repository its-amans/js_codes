//Prompt the user to enter their full name. 
//Generate a username for them based on the input.Start username with @,
//Followed by their full name and ending with the fullname length.
let fullName=prompt("Enter your fullname");
let userName="@"+fullName+fullName.length;
console.log(userName);
console.log(fullName.toUpperCase());