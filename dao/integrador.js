const {getClienteAtunera , getClienteIntegrador} = require('../database/config')
const cliente = getClienteAtunera();
const clienteInt = getClienteIntegrador(); 

const consultarJson= async (tipo,destino,fecha) =>{
    const consulta = "select s4_func_nwi_getjsondata as data FROM s4_func_nwi_getjsondata('"+tipo+"', '"+destino+"', '"+fecha+"')";
    try{
        const result = await cliente.query(consulta);
        return result.rows;
     }
     catch(error){
         console.log("ERROR "+error)
         return "error"
     }
}

const getTipoProcesos = async()=>{
    const consulta = "select * from nwi_tipo_proceso";
    try{
        const result = await cliente.query(consulta);
        return result.rows;
     }
     catch(error){
         console.log("ERROR "+error)
         return "error"
     }
}

const getIntegracionesByProceso = async (tipo_proceso) =>{
        const consulta = "select * from view_tipo_integracion vw where vw.idnwitipoproceso = "+tipo_proceso;
        try{
            const result = await cliente.query(consulta);
            return result.rows;
        }
        catch(error){
            console.log("ERROR "+error)
            return "error"
        }
}

const getCamposByIntegracion = async (tipo_integracion)=>{
    const consulta = "select descripcion from nwi_plantilla where idnwitipointegracion = "+tipo_integracion;
        try{
            const result = await cliente.query(consulta);
            return result.rows;
        }
        catch(error){
            console.log("ERROR "+error)
            return "error"
        }
}

module.exports = {
    consultarJson,
    getTipoProcesos,
    getIntegracionesByProceso,
    getCamposByIntegracion
}