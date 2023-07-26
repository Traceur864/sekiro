'use strict'

const mongoose = require('mongoose');
var app = require('./app');

var port = 3700;


mongoose.set('strictQuery', false);

//mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://127.0.0.1:27017/Portafolio",{ 
    useNewUrlParser:true, 
    useUnifiedTopology: true 
    })
    .then(() =>{
        console.log("conexion a mongodb exitosamente");

        //cracion del servidor
        app.listen(port, () =>{
            console.log("servidor corriendo exitosamente en la url http://localhost:3700");
        })
    })
    .catch(err => console.log(err));

