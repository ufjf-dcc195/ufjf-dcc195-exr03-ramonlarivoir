exports.index = function index(req, res) {
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write(`
    <html>
    <head>
        <meta charset="utf-8" />
        <title>Index</title>
    </head>
    <body>
        <form method='get' action='oculto.html'>
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