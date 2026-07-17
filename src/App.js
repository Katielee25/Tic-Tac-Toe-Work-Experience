import React from 'react';
import { useState } from 'react';
import confetti from 'canvas-confetti';


  function Square({id, value, onSquareClick}) {

    let content;
    if (value === "x") {
      content = <span className="squareItem">🥨</span> 
    }
    else if (value === "o") {
      content = <span className="squareItem">🍩</span>
    }
    return (
      <button id = {id} className="square" onClick={onSquareClick}>{content}
      </button>
    );
  }
 
  
  function Board({xIsNext, squares, onPlay}) {

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
    status = 'Winner: ' + (winner === 'x' ? 'Player 1' : 'Player 2');
  } else if (squares.every(square => square !== null)) {
    status = "It's a draw!";
  } else {
    status = 'Next player: ' + (xIsNext ? 'Player 1' : 'Player 2')
  }

  return (
    <>
    <div className="status">{status}</div>
    <div className="allrows">
    
    
    <div className="row1">
    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    </div>
     <div className="row2">
    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
    </div>
     <div className="row3">


    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
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
   const[scores, setScores] = useState({ x: 0, o: 0 });
   const[xGoesFirst, setXGoesFirst] = useState(true);
   const xIsNext = xGoesFirst ? (currentMove % 2 === 0) : (currentMove % 2 !== 0);
   const currentSquares = history[currentMove];

      function openPublicPage(pageName) {
        const basePath = (process.env.PUBLIC_URL || '').replace(/\/$/, '');
        window.location.assign(`${basePath}/${pageName}`);
      }

  function handleNewGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setXGoesFirst(prev => !prev);
  }

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    const winner = calculateWinner(nextSquares);
    if (winner) {
      setScores(prev => ({ ...prev, [winner]: prev[winner] + 1 }));
      const sprinkle = confetti.shapeFromPath({ path: 'M-8,-2 L8,-2 L8,2 L-8,2 Z' });
      const emoji = winner === 'x' ? '🥨' : '🍩';
      const emojiShape = confetti.shapeFromText({ text: emoji, scalar: 400 });
      
      confetti({
        particleCount: 300,
        spread: 160,
        origin: { y: 0.4 },
        shapes: [sprinkle, emojiShape],
        colors: ['#e87dd8', '#a78bfa', '#6ee7b7', '#f472b6', '#818cf8', '#fb923c'],
        scalar: 3.5,
        startVelocity: 55,
        ticks: 200,
      });
      setTimeout(() => confetti({
        particleCount: 150,
        spread: 120,
        origin: { x: 0.1, y: 0.6 },
        shapes: [sprinkle, emojiShape],
        colors: ['#e87dd8', '#a78bfa', '#6ee7b7', '#f472b6', '#818cf8', '#fb923c'],
        scalar: 3,
      }), 200);
      setTimeout(() => confetti({
        particleCount: 150,
        spread: 120,
        origin: { x: 0.9, y: 0.6 },
        shapes: [sprinkle, emojiShape],
        colors: ['#e87dd8', '#a78bfa', '#6ee7b7', '#f472b6', '#818cf8', '#fb923c'],
        scalar: 3,
      }), 200);
    }
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

    <div className="website">
      <h1>
        <span className="wave-letter" style={{animationDelay: '-0.2s'}}>🍦</span>
        <span className="wave-letter" style={{animationDelay: '-0.1s'}}>🍦</span>
        {' '}
        <span className="wave-letter" style={{animationDelay: '0s'}}>A</span>
        <span className="wave-letter" style={{animationDelay: '0.1s'}}>l</span>
        <span className="wave-letter" style={{animationDelay: '0.2s'}}>e</span>
        <span className="wave-letter" style={{animationDelay: '0.3s'}}>x</span>
        <span className="wave-letter" style={{animationDelay: '0.4s'}}>{'\'s'}</span>
        {' '}
        <span className="wave-letter" style={{animationDelay: '0.6s'}}>G</span>
        <span className="wave-letter" style={{animationDelay: '0.7s'}}>a</span>
        <span className="wave-letter" style={{animationDelay: '0.8s'}}>m</span>
        <span className="wave-letter" style={{animationDelay: '0.9s'}}>e</span>
        <span className="wave-letter" style={{animationDelay: '1s'}}>s</span>
        {' '}
        <span className="wave-letter" style={{animationDelay: '1.1s'}}>🍦</span>
        <span className="wave-letter" style={{animationDelay: '1.2s'}}>🍦</span>
      </h1>
      <button className="wordle-btn" onClick={() => openPublicPage('wordle.html')}>WORDLE</button>
      <button className="sudoku-btn" onClick={() => openPublicPage('sudoku.html')}>SUDOKU</button>
      <div className="gameContainer">
      <div className="score-panel">
        <div className="score-label">Player 1</div>
        <div className="score-label">🥨</div>
        <div className="score-number">{scores.x}</div>
      </div>
      <div className="game">
      <div className="game-info">
      </div>
      <div className="game-board"></div>
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <button className="new-game" onClick={handleNewGame}>New Game</button>
      </div>
      <div className="score-panel">
        <div className="score-label">Player 2</div>
        <div className="score-label">🍩</div>
        <div className="score-number">{scores.o}</div>
      </div>
      </div>


    </div>
    );
  }
