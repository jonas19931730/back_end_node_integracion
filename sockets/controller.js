const socketController = (socket) => {

    socket.on('confirmar-datos',(payload)=>{
        socket.broadcast.emit('recibir-notificaciones',payload);    
    })
    
    socket.on('id-integracion',(payload)=>{
        socket.broadcast.emit('id-integracion',payload);    
    })
}

module.exports = {
    socketController
}

