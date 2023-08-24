var points = 0;
var number1;
var number2;

randomizeNumbers();
setPoints();

function randomizeNumbers() {
    number1 = Math.floor((Math.random() * 10) + 1);
    number2 = Math.floor((Math.random() * 10) + 1);
    document.getElementById("number1").innerHTML = number1
    document.getElementById("number2").innerHTML = number2
    document.getElementById("inputField").value = "";
}

function setPoints() {
    document.getElementById("pointSum").innerHTML = points;
}

function guess() {
    if (number1 == number2) {
        if (inputField.value == "=") {
            points++;
            randomizeNumbers();
            setPoints();
        } else {
            randomizeNumbers();
            setPoints();
        }
    }
    if (number1 < number2) {
        if (inputField.value == "<") {
            points++;
            randomizeNumbers();
            setPoints();
        } else {
            randomizeNumbers();
            setPoints();
        }
    }
    if (number1 > number2) {
        if (inputField.value == ">") {
            points++;
            randomizeNumbers();
            setPoints();
        } else {
            randomizeNumbers();
            setPoints();
        }
    }
}

function resetGame() {
    points = 0;
    randomizeNumbers()
    setPoints();
}