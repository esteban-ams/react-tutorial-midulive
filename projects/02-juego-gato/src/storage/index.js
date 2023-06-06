export const saveGameToStorage = ({ board, turn, winner }) => {
  window.localStorage.setItem('turn', turn)
  // guardar el tablero en el localStorage
  window.localStorage.setItem('board', JSON.stringify(board))
  // guardar el ganador en el localStorage
  window.localStorage.setItem('winner', JSON.stringify(winner))
}

export const resetGameFromStorage = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
  window.localStorage.removeItem('winner')
}
