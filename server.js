const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
})

app.get('/tests', (req, res) => {
    console.log(req.params)
    res.send(Testes)
})

app.get('/contato', (req, res) => {
    res.send()
})

const porta = 3000

app.listen(porta, ()=>{
    console.log(`Iniciando servidor na porta ${porta}`)
    console.log(`http://localhost:${porta}`)  
})