const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(routes)

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

const porta = 3000

app.listen(porta, ()=>{
    console.log(`Iniciando servidor na porta ${porta}`)
    console.log(`http://localhost:${porta}`)  
})