let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
let playerTurn = document.getElementById('playerTurn');
let turn = 1;
let gameOver = false;

const gameState = () =>{
    gameOver = checkGameOver();
    if (!gameOver){
        playGame();
        playerTurn.innerHTML = "Player " + turn + " turn";
    }
    else{
        gameDone();
    }
}

const playGame = () =>{
    buttons.map(button => {
        if (!gameOver){
            button.addEventListener('click', (e) => {
                if (!button.marked){
                    if (turn === 1){
                        button.style = 'color: black;'
                        button.innerHTML = 'x';
                        turn = 2;
                    }
                    else{
                        button.style = 'color: white;'
                        button.innerHTML = 'o';
                        turn = 1;
                    }
    
                    button.marked = true;
                    gameState();
                }
            });
        }
    });
}

const gameDone = () => {
    buttons.forEach(button => {
        button.disabled = true;
    });
    let playAgain = document.getElementById('playAgain');
    playAgain.style.visibility = 'visible';
}

const resetGame = () => {
    gameOver = false;
    buttons.forEach(button => {
        button.innerHTML = '';
        button.marked = false;
        button.disabled = false;
        button.style = 'background-color: none';
        turn = 1;
        playerTurn.innerHTML = "Player " + turn + " turn";
    });
    playAgain.style.visibility = 'hidden';
}

const checkGameOver = () =>{
    if (buttons[0].innerHTML === buttons[3].innerHTML &&
        buttons[0].innerHTML === buttons[6].innerHTML &&
        buttons[0].marked && buttons[3].marked && buttons[6].marked){
        console.log(turn + ' columnn 1');
        showWinningLine(buttons[0], buttons[3], buttons[6]);
        return true;
    }
    else if (buttons[1].innerHTML === buttons[4].innerHTML &&
        buttons[1].innerHTML === buttons[7].innerHTML &&
        buttons[1].marked && buttons[4].marked && buttons[7].marked){
        console.log(turn + ' columnn 2');
        showWinningLine(buttons[1], buttons[4], buttons[7]);
        return true;
    }
    else if (buttons[2].innerHTML === buttons[5].innerHTML &&
        buttons[2].innerHTML === buttons[8].innerHTML &&
        buttons[2].marked && buttons[5].marked && buttons[8].marked){
        console.log(turn + ' column 3');
        showWinningLine(buttons[2], buttons[5], buttons[8]);
        return true;
    }
    else if (buttons[0].innerHTML === buttons[1].innerHTML &&
        buttons[0].innerHTML === buttons[2].innerHTML &&
        buttons[0].marked && buttons[1].marked && buttons[2].marked){
        console.log(turn + ' row 1');
        showWinningLine(buttons[0], buttons[1], buttons[2]);
        return true;
    }
    else if (buttons[3].innerHTML === buttons[4].innerHTML &&
        buttons[3].innerHTML === buttons[5].innerHTML &&
        buttons[3].marked && buttons[4].marked && buttons[5].marked){
        console.log(turn + ' row 2');
        showWinningLine(buttons[3], buttons[4], buttons[5]);
        return true;
    }
    else if (buttons[6].innerHTML === buttons[7].innerHTML &&
        buttons[6].innerHTML === buttons[8].innerHTML &&
        buttons[6].marked && buttons[7].marked && buttons[8].marked){
        console.log(turn + ' row 3');
        showWinningLine(buttons[6], buttons[7], buttons[8]);
        return true;
    }
    else if (buttons[0].innerHTML === buttons[4].innerHTML &&
        buttons[0].innerHTML === buttons[8].innerHTML &&
        buttons[0].marked && buttons[4].marked && buttons[8].marked){
        console.log(turn + ' diagonal top left to bottom right');
        showWinningLine(buttons[0], buttons[4], buttons[8]);
        return true;
    }
    else if (buttons[2].innerHTML === buttons[4].innerHTML &&
        buttons[2].innerHTML === buttons[6].innerHTML &&
        buttons[2].marked && buttons[4].marked && buttons[6].marked){
        console.log(turn + ' diagonal top right to bottom left');
        showWinningLine(buttons[2], buttons[4], buttons[6]);
        return true;
    }
    else if (checkTie()){
        playerTurn.innerHTML = "Tie game";
        return true;
    }
    else{
        return false;
    }
}

const checkTie = () =>{
    let markedSlots = buttons.filter(button =>{
        if (button.marked){
            return true;
        }
        else{
            return false;
        }
    });
    if (markedSlots.length != 9){
        return false;
    }
    else{
        return true;
    }
}

const showWinningLine = (slot1, slot2, slot3) =>{
    slot1.style = 'background: lightgreen';
    slot2.style = 'background: lightgreen';
    slot3.style = 'background: lightgreen';
    if (slot1.innerHTML === 'x'){
        playerTurn.innerHTML = "Player 1 wins";
    }
    else{
        playerTurn.innerHTML = "Player 2 wins";
    }
}

gameState();
