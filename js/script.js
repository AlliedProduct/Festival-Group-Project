// Start of JavaScript by Nojus Sinkevicius
function game() {
        // The list of words that the player can guess
        const words = ['hamilton', 'concert', 'music', 'dababy', 'drake', 'nci'];

        // Choose a random word from the list
        const word = words[Math.floor(Math.random() * words.length)];

        // Create an array of underscores the same length as the word
        const answerArray = new Array(word.length);
        for (let i = 0; i < answerArray.length; i++) {
            answerArray[i] = '_';
        }

        let remainingLetters = word.length;

        // The main game loop
        while (remainingLetters > 0) {
            // Show the player their progress
            alert(answerArray.join(' '));

            // Get a guess from the player
            const guess = prompt('Guess a letter, or click Cancel to stop playing.');
            if (guess === null) {
                break;
            } else if (guess.length !== 1) {
                alert('Please enter a single letter.');
            } else {
                // Update the game with the guess
                for (let j = 0; j < word.length; j++) {
                    if (word[j] === guess) {
                        answerArray[j] = guess;
                        remainingLetters--;
                    }
                }
            }
        }

        // Show the final answer and congratulate the player
        alert(answerArray.join(' '));
        alert('Good job! The answer was ' + word);

}

;
// End of JavaScript by Nojus Sinkevicius

// Start of JavaScript by Domantas Knyzelis

function showImageText() {
    document.getElementById('imageText').style.display = "block";
}

function showImageText2() {
    document.getElementById('imageText2').style.display = "block";
}

function showImageText3() {
    document.getElementById('imageText3').style.display = "block";
}
// Change the price from 0 to 40 when standard is clicked
function standard() {
    document.getElementById('total').innerHTML = "€40"
}
// Change the price from 0 to 55 when vip is clicked
function vip() {
    document.getElementById('total').innerHTML = "€55"
}
// Change the price from 0 to 75 when bckstage is clicked
function bckstage() {
    document.getElementById('total').innerHTML = "€75"
}

// End of JavaScript by Domantas Knyzelis