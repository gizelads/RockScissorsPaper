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
const contenedorTarjetasGrupo1 = document.getElementById("contenedor-tarjetas-grupo1")
const contenedorTarjetasGrupo2 = document.getElementById("contenedor-tarjetas-grupo2")

let personajesGrupo1 = []
let personajesGrupo2 = []
let ataqueJugador
let ataqueEnemigo
let opcionPersonajes
let vidasJugador = 3
let vidasEnemigo = 3

class Personaje {
    constructor(id, nombre, foto, vida) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let ada = new Personaje("ada", "Ada Lovelace💜", "./assets/ada-lovelace.png", 5)
let grace = new Personaje("grace", "Grace Hopper🎖️", "./assets/grace-hopper.png", 5)
let hedy = new Personaje("hedy", "Hedy Lamarr📡", "./assets/hedy-lamarr.png", 5)
let margaret = new Personaje("margaret", "Margaret Hamilton🔢", "./assets/margaret-hamilton.png", 5)
let mary = new Personaje("mary", "Mary Jackson🛰️", "./assets/mary-jackson.png", 5)
let valentina = new Personaje("valentina", "Valentina Tereshkova🚀", "./assets/valentina-tereshkova.png", 5)

ada.ataques.push(
    { nombre: "🪨", id: "boton-piedra" },
    { nombre: "🪨", id: "boton-piedra" },
    { nombre: "🪨", id: "boton-piedra" },
    { nombre: "✂️", id: "boton-tijera" },
    { nombre: "📄", id: "boton-papel" }
)

grace.ataques.push(
    { nombre: "✂️", id: "boton-tijera" },
    { nombre: "✂️", id: "boton-tijera" },
    { nombre: "✂️", id: "boton-tijera" },
    { nombre: "🪨", id: "boton-piedra" },
    { nombre: "📄", id: "boton-papel" }
)

hedy.ataques.push(
    { nombre: "📄", id: "boton-papel" },
    { nombre: "📄", id: "boton-papel" },
    { nombre: "📄", id: "boton-papel" },
    { nombre: "🪨", id: "boton-piedra" },
    { nombre: "✂️", id: "boton-tijera" }
)

margaret.ataques.push(
    { nombre: "🪨", id: "boton-piedra" },
    { nombre: "🪨", id: "boton-piedra" },
    { nombre: "🪨", id: "boton-piedra" },
    { nombre: "✂️", id: "boton-tijera" },
    { nombre: "📄", id: "boton-papel" }
)

mary.ataques.push(
    { nombre: "✂️", id: "boton-tijera" },
    { nombre: "✂️", id: "boton-tijera" },
    { nombre: "✂️", id: "boton-tijera" },
    { nombre: "🪨", id: "boton-piedra" },
    { nombre: "📄", id: "boton-papel" }
)

valentina.ataques.push(
    { nombre: "🪨", id: "boton-piedra" },
    { nombre: "🪨", id: "boton-piedra" },
    { nombre: "🪨", id: "boton-piedra" },
    { nombre: "✂️", id: "boton-tijera" },
    { nombre: "📄", id: "boton-papel" }
)

personajesGrupo1.push(ada, grace, hedy)
personajesGrupo2.push(margaret, mary, valentina)

window.addEventListener("load", () => {   //iniciar juego
    ataqueSeccion.style.display = "none"
    reiniciarSeccion.style.display = "none"

    personajesGrupo1.forEach((personaje) => {   //   Template Literals
        opcionDePersonajes1 = `
        <input type="radio" name="personaje" id=${personaje.id} />
                <label class="tarjeta-de-personaje" for=${personaje.id}>
                    <p>${personaje.nombre}</p>
                    <img src=${personaje.foto} alt=${personaje.id}>
                </label>
        `
        contenedorTarjetasGrupo1.innerHTML += opcionDePersonajes1
    })

    personajesGrupo2.forEach((personaje) => {
        opcionPersonajes2 = `
        <input type="radio" name="personaje" id=${personaje.id} />
                <label class="tarjeta-de-personaje" for=${personaje.id}>
                    <p>${personaje.nombre}</p>
                    <img src=${personaje.foto} alt=${personaje.id}>
                </label>
        `

        contenedorTarjetasGrupo2.innerHTML += opcionPersonajes2
    })

    botonPersonaje.addEventListener("click", seleccionarPersonajeJugador)
    botonPiedra.addEventListener("click", ataquePiedra)
    botonTijera.addEventListener("click", ataqueTijera)
    botonPapel.addEventListener("click", ataquePapel)
    botonReiniciar.addEventListener("click", reiniciar)
})

//No cargan las imagenes al seleccionarlas previamente
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
