
const game = (() => {
  
  const playerFactory = (name, mark, turn, ai) => {
    return { name, mark, turn, ai }
  }

  let radio1 = document.querySelector('#pvp')
  let radio2 = document.querySelector('#cvp')
  let radio3 = document.querySelector('#pvc')
  
  if (radio1.checked === true) {
    var player1 = playerFactory('P1', 'x', true, false)
    var player2 = playerFactory('P2', 'o', false, false)
  } else if (radio2.checked === true) {
    var player1 = playerFactory('P1', 'x', true, true)
    var player2 = playerFactory('P2', 'o', false, false)
  } else if (radio3.checked === true) {
    var player1 = playerFactory('P1', 'x', true, false)
    var player2 = playerFactory('P2', 'o', false, true)
  }

  let turn = 0
  
  let win = false
  
  
  


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

  let winner = undefined;

  let board = [];

  const playerTurn = () => {
    if (player1.ai === true) {
      aiPlay()
    }
    const box = document.querySelectorAll('.box');
    box.forEach( box => {
      box.addEventListener('click', e => {
        if (turn === 0 && box.textContent === '' && player1.ai !== true && win === false) {
          box.textContent = player1.mark
          turn = 1
          whoWin()
        } else if (turn === 1 && box.textContent === '' && player2.ai !== true && win === false) {
          box.textContent = player2.mark
          turn = 0
          whoWin()
        }  
        aiPlay()
      })  
    })
    const changeBtn = document.querySelector('.changeChoice')
    changeBtn.addEventListener('click', newGame())
    const newBtn = document.getElementById('newGame')
    newBtn.addEventListener('click', newGame())
    
  }

  const aiPlay = () => {
    if (turn === 0 && player1.ai === true && win === false) {
          AITurn(player1)
          turn = 1
          whoWin()
        } else if (turn === 1 && player2.ai === true && win === false) {
          AITurn(player2)
          turn = 0
          whoWin()
        } else {
          whoWin()
        }
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
      win = true
    } else if (winner === player2) {
      winnerTxt.textContent = 'Player 2 wins!'
      newBtn.classList.add('yes')
      newBtn.classList.remove('no')
      win = true
    } else if (box0 !== '' && box1 !== '' && box2 !== '' && box3 !== '' && box4 !== '' && box5 !== '' && box6 !== '' && box7 !== '' && box8 !== '') {
      winnerTxt.textContent = 'It\'s a draw.'
      newBtn.classList.add('yes')
      newBtn.classList.remove('no')
      win = true
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
    winner = undefined
    turn = 0
    const newBtn = document.getElementById('newGame')
    newBtn.classList.remove('yes')
    newBtn.classList.add('no')
    win = false
    if (radio1.checked === true) {
      player1 = playerFactory('P1', 'x', true, false)
      player2 = playerFactory('P2', 'o', false, false)
    } else if (radio2.checked === true) {
      player1 = playerFactory('P1', 'x', true, true)
      player2 = playerFactory('P2', 'o', false, false)
    } else if (radio3.checked === true) {
      player1 = playerFactory('P1', 'x', true, false)
      player2 = playerFactory('P2', 'o', false, true)
    }
    if (player1.ai === true) {
      AITurn(player1)
      turn = 1
    }
  }

  const AITurn = (player) => {
    const box = document.querySelectorAll('.box')
    const box0 = document.getElementById('0').textContent || 0
    const box1 = document.getElementById('1').textContent || 1
    const box2 = document.getElementById('2').textContent || 2
    const box3 = document.getElementById('3').textContent || 3
    const box4 = document.getElementById('4').textContent || 4
    const box5 = document.getElementById('5').textContent || 5
    const box6 = document.getElementById('6').textContent || 6
    const box7 = document.getElementById('7').textContent || 7
    const box8 = document.getElementById('8').textContent || 8
    board = [box0, box1, box2, box3, box4, box5, box6, box7, box8]
    const aiMove = minimax(board, player)
    const index = aiMove.index
    const square = box[index]
    square.textContent = player.mark
  }

  const getHuNAi = () => {
    if (player1.ai === true) {
      return true
    } else {
      return false
    }
  }

  const minimax = (newBoard, player) => {
    const hunai = getHuNAi()
    if (hunai === true) {
      var huPlayer = player2
      var aiPlayer = player1
    } else {
      var huPlayer = player1
      var aiPlayer = player2
    }
    let availSpots = availableSpots(board)

    if (winning(newBoard, huPlayer)){
      return {score:-10};
    }
    else if (winning(newBoard, aiPlayer)){
      return {score:10};
    }
    else if (availSpots.length === 0){
      return {score:0};
    }

    // an array to collect all the objects
    var moves = [];

    // loop through available spots
    for (let i = 0; i < availSpots.length; i++){
      //create an object for each and store the index of that spot 
      let move = {};
  	  move.index = board[availSpots[i]];
      
      // set the empty spot to the current player
      board[availSpots[i]] = player.mark;
      /*collect the score resulted from calling minimax 
        on the opponent of the current player*/
      if (player === aiPlayer) {
        const result = minimax(board, huPlayer);
        let result2 = undefined
        if (result === undefined) {
          result2 = 0
        } else {
          result2 = result.score
        }
        move.score = result2;
      } else if (player === huPlayer) {
        const result = minimax(board, aiPlayer);
        let result2 = undefined
        if (result === undefined) {
          result2 = 0
        } else {
          result2 = result.score
        }
        move.score = result2;
      }
      // reset the spot to empty
      board[availSpots[i]] = move.index;
      // push the object to the array
      moves.push(move);
    }
    let bestMove;
    if(player === aiPlayer){
      let bestScore = -10;
      for(var i = 0; i < moves.length; i++){
        if(moves[i].score > bestScore){
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }else{
  // else loop over the moves and choose the move with the lowest score
      let bestScore = 10;
      for(var i = 0; i < moves.length; i++){
        if(moves[i].score < bestScore){
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }
    // return the chosen move (object) from the moves array
    
    return moves[bestMove];
  }

  const availableSpots = (currentBoard) => {
    let avail = currentBoard.filter(s => s !== 'o' && s !== 'x')
    return avail
  }

  function winning(board, player){
    if (
    (board[0] == player.mark && board[1] == player.mark && board[2] == player.mark) ||
    (board[3] == player.mark && board[4] == player.mark && board[5] == player.mark) ||
    (board[6] == player.mark && board[7] == player.mark && board[8] == player.mark) ||
    (board[0] == player.mark && board[3] == player.mark && board[6] == player.mark) ||
    (board[1] == player.mark && board[4] == player.mark && board[7] == player.mark) ||
    (board[2] == player.mark && board[5] == player.mark && board[8] == player.mark) ||
    (board[0] == player.mark && board[4] == player.mark && board[8] == player.mark) ||
    (board[2] == player.mark && board[4] == player.mark && board[6] == player.mark)
    ) {
    return true;
    } else {
    return false;
    }
   }

  return { playerTurn, newGame }
});
var gameBoard = game()
const startGame = () => {
  const container = document.querySelector('.container')
  const selections = document.querySelector('.selections')
  container.classList.add('y')
  container.classList.remove('n')
  selections.classList.add('n')
  selections.classList.remove('y')
  gameBoard.newGame()
  gameBoard.playerTurn()
}
const startBtn = document.querySelector('.start')
startBtn.addEventListener('click', function () {startGame()})
const newBtn = document.getElementById('newGame')
newBtn.addEventListener('click', function () {startGame()})

const changeSettings = () => {
  const container = document.querySelector('.container')
  const selections = document.querySelector('.selections')
  container.classList.remove('y')
  container.classList.add('n')
  selections.classList.remove('n')
  selections.classList.add('y')
  gameBoard.newGame()
}

const changeBtn = document.querySelector('.changeChoice')
changeBtn.addEventListener('click', function () {changeSettings()})







            

