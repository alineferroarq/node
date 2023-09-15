// a função require() importa modulos(funções ou atributos) que podem ser utilizadas no código
var os = require('os')
var fs = require('fs')
var path = require('path')

console.log('os', os.platform());
console.log('arquitetura', os.arch());
console.log('hostname', os.hostname());

console.log('----- modulo: OS -----\n')

console.log('----- modulo: FS -----\n')

//fs.rename('teste.js', 'teste_novo.js', (err) => {
    //if(err){
     //   console.log(err);
   // }
//})

fs.readFile('teste_novo.js', (err, data) => {
    if(err) throw err;
    console.log(`conteudo do arquivo: ${data}`); 
}) 

console.log('path', path.dirname('modulo.js'));

