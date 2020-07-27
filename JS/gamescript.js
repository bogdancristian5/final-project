/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/* 1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. 
(HINT: always save the previous dice roll in a variable)

2. Add an input field to the HTML where players can set the winning score, so that they can change the 
predefined score of 100. (HINT: you can read that value with the .value property in JavaScript. This is a 
    good oportunity to use Google to figure this out)

3. Add another dice to the game, so that there are two dices now. The player looses his current score 
when one of them is a 1. (HINT: you will need CSS to position the second dice, so take a look at the CSS code
for the first one.)

*/

var scores, roundScore, activePlayer, dice, gamePlaying;

init();
var lastDiceRolled; // 1.

// scores = [0,0];
// roundScore = 0;
// activePlayer = 0; 

// dice = Math.floor(Math.random() * 6) +1; 


document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {

        // 1. we need a random number 
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result 
        // var diceDOM = document.querySelector('.dice');
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        // diceDOM.style.display = 'block';
        document.getElementById('dice-1').src = '/assets/dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = '/assets/dice-' + dice2 + '.png';

        // console log the Dices
        console.log(dice1);
        console.log(dice2);


        // 3. Update the roundScore ONLY IF the rolled number WAS NOT a 1 

        if (dice1 !== 1 && dice2 !== 1) {
            // ADD SCORE 
            roundScore += dice1 + dice2; 
            document.querySelector('#current-' + activePlayer).textContent = roundScore; 
        } else {
            //NEXT PLAYER 
            nextPlayer();       
        }
        
        /*
        if (dice === 6 && lastDiceRolled === 6) {   //1.

            //PLAYER LOOSES SCORE 1.
            scores[activePlayer] = 0;  //1.
            document.querySelector('#score-' + activePlayer).textContent = '0';  //1.
            nextPlayer();  //1.

        } else if (dice !== 1) {
            // ADD SCORE 
            roundScore += dice;  //roundScore = roundScore + dice 
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {
            // NEXT PLAYER 
            nextPlayer();
        }
        lastDiceRolled = dice;  //1.

        */
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // ADD CURRENT SCORE TO GLOBAL SCORE 
        scores[activePlayer] += roundScore;  //LA FEL CU:  scores[activePlayer] = scores[activePlayer] + roundScore; 

        // UPDATE THE UI 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        // console.log(input);
        var winningScore;

        // UNDEFINED, 0, null or empty string " " are COERCED to false
        // Anything else is COERCED to TRUE 
        if (input) {
            winningScore = input;
        } else {
            winningScore = 50;
        }


        // CHECK IF PLAYER WON THE GAME 
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner !';
            // document.querySelector('.dice').style.display = 'none';

            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';

            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});



function nextPlayer() {
    // NEXT PLAYER 
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // if (activePlayer === 0) then activePlayer = 1 else activePlayer = 0
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active'); 
    //document.querySelector('.player-1-panel').classList.add('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}



document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    // document.querySelector('.dice').style.display = 'none';

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


}



/* document.querySelector('#current-' + activePlayer).textContent = dice; */ // THIS IS A SETTER because we set a value
/* document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; */


//var x = document.querySelector('#score-0').textContent; //only reads the content THIS IS A GETTER because we get a value
//console.log(x);

/*  MODAL WINDOW */

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
rulesBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}