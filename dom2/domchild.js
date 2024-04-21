//Firstchild returns the first child of the element but it can be test or the comment node.usually expected to return the element node.
//test node includes the writtent tests and the whitespaces.comment node contains the comment of the html 
let p=document.querySelector(".test");
//console.log(p.firstChild);  // returns the object type value.
console.log(p.firstChild.nodeName);     // returns  the actual value can i.e is of string type
console.log(p.lastChild.nodeName);


//Lastchild returns the last child of the element but it can also return test or the comment node.usually expected to return the element node.
let x=document.querySelector(".text");
console.log(x.firstChild.nodeName);
console.log(x.lastChild.nodeName);


//To overcome the problem of returning the test node and comment node we have to use
//firstElementChild
//lastElementChild

//both sre same

//console.log(x.firstElementChild.nodeName);  // used to rteurn object type
console.log(x.firstElementChild);            // just returns the written string
console.log(p.firstElementChild);

//both are same
console.log(x.lastElementChild);
console.log(p.lastElementChild);



//Another most impoertant property is CHILDREN
//This property returns the html collection of the all childrens i.e. element nodes
let body=document.querySelector("body");
console.log(body.children);

//to print everything like to include the test nodes and the comment node we use
console.log(body.childNodes);
