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

    let mascotaJugadorSpan = document.getElementById("mascota-jugador")

    if(hipodogeInput.checked) {
        mascotaJugadorSpan.innerHTML = "Hipodoge💧"
    } else if(capipepoInput.checked) {
        mascotaJugadorSpan.innerHTML = "Capipepo🌱"
    } else if(ratigueyaInput.checked) {
        mascotaJugadorSpan.innerHTML = "Ratigueya🔥"
    } else if(langostelvisInput.checked) {
        mascotaJugadorSpan.innerHTML = "Langostelvis💧🔥"
    } else if(tucapalmaInput.checked) {
        mascotaJugadorSpan.innerHTML = "Tucapalma💧🌱"
    } else if(pydosInput.checked) {
        mascotaJugadorSpan.innerHTML = "Pydos🔥🌱"
    } else {
        alert("Debes seleccionar una mascota")
    }
}

window.addEventListener("load", iniciarJuego)