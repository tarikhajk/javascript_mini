# javascript_mini
Repo containing mini JavaScript projects completed while taking the webdev course by Colt Steele

## List of Projects
<b>Score Keeper</b>  
A responsive score keeper for a 2-player game with a user-defined max score setting. The website visually reflects the winner of the game and handles the case of negative max score inputs. A couple of interesting features I added:
- Winning score gets displayed in green and scores can no longer be acrued. Reset button turns red.
- If user-defined max score is changed at the end of thd game or mid-game, the current scores are retained and any winning styling is removed and game is resumable.
- If user-defined max score is changed to a *lower* value than a current score on the board, no more points can be acrued, and the original winning score remains green
- If user enters negative or zero max score, a prompt will trigger asking the user for a positive value and will persist until one is entered.

<b>Color Game</b>  
Pick the color that matches the RGB value in the header! This version has some cool added features I decided to sprinkle in:
- Hard mode contains 6 color choices, easy mode contains 3. Switching between modes will generate new colors to avoid cheating.
- Player is able to click a button to generate new colors mid-game or play again once game is over. "easy" and "hard" buttons can not be reselected if button is already highlighted.
- squares disappear with transition on wrong guesses.
- Once player guesses correctly, background of header and all other squares reapper and transition to correct color. Additionally, "decoration squares" appear at the end of the game and transition *slightly slower* to the correct color to give an outward motion effect.
- If after the player has won and the changed header background is too lite in color, header text changes to black, other wise, header text remains white. This is determined calculated based on the color's luminance.

## Tech/framework used
<b>Built with</b>
- Editor: VS Code
- HTML
- CSS3
- [Bootstrap 4](https://getbootstrap.com/)
- JavaScript

