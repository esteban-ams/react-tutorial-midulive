import { useState } from "react"
import confetti from "canvas-confetti"

import { Square } from "./components/Square.jsx"
import { TURNS } from "./constants.js"
import { checkWinnerFrom, checkEndGame } from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"
import { saveGameToStorage, resetGameFromStorage } from "./storage/index.js"


function App() {
  const [ board, setBoard ] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [ turn, setTurn ] = useState(() => {
    const turnFormStorage = window.localStorage.getItem('turn')
    return turnFormStorage ?? TURNS.X
  })
  const [ winner, setWinner ] = useState(null) // null no hay ganador, false es que hay empate

  const resetGame = () => {
     setBoard(Array(9).fill(null))
     setTurn(TURNS.X)
     setWinner(null)

    resetGameFromStorage()

  }


  const updateBoard = (index) => {
    // no actualiza el estado si ya hay un valor
    if (board[index] || winner) return
    // actualiza el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambia el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // guardar en el localStorage
    saveGameToStorage({
      board: newBoard,
      turn: newTurn,
      winner: winner,
    })

    // actualizar el ganador en el estado
    setWinner(checkWinnerFrom(newBoard))

    // revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}> Reiniciar Partida </button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square || ''}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
          </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>

      </section>

      <WinnerModal
        winner={winner}
        resetGame={resetGame}
      />

    </main>
  )
}

export default App
