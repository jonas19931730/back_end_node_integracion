const {io} = require('socket.io-client');
const {consultarJson , getCamposByIntegracion} =require('../dao/integrador')

const socket = io("http://localhost:8080");

const listarNotificaciones = async(req,res)=>{

    const {tipo_proceso, tipo_integracion ,fecha_produccion ,id_tipo_integracion} = req.body;

    const campos = await getCamposByIntegracion(id_tipo_integracion);

    const data = await consultarJson(tipo_proceso, tipo_integracion ,fecha_produccion);

    let result = {
        campos,
        data
    }
    console.log(req.body)
    console.log(result)
    res.json(result);
}

const recibirCompletadas = async(req,res)=>{
    const val = req.body;
    socket.emit('confirmar-datos',req.body)
}


module.exports = {
    listarNotificaciones,
    recibirCompletadas
}