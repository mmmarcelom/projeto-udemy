exports.paginaInicial = (req, res) => {
    res.render('index')
}

exports.tratarPost = () => {
    res.send('Ei, sou sua rota de POST')
}