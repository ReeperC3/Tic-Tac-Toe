const gameBoard = (() => {

  const playerFactory = (name, mark, turn) => {
    return { name, mark, turn }
  }

  let player1 = playerFactory('P1', 'x', true)
  let player2 = playerFactory('P2', 'o', false)

  let turn = 0

  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ]

  let winner = null;

  const playerTurn = () => {
    const box = document.querySelectorAll('.box');
    box.forEach( box => {
      box.addEventListener('click', e => {
        if (turn === 0 && box.textContent === '') {
          box.textContent = player1.mark
          turn = 1
          whoWin()
        } else if (turn === 1 && box.textContent === '') {
          box.textContent = player2.mark
          turn = 0
          whoWin()
        }
      })  
    })
    const newBtn = document.getElementById('newGame')
    newBtn.addEventListener('click', newGame())
  }

  const whoWin = () => {
    
    let box0 = document.getElementById('0').textContent
    let box1 = document.getElementById('1').textContent
    let box2 = document.getElementById('2').textContent
    let box3 = document.getElementById('3').textContent
    let box4 = document.getElementById('4').textContent
    let box5 = document.getElementById('5').textContent
    let box6 = document.getElementById('6').textContent
    let box7 = document.getElementById('7').textContent
    let box8 = document.getElementById('8').textContent
    if (box0 === 'x' && box1 === 'x' && box2 === 'x') {
      winner = player1
    } else if (box0 === 'o' && box1 === 'o' && box2 === 'o') {
      winner = player2
    } else if (box3 === 'x' && box4 === 'x' && box5 === 'x') {
      winner = player1
    } else if (box3 === 'o' && box4 === 'o' && box5 === 'o') {
      winner = player2
    } else if (box6 === 'x' && box7 === 'x' && box8 === 'x') {
      winner = player1
    } else if (box6 === 'o' && box7 === 'o' && box8 === 'o') {
      winner = player2
    } else if (box0 === 'x' && box4 === 'x' && box8 === 'x') {
      winner = player1
    } else if (box0 === 'o' && box4 === 'o' && box8 === 'o') {
      winner = player2
    } else if (box2 === 'x' && box4 === 'x' && box6 === 'x') {
      winner = player1
    } else if (box2 === 'o' && box4 === 'o' && box6 === 'o') {
      winner = player2
    } else if (box0 === 'x' && box3 === 'x' && box6 === 'x') {
      winner = player1
    } else if (box0 === 'o' && box3 === 'o' && box6 === 'o') {
      winner = player2
    } else if (box1 === 'x' && box4 === 'x' && box7 === 'x') {
      winner = player1
    } else if (box1 === 'o' && box4 === 'o' && box7 === 'o') {
      winner = player2
    } else if (box2 === 'x' && box5 === 'x' && box8 === 'x') {
      winner = player1
    } else if (box2 === 'o' && box5 === 'o' && box8 === 'o') {
      winner = player2
    }
    const newBtn = document.getElementById('newGame')
    const winnerTxt = document.querySelector('.winnertext')
    if (winner === player1) {
      winnerTxt.textContent = 'Player 1 wins!'
      newBtn.classList.add('yes')
      newBtn.classList.remove('no')
    } else if (winner === player2) {
      winnerTxt.textContent = 'Player 2 wins!'
      newBtn.classList.add('yes')
      newBtn.classList.remove('no')
    } else if (box0 !== '' && box1 !== '' && box2 !== '' && box3 !== '' && box4 !== '' && box5 !== '' && box6 !== '' && box7 !== '' && box8 !== '') {
      winnerTxt.textContent = 'It\'s a draw.'
      newBtn.classList.add('yes')
      newBtn.classList.remove('no')
    }
  }

  const newGame = () => {
    const box0 = document.getElementById('0')
    const box1 = document.getElementById('1')
    const box2 = document.getElementById('2')
    const box3 = document.getElementById('3')
    const box4 = document.getElementById('4')
    const box5 = document.getElementById('5')
    const box6 = document.getElementById('6')
    const box7 = document.getElementById('7')
    const box8 = document.getElementById('8')
    box0.textContent = ''
    box1.textContent = ''
    box2.textContent = ''
    box3.textContent = ''
    box4.textContent = ''
    box5.textContent = ''
    box6.textContent = ''
    box7.textContent = ''
    box8.textContent = ''
    const winnerTxt = document.querySelector('.winnertext')
    winnerTxt.textContent = ''
    winner = null
    turn = 0
    const newBtn = document.getElementById('newGame')
    newBtn.classList.remove('yes')
    newBtn.classList.add('no')
  }
  return { playerTurn, newGame }
})();
gameBoard.playerTurn()








            

