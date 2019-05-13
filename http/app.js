const http = require('http');

/*
//A low level way of writing things is:
const server = http.createServer();
server.on('connection', (socket) => {
    console.log('New Connection...')
});
*/

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello Ishan!')
        res.end();
    }

    if (req.url === '/api/courses'){
        res.write(JSON.stringify(['HTML','CSS', 'JavaScript']));
        res.end();
    }
});

server.listen(3999);

console.log('Listening on port 3999.')

