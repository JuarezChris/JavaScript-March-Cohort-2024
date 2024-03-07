// Scope & types of variables
// Scope is the context in which a variable exists.
// 3 main scopes in JS: Global, Function, Block

// Global scope
const mario = "It's-a me, Mario!" // Global variable
// let mario2 = ""
// var mario3 = ""

function enterCastle() {
    // console.log(mario); // Accessible inside functions
}
enterCastle();
// console.log(mario); // Accessible outside functions

// Function scope
// function enterCastle2() {
//     var hiddenKey = "Shiny Gold Key!";
//     console.log(hiddenKey); // Accessible within the function
// }

// enterCastle2();
// console.log(hiddenKey); // Error: functionVar is not defined

// Block scope
// if (true) {
//     let toad = "Hi, I'm Toad!";
//     console.log(toad); // Accessible within the block
// }

// console.log(toad); // Error: blockVar is not defined


// Const: Immutable Value, Block-Scoped, Initialization Required, Behavior with Objects and Arrays

// var bowser

// bowser = "I'll crush you!"

const arr = [24, 67, 10]

arr[1] = 100

// console.log(arr)

// const batman = {
//     identity: "Bruce Wayne",
//     age: 31,
//     isHuman: true,
//     isBat: false
// }

// batman["identity"] = "Clark Kent"
// console.log(batman)

// Arrow functions
// Shorter syntax for writing functions 

// function add(num1, num2){
//     return num1 + num2
// }

const add2 = num1 => num1 + 2

// console.log(add2(10))

// Destructuring object
// const batman = {
//     identity: "Bruce Wayne",
//     age: 31,
//     isHuman: true,
//     isBat: false
// }

// let {identity, isBat} = batman
// console.log(identity)
// console.log(isBat)

// Destructuring array
// const foods = ["Pizza", "Soup", "Sandwich"]
// const [,,thirdFood] = foods
// console.log(secFood)
// console.log(thirdFood)


// Spread Operator
// const batman = {
//     identity: "Bruce Wayne",
//     age: 31,
//     isHuman: true,
//     isBat: false
// }

// let car = "Batmobile"

// const batmanCopy = {...batman, ["car"]:"batmobile"}
// const batmanCopy = {...batman, car}
// batmanCopy.identity = "Clark Kent"
// console.log(batmanCopy)
// console.log(batman)

// const foods = ["Pizza", "Soup", "Sandwich"]
// const foodsCopy = [...foods, "Pasta", "Tacos"]

// console.log(foodsCopy)


// Ternary Operator

let findToad = false
let toad = "Hi, I'm Toad!"
// if (findToad) {
//     console.log(toad)
// }

findToad? console.log(toad) : console.log("Didn't find Toad :(")
