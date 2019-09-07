var qs = require("querystring");
const url = require('url');

exports.index = function index(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
    <html>
    <head>
        <meta charset="utf-8" />
        <title>Index</title>
    </head>
    <body>
        <form method='get' action='intervalo.html'>
            <label>Primeiro número:</label>
            <input type='text' placehold='senha' name='x'>
            <label>Segundo número:</label>
            <input type='text' placehold='senha' name='y'>
            <button type='submit'>Enviar</button>
        </form>
    </body>
    `);
    res.end();
}

exports.intervalo = function intervalo(req, res) {
    var query = url.parse(req.url).query;
    var results = qs.parse(query);

    let x = results.x;
    let y = results.y;

    if(x > y) {
        let aux = x;
        x = y;
        y = aux;
    }

    res.writeHead(200, {"Content-Type":"text/html"});
    res.write(`
    <html>
    <head>
        <meta charset="utf-8" />
        <title>Index</title>
    </head>
    <body>
        <h2>Intervalo entre ${x} e ${y}</h2>
        <p>
    `);
    for(let i = x; i <= y; i++) {
        res.write(`${i} `);
    }
    res.write(`
        </p>
    </body>
    `);
    res.end();
}