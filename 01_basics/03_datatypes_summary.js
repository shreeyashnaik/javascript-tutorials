/*
Primitive datatypes (stored in stack as a copy)
1. String
2. number
3. bigint
4. boolean
5. Symbol
6. null.         type is object
7. undefined     has memory, but value is not assigned, type is undefined



Non-primitive datatypes (stored in heap hence access by reference)
1. Array
2. Object
3. function
*/

let id = Symbol("123")
let id2 = Symbol("123")
console.log(id === id2);

let name = "Shreeyash"
console.log(`Hello my name is ${name}`)