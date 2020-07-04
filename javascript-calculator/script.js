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

document.querySelector('body').onkeydown = function (event) {
    console.log(event);

    switch (event.keyCode){
        case 49:
            document.getElementById("textfield").value = document.getElementById("textfield").value + 1;
            break;
        case 50:
            document.getElementById("textfield").value = document.getElementById("textfield").value + 2;
            break;
        case 51:
            document.getElementById("textfield").value = document.getElementById("textfield").value + 3;
            break;
        case 52:
            document.getElementById("textfield").value = document.getElementById("textfield").value + 4;
            break;
        case 53:
            document.getElementById("textfield").value = document.getElementById("textfield").value + 5;
            break;
        case 54:
            document.getElementById("textfield").value = document.getElementById("textfield").value + 6;
            break;
        case 55:
            document.getElementById("textfield").value = document.getElementById("textfield").value + 7;
            break;
        case 56:
            document.getElementById("textfield").value = document.getElementById("textfield").value + 8;
            break;
        case 57:
            document.getElementById("textfield").value = document.getElementById("textfield").value + 9;
            break;
        case 48:
            document.getElementById("textfield").value = document.getElementById("textfield").value + 0;
            break;
        case 61:
            equal();
            break;
        case 187:
            document.getElementById("textfield").value = document.getElementById("textfield").value + "+";
            break;
        case 45:
            document.getElementById("textfield").value = document.getElementById("textfield").value + "-";
            break;
        case 8:
            del();
            break;
    }
}