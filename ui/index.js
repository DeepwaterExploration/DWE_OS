var express = require('express');
var app = express();

var port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index', {
        devices: [
            '/dev/video2', 
            '/dev/video4', 
            '/dev/video6'
        ]
    });
})

app.listen(port, function() {
    console.log(`App listening on ${port}`);
});
