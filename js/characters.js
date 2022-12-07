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

    let botonPiedra = document.getElementById("boton-piedra")
    botonPiedra.addEventListener("click", ataquePiedra)
    let botonPapel = document.getElementById("boton-papel")
    botonPapel.addEventListener("click", ataquePapel)
    let botonTijera = document.getElementById("boton-tijera")
    botonTijera.addEventListener("click", ataqueTijera)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciar)
})

function seleccionarPersonajeJugador() {
    let ataqueSeccion = document.getElementById("eleccion-ataque")
    ataqueSeccion.style.display = "flex"
    let personajeSeccion = document.getElementById("eleccion-personaje")
    personajeSeccion.style.display = "none"

    let adaInput = document.getElementById("ada")
    let graceInput = document.getElementById("grace")
    let hedyInput = document.getElementById("hedy")
    let margaterInput = document.getElementById("margaret")
    let maryInput = document.getElementById("mary")
    let valentinaInput = document.getElementById("valentina")

    let personajeJugadorSpan = document.getElementById("personaje-jugador")

    if (adaInput.checked) {
        personajeJugadorSpan.innerHTML = "Ada Lovelace📟"
    } else if (graceInput.checked) {
        personajeJugadorSpan.innerHTML = "Grace Hopper🎖️"
    } else if (hedyInput.checked) {
        personajeJugadorSpan.innerHTML = "Hedy Lamarr📡"
    } else if (margaterInput.checked) {
        personajeJugadorSpan.innerHTML = "Margaret Hamilton🔢"
    } else if (maryInput.checked) {
        personajeJugadorSpan.innerHTML = "Mary Jackson🛰️"
    } else if (valentinaInput.checked) {
        personajeJugadorSpan.innerHTML = "Valentina Terechkova🚀"
    } else {
        alert("Your must select a character.")
        ataqueSeccion.style.display = "none"
        personajeSeccion.style.display = "flex"
    }

    seleccionarPersonajeEnemigo()
}

function seleccionarPersonajeEnemigo() {
    let nombresPersonajes = ["Ada Lovelace📟", "Grace Hopper🎖️", "Hedy Lamarr📡", "Margaret Hamilton🔢", "Mary Jackson🛰️", "Valentina Terechkova🚀"]
    let personajeEnemigoSpan = document.getElementById("personaje-enemigo")
    personajeEnemigoSpan.innerHTML = nombresPersonajes[aleatorio(0, 5)]
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataquePiedra() {
    ataqueJugador = "Rock🪨"
    seleccionarAtaqueEnemigo()
}

function ataquePapel() {
    ataqueJugador = "Scissors✂️"
    seleccionarAtaqueEnemigo()
}

function ataqueTijera() {
    ataqueJugador = "Paper📄"
    seleccionarAtaqueEnemigo()
}

function seleccionarAtaqueEnemigo() {
    let nombresAtaques = ["Rock🪨", "Scissors✂️", "Paper📄"]
    ataqueEnemigo = nombresAtaques[aleatorio(0, 2)]

    resultadoCombate()
}

function resultadoCombate() {
    let vidasJugadorSpan = document.getElementById("vidas-jugador")
    let vidasEnemigoSpan = document.getElementById("vidas-enemigo")

    if (ataqueJugador == ataqueEnemigo) {
        crearMensajesCombate("Draw🤝")
    } else if ((ataqueJugador == "Rock🪨" && ataqueEnemigo == "Scissors✂️") || (ataqueJugador == "Scissors✂️" && ataqueEnemigo == "Paper📄") || (ataqueJugador == "Paper📄" && ataqueEnemigo == "Rock🪨")) {
        crearMensajesCombate("You Win🎉")
        vidasEnemigo--
        vidasEnemigoSpan.innerHTML = vidasEnemigo
    } else {
        crearMensajesCombate("You Lose😵")
        vidasJugador--
        vidasJugadorSpan.innerHTML = vidasJugador
    }
    revisarVidas()
}

function revisarVidas() {
    if (vidasJugador == 0) {
        crearMensajeFinal("Sorry, YOU LOST 😭!")
    } else if (vidasEnemigo == 0) {
        crearMensajeFinal("Congratulations, YOU WON 🤩!")
    }
}

function crearMensajesCombate(resultadoAtaques) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Your character attacked with " + ataqueJugador + ", the enemy's character attacked with " + ataqueEnemigo + " - " + resultadoAtaques

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoCombate) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("h4")
    parrafo.innerHTML = resultadoCombate
    sectionMensajes.appendChild(parrafo)

    let botonPiedra = document.getElementById("boton-piedra")
    botonPiedra.disabled = true
    let botonPapel = document.getElementById("boton-papel")
    botonPapel.disabled = true
    let botonTijera = document.getElementById("boton-tijera")
    botonTijera.disabled = true

    let reiniciarSeccion = document.getElementById("reset")
    reiniciarSeccion.style.display = "block"
}

function reiniciar() {
    location.reload()
}
