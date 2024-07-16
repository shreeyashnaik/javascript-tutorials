// Falsy values (ONLY values)
// 1. false
// 2. 0
// 3. -0
// 4. Bigint 
// 5. 0n
// 6. "" 
// 7. null,
// 8. undefined
// 9. NaN

/*
// TRUTHY values
    1. "0"
    2. "false"
    3. " "
    4. []
    5. {}
    6. function () {}
*/

const emptyArray = []
if (emptyArray.length === 0) {
    console.log("Array is empty");
}

const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}

console.log("" == 0); // true
console.log("" === 0); // false

console.log("" == false); // true
console.log("" === false); // false



// NULLISH COASLESCING OPERATOR (??): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1);

let val2;
val2 = null ?? 10
console.log(val2);

let val3;
val3 = null ?? 15
console.log(val3);