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
        alert("Ha seleccionado Hipodoge💧")
    } else if(capipepoInput.checked) {
        alert("Ha seleccionado Capipepo🌱")
    } else if(ratigueyaInput.checked) {
        alert("Ha seleccionado Ratigueya🔥")
    } else if(langostelvisInput.checked) {
        alert("Ha seleccionado Langostelvis💧🔥")
    } else if(tucapalmaInput.checked) {
        alert("Ha seleccionado Tucapalma💧🌱")
    } else if(pydosInput.checked) {
        alert("Ha seleccionado Pydos🔥🌱")
    } else {
        alert("Debe seleccionar una mascota")
    }
}

window.addEventListener('load', iniciarJuego)