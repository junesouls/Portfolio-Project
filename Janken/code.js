let diceCount = 0;
let coinCount = 0;
let rockPaperScissorsCount = 0;

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const result = determineWinner(playerChoice, computerChoice);
    document.getElementById('gameResult').innerHTML = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
    rockPaperScissorsCount++;
    updateTotalCounts();
}

function tossCoin() {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    document.getElementById('coinResult').innerHTML = `It's ${result}!`;
    coinCount++;
    updateTotalCounts();
}

function rollDice() {
    const result = Math.floor(Math.random() * 6) + 1;
    document.getElementById('diceResult').innerHTML = `You rolled a ${result}!`;
    diceCount++;
    updateTotalCounts();
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

function updateTotalCounts() {
    document.getElementById('totalCount').innerHTML = `Dice rolled: ${diceCount} Coin tossed: ${coinCount} Rock-Paper-Scissors played: ${rockPaperScissorsCount}`;
}
