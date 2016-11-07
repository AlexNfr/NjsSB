/**
 * Created by AlexNfr on 07.11.16.
 */

var http = require('http'),
    url = require('url'),
    qs = require('querystring');
var PORT = 3200;

function onRequest(req, response) {
    var translatorTitle = 'Online FIO-Translator Service ver. 0.1 (c) 2016 by AlexNfr\n\n',
        helpMessage = '  Usage: localhost:3200[?fullname=[<name> [<middle-name> ]]<surname>\n\n',
        errorMessage = 'Invalid fullname!';
    var query, params,
        fullname, fio, fioLength, resultString;

    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'});
    response.write(translatorTitle + helpMessage);

    query = url.parse(req.url).query;
    params = qs.parse(query);

    fullname = (params.fullname || '').toLowerCase();
    fio = (fullname == '') ? [] : fullname.split(' ');
    console.log(fullname, fio);
    fioLength = fio.length;

    if (fioLength >= 1 && fioLength <= 3)
    {
        resultString = fio[fioLength-1].charAt(0).toUpperCase() + fio[fioLength-1].slice(1);

        if (fioLength > 1)
        {
            resultString += ' ' + fio[0].charAt(0).toUpperCase() + '.';

            if (fioLength > 2) {
                resultString += ' ' + fio[1].charAt(0).toUpperCase() + '.';
            }
        }
        response.write(resultString);
    }
    else
    {
        response.write(errorMessage);
    }
    response.end();
}

http.createServer(onRequest).listen(PORT);
console.log('FIO Translator has started.');
