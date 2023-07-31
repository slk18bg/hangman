// class for Hangman Game object

const spaces = document.getElementById("letter-spaces");
const word_hint = document.getElementById("word-hint");
const tries_left = document.getElementById("tries-left");
const game_img = document.getElementById("game-img");
const result = document.getElementById("result");
const playAgain = document.getElementById("play-again");

class Hangman {

    constructor(word, hint) {
        this.word = word.toLowerCase();
        this.hint = hint;
        this.spacesToDisplay = []; // depends on the length of the word
        for (let i = 0; i < this.word.length; i++) {
            this.spacesToDisplay.push("_");
        }
        this.displayUpdatedWord();
        this.incorrect = 0; // to keep track of the number of incorrect guesses the player makes
        this.maxAttempts = 6;
    }

    displayHint() {
        word_hint.innerHTML = "Hint: " + this.hint;
    }

    displayTriesLeft() {
        tries_left.innerHTML = "Incorrect: " + this.incorrect;
    }

    displayUpdatedWord() {
       let tempStr = "";
       for (let i = 0; i < this.spacesToDisplay.length; i++) {
        tempStr += this.spacesToDisplay[i];
       }
       spaces.innerHTML = tempStr;
       // word correctly guessed
       if(!this.spacesToDisplay.includes("_")) {
            this.displayResults();
       }
    }

    checkWordForLetter(letter) {
        if (this.word.includes(letter)) {
            for(let i = 0; i < this.word.length; i++) {
                if (this.word.charAt(i) === letter) {
                    this.spacesToDisplay[i] = letter.toUpperCase();
                }
            }
             this.displayUpdatedWord();
        }
        else {
            ++this.incorrect;
            this.displayTriesLeft();
            this.updateImage();
        }
    }

    updateImage() {
        // build image paths
        let path = `../hangman/images/wakame-creator/bya-wak-`;
        const images = ["wrong-1.jpg", "wrong-2.jpg", "wrong-3.jpg", "wrong-4.jpg", "wrong-5.jpg", "wrong-6.jpg"];
    
        if (this.incorrect >= this.maxAttempts) {
                this.displayResults();
            return;
        }
    
        for (let i = 1; i <= this.maxAttempts; i++) {
            if (i == this.incorrect) {
                path += images[i-1];
            }
        }
        game_img.setAttribute("src", path);
    }

    displayResults() {
        const h3 = document.getElementById("result-h3");
        const p = document.getElementById("result-p");
        const p2 = document.getElementById("result-word");
        const img = document.getElementById("result-img");

        let win = "../hangman/images/wakame-you-win.gif";
        let winAlt = "happy dancing wakame";
        let lose = "../hangman/images/byakuya-you-lose.gif";
        let loseAlt = "byakuya attacking with millions of cherry blossom blades";
    
        p2.innerHTML = `The word was <strong>${this.word}</strong>!`;
        if (this.incorrect >= this.maxAttempts) {
            h3.innerHTML = "You Lose!"
            p.innerHTML = "Captain Kuchiki is not happy!";
            img.setAttribute("src", lose);
            img.setAttribute("alt", loseAlt);
        }
        else {
            h3.innerHTML = "You Win!"
            p.innerHTML = "Captain Kuchiki leaves you unharmed.";
            img.setAttribute("src", win);
            img.setAttribute("alt", winAlt);
        }
        result.classList.add("fade-in");
        result.style.display = "flex";
    }
}

// event listener to play game again
playAgain.addEventListener("click", function(){
    location.href = "index.html";
})
