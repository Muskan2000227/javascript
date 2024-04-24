//To declare Symbol
const mysyb=Symbol("key1");


const myobj={ name:"Muskan",
              age:21,
              //[mysyb]:"mysyb",
              [mysyb]:mysyb,
              email:"saini@gmail.com",
              location:"amritsar",
               isLoggedIn:false,
               LastLogin:["Monday","Tuesday"]
                      };
// console.log(myobj);
// console.log(myobj.name);
// console.log(myobj["name"]) ; 
// console.log(myobj[mysyb]);
// console.log(typeof myobj[mysyb]) ; 

//Change Object values
myobj.email="muskan@gmail.com";
//console.log(myobj);

//Freeze object
// Object.freeze(myobj);
// myobj.email="muskansaini@gmail.com";
// console.log(myobj);

//Add Function to myobj
myobj.greet=function(){
    console.log("hello");
   //undefined is printed bcz function does not return anything
}

console.log(myobj.greet());

//Another function
myobj.greet2=function(){
    console.log(`Hello ,I am ${this.name}`);
}

console.log(myobj.greet2());

