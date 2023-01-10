// Function called whenever user clicks on any box
function boxFunc() {
	const curPlayer = turn === 'X' ? 'O' : 'X';

	// Getting values for each box
	const b1 = document.getElementById("b1").value;
	const b2 = document.getElementById("b2").value;
	const b3 = document.getElementById("b3").value;
	const b4 = document.getElementById("b4").value;
	const b5 = document.getElementById("b5").value;
	const b6 = document.getElementById("b6").value;
	const b7 = document.getElementById("b7").value;
	const b8 = document.getElementById("b8").value;
	const b9 = document.getElementById("b9").value;

	const declareWinner = (curPlayer) => {
		document.getElementById('print')
			.innerHTML = `Player ${curPlayer} won`;
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}

	// Checking if Player X won or not and after
	// that disabled all the other fields
	if (b1 && b1 === b2 && b2 === b3) {
		declareWinner(curPlayer);
	}
	else if (b1 && b1 === b4 && b4 === b7) {
		declareWinner(curPlayer);
	}
	else if (b7 && b7 === b8 && b8 === b9) {
		declareWinner(curPlayer);
	}
	else if (b3 && b3 === b6 && b6 === b9) {
		declareWinner(curPlayer);
	}
	else if (b1 && b1 === b5 && b5 === b9) {
		declareWinner(curPlayer);
	}
	else if (b3 && b3 === b5 && b5 === b7) {
		declareWinner(curPlayer);
	}
	else if (b2 && b2 === b5 && b5 === b8) {
		declareWinner(curPlayer);
	}
	else if (b4 && b4 === b5 && b5 === b6) {
		declareWinner(curPlayer);
	}
	// Checking for Tie
	else if (b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9) {
			document.getElementById('print')
				.innerHTML = "Match Tie";
	}
	else {
		// Printing Result
		if (turn === "X") {
			document.getElementById('print')
				.innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('print')
				.innerHTML = "Player O Turn";
		}
	}
}

// Function to reset game
function tic_2() {
	location.reload();
	document.getElementById("b1").value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';

}

// Here onwards, functions check turn of the player
// and put accordingly value X or O
turn = "X";
function tic_3() {
	if (turn === "X") {
		document.getElementById("b1").value = "X";
		document.getElementById("b1").disabled = true;
		turn = "O";
	}
	else {
		document.getElementById("b1").value = "O";
		document.getElementById("b1").disabled = true;
		turn = "X";
	}
}

function tic_4() {
	if (turn === "X") {
		document.getElementById("b2").value = "X";
		document.getElementById("b2").disabled = true;
		turn = "O";
	}
	else {
		document.getElementById("b2").value = "O";
		document.getElementById("b2").disabled = true;
		turn = "X";
	}
}

function tic_5() {
	if (turn === "X") {
		document.getElementById("b3").value = "X";
		document.getElementById("b3").disabled = true;
		turn = "O";
	}
	else {
		document.getElementById("b3").value = "O";
		document.getElementById("b3").disabled = true;
		turn = "X";
	}
}

function tic_6() {
	if (turn === "X") {
		document.getElementById("b4").value = "X";
		document.getElementById("b4").disabled = true;
		turn = "O";
	}
	else {
		document.getElementById("b4").value = "O";
		document.getElementById("b4").disabled = true;
		turn = "X";
	}
}

function tic_7() {
	if (turn === "X") {
		document.getElementById("b5").value = "X";
		document.getElementById("b5").disabled = true;
		turn = "O";
	}
	else {
		document.getElementById("b5").value = "O";
		document.getElementById("b5").disabled = true;
		turn = "X";
	}
}

function tic_8() {
	if (turn === "X") {
		document.getElementById("b6").value = "X";
		document.getElementById("b6").disabled = true;
		turn = "O";
	}
	else {
		document.getElementById("b6").value = "O";
		document.getElementById("b6").disabled = true;
		turn = "X";
	}
}

function tic_9() {
	if (turn === "X") {
		document.getElementById("b7").value = "X";
		document.getElementById("b7").disabled = true;
		turn = "O";
	}
	else {
		document.getElementById("b7").value = "O";
		document.getElementById("b7").disabled = true;
		turn = "X";
	}
}

function tic_10() {
	if (turn === "X") {
		document.getElementById("b8").value = "X";
		document.getElementById("b8").disabled = true;
		turn = "O";
	}
	else {
		document.getElementById("b8").value = "O";
		document.getElementById("b8").disabled = true;
		turn = "X";
	}
}

function tic_11() {
	if (turn === "X") {
		document.getElementById("b9").value = "X";
		document.getElementById("b9").disabled = true;
		turn = "O";
	}
	else {
		document.getElementById("b9").value = "O";
		document.getElementById("b9").disabled = true;
		turn = "X";
	}
}
