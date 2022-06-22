let buttons = Array.from(document.getElementsByClassName('answer'));
let question = document.getElementById('question');

let index = 0;
let score = 0;
let questions = getQuestions();

let timer;
let sec = 0;
let timeDisplay = document.getElementById('timer');

const setUpGame = () =>{
    index = 0;
    score = 0;
    questions = shuffleArray(questions);
    document.getElementById('game-container').classList.remove('hide');
    document.getElementById('game-over').classList.add('hide');
    document.getElementById('score').innerHTML = 'Score: ';
    document.getElementById('start-btn').classList.add('hide');
    mainGame();
}

const mainGame = () =>{
    if (index <= 9){
        setQuestion(index);
        index += 1;
        timer = setInterval( () => {
            timeDisplay.innerHTML = "Time Left: " + (9 - sec);
            sec ++;
            if (10 - sec === 5){
                timeDisplay.style = 'color: rgb(254, 62, 62)';
                console.log("test");
            }

            if (10 - sec === 0){
                clearInterval(timer);
                outOfTime();
            }
        }, 1000)
    }
    else{
        gameOver();
    }
}

const setQuestion = (q) =>{
    buttons = shuffleArray(buttons);
    question.innerText = questions[q].question;

    let index = 0;
    buttons.forEach(button =>{
        button.innerHTML = questions[q].answers[index].ans;
        button.correct = questions[q].answers[index].correct;
        index += 1;
    });
}

const getResult = id =>{
    let answer = document.getElementById(id);
    if (answer.correct){
        answer.style = 'background: lightgreen';
        buttons.forEach(button =>{
            button.disabled = true;
        })
        score += 1;
    }
    else{
        answer.style = 'background: red';
        buttons.forEach(button =>{
            if (button.correct){
                button.style = 'background: lightgreen';
            }
            button.disabled = true;
        })
    }
    clearInterval(timer);
    document.getElementById('next-btn').classList.remove('hide');
}

const outOfTime = () =>{
    timeDisplay.innerHTML = "Out of Time!"
    buttons.forEach(button =>{
        if (button.correct){
            button.style = 'background: lightgreen';
        }
        button.disabled = true;
    })
    document.getElementById('next-btn').classList.remove('hide');
}

const setNextQuestion = () =>{
    buttons.forEach(button =>{
        button.style = 'background-color: rgb(60, 161, 255);';
        button.disabled = false;
    })
    document.getElementById('next-btn').classList.add('hide');
    sec = 0;
    timeDisplay.innerHTML = "Time Left: 10";
    timeDisplay.style = 'color: rgb(224, 224, 224)';
    mainGame();
}

const gameOver = () =>{
    document.getElementById('game-container').classList.add('hide');
    document.getElementById('game-over').classList.remove('hide');
    document.getElementById('score').innerHTML += score + '/10';
}

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
    
        let j = Math.floor(Math.random() * (i + 1));
                    
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }    
    return array;
}