import React from 'react';
import { useState } from 'react';

export default function App() {

  // TO DO 1:
  // Create a state variable called squares to store the 9 board boxes.
  // Start with an array of 9 null values.
  // Google: "React useState array of 9"

  // TO DO 2:
  // Create state for whose turn it is.
  // Tip: true/false can work (for example true = X, false = O).
  // Google: "React useState boolean"

  // TO DO 3:
  // Build the board UI with 9 clickable buttons.
  // Tip: you can map over the squares array.
  // Google: "React map array render buttons"

  // TO DO 4:
  // Write a handleSquareClick function that takes the square index.
  // Google: "React handle click with index"

  // TO DO 5:
  // First rule in handleSquareClick:
  // if the square is already filled, do nothing.
  // Google: "JavaScript early return"

  // TO DO 6:
  // If square is empty, copy the array,
  // put X or O in the clicked square, then save state.
  // Google: "React state immutable array update"

  // TO DO 7:
  // After placing a symbol, switch to the other player's turn.
  // Google: "toggle boolean in React"

  // TO DO 8:
  // Create a helper function called calculateWinner(squares).
  // Check all winning lines (rows, columns, diagonals).
  // Google: "tic tac toe winning combinations javascript"

  // TO DO 9:
  // Show status text above the board:
  // - Next player: X or O
  // - Winner: X or O
  // Google: "React conditional rendering"

  // TO DO 10:
  // Add draw logic:
  // if all squares are filled and there is no winner, show "Draw".
  // Google: "JavaScript array every method"

  // TO DO 11:
  // Add a Restart button that clears the board and resets turn to X.
  // Google: "React reset state button"

  // TO DO 12 (stretch):
  // Add a scoreboard: X wins, O wins, and draws.

  // TO DO 13 (stretch):
  // Highlight the 3 winning squares when someone wins.

  // TO DO 14 (stretch):
  // Add a "Play again" message and ask who should start next.

  // TO DO 15 (stretch):
  // Use css to colour to the page

  // TO DO 16 (stretch):
  // Replace the buttons with fun images.

  return (
    <main>
      <h1>Tic Tac Toe Starter</h1>
      <p>Edit App.js to build your game.</p>
    </main>
  );
}
