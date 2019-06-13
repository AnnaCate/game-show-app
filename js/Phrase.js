/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 /* Create a Phrase class to handle the creation of phrases */

 class Phrase {
    constructor (phrase) { 
      this.phrase = phrase.toLowerCase();  
    }
    // Display phrase on game board
    addPhraseToDisplay() {
        const ul = document.querySelector('#phrase > ul');
        let li;
        for (let i = 0; i < this.phrase.length; i++){
            li = document.createElement('li')
            li.textContent = this.phrase[i];
            if (li.textContent === ' ') {
                li.className = 'space';
            } else {
                li.classList.add('hide', 'letter', `${li.textContent}`);
            };
            ul.appendChild(li);
        }
        // add 'break' class to 3rd `space` element to prevent wrapping in the middle of words
        document.getElementsByClassName('space')[2].classList.add('break');
    };
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        return this.phrase.includes(letter);
    };
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        document.querySelectorAll(`.${letter}`).forEach(el => {
            el.classList.remove('hide');
            el.classList.add('show');
        });
    };
}