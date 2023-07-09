const path = require('path')
require('dotenv').config()

const express = require('express')
const session = require('express-session')

const app = express()

const mongoStore = require('connect-mongo')
const mongoose = require('mongoose')
mongoose
  .connect(
    process.env.CONNECTIONSTRING,
    { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao Mongo DB'))
  .catch(e => console.log('Falha ao conectar no Mongo DB'))

app.use(session({
  secret: '123456',
  store: mongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000
  }
}))

app.use(require('connect-flash')())
app.use(require('./routes'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

const porta = 3000

app.listen(porta, () => {
  console.log(`Iniciando servidor na porta ${porta}`)
  console.log(`http://localhost:${porta}`)
})
