let ataqueJugador
let ataqueEnemigo

window.addEventListener("load", () => {   //iniciar juego
    let botonMascota = document.getElementById("boton-mascota")
    botonMascota.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
})

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
    let nombresMascotas = ["Hipodoge💧", "Capipepo🌱", "Ratigueya🔥", "Langostelvis💧🔥", "Tucapalma💧🌱", "Pydos🔥🌱"]
    let mascotaEnemigoSpan = document.getElementById("mascota-enemigo")
    mascotaEnemigoSpan.innerHTML = nombresMascotas[aleatorio(0, 5)]
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataqueFuego() {
    ataqueJugador = "Fuego🔥"
    seleccionarAtaqueEnemigo()
}

function ataqueAgua() {
    ataqueJugador = "Agua💧"
    seleccionarAtaqueEnemigo()
}

function ataqueTierra() {
    ataqueJugador = "Tierra🌱"
    seleccionarAtaqueEnemigo()
}

function seleccionarAtaqueEnemigo() {
    let nombresAtaques = ["Fuego🔥", "Agua💧", "Tierra🌱"]
    ataqueEnemigo = nombresAtaques[aleatorio(0, 2)]

    crearMensajesCombate()
}

function crearMensajesCombate() {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " + ataqueEnemigo + " - PENDIENTE"

    sectionMensajes.appendChild(parrafo)
}
