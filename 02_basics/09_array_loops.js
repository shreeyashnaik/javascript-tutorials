// All ARRAY loops

const arr = [1, 2, 3, 4, 5]
const greetings = "hello world!"

// 1. for of
for (const num of arr) {
    console.log(num);
}
for (const g of greetings) {
    console.log(`Each char is ${g}`);
}

// Maps
const map = new Map()
map.set("IN", "India")
map.set("FR", "France")
map.set("UK", "United Kingdom")

for (const [key, value] of map) { // De-structure key & value
    console.log(key, value);
}

// To iterate over Objects use for in
// 2. for in (iterates only over keys)
let myObject = {
    name: "Shreeyash",
    surname: "Naik"
}
for (const key in myObject) {
    console.log(key);
}

// 3. forEach
const coding = ["js", "go", "swift"]

coding.forEach((item) => console.log(item))
coding.forEach((item, index, entireArray) => console.log(item, index, entireArray))

// forEach does not return any value