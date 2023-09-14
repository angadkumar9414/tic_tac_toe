var sign = "X"
var winner = null;
var isGameFinished = false;

var player1 = 0;
var player2 = 0;

headingElement = document.getElementById("heading");

function boxClicked(id) {
    if (document.getElementById(id).innerText == "") {
        document.getElementById(id).innerText = sign;
        calculateResult(sign);
        toShowResult();
        if (isGameFinished == false) {
            if (sign == "X") {
                sign = "O";
                headingElement.innerText = "Player 2";
                console.log(sign);
            }
            else {
                sign = "X";
                headingElement.innerText = "Player 1";
                console.log(sign);
            }
        }

    }
}

function calculateResult(sign) {

    if (document.getElementById("box1").innerText == sign && document.getElementById("box2").innerText == sign && document.getElementById("box3").innerText == sign ||
        document.getElementById("box4").innerText == sign && document.getElementById("box5").innerText == sign && document.getElementById("box6").innerText == sign ||
        document.getElementById("box7").innerText == sign && document.getElementById("box8").innerText == sign && document.getElementById("box9").innerText == sign ||
        document.getElementById("box1").innerText == sign && document.getElementById("box4").innerText == sign && document.getElementById("box7").innerText == sign ||
        document.getElementById("box2").innerText == sign && document.getElementById("box5").innerText == sign && document.getElementById("box8").innerText == sign ||
        document.getElementById("box3").innerText == sign && document.getElementById("box6").innerText == sign && document.getElementById("box9").innerText == sign ||
        document.getElementById("box1").innerText == sign && document.getElementById("box5").innerText == sign && document.getElementById("box9").innerText == sign ||
        document.getElementById("box3").innerText == sign && document.getElementById("box5").innerText == sign && document.getElementById("box7").innerText == sign) {
        if (sign == "X") {
            winner = "Player 1";
            player1 += 1;
        }
        else {
            winner = "Player 2";
            player2 += 1;
        }
        // alert("winner is found")
        isGameFinished = true;


    }

    var cellsFilled = document.querySelectorAll("td:not(:empty)").length;
    if (cellsFilled == 9) {
        isGameFinished = true;
    }
}

function toShowResult() {
    if (isGameFinished == true) {
        console.log("game finished")
        if (winner != null) {
            // alert("winner is "+ winner);
            headingElement.innerText = winner + " won";
        }
        else {
            // alert("Tie");
            headingElement.innerText = "tie";
        }
        // location.reload();

        document.getElementById("player1").innerText = player1;
        console.log("player 1 updated");
        document.getElementById("player2").innerText = player2;
        console.log("player 1 updated");

        // clearTable();
    }

}

function clearTable() {
    var cells = document.querySelectorAll("td");
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = "";
    }
    isGameFinished = false; // Reset the game state
    sign = "X"; // Reset the starting sign
    document.getElementById('heading').innerText = "Player 1"; // Reset the player indicator
}