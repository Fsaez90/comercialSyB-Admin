import React, {useState} from 'react'
import ComprobanteRetiroAdmin from './ComprobanteRetiroAdmin'



function BusquedaModalMec({orden, setModal}) {
const [modalComprobanteRetiro, setModalComprobanteRetiro] = useState("modal-inactive-comprobante")
const [dataComprobante, setDataComprobante] = useState({})


  return (
    <div className='busqueda-modal-admin'>
      <div className='cliente-data-admin'>
        <div className='elements-admin'>
          <div className='title-consulta-modal'>Nombre:<span className='orden-data'>{orden.nombre} {orden.apellidos}</span></div>
          <div className='title-consulta-modal'>RUT:<span className='orden-data'>{orden.rut}</span></div>
        </div>
        <div className='elements-admin'>
          <div className='title-consulta-modal'>Teléfono:<span className='orden-data'>{orden.telefono}</span></div>
          <div className='title-consulta-modal'>Email:<span className='orden-data'>{orden.email}</span></div>
        </div>
      </div>
    <div className='cliente-data-admin'>
      <div className='elements-admin'>
        <div className='title-consulta-modal'>Tipo:<span className='orden-data'>{orden.tipo}</span></div>
        <div className='title-consulta-modal'>Modelo:<span className='orden-data'>{orden.modelo}</span></div>
      </div>
      <div className='elements-admin'>
        <div className='title-consulta-modal'>Marca:<span className='orden-data'>{orden.marca}</span></div>
        <div className='title-consulta-modal'>Serie:<span className='orden-data'>{orden.serie}</span></div>
        <div className='title-consulta-modal'>Categoría:<span className='orden-data'>{orden.categoria}</span></div>
      </div>
    </div>
    <div className='cliente-data-admin'>
      <div className='elements-admin'>
        <div className='title-consulta-modal'>Observaciones:<span className='orden-data'>{orden.observaciones}</span></div>
        {orden.revision?
        <div className='title-consulta-modal'>Propósito:<span className='orden-data'>Revisión</span></div>:
        <div className='title-consulta-modal'>Propósito:<span className='orden-data'>Mantenimiento</span></div>
        }
      </div>
    </div>  
    <div className='work-data-admin'> 
      <div className='elements-admin-fechas'>
        <div className='title-consulta-modal'>Fecha Ingreso:<span className='orden-data'>{orden.fecha_ingreso}</span></div>
        {orden.fecha_trabajo? <div className='title-consulta-modal'>Fecha Revisión/comienzo:<span className='orden-data'>{orden.fecha_trabajo}</span></div>: null}
        {orden.fecha_reparacion? <div className='title-consulta-modal'>Fecha Reparación/término:<span className='orden-data'>{orden.fecha_reparación}</span></div>: null}
        {orden.fecha_retiro? <div className='title-consulta-modal'>Fecha Retiro:<span className='orden-data'>{orden.fecha_retiro}</span></div>: null}
        {orden.diagnostico? <div className='title-consulta-modal'>Diagnóstico:<span className='orden-diagnostico'>{orden.diagnostico}</span></div>: null}
        {orden.valorizacion? <div className='title-consulta-modal'>Valorización:<span className='orden-data'>{orden.valorizacion}</span></div>: null}
      </div>
      {orden.espera_repuesto?
        <div className='elements-admin'>
          <div>Repuestos</div>
          <textarea className='detalle-repuestos-admin' value={orden.repuesto_faltante} />
        </div>:null}
        <div className='elements-admin'>
          <p className='data-consulta-status-admin'>{orden.status}</p>
        </div>
        <br/>
        {orden.entregada?
          <div className='elements-admin-btn'>
            <button className='buttons-admin' onClick={() => {
              setDataComprobante(orden)
              setModalComprobanteRetiro("modal-comprobante-admin")}}>Ver comprobante Retiro</button>
          </div>: null}
          <button className='button-close' onClick={()=> setModal("modal-inactive")}>Cerrar</button>
      </div>
      <div className={modalComprobanteRetiro}>
        <ComprobanteRetiroAdmin orden={dataComprobante} setModalComprobanteRetiro={setModalComprobanteRetiro}/>
      </div>
    </div> 
  )
}

export default BusquedaModalMec