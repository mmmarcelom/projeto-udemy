 const mongoose = require('mongoose')

 const HomeModel = 
    mongoose.model('Home', 
        new mongoose.Schema(
            {
                titulo: { type: String, required: true },
                descricao: { type: String, required: true }
            }
        )
    )

module.exports = HomeModel