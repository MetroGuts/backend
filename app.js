var express = require('express');
var bodyParser = require('body-Parser');

var proveedor = require('./routes/proveedor'); // importamos el archivo.js de routes  

var app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/erp', {promiseLibrary: require('bluebird')})//recibe en primer lugar la url de la base de datos y luego importamos bluebird
            .then(()=>{
                console.log('Conectado a la DB'); // .then para cuando funciona bien
            })
            .catch((err)=>{
              console.error(err);  // .catch para cuando funciona mal
            })

app.use(bodyParser.json({}));//para poder leer los  json
app.use(bodyParser.urlencoded({'extended': false}));

app.use('/proveedor', proveedor);

app.listen(3000, function(){
    console.log('Servidor ok en puerto 3000');
})