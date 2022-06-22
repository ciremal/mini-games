const input = document.getElementById('guess');

const words = getWords();

const displayWord = document.getElementById('showWord');
let displayWordArr = [];

let theWord = words[Math.floor(Math.random() * words.length)];
let theWordArr = theWord.split('');

const wrongLetters = document.getElementById('wrongLetters');
let wrongLettersArr = [];

let lives = 6;

const checkGuess = () =>{
    temp = theWordArr.slice();

    if (input.value.length === 1){
        while (temp.includes(input.value.toUpperCase())){
            let index = temp.indexOf(input.value.toUpperCase());
            displayWordArr[index] = input.value.toUpperCase();
            displayWord.innerHTML = displayWordArr.join(' ');
            
            for (let i = 0; i <= index; i++){
                temp[i] = '_';
            }
        }
        if (!theWordArr.includes(input.value.toUpperCase()) &&
        !wrongLettersArr.includes(input.value.toUpperCase())){

            wrongLetters.innerHTML += input.value.toUpperCase() + ' ';
            wrongLettersArr.push(input.value.toUpperCase());
            lives -= 1;
        }
        checkWin();
    }
    render(lives);
    checkLoss();
}

const checkWin = () =>{
    const str = displayWord.innerHTML.replaceAll(' ', '')
    if (str === theWord){
        document.getElementById('reset').style = 'visibility: visible';
        let msg = document.createElement('div');
        msg.innerHTML = 'You Win!';
        msg.id = 'msg';
        document.body.appendChild(msg);
    }
}

const checkLoss = () =>{
    if (lives === 0){
        input.disabled = true;
        document.getElementById('reset').style = 'visibility: visible';
        let msg = document.createElement('div');
        msg.innerHTML = 'You Lose';
        msg.id = 'msg';
        document.body.appendChild(msg);
    }
}

const reset = () =>{
    theWord = words[Math.floor(Math.random() * words.length)];
    console.log(theWord);
    theWordArr = theWord.split('');

    displayWordArr = [];
    for (let i = 0; i < theWord.length; i++){
        displayWordArr[i] = '_';
    }
    displayWord.innerHTML = displayWordArr.join(' ');
    
    wrongLetters.innerHTML = 'Wrong Letters: '
    wrongLettersArr = [];

    lives = 6;
    render(lives);

    const element = document.getElementById('msg');
    element.remove();

    document.getElementById('reset').style = 'visibility: hidden';
}

const startUp = () =>{
    console.log(theWord);
    for (let i = 0; i < theWord.length; i++){
        displayWordArr[i] = '_';
    }

    displayWord.innerHTML = displayWordArr.join(' ');
}

const render = (lives) =>{
    input.value = '';

    switch (lives){
        case 6:
            document.getElementById('hangman').src = "images/hangman-6lives.png";
            break;
        case 5:
            document.getElementById('hangman').src = "images/hangman-5lives.png";
            break;
        case 4:
            document.getElementById('hangman').src = "images/hangman-4lives.png";
            break;
        case 3:
            document.getElementById('hangman').src = "images/hangman-3lives.png";
            break;
        case 2:
            document.getElementById('hangman').src = "images/hangman-2lives.png";
            break;
        case 1:
            document.getElementById('hangman').src = "images/hangman-1lives.png";
            break;
        case 0:
            document.getElementById('hangman').src = "images/hangman-0lives.png";
            break;
    }
}

startUp();
