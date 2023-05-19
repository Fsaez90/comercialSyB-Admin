import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import "../static/busqueda.css"
import "../static/modalTaller.css"
import ModuloCliente from '../Modulos Retiro/ModuloCliente'
import ModuloTercero from '../Modulos Retiro/ModuloTercero'
import AddHomeIcon from '@mui/icons-material/AddHome';

function Entrega({date, clock}) {
  const [numero, setNumero] = useState("")
  const [orden, setOrden] = useState()
  const [render, setRender] = useState(false)
  const[notExist, setNotExist] = useState("")
  const [modal, setModal] = useState("modal-inactive")
  const [modalFormaCliente, setModalFormaCliente] = useState("modal-inactive")
  const [modalFormaTercero, setModalFormaTercero] = useState("modal-inactive")
  const [status, setStatus] = useState()
  const [anular, setAnular] = useState(false)

  useEffect(() => { 
    fetch(`http://127.0.0.1:8000/comercial/orden/${numero}/`)
    .then(response => {
      if(response.status === 200) { return response.json()}
      if(response.status === 500) { setNotExist("Orden no encontrada")}
    })
    .then(data => setOrden(data))
  }, [numero])
  
  
  if (orden != null && orden.entregada === false) {
    return (
      <div className='frame'>
        <h1 className='title-component'>Retiro de Equipo</h1>
        <input type="text" placeholder='Número de orden' onChange={(e) => {
          setNumero(e.target.value)
          setRender(!render)
          setAnular(false)
          }} value={numero} />
        <div className='busqueda-modal'>
          <br/><br/>
          {orden.armada === true || orden.reparada === true || (orden.mmto_completado === true && orden.repuestos_entregados === true)?
           <div>
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
              <br/><br/>
              <div className='modal-elements'>
                <p className='data-consulta-status'>Equipo disponible para RETIRO</p>
              </div>
              <br/><br/>
              <button className="button-retiro" onClick={() => {setModal("modal"); setStatus("Equipo reparado y entregado")}}>Comenzar</button>
           </div>:
           <div>
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
            <br/><br/>
            <div className='modal-elements'>
              <p className='data-consulta-status-anular'>Equipo aún en etapa de trabajo</p>
            </div>
            <br/><br/>
            <button className="button-retiro" onClick={() => {
                setModal("modal")
                setAnular(!anular)
                setStatus("Equipo retirado sin reparar, orden anulada")
                }}>Retirar (Anular orden)</button>
             </div>}
             <button className='button-list button' onClick={() => {
                  setOrden(null)
                  setNumero("")
                  setAnular(false)
                  }}>Refresh</button>             
        </div>
        <br/>
        <br/>
        <NavLink to="/">Menú</NavLink>
        <div className={modal}>
            <div className='modal-retiro-buttons'>
                <div>
                  <h1 className='title-component'>¿Quién retira equipo?</h1>
                </div>
                <div>
                  {anular?<button onClick={() => {
                    setModal("modal-inactive")
                    setModalFormaCliente("modal")
                  }} className='button-list'>Cliente (Anular)</button>:<button onClick={() => {
                    setModal("modal-inactive")
                    setModalFormaCliente("modal")
                  }} className='button-list'>Cliente</button>}
                  {anular?<button onClick={() => {
                    setModal("modal-inactive")
                    setModalFormaTercero("modal")
                  }} className='button-list'>Tercero(Anular)</button>:<button onClick={() => {
                    setModal("modal-inactive")
                    setModalFormaTercero("modal")
                  }} className='button-list'>Tercero</button>}
                </div>
            </div>
        </div>
        <div className={modalFormaCliente}>
          <ModuloCliente orden={orden} setModalFormaCliente={setModalFormaCliente} setModal={setModal} date={date} clock={clock} status={status}/>
        </div>
        <div className={modalFormaTercero}>
          <ModuloTercero orden={orden} setModalFormaTercero={setModalFormaTercero} setModal={setModal} date={date} clock={clock} status={status}/>
        </div>
      </div>
    )
  } else if (orden != null && orden.entregada === true) {
    return(
      <div className='frame'>
        <h1 className='title-component'>Retiro de Equipo</h1>
        <input type="text" placeholder='Número de orden' onChange={(e) => {
          setNumero(e.target.value)
          setNotExist("")}} value={numero} />
        <br/>
        <p className='not-exist'>Equipo retirado con fecha {orden.fecha_retiro}</p>
        <br/>
        <NavLink to="/">Menú</NavLink>
      </div>
    )
  } else {
    return (
      <div className='frame'>
        <h1 className='title-component'>Retiro de Equipo</h1>
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

export default Entrega