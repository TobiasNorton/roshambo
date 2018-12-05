let playerOneChoice = ''

let playerTwoChoice = ''

let gameResults = document.querySelector('.game-results')

const whoIsTheWinner = () => {
  if (
    (playerOneChoice === 'rock' && playerTwoChoice === 'scissors') ||
    (playerOneChoice === 'paper' && playerTwoChoice === 'rock') ||
    (playerOneChoice === 'scissors' && playerTwoChoice === 'paper')
  ) {
    gameResults.textContent = 'Player One Wins!!'
    showResetButton()
  } else if (
    (playerOneChoice === 'scissors' && playerTwoChoice === 'rock') ||
    (playerOneChoice === 'rock' && playerTwoChoice === 'paper') ||
    (playerOneChoice === 'paper' && playerTwoChoice === 'scissors')
  ) {
    gameResults.textContent = 'Player Two Wins!!'
    showResetButton()
  } else if (
    (playerOneChoice === 'rock' && playerTwoChoice === 'rock') ||
    (playerOneChoice === 'paper' && playerTwoChoice === 'paper') ||
    (playerOneChoice === 'scissors' && playerTwoChoice === 'scissors')
  ) {
    gameResults.textContent = 'Tie Game!!'
    showResetButton()
  }
  gameOver()
}

const gameOver = () => {
  if (
    gameResults.textContent === 'Player One Wins!!' ||
    gameResults.textContent === 'Player Two Wins!!' ||
    gameResults.textContent === 'Tie Game!!'
  ) {
    document.querySelector('.play-area').classList.add('game-over')
    document.querySelector('.players-header').classList.add('game-over')
    document.querySelector('.game-results').classList.add('winner')
  }
}

const showResetButton = () => {
  let resetButton = document.querySelector('.hidden')
  resetButton.classList.remove('hidden')
}

const resetGame = () => {
  window.location.reload('true')
  console.log('Game is reset')
}

const playerOneRockChoice = () => {
  playerOneChoice = 'rock'
  console.log(`Player one chose ${playerOneChoice}`)
  whoIsTheWinner()
}

const playerOnePaperChoice = () => {
  playerOneChoice = 'paper'
  console.log(`Player one chose ${playerOneChoice}`)
  whoIsTheWinner()
}

const playerOneScissorsChoice = () => {
  playerOneChoice = 'scissors'
  console.log(`Player one chose ${playerOneChoice}`)
  whoIsTheWinner()
}

const playerTwoRockChoice = () => {
  playerTwoChoice = 'rock'
  console.log(`Player two chose ${playerTwoChoice}`)
  whoIsTheWinner()
}

const playerTwoPaperChoice = () => {
  playerTwoChoice = 'paper'
  console.log(`Player two chose ${playerTwoChoice}`)
  whoIsTheWinner()
}

const playerTwoScissorsChoice = () => {
  playerTwoChoice = 'scissors'
  console.log(`Player two chose ${playerTwoChoice}`)
  whoIsTheWinner()
}

const main = () => {
  let playerOneRockButton = document.querySelector('.player-one .rock')

  playerOneRockButton.addEventListener('click', playerOneRockChoice)

  let playerOnePaperButton = document.querySelector('.player-one .paper')
  playerOnePaperButton.addEventListener('click', playerOnePaperChoice)

  let playerOneScissorsButton = document.querySelector('.player-one .scissors')
  playerOneScissorsButton.addEventListener('click', playerOneScissorsChoice)

  let playerTwoRockButton = document.querySelector('.player-two .rock')
  playerTwoRockButton.addEventListener('click', playerTwoRockChoice)

  let playerTwoPaperButton = document.querySelector('.player-two .paper')
  playerTwoPaperButton.addEventListener('click', playerTwoPaperChoice)

  let playerTwoScissorsButton = document.querySelector('.player-two .scissors')
  playerTwoScissorsButton.addEventListener('click', playerTwoScissorsChoice)
}

let resetButton = document.querySelector('.reset')
resetButton.addEventListener('click', resetGame)

document.addEventListener('DOMContentLoaded', main)
