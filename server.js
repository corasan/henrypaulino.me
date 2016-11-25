const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './');

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/dist/icons'));

app.get('*', function(req, res) {
  res.render('index');
});

app.listen(port, function(error) {
  if(error) {
    console.log('Error with server.', error);
  }
  console.log('Listening to port', port);
});
