// game.html
const letter_btns = document.getElementById("letter-btns");
const letter_btn = letter_btns.querySelectorAll(".letter"); // for a single button


// local data
let words = ["Debacle", "Levity", "Adamant", "Guile", "Abrogate", "Dote", "Heterogeneous", "Pique", "Invincible", "Hack", "Distraught", "Gloat", "Suffocate", "Combustion", "Wean", "Pest", "Negligent", "Fragile", "Feud", "Conceit", "Stipulate"];

let hints = ["A breakup; overthrow; sudden disaster", "Lack of seriousness", "inflexible", "Deceit cunning", "Repeal or annul by authority", "Show much fondness; center of one's attention", "Made up of different kinds", "stir curiosity", "Too strong to be defeated", "Cut roughly", "Upset in mind", "Brag selfishly", "Cause or have difficulty in breathing", "Process of burning", "To turn away (from a habit)", "Destructive thing or a person who is nuisance", "Taking too little care", "Easily injured, broken, or destroyed", "Bitter quarrel over a long period of time", "Over-high opinion of too much pride", "State or put forward as a necessary condition"];

let getLetter; // hold letter value
// api attempted to use; connection was successful but was having trouble with something else
const URL = "https://random-words-api.vercel.app/word/vocabulary";
let h2;
// create the letters
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

letters.forEach(function(item) {
    letter_btns.innerHTML += `<button class="letter">${item}</button>`;
});

letter_btns.addEventListener("click", function(e){
    if(e.target.classList.contains('letter')) {
        e.target.disabled = true; // make the button unclickable
        e.target.classList.add('disabled-letter'); // for styling
        e.target.classList.remove('letter'); // for styling
        getLetter = e.target.textContent; // get the button's text
        //console.log(getLetter);
        h2.checkWordForLetter(getLetter.toLowerCase());
    }

})

// to generate random index to get a random word
let random = Math.floor(Math.random() * words.length);
// create hangman object
h2 = new Hangman(words[random], hints[random]);
//h2.displayUpdatedWord();
h2.displayHint();
h2.displayTriesLeft();

