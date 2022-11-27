function iniciarJuego() {
    let botonMascota = document.getElementById('boton-mascota')
    botonMascota.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let hipodogeInput = document.getElementById('hipodoge')
    let capipepoInput = document.getElementById('capipepo')
    let ratigueyaInput = document.getElementById('ratigueya')
    let langostelvisInput = document.getElementById('langostelvis')
    let tucapalmaInput = document.getElementById('tucapalma')
    let pydosInput = document.getElementById('pydos')

    if(hipodogeInput.checked) {
        alert("Has seleccionado Hipodoge💧")
    } else if(capipepoInput.checked) {
        alert("Has seleccionado Capipepo🌱")
    } else if(ratigueyaInput.checked) {
        alert("Has seleccionado Ratigueya🔥")
    } else if(langostelvisInput.checked) {
        alert("Has seleccionado Langostelvis💧🔥")
    } else if(tucapalmaInput.checked) {
        alert("Has seleccionado Tucapalma💧🌱")
    } else if(pydosInput.checked) {
        alert("Has seleccionado Pydos🔥🌱")
    } else {
        alert("Debes seleccionar una mascota")
    }
}

window.addEventListener('load', iniciarJuego)