const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const gameBoard = [];
  gameBoard.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  gameBoard.player1 = "X";
  gameBoard.player2 = "O";
  gameBoard.round = 0;
  gameBoard.activePlayer = "X";
  gameBoard.over = false;

  const listenBoard = (gameBoard) => {
    document.querySelectorAll(".square").forEach((square) => {
      square.addEventListener("click", (event) => {
        playMove(event.target, gameBoard);
      });
    });
}

const playMove = (square, gameBoard) => {
  //is game over? If game over, don't do anything
  if (gameBoard.gameOver || gameBoard.round > 8) {
    return;
  }
  //check if game box has a letter in it, if so, don't do anything
  if (gameBoard.board[square.id] === "X" || gameBoard.board[square.id] === "O") {
    return;
  }
}

const checkWinner = (gameBoard, player) => {
  let result = false;
  winLines.forEach((condition) => {
    if (
      gameBoard.board[condition[0]] === player &&
      gameBoard.board[condition[1]] === player &&
      gameBoard.board[condition[2]] === player
    ) {
      result = true;
    }
  });
  return result;
};