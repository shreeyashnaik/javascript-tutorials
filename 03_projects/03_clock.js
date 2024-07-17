// const dateObj = new Date()
// const currentTime = dateObj.toLocaleTimeString("en-IN",{timeZone: "Asia/Kolkata"})

// STATIC APPROACHES (need to reload everytime you want to get current time)
// APPROACH: 1 (By creating a new element and then inserting it inside clock)
// let timeElement = document.createElement('p')
// timeElement.innerHTML = currentTime;
// document.getElementById("clock").appendChild(timeElement)

// APPROACH: 2 (Add currentTime to the textContent of the clock)
//document.getElementById("clock").textContent = currentTime


// DYNAMIC APPROACHES (auto runs a function after a fixed interval of time)
const clock = document.getElementById("clock")
setInterval(()=>{
  const dateObj = new Date()

  clock.textContent = dateObj.toLocaleTimeString("en-IN",{timeZone: "Asia/Kolkata"})
}, 1000)