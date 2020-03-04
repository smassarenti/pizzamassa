const express = require('express')
const cardapioController = require('../controllers/cardapioController')
let router = express.Router()

router.get('/cadastrar/:pizza/:preco', (req,res)=>{
    //let {pizza} = req.params;
    //let {preco} = req.params;
    //res.send(`Pizza de ${pizza} por ${preco}`)
    res.send("Cadastrou pizza com sucesso")
})

router.get('/ver', cardapioController.listarCardapio)

module.exports = router