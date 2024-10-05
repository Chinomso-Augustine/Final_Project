

const displayPlayerNum = document.querySelector('.display');

function randNum(minNum, maxNum) {
    const min = Math.ceil(minNum);
    const max = Math.floor(maxNum);

    return Math.floor(Math.random() * (max - min + 1)) + min; // + min ensures that numbers are inclusive
}

let numRange = randNum(1, 200);
function playGame() {
    const getPlayerValue = parseInt(document.querySelector('.playerGuess').value);

    if (getPlayerValue === numRange) {
        displayPlayerNum.innerHTML = "Congratulation! You won!";
        restartGame();

    }
    else if (getPlayerValue > numRange) {
        displayPlayerNum.innerHTML = "Your answer is greater than correct number";
        textRefresh();

    }
    else if (getPlayerValue < numRange) {
        displayPlayerNum.innerHTML = "Your answer is less than correct number";
        textRefresh();
    }

}

function textRefresh() {
    setTimeout(() => {
        displayPlayerNum.innerHTML = " ";
    }, 3000)
}

const displayReset = document.querySelector('.playAgain');

function restartGame() {

    let frame = document.querySelector('.frame');
    
    //save a non-existed button in a variable
    let restartBtn = document.querySelector('.playAgain');

    //check if the btn exist and if not, create one
    if (!restartBtn) {
        restartBtn = document.createElement('button');

        //creating a text to display
        restartBtn.textContent = "Play Again";

        //adding a class so to style btn
        restartBtn.classList.add('playAgain');

        //Use eventlistener to generate a new number. Requires action string and then a function
        restartBtn.addEventListener('click', () => {

            //Generate new number
            numRange = randNum(1, 200);
            //Clear player inputs
            document.querySelector('.playerGuess').value = " ";
            //Clear message 
            displayPlayerNum.innerHTML = " ";
            //remove btn
            restartBtn.remove();
        })

        //Append btn to the frame 
        frame.appendChild(restartBtn);
    }

}

function mainFun() {
    playGame();
}

