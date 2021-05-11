let userScore = 0;
let computerScore = 0;

// ------> catching the DOM <------
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const resetScore = document.getElementById("btn");

function convertToWord(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    return "Scissors";
}

// ------> Win <------
function win(userChoice, computerChoice) {
    const userWord = "user".fontsize(5).sub();
    const compWord = "comp".fontsize(5).sub();
    const userChoice_div = document.getElementById(userChoice)

    userScore++;
    userScore_span.innerText = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${userWord} beats ${convertToWord(computerChoice)}${compWord}. You win! 🔥`
    userChoice_div.classList.add("green-glow")
    setTimeout(() => {
        userChoice_div.classList.remove("green-glow")
    }, 500);

}

// ------> Lose <------
function lose(userChoice, computerChoice) {
    const userWord = "user".fontsize(5).sub();
    const compWord = "comp".fontsize(5).sub();
    const userChoice_div = document.getElementById(userChoice)
    computerScore++;
    computerScore_span.innerText = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${userWord} loses to ${convertToWord(computerChoice)}${compWord}. You Lost! 💩`
    userChoice_div.classList.add("red-glow")
    setTimeout(() => {
        userChoice_div.classList.remove("red-glow")
    }, 500);
}

// ------> Draw <------
function draw(userChoice, computerChoice) {
    const userWord = "user".fontsize(5).sub();
    const compWord = "comp".fontsize(5).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${userWord} equals ${convertToWord(computerChoice)}${compWord}. It's a draw!`

    userChoice_div.classList.add("gray-glow")
    setTimeout(() => {
        userChoice_div.classList.remove("gray-glow")
    }, 500);
}


// ------> Get Computer's Choice <------
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3)); //will not go over 3 
    //floor is used for taking whole number
    return choices[randomNumber];
}

// ------> Receive user's choice <------
function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}


// ------> Getting user's choice amd passing value to game function <------
function main() {
    rock_div.addEventListener('click', () => game("r"))

    paper_div.addEventListener('click', () => game("p"))

    scissors_div.addEventListener('click', () => game("s"))

    resetScore.addEventListener('click',() => reset())
}
main();

// -------> Reset Score <------
function reset(){
        userScore_span.innerHTML = 0;
        computerScore_span.innerHTML = 0;
        result_p.innerHTML = "Select Your Choice"
}