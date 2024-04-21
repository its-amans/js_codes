//Creating new element through js
let head=document.createElement("h2");
///here we can use just innerText OR innerHTML to add a heading in it but here we use another approach to do so.

let newText=document.createTextNode("This is the heading created through js.");
//now adding this content to the h2 tag created by us.
head.appendChild(newText);


//Now just apppend this head to our  divv in html
let div=document.querySelector(".test");
div.appendChild(head);



// This is to create a html commentthrough js .
//this can also be added through append method 
let newComment=document.createComment("this is the new comment");
div.appendChild(newComment);   //can be seen by inspect 


//Another method to add elements to anywhere in the child
//insertBefore(what to add, where to add);
//div.insertBefore(head,div.childNodes[1]);   //append to the position of the second child.