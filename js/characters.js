const ataqueSeccion = document.getElementById("eleccion-ataque")
const reiniciarSeccion = document.getElementById("reset")
const botonPersonaje = document.getElementById("boton-personaje")
const botonPiedra = document.getElementById("boton-piedra")
const botonTijera = document.getElementById("boton-tijera")
const botonPapel = document.getElementById("boton-papel")
const botonReiniciar = document.getElementById("boton-reiniciar")

const personajeSeccion = document.getElementById("eleccion-personaje")
const adaInput = document.getElementById("ada")
const graceInput = document.getElementById("grace")
const hedyInput = document.getElementById("hedy")
const margaterInput = document.getElementById("margaret")
const maryInput = document.getElementById("mary")
const valentinaInput = document.getElementById("valentina")
const personajeJugadorParrafo = document.getElementById("personaje-jugador")

const personajeEnemigoParrafo = document.getElementById("personaje-enemigo")

const vidasJugadorSpan = document.getElementById("vidas-jugador")
const vidasEnemigoSpan = document.getElementById("vidas-enemigo")

const mensajesResultado = document.getElementById("resultado")
const mensajesAtaqueJugador = document.getElementById("ataque-del-jugador")
const mensajesAtaqueEnemigo = document.getElementById("ataque-del-enemigo")

let personajes = []
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Personaje {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
    }
}

let ada = new Personaje("Ada Lovelace💜", "./assets/ada-lovelace.png", 5)
let grace = new Personaje("Grace Hopper🎖️", "./assets/grace-hopper.png", 5)
let hedy = new Personaje("Hedy Lamarr📡", "./assets/hedy-lamarr.png", 5)
let margaret = new Personaje("Margaret Hamilton🔢", "./assets/margaret-hamilton.png", 5)
let mary = new Personaje("Mary Jackson🛰️", "./assets/mary-jackson.png", 5)
let valentina = new Personaje("Valentina Tereshkova🚀", "./assets/valentina-tereshkova.png", 5)

personajes.push(ada, grace, hedy, margaret, mary, valentina)

window.addEventListener("load", () => {   //iniciar juego
    ataqueSeccion.style.display = "none"
    reiniciarSeccion.style.display = "none"
    botonPersonaje.addEventListener("click", seleccionarPersonajeJugador)
    botonPiedra.addEventListener("click", ataquePiedra)
    botonTijera.addEventListener("click", ataqueTijera)
    botonPapel.addEventListener("click", ataquePapel)
    botonReiniciar.addEventListener("click", reiniciar)
})

function seleccionarPersonajeJugador() {
    ataqueSeccion.style.display = "flex"
    personajeSeccion.style.display = "none"
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
    let parrafoAtaqueJugador = document.createElement("p")
    let parrafoAtaqueEnemigo = document.createElement("p")

    mensajesResultado.innerHTML = resultadoAtaques
    parrafoAtaqueJugador.innerHTML = ataqueJugador
    parrafoAtaqueEnemigo.innerHTML = ataqueEnemigo

    mensajesAtaqueJugador.appendChild(parrafoAtaqueJugador)
    mensajesAtaqueEnemigo.appendChild(parrafoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoCombate) {
    mensajesResultado.innerHTML = resultadoCombate
    botonPiedra.disabled = true
    botonPapel.disabled = true
    botonTijera.disabled = true
    reiniciarSeccion.style.display = "block"
}

function reiniciar() {
    location.reload()
}
