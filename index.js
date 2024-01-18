const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { fileURLToPath } = require('url');
const exphbs = require('express-handlebars')
const router = require('./routes/router.js');

const app = express();

app.use("/assets", express.static(path.join(__dirname, "/public/assets")));
app.use('/css', express.static(path.join(__dirname + "/public/css")));
app.use('/js', express.static(path.join(__dirname + "/public/js")));
app.set('views', path.join(__dirname, 'views'));

var hbs = exphbs.create({
    helpers: {
      json: function (adData) { return JSON.stringify(adData); },
    },
    defaultLayout: 'main',
    extname: '.hbs'
});
  
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(router)


app.use('/', require('./routes/router.js'));

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Server started at http://localhost:' + port);
});