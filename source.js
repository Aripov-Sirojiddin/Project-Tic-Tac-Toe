const gameBoard = function () {
    const boardState = [];
    const placeMarker = (location, mark) => { boardState[location] = mark; }
    const isWinStateFor = (mark) => {
        console.log("CHECCKING for " + mark)
        if (boardState[0] === mark && boardState[1] === mark && boardState[2] === mark) {
            return true; // Top row
        } else if (boardState[3] === mark && boardState[4] === mark && boardState[5] === mark) {
            return true; // Middle row
        } else if (boardState[6] === mark && boardState[7] === mark && boardState[8] === mark) {
            return true; // Bottom row
        } else if (boardState[0] === mark && boardState[3] === mark && boardState[6] === mark) {
            return true; // Left column
        } else if (boardState[1] === mark && boardState[4] === mark && boardState[7] === mark) {
            return true; // Middle column
        } else if (boardState[2] === mark && boardState[5] === mark && boardState[8] === mark) {
            return true; // Right column
        } else if (boardState[0] === mark && boardState[4] === mark && boardState[8] === mark) {
            return true; // Diagonal from top-left to bottom-right
        } else if (boardState[2] === mark && boardState[4] === mark && boardState[6] === mark) {
            return true; // Diagonal from top-right to bottom-left
        } else {
            return false; // No win condition met
        }
    };
    return { boardState, placeMarker, isWinStateFor };
}

const gameState = (function () {
    let xWins = 0;
    let oWins = 0;
    let playerTurn = "x";
    let board = gameBoard();
    const restartGame = () => {
        for (let i = 0; i < 9; i++) {
            document.getElementById(`btn-${i + 1}`).textContent = "";
        }
        board = gameBoard();
    }
    const switchTurn = () => { playerTurn = playerTurn === "x" ? "o" : "x"; }

    for (let i = 0; i < 9; i++) {
        const btn = document.getElementById(`btn-${i + 1}`);
        btn.addEventListener('click', () => {
            btn.textContent = playerTurn;
            btn.className += `btn-${playerTurn}-color`;
            board.placeMarker(i, playerTurn);
            if (board.isWinStateFor(playerTurn)) {
                playerTurn === "x" ? xWins++ : oWins++;
                alert(`${playerTurn} wins!\n\n\t X has ${xWins} win(s).\n\t O has ${oWins} win(s).`);
                restartGame();
            }
            switchTurn();
        });
    }
})();