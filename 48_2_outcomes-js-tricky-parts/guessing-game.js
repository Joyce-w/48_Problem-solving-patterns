function guessingGame() {
    //create random number everytime the function runs
    const answer = Math.floor(Math.random() * 100);
    let count = 0;
    let hasWon = false;

    //why does there need to be a return function?
    return function guess(num) {
        if (hasWon) return "The game is over, you already won!";
        //check for equality
        count++;
        if (answer === num) {
            hasWon = true;
            const guess = count === 1 ? "guess" : "guesses";
            return `You win! You found ${answer} in ${count} ${guess}.`            
        }
        //output for too low, high, exact number 
        if (num < answer) return `${num} is too low!`;
        if (num > answer) return `${num} is too high!`;
    }   
}




module.exports = { guessingGame };
