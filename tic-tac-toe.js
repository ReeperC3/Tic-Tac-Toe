const gameBoard = (() => {

  const playerFactory = (name, mark, turn) => {
    return { name, mark, turn }
  }

  let player1 = playerFactory('P1', 'x', true)
  let player2 = playerFactory('P2', 'o', false)

  let turn = 0

  const playerTurn = () => {
    const box = document.querySelectorAll('.box');
    box.forEach( box => {
      box.addEventListener('click', e => {
        if (turn === 0) {
          box.textContent = 'x'
          turn = 1
        } else if (turn === 1) {
          box.textContent = 'o'
          turn = 0
        }
      })  
    })
  }
  return { playerTurn }
})();
gameBoard.playerTurn()








            

