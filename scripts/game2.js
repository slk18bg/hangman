// old hangman class

/*
class Hangman {

    // constructor
    constructor(word, hint) {
        this.word = word;
        this.hint = hint;
        
        this.spacesToDisplay = []; // depends on the length of the word
        const spaces = document.getElementById("letter-spaces");
        for (let i = 0; i < this.word.length; i++) {
            this.spacesToDisplay.push("_");
            spaces.innerHTML += this.spacesToDisplay[i] + " ";
        }
        this.guessesMade = 0; // to keep track of the number of guesses the player makes
        this.maxAttempts = 6;
        
    }  

    // to get the letter clicked
    checkGuess(letter) {
        console.log("checking guess");
        let hasLetter = false;
        console.log("letter received: " + letter);
        if (this.word.includes(letter)) hasLetter = true;

        if(hasLetter) {
            console.log("word has letter");
            let indices = [];
            for(let i = 0; i < this.word.length; i++) {
                if (this.word.charAt(i) === letter) {
                    indices.push(i);
                }
            }

            for (let i = 0; i < indices.length; i++) {
                //console.log("letter indices: " + i);
                this.spacesToDisplay[i] = letter;
            }
            for (let i = 0; i < this.spacesToDisplay.length; i++) {
                spaces.innerHTML += this.spacesToDisplay[i] + " ";
            }
        }
        else {
            console.log("word doesn't have letter");
            ++this.guessesMade;
            console.log("guesses made: " + this.guessesMade);
        }
    }
};


const spaces = document.getElementById("letter-spaces");
Hangman.prototype.displaySpaces = function() {
    for (let i = 0; i < this.word.length; i++) {
        this.spacesToDisplay.push("_");
        spaces.innerHTML += this.spacesToDisplay[i] + " ";
    }
}

Hangman.prototype.displayHint = function() {
    const word_hint = document.getElementById("word-hint");
    word_hint.innerHTML = "Hint: " + this.hint;
}

// Hangman.prototype.playGame = function () {
//     //console.log("in play game");

//     while (this.guessesMade < this.maxAttempts) {
//         // console.log(`max attempts: ${this.maxAttempts}, guessesMade: ${this.guessesMade}, word: ${this.word}, hint: ${this.hint}, spaces to display: ${this.spacesToDisplay.length}`);
//         if (this.word.includes(this.letter)) {
//             let indices = [];
//             for(let i = 0; i < this.word.length; i++) {
//                 if (word.charAt(i) === this.letter) {
//                     indices.push(i);
//                     console.log("word contains " + this.letter + " at index " + i );
//                 }
//             }

//             for (let i = 0; i < indices.length; i++) {
//                 this.spacesToDisplay[i] = indices[i];
//             }

//             this.spacesToDisplay.forEach(function(char){
//                 spaces.innerHTML += char + " ";
//             });
//         }
//         else ++this.guessesMade;
//         console.log(this.guessesMade);
//     }
// }

/*
 Hangman.prototype.checkWord = function(letter) {
    let indices = [];
    if (this.word.includes(letter)) {
        for(let i = 0; i < this.word.length; i++) {
            if (word.charAt(i) === letter) {
                indices.push(i);
                console.log("word contains " + letter + " at index " + i );
            }
        }
        const len = spaces.textContent.length();
    }
 }
*/


/// ignore code below

/*
async function loadInData() {
    return (await fetch(URL)).json();
}

document.addEventListener("DOMContentLoaded", testCall);

let data = [];
async function testCall() {
    let word;
    let hint;
    try {
        data = await loadInData();

        const testObj = JSON.stringify(data);
        const testArr = JSON.parse(testObj);
        word = testArr[0].word;
        hint = testArr[0].definition;
    } catch(e) {
        console.log("error");
    }

    console.log(word);
    console.log(hint);

    h2 = new Hangman(word, hint);
    h2.displayHint();
    h2.displayTriesLeft();


}
*/

/*
// will call API to get word/hint, initialize hangman object and set the game into motion
function startGame() {
    fetch(URL)
    .then(function (response){
        if (response.ok) {
            return response.json();
        }
    })
    .then(function(data){
        const testObj = JSON.stringify(data);
        const testArr = JSON.parse(testObj);
        word = testArr[0].word;
        hint = testArr[0].definition;

        h2 = new Hangman(word, hint);
        h2.displayHint();
        h2.displayTriesLeft();
        console.log(getLetter); // will show undefined in console
    })
    .catch(function() {
        console.log("error fetching");
    })
}

startGame();
*/


//// old game code for async attempts


