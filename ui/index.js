var express = require('express');
var app = express();

var port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

app.locals.sliderId = 0;

app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index');
})

app.listen(port, function() {
    console.log(`App listening on ${port}`);
});
