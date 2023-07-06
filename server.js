require('dotenv').config()

const express = require('express')
const app = express()

const routes = require('./routes')
const path = require('path')

const mongoose = require('mongoose')
const mongoOptions = {useNewUrlParser : true, useUnifiedTopology: true}

mongoose
    .connect(process.env.CONNECTIONSTRING, mongoOptions)
    .then(() => {
        console.log('Iniciando a conexão com MongoDB...')
        app.emit('Ready')
    }).catch(e => console.log('Erro', e))

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(routes)

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

const porta = 3000

app.on('Ready', () => {
    console.log('Conexão realizada com sucesso\n')
    app.listen(porta, ()=>{
        console.log(`Iniciando servidor na porta ${porta}`)
        console.log(`http://localhost:${porta}`)
    })
})