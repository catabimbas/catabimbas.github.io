const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const ejs = require("ejs")

// Estou dizendo para o Express usar o EJS como view Engine
app.set('view engine', 'ejs')
app.use(express.static('public')) 

// Body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


// Routes
app.get('/a', (req,res)=>{
    res.render('index')
})


app.get('/', (req,res) => {
    res.send("/")
})


app.listen('catabimbas.github.io', function (erro){
    erro?console.log("Ocorreu um erro"):console.log("App funcionando")
})