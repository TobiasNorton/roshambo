let playerOneChoice = ''

let playerTwoChoice = ''

let gameResults = document.querySelector('.game-results')
//console.log(gameResults)

const whoIsTheWinner = () => {
  if (
    (playerOneChoice === 'rock' && playerTwoChoice === 'scissors') ||
    (playerOneChoice === 'paper' && playerTwoChoice === 'rock') ||
    (playerOneChoice === 'scissors' && playerTwoChoice === 'paper')
  ) {
    gameResults.textContent = 'Player One Wins!!'
  } else if (
    (playerOneChoice === 'scissors' && playerTwoChoice === 'rock') ||
    (playerOneChoice === 'rock' && playerTwoChoice === 'paper') ||
    (playerOneChoice === 'paper' && playerTwoChoice === 'scissors')
  ) {
    gameResults.textContent = 'Player Two Wins!!'
  } else if (
    (playerOneChoice === 'rock' && playerTwoChoice === 'rock') ||
    (playerOneChoice === 'paper' && playerTwoChoice === 'paper') ||
    (playerOneChoice === 'scissors' && playerTwoChoice === 'scissors')
  ) {
    gameResults.textContent = 'Tie Game!!'
  }
}

const resetGame = () => {
  playerOneChoice = ''
  playerTwoChoice = ''
  gameResults.textContent = 'Who will be the winner?'
  console.log('Game is reset!')
}

const playerOneRockChoice = () => {
  playerOneChoice = 'rock'
  console.log(`Player one chose ${playerOneChoice}!`)
  // Call the function that determines the winner.
  whoIsTheWinner()
}

const playerOnePaperChoice = () => {
  playerOneChoice = 'paper'
  console.log(`Player one chose ${playerOneChoice}!`)
  whoIsTheWinner()
}

const playerOneScissorsChoice = () => {
  playerOneChoice = 'scissors'
  console.log(`Player one chose ${playerOneChoice}!`)
  whoIsTheWinner()
}

const playerTwoRockChoice = () => {
  playerTwoChoice = 'rock'
  console.log(`Player two chose ${playerTwoChoice}!`)
  whoIsTheWinner()
}

const playerTwoPaperChoice = () => {
  playerTwoChoice = 'paper'
  console.log(`Player two chose ${playerTwoChoice}!`)
  whoIsTheWinner()
}

const playerTwoScissorsChoice = () => {
  playerTwoChoice = 'scissors'
  console.log(`Player two chose ${playerTwoChoice}!`)
  whoIsTheWinner()
}

const main = () => {
  // find the player one rock button
  let playerOneRockButton = document.querySelector('.player-one .rock')
  //console.log(playerOneRockButton)
  // Add an event listener and the function to call when the action is performed
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
// //const main = () => {
//   document.querySelector('h1').textContent += '?'
// }

document.addEventListener('DOMContentLoaded', main)
