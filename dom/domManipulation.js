//Access attributes of a tag
// .getAttributes(attr);
// .getAttributes(attr,newvalue);

//accessing div tag

// let div=document.querySelector("div");
// console.log(div.getAttribute("class"));

// //by writting this we cann also change the attribute value
// //Class name changes to newClass.
// div.setAttribute("class","newClass");




// //styling nod eby accessing the tag

// div.style.backgroundColor="red";

// div.style.fontSize="2rem";

// div.style.border="2px solid black"


//MOST IMPORTANT 
//Create an element or property in js and add it to any place whwre you want to add this element in your page.

let newButton =document.createElement("button");
console.log(newButton);
newButton.innerText="Click me!";
newButton.style.border="2px solid black";
newButton.style.fontSize="2rem";
newButton.style.color="white";
newButton.style.backgroundColor="black";

// to add this button at the end of the div tag
let div=document.querySelector("div");// first have to select the tag.
//div.append(newButton);

// div.prepend(newButton);  // to add this element and just starting of the div tag.
// div.before(newButton);   // to add this element before the div tag .
div.after(newButton);     //to add this element tag after the div tag.


//Also we can delete the element from the div tag by using this 
//div.remove(newButton);



//QUESTION :Create a <p> tag in html,give it a class and some styling .Now create a new class inCSS and try to append this class
//to the <p> element .Did you notice how you overwrite the class name when you add a new one?. solve this problem using classList

 let paragraph=document.querySelector("p");
console.log(paragraph.getAttribute("class"));

//Here a newclass is created but the old class named para is removed also.that means the newclass is not appended on the old class
// paragraph.setAttribute("class","newClass");

//hence to append newclasses over other or to remove classes we use classList.
console.log(paragraph.classList);

//adding a newclass withoutt removing the older.Here the newclass is created only in csss doc  not in html doc
paragraph.classList.add("newClass");

console.log(paragraph.classList);

//WE can also remove the class by class listss
paragraph.classList.remove("newClass");


