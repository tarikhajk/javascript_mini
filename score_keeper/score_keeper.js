var p1_button = document.querySelector("#p1_button");
var p2_button = document.querySelector("#p2_button");
var reset = document.querySelector("#reset");

var p1_disp = document.querySelector("#p1_disp");
var p2_disp = document.querySelector("#p2_disp");

var score = document.querySelector("h1");
var max_options = document.querySelector("select");

var max_score = 0;

var p1_score = 0;
var p2_score = 0;
//score.textContent = p1_score + " to " + p2_score;

p1_button.addEventListener("click", function() {
    max_score = max_options[max_options.selectedIndex].textContent;
    if (p1_score < max_score && p2_score < max_score) {
        p1_score++;
    }
    if (p1_score >= max_score) {
        p1_disp.style.color = "green";
        reset.style.background = "red";
    }
    p1_disp.textContent = p1_score;
})

p2_button.addEventListener("click", function() {
    max_score = max_options[max_options.selectedIndex].textContent;
    if (p1_score < max_score && p2_score < max_score) {
        p2_score++;
    }
    if (p2_score >= max_score) {
        p2_disp.style.color = "green";
        reset.style.background = "red";
    }
    p2_disp.textContent = p2_score;
})

reset.addEventListener("click", function() {
    location.reload();
})

max_options.addEventListener("click", function() {
    p1_disp.style.color = "black";
    p2_disp.style.color = "black";
    reset.style.background = "";
})