/*
// other variables
let word;
let hint;
//let getLetter;
// api used
const URL = "https://random-words-api.vercel.app/word/vocabulary";
let h2; // the hangman object later initialized

// initialize letter buttons
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

letters.forEach(function(item) {
    letter_btns.innerHTML += `<button class="letter">${item}</button>`;
});

// event listener to play game again
playAgain.addEventListener("click", function(){
    location.href = "index.html";
})

// add event listeners to the letter buttons; get the letter of the button clicked
var getLetter;
letter_btns.addEventListener("click", readLetter);

// fetch api to get word/hint
function initWordAndHint() {
    fetch(URL, {
        method: "GET",
        //headers: {
        //    "X-Api-Key": "uR5Rc4eOmGnWa55JJZNnOQ==7ZH4owSvCtgQ1xCX"
       // }
    })
    .then(function(response){
        if (response.ok) {
            return response.json();
        }
    })
    .then(function(data){
        // get necessary data from API to create hangman object
        const testObj = JSON.stringify(data);
        const testArr = JSON.parse(testObj);
        word = testArr[0].word;
        hint = testArr[0].definition;

        h2 = new Hangman(word, hint);
        h2.displayHint();
        return h2;
    })
    .then(function(h2){
        console.log(h2.guessesMade);
        console.log(h2.word);
        console.log(h2.hint);
    })
    .catch(function(){
        console.log("error fetching");
    });
}

// testing data pre-api call
// let tempWord = "bleach";
// let tempHint = "not what you think it is";
//const h = new Hangman(tempWord, tempHint);

function initHangmanObj(word, hint) {
    h2 = new Hangman(word, hint);

    console.log(h2.word);
    console.log(h2.hint);

    playGame(h2);
}

function playGame(h2) {
    console.log(h2.word);
    console.log(h2.hint);
}

function readLetter(e) {
    if(e.target.classList.contains('letter')) {
        e.target.disabled = true;
        e.target.classList.add('disabled-letter');
        e.target.classList.remove('letter');
        getLetter = e.target.textContent;
        processLetter(getLetter);
    }
}

async function processLetter(letter) {
    console.log(letter);
}

 initWordAndHint();




//win.style.display = "flex";
//lose.style.display = "flex";
*/



const game_img = document.getElementById("game-img");
const letter_spaces = document.getElementById("letter-spaces");
const word_hint = document.getElementById("word-hint");
const letter_btns = document.getElementById("letter-btns");
const letter_btn = letter_btns.querySelectorAll(".letter"); // for a single button
const win = document.getElementById("you-win");
const lose = document.getElementById("you-lose");
const playAgain = document.getElementById("play-again");


// initialize letter buttons
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

letters.forEach(function(item) {
    letter_btns.innerHTML += `<button class="letter">${item}</button>`;
});

// event listener to play game again
playAgain.addEventListener("click", function(){
    location.href = "index.html";
})

// other variables
let word;
let hint;
//let getLetter;
// api used
const URL = "https://random-words-api.vercel.app/word/vocabulary";
let h2; // the hangman object later initialized

function startGame() {
    fetch(URL, {
        method: "GET",
        //headers: {
        //    "X-Api-Key": "uR5Rc4eOmGnWa55JJZNnOQ==7ZH4owSvCtgQ1xCX"
       // }
    })
    .then(function(response){
        if (response.ok) {
            return response.json();
        }
    })
    .then(function(data){
        // get necessary data from API to create hangman object
        const testObj = JSON.stringify(data);
        const testArr = JSON.parse(testObj);
        word = testArr[0].word;
        hint = testArr[0].definition;

        h2 = new Hangman(word, hint);
        h2.displayHint();
        initializeLetters(h2);
        updateImage(h2);
    })
    .catch(function() {
        console.log("error fetching");

    });
}

function initializeLetters(hangman) {
    letter_btn.forEach(function(button) {
        button.addEventListener("click", function() {
            const getLetter = button.textContent;
            button.setAttribute(disabled, 'disabled') = true;
            button.classList.add('disabled-letter');
            button.classList.remove('letter');
            console.log(getLetter);
            hangman.checkGuess(getLetter);
            updateImage(hangman);
        });
    });
}

function updateImage(hangman) {
    // build image paths
    let path = `../images/wakame-creator/bya-wak-`;
    const images = ["wrong1.jpg", "wrong-2.jpg", "wrong-3.jpg", "wrong-4.jpg", "wrong-5.jpg", "wrong-6.jpg"];

    for (let i = 1; i <= hangman.maxAttempts; i++) {
        if (i == hangman.guessesMade) {
            path += images[i-1];
        }
    }
    game_img.setAttribute(src, path);
}

startGame();