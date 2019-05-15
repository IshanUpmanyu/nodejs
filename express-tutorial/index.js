const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/courses', (req, res) => {
    res.send(['html', 'css', 'javascript', 'java']);
});

app.listen(3000, () => console.log('Listening of port 3000.'));