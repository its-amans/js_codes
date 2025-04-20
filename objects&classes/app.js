// const obj1={
//     name:"Aman",
//     age:12,
//     //An method to create behaviours /method in objects
//     func1:function(){
//         console.log(`age is ${this.age}`);
//     },
//     //another and popular method to define behaviour in objects
//     func2(){
//         console.log("func2 is created");
//     }
// };

// const employee={
//     salary:50000,
//     // this function is accesed when employee object calls func2 not the func2() of the obj1.
//     func2(){
//         console.log("func 2 is created under the employee object");
//     }
// };

// //Acessing func of obj1 into this object by __proto__().
// employee.__proto__=obj1;

// //employee.func1()  //acess like that


class ToyotaCar{
    //creating constructor
    constructor(brand,milege){
        console.log("creating new obj");
        this.brand=brand;
        this.milege=milege;
    }
    func1(){
        console.log("Func1 is executed");
    }
    //No need of , to separate
    func2(){
        console.log("Func1 is executed");
    }
}
//Creating object for the class
let fortuner=new ToyotaCar("fortuner",12);
let swift=new ToyotaCar("maruti",23);

//inheritence.//method overriding also work there
class MarutiCar extends ToyotaCar{
    //if we derive constructor in the derived class then we must have to call the constructor of the parent class using super keyword.
    constructor(brand,color){
        //if we want to pass some info to the constructor of the parent then it can be passed as the arg of super keyword.if not then simply can write super().
        super(brand);//To invoke super class constructor.
        this.color=color;
    }
    func3(){
        super().func1();//so we can acess parent func if req anywhwre like this.
        //func1() is executed first then func3.
        console.log("func 3 of child is executed");
    }
}
let volvo=new MarutiCar("vovo","red");
console.log("aman");