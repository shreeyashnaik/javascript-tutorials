const start = document.getElementById("start")
const stop = document.getElementById("stop")

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColour() {
  document.body.style.backgroundColor = getRandomColor()
}


let interval;
start.addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(changeBackgroundColour, 1000)
  }
})

stop.addEventListener("click", () => {
  if (interval) {
    clearInterval(interval)
    interval = null
  }
})