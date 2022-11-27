function iniciarJuego() {
    let botonMascota = document.getElementById("boton-mascota")
    botonMascota.addEventListener("click", seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let hipodogeInput = document.getElementById("hipodoge")
    let capipepoInput = document.getElementById("capipepo")
    let ratigueyaInput = document.getElementById("ratigueya")
    let langostelvisInput = document.getElementById("langostelvis")
    let tucapalmaInput = document.getElementById("tucapalma")
    let pydosInput = document.getElementById("pydos")

    if(hipodogeInput.checked) {
        alert("Seleccionaste a Hipodoge💧")
    } else if(capipepoInput.checked) {
        alert("Seleccionaste a Capipepo🌱")
    } else if(ratigueyaInput.checked) {
        alert("Seleccionaste a Ratigueya🔥")
    } else if(langostelvisInput.checked) {
        alert("Seleccionaste a Langostelvis💧🔥")
    } else if(tucapalmaInput.checked) {
        alert("Seleccionaste a Tucapalma💧🌱")
    } else if(pydosInput.checked) {
        alert("Seleccionaste a Pydos🔥🌱")
    } else {
        alert("Debes seleccionar una mascota")
    }
}

window.addEventListener("load", iniciarJuego)