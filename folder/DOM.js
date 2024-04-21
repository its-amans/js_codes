// Window is predefined object in the js
// console.log(window);
// console.log(window.document);
// //dir is just use to print the special object associated with the objects
// console.dir(window.document);

//Selecting by tyag name ..Returns an html collection
// console.log(document.getElementsByTagName("p"));
// //also can be updated with the same
// // document.getElementsByTagName("p").innerHTML="This is the updated paragraph by js";

// //Selecting by class name..returns an html collection
// console.log(document.getElementsByClassName("myClass"));


// //Selecting by the id names..returns an object
// console.log(document.getElementById("myId"));


//MOst used to access and manipulate things is query selector
//QUERY SELECTOR

//1.
//Selecting first tag ,class,id
// console.log(document.querySelector(".myClass"));

// //Changes the paragraph 1 to hello
// document.querySelector(".myClass").innerHTML="hello";

//2.
//selecting all class ,IdleDeadline, tag.
let x=document.querySelectorAll(".myClass");
console.log(x);

//Selecting all having class named myClass querry selector all returns a nodelist
//WE CAN CHANGE ALL PARAGRAPH BY ACCESSING THROUGH ITS INDEX  ,, x[0],x[1] .
//ALSO WE CAN IUSE LOOPS TO DO SO.
//THIS is same when we select through id or through tags


//query selectors in cas eof id 
let a=document.querySelector("#myId");
console.log(a);


//query selectors in case of tag

let b =document.querySelector("h1");
console.log(b);


// 1.innerHTML
// 2.innerText
// 3.tagName
// 4.textContent