//  Primitive: they're call by value

//  7 types : String, Number, Boolearn, null, undefined, Symbol(i.e.,unique), BigInt(i.e.,scinctific value)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123') //should be unique that's y symbol
const anotherId = Symbol('123') //should be unique that's y symbol

console.log(id === anotherId);

 //const bigNumber = 3456543576654356754n



// Reference (Non primitive): memory allocate is possible here

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){ //storing funcn in const datatype
    console.log("Hello world");
}

console.log(typeof anotherId); //typeof to find datatype of varaible

// https://262.ecma-international.org/5.1/#sec-11.4.3

/*JavaScript is a dynamically typed language. 
This means you do not need to explicitly declare a variable's data type 
(like integer, string, or boolean) when you create it. 
Instead, the data type is automatically determined by the JavaScript engine at runtime 
(while the program is running) based on the value currently assigned to it.*/