var sign = "X"

function boxClicked(id) {

    if (document.getElementById(id).innerText == "") {
        document.getElementById(id).innerText = sign;
        calculateResult(sign)
        if (sign == "X") {
            sign = "O";
        }
        else {
            sign = "X";
        }
    }
}
function calculateResult(sign) {

if (document.getElementById("box1").innerText == sign && document.getElementById("box2").innerText == sign && document.getElementById("box3").innerText == sign|| 
    document.getElementById("box4").innerText == sign && document.getElementById("box5").innerText == sign && document.getElementById("box6").innerText == sign||
    document.getElementById("box7").innerText == sign && document.getElementById("box8").innerText == sign && document.getElementById("box9").innerText == sign||
    document.getElementById("box1").innerText == sign && document.getElementById("box4").innerText == sign && document.getElementById("box7").innerText == sign||
    document.getElementById("box2").innerText == sign && document.getElementById("box5").innerText == sign && document.getElementById("box8").innerText == sign||
    document.getElementById("box3").innerText == sign && document.getElementById("box6").innerText == sign && document.getElementById("box9").innerText == sign||
    document.getElementById("box1").innerText == sign && document.getElementById("box5").innerText == sign && document.getElementById("box9").innerText == sign||
    document.getElementById("box3").innerText == sign && document.getElementById("box5").innerText == sign && document.getElementById("box7").innerText == sign){
        alert("winner is found")
        location.reload();
    }

}