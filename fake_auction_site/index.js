var express = require('express'),
bodyParser = require('body-parser'),
handlebars = require('handlebars'),
app = express ();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.render('index');
});


app.listen(3000);