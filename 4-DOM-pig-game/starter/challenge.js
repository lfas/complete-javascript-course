/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {

	if (gamePlaying) {
		// 1. Random number
		var dice1 = Math.floor(Math.random() * 6) + 1;
		var dice2 = Math.floor(Math.random() * 6) + 1;

		// 2. Display the result
		var dice1DOM = document.querySelector('#dice-1');
		dice1DOM.style.display = 'block';
		dice1DOM.src = 'dice-' + dice1 + '.png';

		var dice2DOM = document.querySelector('#dice-2');
		dice2DOM.style.display = 'block';
		dice2DOM.src = 'dice-' + dice2 + '.png';

		console.log(dice1, dice2);

		// 3. Update the round score IF the rolled number was NOT a 1
		if (dice1 !== 1 && dice2 !== 1) {
			//Add score
			roundScore += dice1 + dice2;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;

		} else if (dice1 === 1 && dice2 === 1) {

			scores[activePlayer] = 0;
			document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
			nextPlayer();

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

		var winningScore = document.querySelector('.final-score').value;
		
		if (!winningScore) {
			winningScore = 100;
		}

		// 3. Check player won the game
		if (scores[activePlayer] >= winningScore) {
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
			document.querySelector('#dice-1').style.display = 'none';
			document.querySelector('#dice-2').style.display = 'none';

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
	previousDice = 0;

	document.querySelector('#current-' + activePlayer).textContent = roundScore;

	document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
	
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

	document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');

	document.querySelector('#dice-1').style.display = 'none';
	document.querySelector('#dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
	scores = [0,0];
	scoresSecond = [0,0];

	roundScore = 0;

	activePlayer = 0;
	gamePlaying = true;

	document.querySelector('#dice-1').style.display = 'none';
	document.querySelector('#dice-2').style.display = 'none';

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