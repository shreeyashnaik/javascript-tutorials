// Global and local scope in functions


console.log(addOne(5)); // YOU CAN ACCESS 'addOne' before initialization
function addOne(num) {
    return num + 1;
}

console.log(addOne(5));
// console.log(addTwo(5)); Cannot access 'addTwo' before initialization

// Another way of declaring function
const addTwo = function(num) {
    return num + 2;
}

console.log(addTwo(5));




