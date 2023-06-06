import { winningCombinations } from '../constants.js'

export const checkWinnerFrom = (boardToCheck) => {
  for (const combo of winningCombinations) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  // si no hay ganador
  return null
}

export const checkEndGame = (boardToCheck) => {
  // revisa si hay empate
  return boardToCheck.every(square => square !== null)
}
