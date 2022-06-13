const startBtn = document.querySelector('.btn');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const winner = document.querySelector('.winner');

const gameArr = ['Rock', 'Paper', 'Scissor'];
player1.textContent = "Rock";
player2.textContent = "Paper";

function getRandomNum() {
    return Math.floor(Math.random() * gameArr.length);
}

startBtn.addEventListener('click', () => {
    runGame();
})

function runGame() {
    let randomNum1 = getRandomNum();
    let randomNum2 = getRandomNum();
    let randomVal1 = gameArr[randomNum1];
    let randomVal2 = gameArr[randomNum2];
    player1.textContent = randomVal1;
    player2.textContent = randomVal2;

    if((randomVal1 === "Rock" && randomVal2 === "Scissor") || (randomVal1 === "Paper" && randomVal2 === "Rock") || (randomVal1 === "Scissor" && randomVal2 === "Paper")){
        winner.textContent('Player1 Wins');
    }
    else{
        winner.textContent('Player2 Wins');
    }

}