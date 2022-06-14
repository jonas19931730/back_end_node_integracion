const express = require('express');
const cors = require('cors');

const { socketController } = require('../sockets/controller');

class Server {

    constructor() {
        this.app    = express();
        this.port   = process.env.PORT;
        this.server = require('http').createServer( this.app );
        this.io     = require('socket.io')( this.server, {
            cors: {origin : '*'}
        });

        this.paths = {
            atunera : '/api/atunera',
            integrador: '/api/integrador'
        };

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        // Sockets
        this.sockets();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {
       this.app.use( this.paths.integrador, require('../routes/integrador'));
       this.app.use( this.paths.atunera, require('../routes/atunera'));
    }

    sockets() {
        this.io.on('connection', socketController );
    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}

module.exports = Server;