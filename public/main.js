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
  gameOver()
}

const gameOver = () => {
  // Find the player names and player choice buttons
  let playArea = document.querySelector('play-area')
  // Create logic that says IF the game results are in, then add the
  //class that sets the afortmentioned elements to display: none
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

// const gameOver = () => {
//   // Find the player names and player choice buttons
//   let playerNamesandButtons = document.querySelector('game-over')
//   // Create logic that says IF the game results are in, then add the
//   //class that sets the afortmentioned elements to display: none
//   if (
//     gameResults.textContent === 'Player One Wins!!' ||
//     gameResults.textContent === 'Player Two Wins!!' ||
//     gameResults.textContent === 'Tie Game!!'
//   ) {
//     playerNamesandButtons.add('game-over')
//     // If the results aren't in, remove the .game-over class
//   } else {
//     playerNamesandButtons.remove('game-over')
//   }
// }
// const gameOver = () => {
//   let element = document.querySelector('game-over')
//   console.log(element)
//   // element.classList.add('.game-over')
// }

const resetGame = () => {
  window.location.reload('true')
  // playerOneChoice = ''
  // playerTwoChoice = ''
  // gameResults.textContent = 'Who will be the winner?'
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
//document.querySelector('.play-area').classList.remove('game-over')
// //const main = () => {
//   document.querySelector('h1').textContent += '?'
// }

document.addEventListener('DOMContentLoaded', main)
