//Conexão com o banco de dados
const Sequelize = require('sequelize')
const sequelize = new Sequelize('cadastro','root','wanerlove12',{
    host:'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(()=>{
    console.log("Conexão realizada com sucesso!...")
}).catch((erro)=>{
    console.log("Houve algum erro ao executar a conexão:"+erro)
})

module.exports = {
    Sequelize:Sequelize,
    sequelize:sequelize
}