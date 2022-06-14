const Router = require('express');
const {listarTipoProcesos , obtenerIntegracionesPorTipoProceso,listarCamposEnviar} = require ('../controllers/atunera')
const router = new Router();

router.get('/listarTipoProcesos',listarTipoProcesos)

router.get('/listarIntegracionesByProceso/:id',obtenerIntegracionesPorTipoProceso)

//router.get('/listarCampos/:tipo_integracion',listarCamposEnviar)

module.exports = router;

