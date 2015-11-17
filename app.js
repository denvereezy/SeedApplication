var express = require('express'),
    exphbs  = require('express-handlebars'),
    compression = require('compression'),
    app = express(),
    myConnection = require('express-myconnection'),
    mysql = require('mysql'),
    bodyParser = require('body-parser'),
    cat = require('./routes/cat'),
    dog = require('./routes/dog');

    var dbOptions = {
          host: 'localhost',
          user: 'admin',
          password: 'password',
          port: 3306,
          database: 'pets'
    };

app.use(compression());
app.use(myConnection(mysql, dbOptions, 'single'));
app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get('/',function(req, res){
//   res.render('index');
// });

// app.get('/dog',function(req, res){
//   res.render('dog');
// });

app.get('/',dog.show);
// app.get('/',cat.showComment);
app.post('/lostdog/add', dog.add);
app.post('/lostcat/add', cat.add);

// app.get('/cats/show',
// });

var port = process.env.PORT || 8022;
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
