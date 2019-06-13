/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// add event listener for the start button, and create a new instance of the Game class
let game;

const btn = document.querySelector('#btn__reset');
btn.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

// add event listener for the onscreen keyboard buttons
document.querySelectorAll('.key')
    .forEach(el => el.addEventListener('click', e => game.handleInteraction(e.target)));