let playerScore = 0;
let computerScore = 0;

function play(playerMove) {
    const moves = ['pedra', 'papel', 'tesoura'];
    const computerMove = moves[Math.floor(Math.random() * 3)];

    document.getElementById('playerChoice').textContent = `👤 Jogador escolheu: ${emoji(playerMove)}`;
    document.getElementById('computerChoice').textContent = `💻 Computador escolheu: ${emoji(computerMove)}`;

    const result = getWinner(playerMove, computerMove);
    document.getElementById('winner').textContent = result;

    if (result === 'Você venceu!') {
        playerScore++;
    } else if (result === 'Você perdeu!') {
        computerScore++;
    }

    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;

    document.querySelectorAll('.choice').forEach(btn => btn.classList.remove('selected'));

    const playerButtons = document.querySelectorAll('.player-side .choice');
    const computerButtons = document.querySelectorAll('.computer-side .choice');

    const playerIndex = moves.indexOf(playerMove);
    const computerIndex = moves.indexOf(computerMove);

    if (playerButtons[playerIndex]) playerButtons[playerIndex].classList.add('selected');
    if (computerButtons[computerIndex]) computerButtons[computerIndex].classList.add('selected');

    const resultDiv = document.querySelector('.result');
    resultDiv.classList.remove('show');
    void resultDiv.offsetWidth;  
    resultDiv.classList.add('show');
}

function getWinner(player, computer) {
    if (player === computer) return 'Empate!';
    if (
        (player === 'pedra' && computer === 'tesoura') ||
        (player === 'papel' && computer === 'pedra') ||
        (player === 'tesoura' && computer === 'papel')
    ) {
        return 'Você venceu!';
    } else {
        return 'Você perdeu!';
    }
}

function emoji(move) {
    switch (move) {
        case 'pedra': return '🪨';
        case 'papel': return '📃';
        case 'tesoura': return '✂️';
        default: return '';
    }
}
