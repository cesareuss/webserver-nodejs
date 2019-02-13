const hbs = require('hbs');
//Helper
hbs.registerHelper('getAnio', () => {
    return new Date();
});

hbs.registerHelper('nombre', (texto) => {

    let palabras = texto.split(' ');
    palabras.forEach((palabra, id) => {
        palabras[id] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});