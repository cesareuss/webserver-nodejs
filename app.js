const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/Json' })

    let salida = {
        nombre: 'Julio Cesar',
        job: 'Developer'
    }

    res.write(JSON.stringify(salida));
    res.end();
}).listen(8080);
console.log('Escuchando por el puerto 8080');