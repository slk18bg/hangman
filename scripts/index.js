// elements from index.html
const play_btn = document.getElementById("play-btn");
const rules_btn = document.getElementById("rules-btn");
const rules_popup = document.getElementById("rules-popup");
const close_rules = document.getElementById("close-rules");

// display rules popup when button pressed
rules_btn.addEventListener("click", displayPopup);

// close rules
close_rules.addEventListener("click", closePopup);

// start the game when button pressed
play_btn.addEventListener("click", function(){
    location.href = "game.html";
})


function displayPopup() {
    rules_popup.style.display = "flex";
}

function closePopup(){
    rules_popup.style.display = "none";
}