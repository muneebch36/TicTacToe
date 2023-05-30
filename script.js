// player factory function
const createPlayer = (name, marker) => {
  return {name, marker};
}

// gameboard object
const gameBoard = (() => {

  // generate board back end array and front end html/css
  let backBoard = [];
  let frontBoard = document.querySelector('.frontBoard');
  for (i = 0; i < 9; i++) {
      backBoard.push('');
      square = document.createElement('div');
      frontBoard.appendChild(square).className = 'square';;
  }

  // add event listeners on each square
  Array.from(frontBoard.children).forEach((square, index) => {
      square.addEventListener('click', () => {
          // display active player marker
          square.classList.add(game.activePlayer.marker);
          square.setAttribute('data', game.activePlayer.marker);
          // update array value to be that of active player
          backBoard[index] = game.activePlayer.marker;
          // remove event listener from the marked index
          square.style.pointerEvents = 'none';
          // update remainingSpots
          game.remainingSpots -= 1;
          // check winner: if all 3 values within any of these conditions are ===...
          game.checkWinner();
          // check remaining spots
          if (game.winnerDeclared == false) {
              if (game.remainingSpots > 0) {
                  game.nextPlayer();
              } else if (game.remainingSpots == 0) {
                  game.declareTie();
              }
          }
      })
  });

  // return
  return {
      backBoard
  };
})();

// game object
const game = (() => {

  // declare players
  const playerOne = createPlayer(prompt("player 1?"), 'ex');
  const playerTwo = createPlayer(prompt("player 2?"), 'oh');

  // starting point
  let activePlayer = playerOne;
  let winnerDeclared = false;
  let remainingSpots = 9;

  // selectors
  let announcement = document.querySelector('.announcement'); // display winner/tie
  let gameButton = document.querySelector('.button'); //game start/reset button

  // winning conditions
  const winningAxes = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
  ];

  // check winner
  function checkWinner() {
      winningAxes.forEach((item) => { // [0, 1, 2, 3, 4, 5, 6, 7]
          if (gameBoard.backBoard[item[0]] === this.activePlayer.marker && gameBoard.backBoard[item[1]] === this.activePlayer.marker && gameBoard.backBoard[item[2]] === this.activePlayer.marker) {
              console.log('winner!');
              announcement.textContent = `${this.activePlayer.name} wins!`;
              this.winnerDeclared = true;
              square.style.pointerEvents = 'none';
          } 
      })
  }

  // next player
  function nextPlayer() {
      this.activePlayer === playerOne ? this.activePlayer = playerTwo : this.activePlayer = playerOne;
      announcement.textContent = `${this.activePlayer.name} make your move.`;
      console.log('active player: ' + this.activePlayer.name);
  }

  // declare tie
  function declareTie() {
    announcement.textContent = "<b>Tie game!</b>";
  }

  /* gameButton.addEventListener('click', () => {
    game();
}); */


  // return
  return {
      activePlayer,
      remainingSpots,
      checkWinner,
      nextPlayer,
      declareTie,
      winnerDeclared
  };
})();

