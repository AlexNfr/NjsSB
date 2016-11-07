/**
 * Created by AlexNfr on 07.11.16.
 */

var http = require('http'),
    url = require('url'),
    qs = require('querystring');
var PORT = 3200;

function onRequest(req, response) {
    var summatorTitle = 'Online Summator Service ver. 0.1 (c) 2016 by AlexNfr\n\n',
        helpMessage = '  Usage: localhost:3200[?a=<num1>[&b=<num2>]]\n\n'
    var query, params;
    var a, b, r;

    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'});
    response.write(summatorTitle + helpMessage);

    query = url.parse(req.url).query;
    params = qs.parse(query);

    a = (isFinite(params.a) ? parseInt(params.a) : 0);
    b = (isFinite(params.b) ? parseInt(params.b) : 0);
    r = a + b;

    console.log(a, b, r);

    response.write('a = ' + a + ', b = ' + b + '\n\n');
    response.write('a + b = ' + r + '\n');
    response.end();
}

http.createServer(onRequest).listen(PORT);
console.log('Online Summator has started.');
