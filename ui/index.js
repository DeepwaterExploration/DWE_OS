var express = require('express');
var app = express();

var port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

app.use('/', express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.render('index', {
        devices: [
            '/dev/video2', 
            '/dev/video4', 
            '/dev/video6'
        ]
    });
});

// FIXME: This is a hacky approach
app.get('/device', function(req, res) {
    let device = req.query.device;
    let index = req.query.index;
    res.render('device', {
        device, deviceIndex: index
    });
});

app.listen(port, function() {
    console.log(`App listening on ${port}`);
});
