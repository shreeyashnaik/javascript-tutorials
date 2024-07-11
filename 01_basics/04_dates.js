let date1 = new Date()
console.log(date1)
console.log(date1.toString())
console.log(date1.toDateString())
console.log(date1.toLocaleString("en-US",{timeZone: "Asia/Kolkata"}))

let myTimestamp = Date.now() // timestamp
console.log(myTimestamp)
console.log(date1.getTime()) // date to timestamp