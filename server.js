const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers');
const app = express()


app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {

    res.render('home', {
        name: 'julio cesar sanchez islas xxx',
        date: new Date()
    });
})

app.get('/about', function(req, res) {

    res.render('about', {
        date: new Date()
    });
})

app.listen(3000)