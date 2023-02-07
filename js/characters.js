const ataqueSeccion = document.getElementById("eleccion-ataque")
const reiniciarSeccion = document.getElementById("reset")
const botonPersonaje = document.getElementById("boton-personaje")
const botonReiniciar = document.getElementById("boton-reiniciar")

const personajeSeccion = document.getElementById("eleccion-personaje")
const personajeJugadorParrafo = document.getElementById("personaje-jugador")
const personajeEnemigoParrafo = document.getElementById("personaje-enemigo")

const victoriasJugadorSpan = document.getElementById("victorias-jugador")
const victoriasEnemigoSpan = document.getElementById("victorias-enemigo")

const mensajesResultado = document.getElementById("resultado")
const mensajesAtaqueJugador = document.getElementById("ataque-del-jugador")
const mensajesAtaqueEnemigo = document.getElementById("ataque-del-enemigo")
const contenedorTarjetasGrupo1 = document.getElementById("contenedor-tarjetas-grupo1")
const contenedorTarjetasGrupo2 = document.getElementById("contenedor-tarjetas-grupo2")
const contenedorBotonesAtaque = document.getElementById("contenedor-botones-ataque")

const mapaSeccion = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

let personajes = []
let opcionPersonajes
let adaInput
let graceInput
let hedyInput
let margaterInput
let maryInput
let valentinaInput
let botonPiedra
let botonTijera
let botonPapel
let botonesAtaqueJugador = []
let personajeJugador
let ataquesPersonajeJugador
let ataquesPersonajeEnemigo
let ataqueJugador = []
let ataqueEnemigo = []
let vidasJugador = 3
let vidasEnemigo = 3
let victoriasJugador = 0
let victoriasEnemigo = 0
let lienzo = mapa.getContext("2d")

class Personaje {
    constructor(id, nombre, foto, vida) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = 20
        this.y = 30
        this.anchoFoto = 80
        this.altoFoto = 80
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
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
    { nombre: "📄", id: "boton-papel" },
    { nombre: "📄", id: "boton-papel" },
    { nombre: "📄", id: "boton-papel" },
    { nombre: "🪨", id: "boton-piedra" },
    { nombre: "✂️", id: "boton-tijera" }
)

personajes.push(ada, grace, hedy, margaret, mary, valentina)

window.addEventListener("load", () => {   //iniciar juego
    ataqueSeccion.style.display = "none"
    reiniciarSeccion.style.display = "none"
    mapaSeccion.style.display = "none"

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
    botonReiniciar.addEventListener("click", reiniciar)
})

function seleccionarPersonajeJugador() {
    //ataqueSeccion.style.display = "flex"
    personajeSeccion.style.display = "none"
    mapaSeccion.style.display = "flex"

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

function mostrarAtaques(ataquesJugador) {
    ataquesJugador.forEach((ataque) => {
        ataquesPersonajeJugador = `
        <button id=${ataque.id} class="botones-ataque-jugador">${ataque.nombre}</button>
        `
        contenedorBotonesAtaque.innerHTML += ataquesPersonajeJugador
    })
    
    botonPiedra = document.getElementById("boton-piedra")
    botonTijera = document.getElementById("boton-tijera")
    botonPapel = document.getElementById("boton-papel")
    botonesAtaqueJugador = document.querySelectorAll(".botones-ataque-jugador")
}

function secuenciaAtaqueJugador() {
    botonesAtaqueJugador.forEach((boton) => {
        boton.addEventListener("click", (e) => { // e = evento del click
            if (e.target.textContent === "🪨") {
                ataqueJugador.push("Rock")
            } else if(e.target.textContent === "✂️") {
                ataqueJugador.push("Scissors")
            } else {
                ataqueJugador.push("Paper")
            }
            console.log(ataqueJugador)
            boton.disabled = true
            boton.style.cursor = 'not-allowed'
            secuenciaAtaqueEnemigo()
        })
    })
}

function seleccionarPersonajeEnemigo() {
    let personajeAleatorio = aleatorio(0, personajes.length - 1)
    personajeEnemigoParrafo.innerHTML = `<img src=${personajes[personajeAleatorio].foto} alt=${personajes[personajeAleatorio].id}>`

    ataquesPersonajeEnemigo = personajes[personajeAleatorio].ataques
    secuenciaAtaqueJugador()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function secuenciaAtaqueEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesPersonajeEnemigo.length - 1)

    if (ataquesPersonajeEnemigo[ataqueAleatorio].nombre === "🪨") {
        ataqueEnemigo.push("Rock")
    } else if(ataquesPersonajeEnemigo[ataqueAleatorio].nombre === "✂️") {
        ataqueEnemigo.push("Scissors")
    } else {
        ataqueEnemigo.push("Paper")
    }
    console.log(ataqueEnemigo)
    ataquesPersonajeEnemigo.splice(ataqueAleatorio, 1)
    iniciarCombate()
}

function iniciarCombate() {
    if(ataqueJugador.length === 5 && ataqueEnemigo.length === 5) {
        resultadoCombate()
    }
}

function resultadoCombate() {
    for (let i = 0; i < ataqueJugador.length; i++) {
        if (ataqueJugador[i] === ataqueEnemigo[i]) {
            crearMensajesCombate("Draw🤝", ataqueJugador[i] + "➖", ataqueEnemigo[i] + "➖")
        } else if ((ataqueJugador[i] === "Rock" && ataqueEnemigo[i] == "Scissors") || (ataqueJugador[i] == "Scissors" && ataqueEnemigo[i] == "Paper") || (ataqueJugador[i] == "Paper" && ataqueEnemigo[i] == "Rock")) {
            crearMensajesCombate("You Win🎉", ataqueJugador[i] + "✅", ataqueEnemigo[i] + "❌")
            victoriasJugador++
            victoriasJugadorSpan.innerHTML = victoriasJugador
        } else {
            crearMensajesCombate("You Lose😵", ataqueJugador[i] + "❌", ataqueEnemigo[i] + "✅")
            victoriasEnemigo++
            victoriasEnemigoSpan.innerHTML = victoriasEnemigo
        }
    }
    
    revisarVictorias()
}

function revisarVictorias() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("DRAW🤝!")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("Congratulations, YOU WON 🤩!")
    } else {
        crearMensajeFinal("Sorry, YOU LOST 😭!")
    }
}

function crearMensajesCombate(resultadoAtaques, ataqueJugadorEmoji, ataqueEnemigoEmoji) {
    let parrafoAtaqueJugador = document.createElement("p")
    let parrafoAtaqueEnemigo = document.createElement("p")

    mensajesResultado.innerHTML = resultadoAtaques
    parrafoAtaqueJugador.innerHTML = ataqueJugadorEmoji
    parrafoAtaqueEnemigo.innerHTML = ataqueEnemigoEmoji

    mensajesAtaqueJugador.appendChild(parrafoAtaqueJugador)
    mensajesAtaqueEnemigo.appendChild(parrafoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoCombate) {
    mensajesResultado.innerHTML = resultadoCombate
    reiniciarSeccion.style.display = "block"
}

function reiniciar() {
    location.reload()
}

function pintarPersonajeJugador() {
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(ada.mapaFoto, ada.x, ada.y, ada.anchoFoto, ada.altoFoto)
}

function moverAda() {
    ada.x = ada.x + 5
    pintarPersonajeJugador()
}
