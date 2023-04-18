import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../static/modalTaller.css"

function Revision({date, clock, revisiones, render, setRender, revLista}) {
  const [modal, setModal] = useState("modal-inactive")
  const [id, setId] = useState(revLista.id)
  const [nombre, setNombre] = useState(revLista.nombre)
  const [apellidos, setApellidos] = useState(revLista.apellidos)
  const [telefono, setTelefono] = useState(revLista.telefono)
  const [email, setEmail] = useState(revLista.email)
  const [rut, setRut] = useState(revLista.rut)
  const [tipo, setTipo] = useState(revLista.tipo)
  const [marca, setMarca] = useState(revLista.marca)
  const [modelo, setModelo] = useState(revLista.modelo)
  const [serie, setSerie] = useState(revLista.serie)
  const [observaciones, setObservaciones] = useState(revLista.observaciones)
  const [espada, setEspada] = useState(revLista.espada)
  const [cadena, setCadena] = useState(revLista.cadena)
  const [ingresoSistema, setIngresoSistema] = useState()
  const [funda, setFunda] = useState(revLista.funda)
  const [disco, setDisco] = useState(revLista.disco)
  const [mantencion, setMantencion] = useState(revLista.mantencion)
  const [revision, setRevision] = useState(revLista.revision)
  const [mecanico, setMecanico] = useState(revLista.mecanico)
  const [diagnostico, setDiagnostico] = useState()
  const [detallePpto, setDetallePpto] = useState()
  const  navigate  = useNavigate();
  
  useEffect(() => {
    setTimeout(() => {
      setRender(!render)
    }, 500); 
  },[modal])

  function enProcesoHandle(n) {
    fetch(`http://127.0.0.1:8000/comercial/update/${n}/`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            nombre: nombre,
            apellidos: apellidos,
            rut: rut,
            email: email,
            telefono: telefono,
            tipo: tipo,
            marca: marca,
            modelo: modelo,
            serie: serie,
            observaciones: observaciones,
            espada: espada,
            cadena: cadena,
            funda: funda,
            disco: disco,
            mantencion: mantencion,
            revision: revision,
            mecanico: mecanico,
            ingreso_sistema: ingresoSistema,
            status: "Equipo en proceso de revisión",
            diagnostico: diagnostico,
            comenzada: true,
            detalle_ppto: detallePpto,
            hora_trabajo: "pendiente",
            fecha_trabajo: "pendiente"
        })
      })
      setRender(!render)
      setTimeout(() => {
        setModal("modal-inactive")
        navigate('/taller') 
      }, 500);
  }

  function revisionHandle(n) {
    fetch(`http://127.0.0.1:8000/comercial/update/${n}/`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            nombre: nombre,
            apellidos: apellidos,
            rut: rut,
            email: email,
            telefono: telefono,
            tipo: tipo,
            marca: marca,
            modelo: modelo,
            serie: serie,
            observaciones: observaciones,
            espada: espada,
            cadena: cadena,
            funda: funda,
            disco: disco,
            mantencion: mantencion,
            revision: revision,
            mecanico: mecanico,
            ingreso_sistema: ingresoSistema,
            status: "Presupuesto terminado, notificar cliente",
            diagnostico: diagnostico,
            comenzada: true,
            detalle_ppto: detallePpto,
            hora_trabajo: clock,
            fecha_trabajo: date,
            revisado: true,
            terminada: true,
        })
      })
      setRender(!render)
      setTimeout(() => {
        setModal("modal-inactive")
        navigate('/taller') 
      }, 500);
  }

  if (revisiones !== 0) {
    return (
      <div className='frame'>
        <h1 className='title-component'>Ordenes de trabajo en espera de revision: </h1>
        <div >
        {revLista.map((x, index) => {
          return(
            <div className="list-section" key={index}>
                <p className='number-list'>Orden Nº {x.id}</p>
                <button className='button-list' onClick={() => 
                  {setModal("modal")
                  setId(x.id)
                  setNombre(x.nombre)
                  setApellidos(x.apellidos)
                  setRut(x.rut)
                  setTelefono(x.telefono)
                  setEmail(x.email)
                  setTipo(x.tipo)
                  setMarca(x.marca)
                  setModelo(x.modelo)
                  setSerie(x.serie)
                  setEspada(x.espada)
                  setCadena(x.cadena)
                  setFunda(x.funda)
                  setDisco(x.disco)
                  setObservaciones(x.observaciones)
                  setMantencion(x.mantencion)
                  setRevision(x.revision)
                  setMecanico(x.mecanico)
                  setIngresoSistema(x.ingreso_sistema)
                }
                  }>Comenzar</button>         
            </div> 
            )
        })}
        </div>
        <NavLink to="/taller">Menú</NavLink>
        <div className={modal}>
          <div className='modal-content'>
            <div className='modal-details-taller'>
                <p className='sub-title'>Orden Nº:<span className='data-modal-taller'>{id}</span></p>
                <p className='sub-title'>Nombre:<span className='data-modal-taller'>{nombre} {apellidos} </span></p>
            </div>
            <div className='modal-machine-details-taller'>
               <div className='machine-detail-1'> 
                <p className='sub-detail'>Tipo:<span className='data-modal-taller'>{tipo}</span></p>
                <p className='sub-detail'>Modelo:<span className='data-modal-taller'>{modelo}</span></p>
                <p className='sub-detail'>Marca:<span className='data-modal-taller'>{marca}</span></p>
                <p className='sub-detail'>Serie:<span className='data-modal-taller'>{serie}</span></p>
              </div>
              <div className='machine-detail-2'>
                <p className='sub-detail'>Mecanico: <span className='data-modal-taller'>{mecanico}</span></p>
                {mantencion? <p className='sub-detail'>Equipo a <span className='data-modal-taller'>Mantención</span></p>: null}
                {revision? <p className='sub-detail'>Equipo a <span className='data-modal-taller'>Revisión</span></p>: null}
                {espada? <p className='sub-detail'>Espada:<span className='data-modal-taller'>Sí</span></p>: null}
                {cadena? <p className='sub-detail'>Cadena:<span className='data-modal-taller'>Sí</span></p>: null}
                {funda? <p className='sub-detail'>Funda:<span className='data-modal-taller'>Sí</span></p>: null}
                {disco? <p className='sub-detail'>Disco de corte:<span className='data-modal-taller'>Sí</span></p>: null}
              </div>
            </div>
            <div className='observaciones-taller'>
              <p className='observaciones-taller-content'>Observaciones: <span className='data-modal-taller'>{observaciones}</span></p>
            </div>
            <div className='detalle-observaciones'>
              Indicar diagnóstico:
              <textarea className='diagnostico-field' onChange={(e) => setDiagnostico(e.target.value)} value={diagnostico}/>
            </div>
            <div className='detalle-observaciones'>
              Indicar detalle de respuestos y mano de obra:
              <textarea className='detalle-field' onChange={(e) => setDetallePpto(e.target.value)} value={detallePpto}/>
            </div>
            <div className='modal-buttons'>
                <button className='button-list' onClick={()=> setModal("modal-inactive")}>Volver</button>
                <button className='button-list' onClick={() => {
                enProcesoHandle(id)
                setModal("modal-inactive") 
                }}>Guardar y continuar después</button>
                <button className='button-list' onClick={() => {
                revisionHandle(id)
                setModal("modal-inactive") 
                }} >Enviar PPTO</button>
            </div>
          </div>
        </div>  
      </div>
    )
  } else {
    return (
      <div className='frame'>
        <h1 className='title-component'>Ordenes de trabajo en espera de Revisión:</h1>
        <div>
          <p className='not-exist'>No hay ordenes pendientes</p>
        </div>
        <NavLink to="/taller">Menú</NavLink>
      </div>
    )
  }
}

export default Revision