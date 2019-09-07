const http = require("http");
const url = require("url");

exports.start = function start(route, routes){
    
    let server = http.createServer(function(req, res){
        route(url.parse(req.url).pathname, routes, req, res);
    });
    server.listen(8080);
};