// 2 parts
    // 1. Producing
    // 2. Consuming

// Producing promise
const Promise1 = new Promise(function(resolve, reject) {
    // Do an async task
    setTimeout(() => {
        console.log("Async task is completed");
        resolve(); // resolve is directly connected to 'then()' while consuming
    }, 2000)
})

// Consuming promise
Promise1.then(() => {
    console.log("Promise consumed");
})


// Bluebird for external lib in ECMA 5 

// Promise without variable can be initiated
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task TWO");
        resolve();
    }, 2000) 
}).then(() => {
    console.log("RESOLVED!!")
})

const PromiseThree = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve({username: "Chai"})
    }, 2000)
})

// PROMISE FOUR (reject-catch, thenables)
const PromiseFour = new Promise( (resolve, reject) => {
    let error = false;

    if (!error) {
        setTimeout(() => {
            resolve({username: "shreeyash", password: "a_star"})
        }, 2000);
    } else {
        reject("error: something went wrong");
    }
}).then((obj) => {
    return obj.username;
}).then((username) => {  // thenables
    console.log(username);
}).catch((str) => {
    console.log(str);
})

// PROMISE FIVE 
const PromiseFive = new Promise( (resolve, reject) => {
    let error = true;

    if (!error) {
        setTimeout(() => {
            resolve({username: "shreeyash", password: "a_star"})
        }, 2000);
    } else {
        reject("error: something went wrong");
    }
})

// CONSUME promise using async-await
async function consumePromiseFive() {
    // ALWAYS NEED to USE TRY-CATCH BLOCK WITH await, since it does not handle catch
    try {
        const response = await PromiseFive
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}

consumePromiseFive()


// PROMISE SIX (fetch())
const PromiseSix = new Promise( () => {

}) 

async function consumePromiseSix() {
    const response = await fetch("https://api.github.com/users/shreeyashnaik");
    const responseJson = await response.json(); // NEED to USE await here as well since .json() returns a promise
    console.log(responseJson);
}

consumePromiseSix();