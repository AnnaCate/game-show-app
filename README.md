# Game Show App
This web app is for the [Treehouse](https://teamtreehouse.com/home) Techdegree Project 4: OOP Game Show App. The purpose of the project was to practice using Object-Oriented JavaScript Programming, including object constructors, classes, methods, and object interaction. The HTML and CSS files were provided, but I did edit the CSS file to attempt to prevent wrapping in the middle of a word.

View live webpage [here](https://annacate.github.io/game-show-app/).

# Technology used
HTML, CSS, and vanilla JavaScript

# Instructions
Click the "Start Game" button to initiate a game. This will select a random phrase from a list of possible phrases, and will display a corresponding amount of spaces on the screen in order to guess the letters. Click on the on-screen keyboard to guess a letter. If you guessed correctly, all instance of the letter will appear within the phrase. If you guessed incorrectly, you will lose a "life" (indicated by the hearts on the bottom of the page). You have 5 lives per game. If you lose all 5 lives before guessing the full phrase, you will lose the game.

# Limitations
I used JavaScript to add a "break" class to the specific HTML element on which I wanted the line-wrap to occur. However, it will not respond appropriately to different screen sizes, and it may not respond as expected in the event of adding additional quotes of varying lengths and word lengths. 

# Possible improvements
In order to achieve expected word wrapping in all scenarios, I would need to add code for @media queries, and perhaps use JavaScript to calculate the total width of the element(s) on the page and use that as conditional logic for adding a "break" class.