const express = require('express');
const app = express();
const hbs = require('hbs');
let PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine','hbs');
app.get('/', (req,res) => {
res.render('home', {
    nombre: 'Alex'
});
});
app.get('/about', (req,res) => {
    res.render('about', {
        nombre: 'Alex'
    });
    });
// app.get('/', function (req, res) {
//   //res.send('<h3>Hola Alex<h3/>');
//   let salida = {
//       nombre: "alex alba",
//       edad: 20,
//       url: req.url
//   };

//   res.send(salida);
// });
// app.get('/hola', (req, res) => {
// res.send('Estas en /hola');
// });
 
app.listen(PORT, () => {
    console.log('Escuchando por el puerto', PORT)
});