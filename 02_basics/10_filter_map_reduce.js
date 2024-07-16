// MAP, REDUCE, FILTER

const coding = ["js", "go", "swift"]
const nums = [ 1, 2,3,4,5,6,7,-5,8,9]

// 1. FILTER (expects boolean return-type)
let nums5 = nums.filter( (num) => num>=5 );
console.log(nums5);
nums5 = nums.filter( (num) => num + 5 ); // since num+5 will always be equal to true
console.log(nums5);

// unlike forEach, filter returns values


// 2. MAP (expects an operation as a return-type)
let nums6 = nums.map((num) => num*10 )
console.log(nums6)

// Chaining using maps
let nums7 = nums.map((num) => num*10).map

// 3. REDUCE
let sum = nums.reduce((acc, currVal) => (acc + currVal), 0)