const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose= require('mongoose');

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

mongoose.connect(
    'mongodb+srv://parrille:'
     + process.env.MONGO_ATLAS_PW + 
     '@cluster0-jukx9.mongodb.net/test?retryWrites=true&w=majority'
     {
         useMongoClient: true
     }

     //https://www.youtube.com/watch?v=WDrU305J1yw 8 minutos
);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false})); //apenas dados simples
app.use(bodyParser.json()); //json de entrada

app.use((req, res, next) => {
res.header('Acess-Controll-Allow-Origin','*');
res.header(
    'Acess-Controll-Allow-Header',
'Origin, X-Requested-With,Content-Type, Accept, Authorization'
);
if(req.method === 'OPTIONS'){
    res.header('Acess-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).send({});
}

next();
});

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

//tratamento quando nao encontra rota
app.use((req, res, next)=>{
    const erro= new Error('Nao encontrado');
    erro.status= 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error, status || 500)
    return res.send({
        erro: {
            mensagem: error.mensagem
        }
    });
});

 
module.exports = app;

//npm start



//git congif --system user.name/email || core.editor code
