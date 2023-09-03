// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
    // Your game logic here

    const ticTacToe = (element, index) => {
        // Check if the selected cell is empty
        if (cells[index] === '') {
            cells[index] = currentPlayer;
            element.textContent = currentPlayer;
            
            // Check for winning conditions
            for (const condition of conditions) {
                const [a, b, c] = condition;
                if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                    result.textContent = `${currentPlayer} wins!`;
                    btns.forEach(btn => btn.disabled = true); // Disable all buttons
                    return; // Exit the function
                }
            }
            
            // Switch to the next player
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            
            // Update the current player's turn in the 'result' element
            result.textContent = `Current Player: ${currentPlayer}`;
        }
    };
};

    /*
    **Part 2: Reset Function (Add your code here)**

    1. Implement a new function that resets the game to its initial state.
    2. Ensure the 'cells', 'btns', and 'currentPlayer' variables are reset.
    3. Update the 'result' element to indicate the current player's turn.
    4. Re-enable all buttons for a new game.
    */

// Function to reset the game
const resetGame = () => {
    const resetGame = () => {
        // Reset the game state
        cells = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        
        // Clear the content of all cells and enable buttons
        btns.forEach((btn, i) => {
            btn.textContent = '';
            btn.disabled = false;
        });
        
        // Update the 'result' element
        result.textContent = `Current Player: ${currentPlayer}`;
    };
    
    document.querySelector('#reset').addEventListener('click', resetGame);
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);
