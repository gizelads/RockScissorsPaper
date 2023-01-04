const ataqueSeccion = document.getElementById("eleccion-ataque")
const reiniciarSeccion = document.getElementById("reset")
const botonPersonaje = document.getElementById("boton-personaje")
const botonPiedra = document.getElementById("boton-piedra")
const botonTijera = document.getElementById("boton-tijera")
const botonPapel = document.getElementById("boton-papel")
const botonReiniciar = document.getElementById("boton-reiniciar")

const personajeSeccion = document.getElementById("eleccion-personaje")
const personajeJugadorParrafo = document.getElementById("personaje-jugador")
const personajeEnemigoParrafo = document.getElementById("personaje-enemigo")

const vidasJugadorSpan = document.getElementById("vidas-jugador")
const vidasEnemigoSpan = document.getElementById("vidas-enemigo")

const mensajesResultado = document.getElementById("resultado")
const mensajesAtaqueJugador = document.getElementById("ataque-del-jugador")
const mensajesAtaqueEnemigo = document.getElementById("ataque-del-enemigo")
const contenedorTarjetasGrupo1 = document.getElementById("contenedor-tarjetas-grupo1")
const contenedorTarjetasGrupo2 = document.getElementById("contenedor-tarjetas-grupo2")

let personajes = []
let opcionPersonajes
let adaInput
let graceInput
let hedyInput
let margaterInput
let maryInput
let valentinaInput
let personajeJugador
let ataqueJugador
let ataqueEnemigo
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

personajes.push(ada, grace, hedy, margaret, mary, valentina)

window.addEventListener("load", () => {   //iniciar juego
    ataqueSeccion.style.display = "none"
    reiniciarSeccion.style.display = "none"

    personajes.forEach((personaje) => {
        opcionPersonajes = `
        <input type="radio" name="personaje" id=${personaje.id} />
                <label class="tarjeta-de-personaje" for=${personaje.id}>
                    <p>${personaje.nombre}</p>
                    <img src=${personaje.foto} alt=${personaje.id}>
                </label>
        `
        if (personaje.id === "ada" || personaje.id === "grace" || personaje.id === "hedy") {
            contenedorTarjetasGrupo1.innerHTML += opcionPersonajes
        } else {
            contenedorTarjetasGrupo2.innerHTML += opcionPersonajes
        }
    })

    adaInput = document.getElementById("ada")
    graceInput = document.getElementById("grace")
    hedyInput = document.getElementById("hedy")
    margaterInput = document.getElementById("margaret")
    maryInput = document.getElementById("mary")
    valentinaInput = document.getElementById("valentina")

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
        personajeJugadorParrafo.innerHTML = `<img src=${ada.foto} alt=${ada.id}>`
        personajeJugador = adaInput.id
    } else if (graceInput.checked) {
        personajeJugadorParrafo.innerHTML = `<img src=${grace.foto} alt=${grace.id}>`
        personajeJugador = graceInput.id
    } else if (hedyInput.checked) {
        personajeJugadorParrafo.innerHTML = `<img src=${hedy.foto} alt=${hedy.id}>`
        personajeJugador = hedyInput.id
    } else if (margaterInput.checked) {
        personajeJugadorParrafo.innerHTML = `<img src=${margaret.foto} alt=${margaret.id}>`
        personajeJugador = margaterInput.id
    } else if (maryInput.checked) {
        personajeJugadorParrafo.innerHTML = `<img src=${mary.foto} alt=${mary.id}>`
        personajeJugador = maryInput.id
    } else if (valentinaInput.checked) {
        personajeJugadorParrafo.innerHTML = `<img src=${valentina.foto} alt=${valentina.id}>`
        personajeJugador = valentinaInput.id
    } else {
        alert("Your must select a character.")
        ataqueSeccion.style.display = "none"
        personajeSeccion.style.display = "flex"
    }

    extraerAtaquesJugador(personajeJugador)
    seleccionarPersonajeEnemigo()
}

function extraerAtaquesJugador(personajeJugador) {
    let ataquesJugador
    for (let i = 0; i < personajes.length; i++) {
        if (personajeJugador === personajes[i].id) {
            ataquesJugador = personajes[i].ataques
        }
    }

    mostrarAtaques(ataquesJugador)
}

function seleccionarPersonajeEnemigo() {
    let personajeAleatorio = aleatorio(0, personajes.length - 1)
    personajeEnemigoParrafo.innerHTML = `<img src=${personajes[personajeAleatorio].foto} alt=${personajes[personajeAleatorio].id}>`
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
