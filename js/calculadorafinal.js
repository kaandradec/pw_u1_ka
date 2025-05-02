
function mostrarEnDisplay(valor) {
    let elementoDisplay = document.getElementById('id_display');

    if (valor === '=') {
        calcularOperacion(elementoDisplay.innerText)
        return
    }


    elementoDisplay.innerText = elementoDisplay.innerText + valor;

}

function calcularOperacion(txt) {
    let elementoDisplay = document.getElementById('id_display');
    nums = txt.split('+')


    num1 = parseInt(nums[0]);
    num2 = parseInt(nums[1]);


    elementoDisplay.innerText = num1 + num2;
}


function borrarDisplay() {
    document.getElementById('id_display').innerText = '';
}