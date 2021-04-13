const db = require('./db')

const Lista = db.sequelize.define('produtos',{
    descricao:{
        type: db.Sequelize.STRING
    },
    valor:{
        type: db.Sequelize.DOUBLE
    }
})

module.exports = Lista