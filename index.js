const express = require("express") // importamos express
const app = express() // creamos una app con expressjs

app.get("/", (req, res) => { // indicamos que cuando responda "Hola" cuando hay una peticion a la direccion raiz "/"
    res.send("Hola, Express")
})

app.listen(8080, () => { // indicamos que el servidor escuche continuamente en el puerto 8080 las peticiones de los clientes
    console.log("Servidor funcionando")
})