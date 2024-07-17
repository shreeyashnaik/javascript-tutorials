const form = document.querySelector('form')
const guessField = document.getElementById('guessField')

// const guesses = document.getElementsByClassName('lastResult')[0]
const guesses = document.querySelector('.lastResult')

// const message = document.getElementsByClassName('lowOrHi')[0]
const message = document.querySelector('.lowOrHi')

// const prevGuesses = document.getElementsByClassName('guesses')[0]
const prevGuesses = document.querySelector('.guesses')  // NOTE: YOU MISSED THE querySelector APPROACH


const randomValue = Math.floor(Math.random() * 100) + 1
console.log(randomValue)


let gameOver = false;
let gameWon = false;
let previousGuesses = []
form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (gameOver) {
    message.textContent = "GAME OVER. PLEASE START A NEW GAME."
    return
  }

  if (gameWon) {
    message.textContent = "YOU ALREADY WON! PLEASE START A NEW GAME."
    return 
  }

  let guess = parseInt(document.getElementById('guessField').value)
  if (!guess || guess <= 0 || guess > 100) {
    // TODO: dispay msg
    return
  }

  let displayText = ""
  if (guess > randomValue) {
    displayText = "HIGH"
  } else if (guess < randomValue) {
    displayText = "LOW"
  } else {
    displayText = "YOU WIN!"
    gameWon = true;
  }
  previousGuesses.push(guess)
  


  // console.log(guesses.innerHTML)
  remainingGuesses = parseInt(guesses.innerHTML)
  if (!remainingGuesses || remainingGuesses <= 0) {
    displayText = "GAME OVER"
    gameOver = true;

    // NOTE: YOU MISSED BELOW STEP (CHECK ONCE)
    guessField.setAttribute('disabled', '')
  }

  // NOTE: YOU MISSED BELOW STEP
  guessField.value = '' // Do this to empty the input box everytime
  
  prevGuesses.textContent = previousGuesses
  message.innerHTML = `<h2>${displayText}</h2>`
  guesses.textContent = parseInt(guesses.innerHTML) - 1
})