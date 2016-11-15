/**
 * Created by AlexNfr on 15.11.16.
 */

var express = require('express'),
    app = express();
const port = 3200,
      pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

var pc = {};

app.listen(port, function () {
    console.log('Get PC server listening on port ' + port);
    fetch(pcUrl)
        .then(function (res) {
            pc = res.json();
            console.log(pc);
        })
        .catch(function (err) {
            console.log('Что-то пошло не так:', err);
        });
});