const Router = require('express');
const {listarNotificaciones , recibirCompletadas , getIdIntegracion} = require ('../controllers/integrador')
const router = new Router();

router.post('/listarNotificaciones',listarNotificaciones)

router.post('/recibir',recibirCompletadas)

module.exports = router;

