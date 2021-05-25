import config from './config';
import express from 'express';

const server = express();

server.get('/', (req,res) => {
    res.send("Hello from server.")
});

server.get('/about.html', (req,res) => {
    res.send("about page")
});

server.listen(config.port, ()=> {
    console.info('listening on :', config.port);
});
