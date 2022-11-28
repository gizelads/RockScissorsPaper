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

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaEnemigoAleatorio = aleatorio(1, 6)
    let mascotaEnemigoSpan = document.getElementById("mascota-enemigo")

    if(mascotaEnemigoAleatorio == 1) {
        mascotaEnemigoSpan.innerHTML = "Hipodoge💧"
    } else if(mascotaEnemigoAleatorio == 2) {
        mascotaEnemigoSpan.innerHTML = "Capipepo🌱"
    } else if(mascotaEnemigoAleatorio == 3) {
        mascotaEnemigoSpan.innerHTML = "Ratigueya🔥"
    } else if(mascotaEnemigoAleatorio == 4) {
        mascotaEnemigoSpan.innerHTML = "Langostelvis💧🔥"
    } else if(mascotaEnemigoAleatorio == 5) {
        mascotaEnemigoSpan.innerHTML = "Tucapalma💧🌱"
    } else if(mascotaEnemigoAleatorio == 6) {
        mascotaEnemigoSpan.innerHTML = "Pydos🔥🌱"
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)