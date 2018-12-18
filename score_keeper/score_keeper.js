var p1_button = document.querySelector("#p1_button");
var p2_button = document.querySelector("#p2_button");
var reset = document.querySelector("#reset");

var p1_disp = document.querySelector("#p1_disp");
var p2_disp = document.querySelector("#p2_disp");

var max_games = document.querySelector("input");
var max_score = 3; // default value of 3 games to start

var game_over = false; // initialize values at start of a new round of games
var p1_score = 0;
var p2_score = 0;

p1_button.addEventListener("click", function() {
  p1_score = player_action(p1_score, p1_disp);
});

p2_button.addEventListener("click", function() {
  p2_score = player_action(p2_score, p2_disp);
});

function player_action(score, display) {
  if (p1_score < max_score && p2_score < max_score) {
    score++;
  }
  if (score >= max_score) {
    // change winning score to green
    display.classList.add("player_win");

    // change reset button to red
    reset.classList.remove("btn-secondary");
    reset.classList.add("btn-danger");
  }
  display.textContent = score;
  return score;
}

reset.addEventListener("click", function() {
  location.reload(); // reloads page to reset all values and start a new round of games
});

max_games.addEventListener("change", function() {
  max_score = Number(max_games.value);
  while (max_score < 1) {
    // must play atleast 1 game
    max_score = prompt("Please enter a number of games greater than zero:");
  }
  this.value = max_score; // ensures input displays correct number of games if received from prompt
  game_over = false;
  p1_disp.classList.remove("player_win");
  p2_disp.classList.remove("player_win");

  // change reset button back to gray
  reset.classList.remove("btn-danger");
  reset.classList.add("btn-secondary");
});
