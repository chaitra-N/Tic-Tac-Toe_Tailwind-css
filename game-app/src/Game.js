//this is my home app - for my neurodiergent brain
//whenever you start the program run npm run dev
import React from "react";
import Square from "./Game Components/Square";
import { useState, useEffect } from "react";
import { WinningPatterns } from "./Game Components/WinningPaterns";
// import Modal from "./Modal";

function Game() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [winner, setWinner] = useState({ winner: "none", state: "none" });
  const [openModal, setModel] = useState(false);

  useEffect(() => {
    checkWinner();
    checkGameTie();
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (winner.state !== "none") {
      setModel(true);
      restartGame();
    }
  }, [winner]);

  const checkWinner = () => {
    WinningPatterns.forEach((pattern) => {
      const firstPlayer = board[pattern[0]];
      if (firstPlayer === "") {
        return;
      }
      let foundWinnerPattern = true;
      pattern.forEach((index) => {
        if (board[index] !== firstPlayer) {
          foundWinnerPattern = false;
        }
      });
      if (foundWinnerPattern) {
        setWinner({
          winner: player,
          state: "Congragulations you are the Winner",
        });
      }
    });
  };

  const checkSquare = (square) => {
    setBoard(
      board.map((val, index) => {
        if (index === square && val === "") {
          return player;
        }
        return val;
      })
    );
  };
  const checkGameTie = () => {
    let filled = true;
    board.forEach((sqaure) => {
      if (sqaure === "") {
        filled = false;
      }
    });
    if (filled) {
      setWinner({ winner: "Game is Tied", state: "No One" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };

  return (
    <div className='min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
      <h1 className='text-center text-black font-bold text-2xl'>
        Tic Tac Toe with Tailwind CSS
      </h1>
      <div className=' w-screen h-screen flex justify-center items-center'>
        <div className='w-[500px] h-[500px] bg-blue-800 flex flex-col border-2 border-solid border-[black]'>
          <div className='flex-[33%] flex flex-row'>
            <Square val={board[0]} checkSquare={() => checkSquare(0)} />

            <Square val={board[1]} checkSquare={() => checkSquare(1)} />
            <Square val={board[2]} checkSquare={() => checkSquare(2)} />
          </div>
          <div className='flex-[33%] flex flex-row'>
            <Square val={board[3]} checkSquare={() => checkSquare(0)} />

            <Square val={board[4]} checkSquare={() => checkSquare(1)} />
            <Square val={board[5]} checkSquare={() => checkSquare(2)} />
          </div>
          <div className='flex-[33%] flex flex-row'>
            <Square val={board[6]} checkSquare={() => checkSquare(0)} />

            <Square val={board[7]} checkSquare={() => checkSquare(1)} />
            <Square val={board[8]} checkSquare={() => checkSquare(2)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
