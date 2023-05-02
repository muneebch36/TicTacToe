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
  gameBoard.player = "X";
  gameBoard.over = false;

  const listenBoard = (gameBoard) => {
    document.querySelectorAll(".box").forEach((box) => {
      box.addEventListener("click", (event) => {
        playMove(event.target, gameBoard);
      });
    });
}