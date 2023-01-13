// confetti time
const canvas = document.getElementById('your_custom_canvas_id')
const jsConfetti = new JSConfetti({ canvas })

const square_b1 = document.getElementById("b1");
const square_b2 = document.getElementById("b2");
const square_b3 = document.getElementById("b3");
const square_b4 = document.getElementById("b4");
const square_b5 = document.getElementById("b5");
const square_b6 = document.getElementById("b6");
const square_b7 = document.getElementById("b7");
const square_b8 = document.getElementById("b8");
const square_b9 = document.getElementById("b9");

// check turn of the player and display value X or O accordingly
let turn = "X";
const b = "b1"
function tic(square) {
	document.getElementById(square).value = turn;
	document.getElementById(square).disabled = true;
	turn = turn === "X" ? "O" : "X";
}

const declareWinner = (curPlayer) => {
	document.getElementById('print')
		.innerHTML = `Player ${curPlayer} won`;
	square_b1.disabled = true;
	square_b2.disabled = true;
	square_b3.disabled = true;
	square_b4.disabled = true;
	square_b5.disabled = true;
	square_b6.disabled = true;
	square_b7.disabled = true;
	square_b8.disabled = true;
	square_b9.disabled = true;
}

// Function called whenever user clicks on any box
function boxFunc() {
	const curPlayer = turn === 'X' ? 'O' : 'X';
	const b1 = square_b1.value;
	const b2 = square_b2.value;
	const b3 = square_b3.value;
	const b4 = square_b4.value;
	const b5 = square_b5.value;
	const b6 = square_b6.value;
	const b7 = square_b7.value;
	const b8 = square_b8.value;
	const b9 = square_b9.value;

	// Checking if current player won or not, then disable all fields
	if ((b1 && b1 === b2 && b2 === b3) || (b1 && b1 === b4 && b4 === b7) || (b7 && b7 === b8 && b8 === b9)
		|| (b3 && b3 === b6 && b6 === b9) || (b1 && b1 === b5 && b5 === b9) || (b3 && b3 === b5 && b5 === b7)
		|| (b2 && b2 === b5 && b5 === b8) || (b4 && b4 === b5 && b5 === b6)) {
			declareWinner(curPlayer);
			if(curPlayer === 'O') {
				jsConfetti.addConfetti({
					emojis: ['💫'],
					emojiSize: 100,
					confettiNumber: 70,
				})
			} else {
				jsConfetti.addConfetti({
					emojis: ['🦄'],
					emojiSize: 100,
					confettiNumber: 70,
				})
			}
		}
		// Checking for Tie
		else if (b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9) {
				document.getElementById('print')
					.innerHTML = "Match Tie";
		} else {
			if (turn === "X") {
				document.getElementById('print')
					.innerHTML = "Player X Turn";
			} else {
				document.getElementById('print')
					.innerHTML = "Player O Turn";
			}
		}
}

// Function to reset game
function reset() {
	// location.reload(); could just reload the page
	// or do the following:
	square_b1.value = '';
	square_b2.value = '';
	square_b3.value = '';
	square_b4.value = '';
	square_b5.value = '';
	square_b6.value = '';
	square_b7.value = '';
	square_b8.value = '';
	square_b9.value = '';
	square_b1.disabled = false;
	square_b2.disabled = false;
	square_b3.disabled = false;
	square_b4.disabled = false;
	square_b5.disabled = false;
	square_b6.disabled = false;
	square_b7.disabled = false;
	square_b8.disabled = false;
	square_b9.disabled = false;
}
