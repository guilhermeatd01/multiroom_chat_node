// importar as configurações do servidor
var app = require('./config/server');

// parametrizar a porta de escuta
app.listen(80, function(){
    console.log('SERVIDOR ON NA PORTA 80')
});