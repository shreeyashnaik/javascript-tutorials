// IIFE
// Immediately Invoked Function Expression (IIFE)

// To avoid the problem of global scope pollution, we use IIFE i.e immediately invoke a function

// 1. ()() 
(function db() {
    // NAMED IIFE
    console.log("DB connected!");
})(); // DO NOT FORGET to ADD semi-colon, since IIFEs need to know where to end the context

// 2. Using ARROW function
( () => {
    // UNNAMED IIFE
    console.log("DB connected TWO!");
})()

