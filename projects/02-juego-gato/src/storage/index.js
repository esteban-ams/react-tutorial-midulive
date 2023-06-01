export const saveGameToStorage = ({ board, turn, winner }) => {
    localStorage.setItem('turn', turn)
    // guardar el tablero en el localStorage
    localStorage.setItem('board', JSON.stringify(board))
    // guardar el ganador en el localStorage
    localStorage.setItem('winner', JSON.stringify(winner))
}

export const resetGameFromStorage = () => {
    localStorage.removeItem('board')
    localStorage.removeItem('turn')
    localStorage.removeItem('winner')
}