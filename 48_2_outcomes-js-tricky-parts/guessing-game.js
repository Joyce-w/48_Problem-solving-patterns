function guessingGame() {
    //create random number everytime the function runs
    let num = Math.floor(Math.random() * 99);
    let count = 0;
    let hasWon = false;

    //why does there need to be a return function?
    return function guess(guess) {
        if (hasWon) return 'The game is over, you already won!';

        //output for too low, high, exact number 
        if (guess < num) {
            count++;
            return `${guess} is too low!`
        }
        else if (guess > num) {
            count++
            return `${guess} is too low!`
        }
        else {
            hasWon = true;
            return `You win! You found ${guess} in ${count} guesses.`
        }        
        }   
    }




module.exports = { guessingGame };
