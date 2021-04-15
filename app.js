//Carregando módulos
const express = require('express')
const expresshandlebars = require('express-handlebars')
const handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const Lista = require('./models/lista')
const app = express()

//body parser
app.use(express.urlencoded({extended: true}))
app.use(express.json())


//Handlebars
app.engine('handlebars', expresshandlebars({
    defaultLayout: 'main',
    handlebars:allowInsecurePrototypeAccess(handlebars)
}))
app.set('view engine','handlebars')
//Rotas

app.get('/',(req,res)=>{
    res.send("Olá")
})

app.get('/lista',(req,res)=>{
 Lista.findAll().then((listas)=>{
    res.render('lista',{listas:listas})
 }).catch((erro)=>{
     console.log('Erro ao tentar gerar a lista de produtos:' + erro)
 })   
})

app.get('/cadastro',(req,res)=>{
    res.render('formulario')
})

app.post('/add',(req,res)=>{
    Lista.create({
        descricao: req.body.descricao,
        valor: req.body.valor
    }).then(()=>{
        res.send("Produto criado com sucesso!")
    }).catch((erro)=>{
        res.send("Houve algum erro no cadastro: " + erro)
    })
})

//Olá

//Conexão com o servidor
app.listen(8081,()=>{
    console.log("Servidor Rodando!...")
})