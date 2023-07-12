require('dotenv').config() // Variáveis de ambiente

const express = require('express')
const app = express()

const session = require('express-session')
const MongoStore = require('connect-mongo')
const mongoose = require('mongoose')
mongoose
  .connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao Mongo DB'))
  .catch(e => console.log('Falha ao conectar no Mongo DB'))

app.use(session({
  secret: '123456',
  store: new MongoStore({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 dias
  }
}))

app.use(require('connect-flash')()) // Uso de mensagens que são apagadas após leitura
app.use(require('./routes')) // Uso das rotas
app.use(require('helmet')()) // Segurança de headers
app.use(require('csurf')) // Segurança para evitar cross-site request forgery
app.use(express.static('./public')) // Usar arquivos estáticos da pasta pública
app.use(express.urlencoded({ extended: true })) // Parsear formulários
app.use(express.json()) // Parsear json

app.set('views', './src/views') // Definir o caminho das views
app.set('view engine', 'ejs') // Definir a rendenização através do EJS. Ex.: <%=  %>

const porta = 3000

app.listen(porta, () => {
  console.log(`Iniciando servidor na porta ${porta}`)
  console.log(`http://localhost:${porta}`)
})

// Usar o pacote Path e caminhos absolutos pode evitar alguns erros
// const path = require('path') // Usado para fazer caminhos absolutos ao invés de relativos
// app.use(express.static(path.resolve(__dirname, 'public'))) // Path e caminhos absolutos
// app.set('views', path.resolve(__dirname, 'src', 'views'))
