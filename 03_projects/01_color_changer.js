// =================== APPROACH 1 =========================
// document.getElementById('grey').onclick = function () {
//   document.body.style.backgroundColor = 'grey';
// };

// document.getElementById('white').onclick = function () {
//   document.body.style.backgroundColor = 'white';
// };

// document.getElementById('blue').onclick = function () {
//   document.body.style.backgroundColor = 'blue';
// };

// document.getElementById('yellow').onclick = function () {
//   document.body.style.backgroundColor = 'yellow';
// };

// =================== APPROACH 2 =========================
const body = document.body
const buttons = document.querySelectorAll(".button")
buttons.forEach( (button) => {
  button.onclick = (e) => {
    console.log(e, e.target)
    body.style.backgroundColor = e.target.id
  }
  // console.log(button, button.id)
})
