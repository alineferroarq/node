const http = require('http')

const HOST = 'localhost'
const PORT = 5000

const server = http.createServer((req, res) => {
res.end('oi estou funcionando com nodemon')


})

server.listen(PORT, HOST, () =>{
    console.log(`servidro rodando: http://${HOST}:${PORT}`);
})
