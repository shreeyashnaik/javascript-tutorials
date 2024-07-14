// ARROW FUNCTIONS (introduced in 2015)

const user = {
    username: "Shreeyash",
    price: 999,
    welcomeMessage: function() {
        // this keyword is used for current scope or current context
        console.log(`${this.username}, welcome to the website!!`)
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Sai";
// user.welcomeMessage();

console.log(this) // prints {} object

// function chai() {
//     let username = "Shreeyash"
//     console.log(this) // current context/scope (this) does not contain username, current context only works in object not in functions 
// }

// const chai = function() {
//     let username = "Shreeyash"
//     console.log(this) // current context/scope (this) does not contain username, current context only works in object not in functions 
// }
// chai() // for non-ARROW function 'this' does not return empty object 

// =============== ARROW FUNCTION =====================
// const chai = () => {
//     let username = "Shreeyash"
//     console.log(this) // for ARROW function returns empty object 
// }
chai() // for ARROW function 'this' returns empty object 

// Using curly braces need return keyword
const addTwo = (num1, num2) => {
    return num1 + num2
}

// Impicit return, when one-liner syntax
const addOne = (num1, num2) => num1 + num2

// To impicitly return an object, use parentheses ()
const returnObject = () => ({username: "Shreeyash"})

const myArray = [2, 5, 7, 10]
myArray.forEach(() => {
    
})

