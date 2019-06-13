/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 /* Create a Game class methods for starting and ending the game, handling
interactions, getting a random phrase, checking for a win, and removing a life from the
scoreboard */

class Game {
    constructor () { 
        this.missed = 0;  
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const phrases = [
            new Phrase('Better late than never'),
            new Phrase('Once in a blue moon'),
            new Phrase('Speak of the devil'),
            new Phrase('Caught between a rock and a hard place'),
            new Phrase('Best of both worlds')
        ];
        return phrases;
    };
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomNum = Math.floor(Math.random() * this.phrases.length);
        // select phrase
        return this.phrases[randomNum];
    };
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        // reset from previous game
            // remove `li` elements from Phrase `ul` element
            document.querySelectorAll('ul > li').forEach(el => el.remove());
            // enable onscreen keyboard buttons & remove `chosen` or `wrong` CSS classes
            document.querySelectorAll('.key').forEach(el => {
                el.classList.remove('chosen', 'wrong');
                el.removeAttribute('disabled');
            });
            // reset heart images
            document.querySelectorAll('.tries > img').forEach(el => el.src = 'images/liveHeart.png');

        // hide the overlay 
        // (setTimeout is used to ensure that, after reset, button classes are reset prior to overlay hiding)
        setTimeout(() => {
            document.querySelector('#overlay').style.display = 'none';
        }, 150);
        // set activePhrase to getRandomPhrase() and addPhraseToDisplay
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        // get list of `li` elements containing the letters of the phrase
        const lis = document.querySelectorAll('li.letter');
        // create counter variable to see how many letters are shown
        let shown = 0;
        // loop through letters of phrase to count how many are shown
        lis.forEach(el => el.classList.contains('show') ? shown++ : shown);
        // return true or false for whether all of the letters are shown
        return (shown === lis.length);
    };
    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        // increment `missed` property
        this.missed++;
        // select heart images node list
        const lives = document.querySelectorAll('.tries > img');
        // access the first `liveHeart.png` image and replace it with a lost heart
        lives[this.missed - 1].src = 'images/lostHeart.png';
        // if missed equals 5, call gameOver function
        if (this.missed === 5) {
            this.gameOver(false);
        }
    };
    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        // get the overlay div element
        const div = document.querySelector('#overlay');
        // show the overlay div
        div.style.display = 'flex';
        // remove 'start' class from overlay div
        div.classList.remove('start');
        // get the h1 element
        const h1 = document.querySelector('#game-over-message');

        // create and display game outcome message & add win/lose class to div
        if (gameWon) {
            h1.textContent = 'You won! 😄';
            div.className = 'win';
        } else {
            h1.textContent = 'You lost 😪';
            div.className = 'lose';
        }
    };
    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        // get text content (letter) of clicked button
        const selectedLetter = button.textContent;
        let onScreenLetter;

        // select button element from DOM
        document.querySelectorAll('.key').forEach(el => {
            if (el.textContent === selectedLetter) {
                onScreenLetter = el;
            }
        });

        // disable selected letter's onscreen keyboard button
        onScreenLetter.setAttribute('disabled', true);
        
        // if letter is in phrase, add 'chosen' class and check for win
        if (this.activePhrase.checkLetter(selectedLetter)) {
            onScreenLetter.classList.add('chosen');
            this.activePhrase.showMatchedLetter(selectedLetter);
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        // if letter not in phrase, add 'wrong' class to letter, and call removeLife()
        } else {
            onScreenLetter.classList.add('wrong');
            this.removeLife();
        };
    };
}