function iniciarJuego() {
    let botonMascota = document.getElementById('boton-mascota')
    botonMascota.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    alert('Seleccionaste tu mascota')
}

window.addEventListener('load', iniciarJuego)