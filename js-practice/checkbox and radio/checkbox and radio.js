// function fun1(){
//     let checkbox = document.querySelector('#one')
//     if (checkbox.checked){
//         alert('Selected')
//     } else{
//         alert('Not selected')
//     }
// }

function fun1() {
    let radi = document.getElementsByName('r1')
    for (let i = 0 ; i < radi.length; i++){
        if ((radi[i]).checked){
            alert('Selected' + i)
        }
    }
}
