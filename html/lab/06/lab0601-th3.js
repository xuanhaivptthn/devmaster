var number = "";
var calculation = "";

function getValue(val) {
    num = document.getElementById("number").value;
    document.getElementById("number").value = num + "" + val;
}

function calc(val) {
    number = document.getElementById("number").value;
    document.getElementById("number").value = "";
    calculation = val;
}

function result() {
    r = 0;

    switch (calculation) {
        case "+":
            r = parseInt(number) + parseInt(document.getElementById("number").value);
            break;
        case "-":
            r = parseInt(number) - parseInt(document.getElementById("number").value);
            break;
        case "*":
            r = parseInt(number) * parseInt(document.getElementById("number").value);
            break;
        case "/":
            r = parseInt(number) / parseInt(document.getElementById("number").value);
            break;
    }
    document.getElementById("number").value = r;
}

function reset() {
    number = "";
    calculation = "";
    document.getElementById("number").value = ""
}