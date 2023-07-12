const express = require('express')
const routes = express.Router()

const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

// Home
routes.get('/', homeController.paginaInicial)

// Contato
routes.get('/contato', contatoController.mostrarRedesSociais)

module.exports = routes
