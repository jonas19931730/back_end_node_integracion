const {Client} = require('pg')

const clienteAtunera = new Client({
    host:"localhost",
    port:5432,
    user:"haroldnav",
    database:"nw_des",
    password:"Nirvana76:",
});

const clienteIntegrador = new Client({
    host:"localhost",
    port:5432,
    user:"haroldnav",
    database:"nw_integrador_nirsa",
    password:"Nirvana76:",
});

const getClienteAtunera = () =>{
    clienteAtunera.connect();
    return clienteAtunera;
}

const getClienteIntegrador = () =>{
    clienteIntegrador.connect();
    return clienteIntegrador;
}

module.exports = {
    getClienteAtunera,
    getClienteIntegrador
}