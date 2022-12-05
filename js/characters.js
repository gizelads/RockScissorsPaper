let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

window.addEventListener("load", () => {   //iniciar juego
    let ataqueSeccion = document.getElementById("eleccion-ataque")
    ataqueSeccion.style.display = "none"
    let reiniciarSeccion = document.getElementById("reset")
    reiniciarSeccion.style.display = "none"

    let botonPersonaje = document.getElementById("boton-personaje")
    botonPersonaje.addEventListener("click", seleccionarPersonajeJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciar)
})

function seleccionarPersonajeJugador() {
    let ataqueSeccion = document.getElementById("eleccion-ataque")
    ataqueSeccion.style.display = "block"
    let personajeSeccion = document.getElementById("eleccion-personaje")
    personajeSeccion.style.display = "none"

    let hipodogeInput = document.getElementById("hipodoge")
    let capipepoInput = document.getElementById("capipepo")
    let ratigueyaInput = document.getElementById("ratigueya")
    let langostelvisInput = document.getElementById("langostelvis")
    let tucapalmaInput = document.getElementById("tucapalma")
    let pydosInput = document.getElementById("pydos")

    let personajeJugadorSpan = document.getElementById("personaje-jugador")

    if (hipodogeInput.checked) {
        personajeJugadorSpan.innerHTML = "Hipodoge💧"
    } else if (capipepoInput.checked) {
        personajeJugadorSpan.innerHTML = "Capipepo🌱"
    } else if (ratigueyaInput.checked) {
        personajeJugadorSpan.innerHTML = "Ratigueya🔥"
    } else if (langostelvisInput.checked) {
        personajeJugadorSpan.innerHTML = "Langostelvis💧🔥"
    } else if (tucapalmaInput.checked) {
        personajeJugadorSpan.innerHTML = "Tucapalma💧🌱"
    } else if (pydosInput.checked) {
        personajeJugadorSpan.innerHTML = "Pydos🔥🌱"
    } else {
        alert("Debes seleccionar un personaje")
        ataqueSeccion.style.display = "none"
        personajeSeccion.style.display = "block"
    }

    seleccionarPersonajeEnemigo()
}

function seleccionarPersonajeEnemigo() {
    let nombresPersonajes = ["Hipodoge💧", "Capipepo🌱", "Ratigueya🔥", "Langostelvis💧🔥", "Tucapalma💧🌱", "Pydos🔥🌱"]
    let personajeEnemigoSpan = document.getElementById("personaje-enemigo")
    personajeEnemigoSpan.innerHTML = nombresPersonajes[aleatorio(0, 5)]
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

    resultadoCombate()
}

function resultadoCombate() {   //agua > fuego, fuego > tierra, tierra > agua
    let vidasJugadorSpan = document.getElementById("vidas-jugador")
    let vidasEnemigoSpan = document.getElementById("vidas-enemigo")

    if (ataqueJugador == ataqueEnemigo) {
        crearMensajesCombate("Empate🤝")
    } else if ((ataqueJugador == "Agua💧" && ataqueEnemigo == "Fuego🔥") || (ataqueJugador == "Tierra🌱" && ataqueEnemigo == "Agua💧") || (ataqueJugador == "Fuego🔥" && ataqueEnemigo == "Tierra🌱")) {
        crearMensajesCombate("Ganaste🎉")
        vidasEnemigo--
        vidasEnemigoSpan.innerHTML = vidasEnemigo
    } else {
        crearMensajesCombate("Perdiste😵")
        vidasJugador--
        vidasJugadorSpan.innerHTML = vidasJugador
    }
    revisarVidas()
}

function revisarVidas() {
    if (vidasJugador == 0) {
        crearMensajeFinal("Lo siento, PERDISTE 😭")
    } else if (vidasEnemigo == 0) {
        crearMensajeFinal("Felicidades, GANASTE 🤩")
    }
}

function crearMensajesCombate(resultadoAtaques) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu personaje atacó con " + ataqueJugador + ", el personaje del enemigo atacó con " + ataqueEnemigo + " - " + resultadoAtaques

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoCombate) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("h4")
    parrafo.innerHTML = resultadoCombate
    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

    let reiniciarSeccion = document.getElementById("reset")
    reiniciarSeccion.style.display = "block"
}

function reiniciar() {
    location.reload()
}
