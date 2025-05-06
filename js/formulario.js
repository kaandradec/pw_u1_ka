function guardar() {
    validar()
}

const getElements = () => ({
    nombreEl: document.getElementById('id_nombre'),
    apellidoEl: document.getElementById('id_apellido'),
    fechaEl: document.getElementById('id_fecha'),
    emailEl: document.getElementById('id_email'),
    passwordEl: document.getElementById('id_password'),
    mensajeEl: document.getElementById('id_mensaje')
})

function validar() {

    const { nombreEl, apellidoEl, fechaEl, emailEl, passwordEl, mensajeEl } = getElements();

    // Color en caso de error en inputs
    mensajeEl.classList.add('mensaje-error')

    if (nombreEl.value === '') {
        mensajeEl.innerText = 'El campo "nombre" es obligatorio'
    } else if (apellidoEl.value === '') {
        mensajeEl.innerText = 'El campo "apellido" es obligatorio'
    } else if (fechaEl.value === '') {
        mensajeEl.innerText = 'El campo "fecha de nacimiento" es obligatorio'
    } else if (emailEl.value === '') {
        mensajeEl.innerText = 'El campo "email" es obligatorio'
    } else if (passwordEl.value === '') {
        mensajeEl.innerText = 'El campo "password" es obligatorio'
    } else {
        mensajeEl.classList.remove('mensaje-error')
        mensajeEl.classList.add('mensaje-exito')
        mensajeEl.innerText = 'Formulario guardado con éxito';
    }

}