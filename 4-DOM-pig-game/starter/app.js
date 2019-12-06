/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

// A callback function is a function called by another function and not us, no use of (). In this example the addEventListener is calling the btn function when a click happens on .btn-roll

// function btn() {}
// document.querySelector('.btn-roll').addEventListener('click', btn);

//An anonymous is a function that doens't have a name and therefore can't be used outside its context (elsewhere in the code)
document.querySelector('.btn-roll').addEventListener('click', function() {

	if (gamePlaying) {
		// 1. Random number
		var dice = Math.floor(Math.random() * 6) + 1;

		// 2. Display the result
		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';

		// 3. Update the round score IF the rolled number was NOT a 1
		if (dice !== 1) {
			//Add score
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
			nextPlayer();
		}
	}
	
});

document.querySelector('.btn-hold').addEventListener('click', function() {

	if (gamePlaying) {
		// 1. Add CURRENT score to GLOBAL score
		scores[activePlayer] += roundScore;

		// 2. Update the UI
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		// 3. Check player won the game
		if (scores[activePlayer] >= 10) {
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

			gamePlaying = false;
		} else {
			nextPlayer();
		}
	}

});

function nextPlayer() {
	//Next player
	roundScore = 0;
	document.querySelector('#current-' + activePlayer).textContent = roundScore;

	document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');

	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

	document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');

	document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;

	gamePlaying = true;

	// document.querySelector('#current-' + activePlayer).textContent = dice;
	// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

	document.querySelector('.dice').style.display = 'none';
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