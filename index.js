const express = require('express')
const rotasUsuario = require('./routes/usuarioRota')
const rotasCardapio = require('./routes/cardapioRota')

let app = express()

app.get('/', (req, res)=> res.send("Você está no site da Pizzaria Massa"))

app.use('/usuarios', rotasUsuario)
app.use('/cardapio', rotasCardapio)


app.listen(3000, ()=>console.log("O servidor está funcionando corretamente"))
