let deck;

let playerCardsDisplay = document.getElementById('player-cards')
let playerCardsArr = [];
let playerSum = 0;

let dealerCardsDisplay = document.getElementById('dealer-cards')
let dealerCardsArr = [];
let dealerSum = 0;

// Construct the deck when window loads
window.onload = function(){
    constructDeck();
}

// Constructs the deck
const constructDeck = () =>{
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const suits = ['C', 'S', 'H', 'D'];
    deck = [];

    for (let i = 0; i < values.length; i++){ // Goes through A - K
        for (let j = 0; j < suits.length; j++){ // Goes through C - D
            deck.push({
                value: values[i],
                suit: suits[j]
            });
        }
    }
    deck = shuffleArray(deck.slice());
    //console.log(deck);
}

// Shuffles an array
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
    
        let j = Math.floor(Math.random() * (i + 1));
                    
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }    
    return array;
}

// Sets initial cards. Deals two cards to dealer and player
const setCards = () =>{
    for (let i = 0; i < 2; i++){
        dealCardPlayer();
        dealCardDealer();
    }
}

// Sets the game
const setGame = () =>{
    document.getElementById('start-btn-container').style = 'display: none';
    document.getElementById('game-container').classList.remove('fullHide');
    setCards();
}

// Function to deal cards to dealer
const dealCardDealer = () =>{
    let pickedCard = deck.pop(); // The selected card
    let card = document.createElement('img'); 
    card.id = 'card';
    card.classList.add('dealerCard');

    // Sets the first card face down
    if (dealerCardsArr.length === 0){
        card.src = 'cards/BACK.png';
        dealerCardsArr.push(pickedCard);
    }
    // Deals with other cards not faced down
    else{
        card.src = 'cards/' + pickedCard.value + '-' + pickedCard.suit + '.png';
        dealerCardsArr.push(pickedCard); 
        dealerSum = calcSum(pickedCard, dealerSum, dealerCardsArr); // Calculate dealer sum
    }
    dealerCardsDisplay.appendChild(card);
    document.getElementById('dealer-sum').innerHTML = 'Dealer: ' + dealerSum;
}

// Function to deal player cards
const dealCardPlayer = () =>{
    let pickedCard = deck.pop(); // The selected card
    
    let card = document.createElement('img');
    card.id = 'card';
    card.src = 'cards/' + pickedCard.value + '-' + pickedCard.suit + '.png';
    playerCardsDisplay.appendChild(card);

    playerCardsArr.push(pickedCard);
    if (pickedCard.value === 'A'){ // If it's an ace, show that it currently has the value of 11
        pickedCard.lowered = false;
    }

    playerSum = calcSum(pickedCard, playerSum, playerCardsArr); // Calculate player sum
    document.getElementById('player-sum').innerHTML = 'You: ' + playerSum; 

    // End the game if player sum is 21 or over
    if (playerSum >= 21){
        revealCard(); // Reveal the dealers card
        checkGameState(); // Check the state of the game
    }
}

// Function that checks the game state
const checkGameState = () =>{
    document.getElementById('hit').disabled = true;
    document.getElementById('stand').disabled = true;
    document.getElementById('deal').classList.remove('hide');
    document.getElementById('winner').classList.remove('hide');

    if (playerSum > 21){
        document.getElementById('winner').innerHTML = 'Bust! Dealer Wins';
    }
    else if (playerSum === 21){
        document.getElementById('winner').innerHTML = '21! Player Wins';
    }
    else if (dealerSum > 21){
        document.getElementById('winner').innerHTML = 'Bust! Player Wins';
    }
    else if (dealerSum === 21){
        document.getElementById('winner').innerHTML = '21! Dealer Wins';
    }
    else if (dealerSum >= playerSum){
        document.getElementById('winner').innerHTML = 'Dealer Wins';
    }
    else if (playerSum > dealerSum){
        document.getElementById('winner').innerHTML = 'Player Wins';
    }
}

// Function thats called when the player stands
const stand = () =>{
    revealCard();
    // Deal the dealer cards while the dealer sum is less than 17
    while (dealerSum < 17){
        dealCardDealer();
    }
    checkGameState();
}

// Function to reveal the dealers faced down card
const revealCard = () =>{
    let dealerCards = Array.from(document.getElementsByClassName('dealerCard'));
    let hiddenCard = dealerCardsArr[0];
    dealerCards[0].src = 'cards/' + hiddenCard.value + '-' + hiddenCard.suit + '.png';
    dealerSum = calcSum(hiddenCard, dealerSum);
    document.getElementById('dealer-sum').innerHTML = 'Dealer: ' + dealerSum;
}

// Calculate the card sums
const calcSum = (pickedCard, userSum, userCardsArr) =>{
    if (pickedCard.value === 'J' ||
    pickedCard.value === 'Q' ||
    pickedCard.value === 'K'){
        userSum += 10;
    } 
    else if (pickedCard.value === 'A'){
        userSum += 11;
    }
    else{
        userSum += parseInt(pickedCard.value);
    }

    // Decides whether to change the ace value to 1
    if (userSum > 21){
        let index = 0;
        while (userSum > 21 && index < userCardsArr.length){
            if (userCardsArr[index].value === 'A' && !userCardsArr[index].lowered){
                userCardsArr[index].lowered = true;
                userSum -= 10;
            }
            index++;
        }
    }

    return userSum;
}

// Function to reset the game
const resetGame = () =>{
    playerSum = 0;
    playerCardsDisplay.innerHTML = '';
    playerCardsArr = [];
    document.getElementById('player-sum').innerHTML = 'You: 0'

    dealerCardsDisplay.innerHTML = '';
    dealerCardsArr = [];
    document.getElementById('dealer-sum').innerHTML = 'Dealer: 0'
    dealerSum = 0;

    document.getElementById('hit').disabled = false;
    document.getElementById('stand').disabled = false;
    document.getElementById('winner').classList.add('hide');
    document.getElementById('deal').classList.add('hide');

    constructDeck();
    setCards();
}
