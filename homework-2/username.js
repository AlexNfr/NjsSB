/**
 * Created by AlexNfr on 14.11.16.
 */

var http = require('http'),
    url = require('url'),
    qs = require('querystring');
var PORT = 3200;

function onRequest(req, response) {
    var parserTitle = 'Online Username Parser ver. 0.1 (c) 2016 by AlexNfr\n\n',
        helpMessage = '  Usage: localhost:3200[?username=[<path>]<username>\n\n',
        errorMessage = 'Invalid username!';
    var query, params, userName;

    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'});
    response.write(parserTitle + helpMessage);

    query = url.parse(req.url).query;
    params = qs.parse(query);

    userName = ((params.username || '').toLowerCase()).split('/').slice(-1).join('');

    if (userName)
    {
        response.write('Username: @' + userName);
    }
    else
    {
        response.write(errorMessage);
    }
    response.end();
}

http.createServer(onRequest).listen(PORT);
console.log('Username Parser has started.');
