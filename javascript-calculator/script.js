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

document.querySelector('#textfield').onkeypress = function (event) {
    console.log('key' + event.key);
}