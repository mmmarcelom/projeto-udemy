const HomeModel = require('../models/HomeModel')

exports.paginaInicial = (req, res) => {
  // req.session.usuario = {nome: 'Marcelo', logado: true}
  // req.flash('info', 'Olá mundo')
  // console.log(req.session.usuario)
  // console.log(req.flash('info'))

  HomeModel
    .create({
      titulo: 'um título de testes',
      descricao: 'uma breve descrição'
    }).then(dados => console.log(dados))
    .catch(e => console.log(e))

  res.render('index', {
    titulo: 'teste',
    arr: [0, 1, 2, 3]
  })
}
