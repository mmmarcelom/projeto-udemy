const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
})

app.post('/', (req, res) => {
    res.send('Hello world')
})

app.get('/contato', (req, res) => {
    res.send()
})

const porta = 3000

app.listen(porta, ()=>{
    console.log(`Iniciando servidor na porta ${porta}`)
    console.log(`http://localhost:${porta}`)  
})