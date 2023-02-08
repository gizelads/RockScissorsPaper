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
let personajesEnemigo = []
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
let personajeJugadorObjeto
let ataquesPersonajeJugador
let ataquesPersonajeEnemigo
let ataqueJugador = []
let ataqueEnemigo = []
let vidasJugador = 3
let vidasEnemigo = 3
let victoriasJugador = 0
let victoriasEnemigo = 0
let lienzo = mapa.getContext("2d")
let intervalo

let mapaBackground = new Image()
mapaBackground.src = "./assets/map.jpg"

class Personaje {
    constructor(id, nombre, foto, vida, fotoMapa, anchoFoto, x = 25, y = 170) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = x
        this.y = y
        this.anchoFoto = anchoFoto
        this.altoFoto = 60
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarPersonaje(){
        lienzo.drawImage(this.mapaFoto, this.x, this.y, this.anchoFoto, this.altoFoto)
    }
}

let ada = new Personaje("ada", "Ada Lovelace💜", "./assets/ada-lovelace.png", 5, "./assets/ada-map.png", 70)
let grace = new Personaje("grace", "Grace Hopper🎖️", "./assets/grace-hopper.png", 5, "./assets/grace-map.png", 60)
let hedy = new Personaje("hedy", "Hedy Lamarr📡", "./assets/hedy-lamarr.png", 5, "./assets/hedy-map.png", 60)
let margaret = new Personaje("margaret", "Margaret Hamilton🔢", "./assets/margaret-hamilton.png", 5, "./assets/margaret-map.png", 60)
let mary = new Personaje("mary", "Mary Jackson🛰️", "./assets/mary-jackson.png", 5, "./assets/mary-map.png", 60)
let valentina = new Personaje("valentina", "Valentina Tereshkova🚀", "./assets/valentina-tereshkova.png", 5, "./assets/valentina-map.png", 60)

let adaEnemigo = new Personaje("ada", "Ada Lovelace💜", "./assets/ada-lovelace.png", 5, "./assets/ada-map.png", 70, 420, 250)
let graceEnemigo = new Personaje("grace", "Grace Hopper🎖️", "./assets/grace-hopper.png", 5, "./assets/grace-map.png", 60, 260, 250)
let hedyEnemigo = new Personaje("hedy", "Hedy Lamarr📡", "./assets/hedy-lamarr.png", 5, "./assets/hedy-map.png", 60, 170, 170)
let margaretEnemigo = new Personaje("margaret", "Margaret Hamilton🔢", "./assets/margaret-hamilton.png", 5, "./assets/margaret-map.png", 60, 285, 130)
let maryEnemigo = new Personaje("mary", "Mary Jackson🛰️", "./assets/mary-jackson.png", 5, "./assets/mary-map.png", 60, 410, 50)
let valentinaEnemigo = new Personaje("valentina", "Valentina Tereshkova🚀", "./assets/valentina-tereshkova.png", 5, "./assets/valentina-map.png", 60, 120, 0)

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
personajesEnemigo.push(adaEnemigo, graceEnemigo, hedyEnemigo, margaretEnemigo, maryEnemigo, valentinaEnemigo)

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

    mapaSeccion.style.display = "flex"
    iniciarMapa()
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

function iniciarMapa() {
    mapa.width = 574
    mapa.height = 376

    personajeJugadorObjeto = extraerObjetoJugador()

    intervalo = setInterval(pintarLienzo, 50)

    window.addEventListener("keydown", moverPersonaje)
    window.addEventListener("keyup", detenerPersonaje)
}

function pintarLienzo() {
    personajeJugadorObjeto.x = personajeJugadorObjeto.x + personajeJugadorObjeto.velocidadX
    personajeJugadorObjeto.y = personajeJugadorObjeto.y + personajeJugadorObjeto.velocidadY

    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(mapaBackground, 0, 0, mapa.width, mapa.height)

    personajesEnemigo.forEach((personajeEnemigo) => {
        if (personajeJugadorObjeto.id === personajeEnemigo.id) {
            personajeJugadorObjeto.pintarPersonaje()
        } else {
            personajeEnemigo.pintarPersonaje()
        }
    })
}

function moverPersonajeDerecha() {
    personajeJugadorObjeto.velocidadX = 5
}

function moverPersonajeIzquierda() {
    personajeJugadorObjeto.velocidadX = - 5
}

function moverPersonajeAbajo() {
    personajeJugadorObjeto.velocidadY = 5
}

function moverPersonajeArriba() {
    personajeJugadorObjeto.velocidadY = - 5
}

function detenerPersonaje() {
    personajeJugadorObjeto.velocidadX = 0
    personajeJugadorObjeto.velocidadY = 0
}

function moverPersonaje(evento) {
    switch (evento.key) {
        case "ArrowRight":
            moverPersonajeDerecha()
            break
        case "ArrowLeft":
            moverPersonajeIzquierda()
            break
        case "ArrowDown":
            moverPersonajeAbajo()
            break
        case "ArrowUp":
            moverPersonajeArriba()
            break
    
        default:
            console.log("Otra tecla")
    }
}

function extraerObjetoJugador() {
    for (let i = 0; i < personajes.length; i++) {
        if (personajeJugador === personajes[i].id) {
            return personajes[i]
        }
    }
}


