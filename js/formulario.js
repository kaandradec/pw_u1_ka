function guardar() {
    validar()
}

function validar() {

    let nombre = document.getElementById("id_nombre").value;

    if (nombre === "") {
        console.log('Error: No se ha ingresado el nombre');
    } else {
        console.log("Pasó la validación del nombre");
    }

}