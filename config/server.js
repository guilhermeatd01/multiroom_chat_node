// importar o módulo do framework express
var express = require('express');

// importar o módulo do consign
var consign = require('consign');

// importar o módulo do body-parser
var bodyParser = require('body-parser');

// importar o módulo do express-validator
var expressValidator = require('express-validator');

// iniciar o objeto do express
var app = express();

// configurar o ejs, setar as variáveis 'view engine' e 'views' do express
app.set('view engine', 'ejs');
app.set('views', './app/views');

// configurar o middleware express.satic
app.use(express.static('./app/public'));

// configurar o middleware body-parse
app.use(bodyParser.urlencoded({extended: true}));

// configurar o middleware express-validator
app.use(expressValidator());

// configurar o consign para fazer autoload dos arquivos do projeto para o objeto app
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

// exportar o objeto app (instancia do express)
module.exports = app;