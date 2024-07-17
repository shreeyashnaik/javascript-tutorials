const form = document.querySelector('form')
const resultsElement = document.getElementById('results');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  height = parseInt(document.querySelector('#height').value)
  weight = parseInt(document.querySelector('#weight').value)

  if (!height || height < 0) {
    resultsElement.innerHTML = "Enter a valid height"
    return
  }

  if (!weight || weight < 0 ) {
    resultsElement.innerHTML = "Enter a valid weight"
    return
  }

  const bmi = (weight/((height*height)/10000)).toFixed(2)
  resultsElement.innerHTML = bmi;
})
