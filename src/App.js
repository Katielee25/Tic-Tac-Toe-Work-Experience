import React from 'react';
import { useState } from 'react';


  function Square({id, value, onSquareClick}) {

    let content;
    if (value === "x") {
      content = <span className="squareItem">"x"</span> 
    }
    else if (value === "o") {
      content = <span className="squareItem">"o"</span>
    }
    return (
      <button id = {id} className="square" onClick={onSquareClick}>{content}
      </button>
    );
  }
 
  
  function Board({xisNext, squares, onPlay}) {

    function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice()
    if (xIsNext) {
      nextSquares[i] = 'x';
    } else {
      nextSquares[i] = 'o';
    }
    onPlay(nextSquares);
    }

  

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;

  } else {
    status = 'Next player: ' + (xIsNext ? 'x' : 'o')
  }

  return (
    <>
    <div>
    <div className="status">{status}</div>

    <Square className ="board-row">Square value={squares[0]} on SquareClick={() => handleClick(0)} /</Square>
    <div className ="board-row">Square value={squares[1]} on SquareClick={() => handleClick(1)} /</div>
    <div className ="board-row">Square value={squares[2]} on SquareClick={() => handleClick(2)} /</div>
    </div>
     <div>
    <div className="status">{status}</div>

    <div className ="board-row">Square value={squares[3]} on SquareClick={() => handleClick(3)} /</div>
    <div className ="board-row">Square value={squares[4]} on SquareClick={() => handleClick(4)} /</div>
    <div className ="board-row">Square value={squares[5]} on SquareClick={() => handleClick(5)} /</div>
    </div>
     <div>
    <div className="status">{status}</div>

    <div className ="board-row">Square value={squares[6]} on SquareClick={() => handleClick(6)} /</div>
    <div className ="board-row">Square value={squares[7]} on SquareClick={() => handleClick(7)} /</div>
    <div className ="board-row">Square value={squares[8]} on SquareClick={() => handleClick(8)} /</div>
    </div>
    </>
  );
  }

    function calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
          return squares[a]; 
      }
    
    return null;
  
    }
    
    export default  function game() {
  const[history, setHistory] = useState([Array(9).fill(null)]);
   const[currentMove, setCurrentMove] = useState(0);
   const xIsNext = currentMove % 2 === 0;
   const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'To move #' + move;
    } else {
      description = 'Back to Start';
    }
    return (
      <li key={move}>
        <button className="moves" onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
    });
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

    <>
      <h1>Tic Tac Toe Starter</h1>
      <div className = "gameContainer">
      <span>title</span>
      <div className="game">
      <div className="game-info">
      </div>
      <div className="game-board"></div>
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      </div>

      <p>Edit App.js to build your game.</p>
    </>
  );
  }