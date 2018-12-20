var NUM_SQUARES = 6; // default mode is set to hard mode
var colors = [];
var correct_color = [];

var body = document.querySelector("body");
var squares = document.querySelectorAll(".square");
var squares_deco = document.querySelectorAll(".square_deco");
var picked_display = document.querySelector("#picked_disp");
var header = document.querySelector("h1");
var reset = document.querySelector("#reset");
var message = document.querySelector("#message");
var mode_buttons = document.querySelectorAll(".mode");

// don't display stripe message if screen is below medium
message.classList.add("d-none", "d-md-inline");

init();

// initialize game by resetingt squares and picking new color to be guessed
function init() {
  setupModeButtons();
  setupSquaresDisplay();
  setupSquareListeners();
  resetHeader();
}

// Core game Logic
function setupSquareListeners() {
  for (var i = 0; i < squares.length; i++) {
    // add click listeners to squares
    squares[i].addEventListener("click", function() {
      var clicked_color = this.style.backgroundColor;
      // compare clicked color to correct color
      if (clicked_color === correct_color) {
        // Correct! turn all squares to correct color
        message.textContent = "Correct!";
        changeColors(correct_color);
        header.style.backgroundColor = correct_color;
        if (checkIfTooLight()) {
          // change header text to black if background is too light
          header.style.color = "black";
        }
        reset.textContent = "play again?";
      } else {
        // Wrong! make sqaure same color as background
        message.textContent = "Try Again...";
        this.style.backgroundColor = body.style.background;
      }
    });
  }
}

// change header back after a game win
function resetHeader() {
  header.style.backgroundColor = "steelblue";
  header.style.color = "white";
  reset.textContent = "new colors";
  message.textContent = "";
}

// pick a new correct color and setup new squares
function setupSquaresDisplay() {
  colors = generateRandomColors(NUM_SQUARES);
  correct_color = pickColor();
  picked_display.textContent = correct_color;
  // assign play squares to new colors
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      // if only 3 colors generated, bottom row gets hidden
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  // hide decoration squares
  for (var i = 0; i < squares_deco.length; i++) {
    squares_deco[i].style.backgroundColor = body.style.background;
  }
}

// Easy and Hard mode buttons
function setupModeButtons() {
  for (var i = 0; i < mode_buttons.length; i++) {
    mode_buttons[i].addEventListener("click", function() {
      // prevents restart by clicking button if already selected
      if (!this.classList.contains("selected")) {
        // remove "selected" class formatting from both just in case
        mode_buttons[0].classList.remove("selected");
        mode_buttons[1].classList.remove("selected");
        // add to the one being clicked on now
        this.classList.add("selected");
        if (this.textContent === "hard") {
          NUM_SQUARES = 6;
        } else {
          // would need to make this an "else if" if a medium mode is added in the future
          NUM_SQUARES = 3;
        }
        init();
      }
    });
  }
}

// resets game remains in desired difficulty mode when "play again?" button is pressed
reset.addEventListener("click", function() {
  init();
});

// changes all square colors to a given color
function changeColors(color) {
  // stops at 3 squares if only 3 colors were generated
  for (var j = 0; j < colors.length; j++) {
    squares[j].style.backgroundColor = color;
  }
  NUM_SQUARES > 3 ? (end_traverse = squares_deco.length) : (end_traverse = 2);
  // only shows first row of decoration squares
  for (var i = 0; i < end_traverse; i++) {
    squares_deco[i].style.backgroundColor = color;
  }
}

// generates random integer between 1 and 6 inclusive
function pickColor() {
  // Math.random resturns [0, 1), so we multiply it by 6 which gives us [0, 5.9999]..
  // but then we add 1 and floor it to get [1, 6]! (hard mode)
  // for easy mode, we need a ceiling of 3, so we just use length of colors array
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// check if correct_color is too bright for white text
function checkIfTooLight() {
  // split rgb(...) color into red, green, and blue
  // e.g. "rgb(245, 12, 57)"
  var C = correct_color
    .substring(4, correct_color.length - 1)
    .replace(/ /g, "")
    .split(",");
  // normalize values
  C = [C[0] / 255, C[1] / 255, C[2] / 255];
  // calculate luminance of correct_color (i got this formula from the internet)
  for (var i = 0; i < C.length; i++) {
    if (C[i] <= 0.03928) {
      C[i] = C[i] / 12.92;
    } else {
      C[i] = Math.pow((C[i] + 0.055) / 1.055, 2.4);
    }
  }
  var L = 0.2126 * C[0] + 0.7152 * C[1] + 0.0722 * C[2];
  return L > 0.179; // if this is true, then background is too light for white font
}

// generates n number of squares with random rgb colors
function generateRandomColors(num) {
  var colors = [];
  for (var i = 0; i < num; i++) {
    colors[i] = "rgb(" + rand(255) + ", " + rand(255) + ", " + rand(255) + ")";
  }
  return colors;
}

// generates random integer between 0 and n inclusive
function rand(n) {
  return Math.floor(Math.random() * (n + 1));
}
