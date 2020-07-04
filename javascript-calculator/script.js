function insert(num){
    document.getElementById("textfield").value += num;
}
function clean (){
    document.getElementById("textfield").value = "";
}
function del(){
    var exp = document.getElementById("textfield").value;
    document.getElementById("textfield").value = exp.substring(0, exp.length-1);
}

function equal() {
    var exp = document.getElementById("textfield").value;
    if(exp){
        document.getElementById("textfield").value = eval(exp);
    }
}

document.querySelector('body').onkeypress = function (event) {
    console.log(event);

    switch (event.code){
        case "Digit1":
            document.getElementById("textfield").value = document.getElementById("textfield").value + 1;
            break;
        case "Digit2":
            document.getElementById("textfield").value = document.getElementById("textfield").value + 2;
            break;
        case "Digit3":
            document.getElementById("textfield").value = document.getElementById("textfield").value + 3;
            break;
        case "Digit4":
            document.getElementById("textfield").value = document.getElementById("textfield").value + 4;
            break;
        case "Digit5":
            document.getElementById("textfield").value = document.getElementById("textfield").value + 5;
            break;
        case "Digit6":
            document.getElementById("textfield").value = document.getElementById("textfield").value + 6;
            break;
        case "Digit7":
            document.getElementById("textfield").value = document.getElementById("textfield").value + 7;
            break;
        case "Digit8":
            document.getElementById("textfield").value = document.getElementById("textfield").value + 8;
            break;
        case "Digit9":
            document.getElementById("textfield").value = document.getElementById("textfield").value + 9;
            break;
        case "Digit0":
            document.getElementById("textfield").value = document.getElementById("textfield").value + 0;
            break;
        case "Equal":
            equal();
            break;
    }
}