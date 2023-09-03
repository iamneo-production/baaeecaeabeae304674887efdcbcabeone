const cells = document.querySelectorAll(".cell");
const resultText = document.getElementById("winner-text");
const resetButton = document.getElementById("reset-button");
const resultDiv = document.getElementById("result");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

// Check for a win or a draw
function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            resultText.textContent = `${currentPlayer} wins!`;
            resultDiv.style.display = "block";
            return;
        }
    }

    if (!board.includes("")) {
        resultText.textContent = "It's a draw!";
        resultDiv.style.display = "block";
    }
}

// Handle cell click
function handleCellClick(e) {
    const cell = e.target;
    const cellIndex = cell.getAttribute("id").split("-")[1];

    if (board[cellIndex] === "" && !resultDiv.style.display) {
        board[cellIndex] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer);
        checkWinner();

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

// Handle reset button click
function handleResetClick() {
    board = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("X", "O");
    });
    resultDiv.style.display = "none";
    currentPlayer = "X";
}

cells.forEach(cell => cell.addEventListener("click", handleCellClick));
resetButton.addEventListener("click", handleResetClick);
