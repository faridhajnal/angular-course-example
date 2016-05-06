var express = require('express'); //requiring express.

var app = express(); //starting express.

app.use(express.static(__dirname + '/public')); //utilizará TODOS los recursos encontrados en la carpeta 'public' para el desarrollo web,-

app.listen(8742); //la aplicación será ejecutada en el puerto 7777

console.log('App succesfuly running on port 8742');