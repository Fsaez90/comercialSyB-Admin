import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import "../static/busqueda.css"
import ComprobanteRetiro from './ComprobanteRetiro'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddHomeIcon from '@mui/icons-material/AddHome';

function ConsultaEstado({date}) {
  
  const [numero, setNumero] = useState("")
  const [orden, setOrden] = useState()
  const [render, setRender] = useState(false)
  const[notExist, setNotExist] = useState("")
  const [modalComprobanteRetiro, setModalComprobanteRetiro] = useState("modal-inactive")
  const [ok, setOk] = useState("gar-inactive")

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/comercial/orden/${numero}/`)
    .then(response => {
      if(response.status === 200) { return response.json()}
      if(response.status === 500) { setNotExist("Orden no encontrada")}
    })
    .then(data => setOrden(data))
}, [numero])

const dateOfToday = new Date();
const date2 = new Date(dateOfToday);
date2.setDate(dateOfToday.getDate() - 30);
const dateOf30DaysAgo = date2.toLocaleDateString()

function garantiaHandle (n) {
    fetch(`http://127.0.0.1:8000/comercial/update-partial/${n}/`, {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          garantia: true,
          mantencion: null,
          revision: null,
          cliente_notificado_retiro: false,
          cliente_notificado_ppto: false,
          fecha_reingreso: date,
          status: "Equipo reingresado por garantía"
      })
    })
    setOk("gar-active")
}
    
  if (orden != null) {
    return (
      <div className='frame'>
        <h1 className='title-component'>Consulta estado de orden</h1>
        <input type="text" placeholder='Número de orden' onChange={(e) => {
          setNumero(e.target.value)
          setRender(!render)
          }} value={numero} />
        <div className='busqueda-modal'>
          <div className='cliente-data'>
            <div className='modal-elements'>
              <div className='title-consulta'>Nombre:<span className='orden-data'>{orden.nombre} {orden.apellidos}</span></div>
              <div className='title-consulta'>RUT:<span className='orden-data'>{orden.rut}</span></div>
            </div>
            <div className='modal-elements'>
              <div className='title-consulta'>Teléfono:<span className='orden-data'>{orden.telefono}</span></div>
              <div className='title-consulta'>Email:<span className='orden-data'>{orden.email}</span></div>
            </div>
          </div>
          <div className='cliente-data'>
            <div className='modal-elements'>
              <div className='title-consulta'>Tipo:<span className='orden-data'>{orden.tipo}</span></div>
              <div className='title-consulta'>Modelo:<span className='orden-data'>{orden.modelo}</span></div>
            </div>
            <div className='modal-elements'>
              <div className='title-consulta'>Marca:<span className='orden-data'>{orden.marca}</span></div>
              <div className='title-consulta'>Serie:<span className='orden-data'>{orden.serie}</span></div>
            </div>
          </div>
          <div className='cliente-data'>
            <div className='modal-elements'>
              <div className='title-consulta'>Observaciones:<span className='orden-data'>{orden.observaciones}</span></div>
              {orden.revision?
              <div className='title-consulta'>Propósito:<span className='orden-data'>Revisión</span></div>:
              <div className='title-consulta'>Propósito:<span className='orden-data'>Mantenimiento</span></div>
              }
            </div>
          </div>
            
          <div className='work-data'> 
            <div className='modal-elements'>
              <div className='title-consulta'>Fecha Ingreso:<span className='orden-data'>{orden.fecha_ingreso}</span></div>
              {orden.fecha_trabajo? <div className='title-consulta'>Fecha Revisión/comienzo:<span className='orden-data'>{orden.fecha_trabajo}</span></div>: null}
              {orden.fecha_reparacion? <div className='title-consulta'>Fecha Reparación/término:<span className='orden-data'>{orden.fecha_reparación}</span></div>: null}
              {orden.fecha_retiro? <div className='title-consulta'>Fecha Retiro:<span className='orden-data'>{orden.fecha_retiro}</span></div>: null}
              {orden.diagnostico? <div className='title-consulta'>Diagnóstico:<span className='orden-diagnostico'>{orden.diagnostico}</span></div>: null}
              {orden.valorizacion? <div className='title-consulta'>Valorización:<span className='orden-data'>{orden.valorizacion}</span></div>: null}
            </div>
            {orden.espera_repuesto?
            <div className='modal-elements'>
              <div>Repuestos</div>
              <textarea className='detalle-repuestos' value={orden.repuesto_faltante} />
            </div>:null}
            <div className='modal-elements'>
              <p className='data-consulta-status'>{orden.status}</p>
            </div>
            <br/>
            {orden.entregada?
              <div className='modal-elements'>
                <button className='buttons' onClick={() => setModalComprobanteRetiro("modal")}>Ver comprobante Retiro</button>
                {(orden.fecha_retiro > dateOf30DaysAgo && orden.garantia === false)? <div className='modal-elements'><button className='buttons' onClick={()=>garantiaHandle(orden.id)}>Garantía</button><div className={ok}><CheckCircleIcon style={{color: "green"}}></CheckCircleIcon></div></div>: null}
              </div>: null}
          </div> 
          
              <button className='button-list button' onClick={() => {
                setOrden(null)
                setNumero("")
                }}>Refresh</button>          
        </div>
        <br/>
        <br/>
        <NavLink to="/">Menú</NavLink>
        <div className={modalComprobanteRetiro}>
              <ComprobanteRetiro orden={orden} setModalComprobanteRetiro={setModalComprobanteRetiro}/>
        </div>
      </div>
    )
  } else {

    return (
      <div className='frame'>
        <h1 className='title-component'>Consulta estado de orden</h1>
        <input type="text" placeholder='Número de orden' onChange={(e) => {
          setNumero(e.target.value)
          setNotExist("")}} value={numero} />
        <br/>
        <p className='not-exist'>{notExist}</p>
        <br/>
        <NavLink to="/app"><AddHomeIcon style={{color: "rgb(33, 33, 240)", fontSize: "30px"}} ></AddHomeIcon></NavLink>
      </div>
    )
  } 
}

export default ConsultaEstado