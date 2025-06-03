const gameState = function () {
    const xWins = 0;
    const oWins = 0;
    const playerTurn = "x";
    const board = gameBoard();
    const switchTurn = () => { playerTurn = playerTurn === "x" ? "o" : "x"; }
    return { xWins, oWins, playerTurn, board, switchTurn };
}

const gameBoard = function () {
    const boardState = [];
    const placeMarker = (location, mark) => { boardState[location] = mark; }
    const isWinStateFor = (mark) => {
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
    return {boardState, placeMarker, isWinStateFor};
}