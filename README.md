# projeto-udemy

## No github:
Criar um repositório (c/ gitiginore para node)  
Copiar url do repositório

## No terminal:
git clone <url do repositório>  
npm init -y  
npm install express  
npm install nodemon --save-dev  

## Criar um arquivo "server.js": 
````
const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    return res.send('Hello world')
})

const porta = 3000
app.listen(porta, () => {
    console.log(`Iniciando servidor na porta ${porta}`)
    console.log(`http://localhost:${porta}`)  
})
````

## No arquivo "package.json", adicione o script:
````
  "scripts": {
    "start": "nodemon server.js"
  },
````

## Para iniciar, digite no terminal:
````
npm start
````