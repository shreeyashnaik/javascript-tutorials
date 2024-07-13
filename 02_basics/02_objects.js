// singleton (using constructor)

const MySym = Symbol("my_sym")

// object literals
const JsUser = {
    name: "Shreeyash", // by-default a string
    "full name": "Shreeyash Naik",
    location: "Mumbai",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Friday"],
    [MySym]: "my_symbol"
}

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["full name"]); // full name can only be accessed by ["full name"]
console.log(JsUser[MySym]); // way to access symbol

JsUser.name = "Shankar"
// Object.freeze(JsUser)
JsUser.email = "abc@gmail.com" // once object freezed cannot be changed

JsUser.Greeting = function() {
    console.log("Hello JS User!");
}

JsUser.Greeting2 = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.Greeting); // function reference in output 
console.log(JsUser.Greeting()); // function gets executed
console.log(JsUser.Greeting2()); // function gets executed


