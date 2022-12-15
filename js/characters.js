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
    let botonTijera = document.getElementById("boton-tijera")
    botonTijera.addEventListener("click", ataqueTijera)
    let botonPapel = document.getElementById("boton-papel")
    botonPapel.addEventListener("click", ataquePapel)

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

    let personajeJugadorParrafo = document.getElementById("personaje-jugador")

    if (adaInput.checked) {
        personajeJugadorParrafo.innerHTML = "<img src=\"./assets/ada-lovelace.png\" alt=\"ada\">"
    } else if (graceInput.checked) {
        personajeJugadorParrafo.innerHTML = "<img src=\"./assets/grace-hopper.png\" alt=\"grace\">"
    } else if (hedyInput.checked) {
        personajeJugadorParrafo.innerHTML = "<img src=\"./assets/hedy-lamarr.png\" alt=\"hedy\">"
    } else if (margaterInput.checked) {
        personajeJugadorParrafo.innerHTML = "<img src=\"./assets/margaret-hamilton.png\" alt=\"margaret\">"
    } else if (maryInput.checked) {
        personajeJugadorParrafo.innerHTML = "<img src=\"./assets/mary-jackson.png\" alt=\"mary\">"
    } else if (valentinaInput.checked) {
        personajeJugadorParrafo.innerHTML = "<img src=\"./assets/valentina-tereshkova.png\" alt=\"valentina\">"
    } else {
        alert("Your must select a character.")
        ataqueSeccion.style.display = "none"
        personajeSeccion.style.display = "flex"
    }

    seleccionarPersonajeEnemigo()
}

function seleccionarPersonajeEnemigo() {
    let nombresPersonajes = ["<img src=\"./assets/ada-lovelace.png\" alt=\"ada\">", "<img src=\"./assets/grace-hopper.png\" alt=\"grace\">", "<img src=\"./assets/hedy-lamarr.png\" alt=\"hedy\">", "<img src=\"./assets/margaret-hamilton.png\" alt=\"margaret\">", "<img src=\"./assets/mary-jackson.png\" alt=\"mary\">", "<img src=\"./assets/valentina-tereshkova.png\" alt=\"valentina\">"]
    let personajeEnemigoParrafo = document.getElementById("personaje-enemigo")
    personajeEnemigoParrafo.innerHTML = nombresPersonajes[aleatorio(0, 5)]
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataquePiedra() {
    ataqueJugador = "Rock🪨"
    seleccionarAtaqueEnemigo()
}

function ataqueTijera() {
    ataqueJugador = "Scissors✂️"
    seleccionarAtaqueEnemigo()
}

function ataquePapel() {
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
    let mensajesResultado = document.getElementById("resultado")
    let mensajesAtaqueJugador = document.getElementById("ataque-del-jugador")
    let mensajesAtaqueEnemigo = document.getElementById("ataque-del-enemigo")

    let parrafoAtaqueJugador = document.createElement("p")
    let parrafoAtaqueEnemigo = document.createElement("p")

    mensajesResultado.innerHTML = resultadoAtaques
    parrafoAtaqueJugador.innerHTML = ataqueJugador
    parrafoAtaqueEnemigo.innerHTML = ataqueEnemigo

    mensajesAtaqueJugador.appendChild(parrafoAtaqueJugador)
    mensajesAtaqueEnemigo.appendChild(parrafoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoCombate) {
    let mensajesResultado = document.getElementById("resultado")
    mensajesResultado.innerHTML = resultadoCombate

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
