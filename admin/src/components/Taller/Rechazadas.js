import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../static/modalIngreso.css"

function Rechazadas({clock, date, rechazadas, render, setRender, rechLista}) {
  
  const [modal, setModal] = useState("modal-inactive")
  const [id, setId] = useState()
  const [nombre, setNombre] = useState()
  const [apellidos, setApellidos] = useState()
  const [telefono, setTelefono] = useState()
  const [email, setEmail] = useState()
  const [rut, setRut] = useState()
  const [tipo, setTipo] = useState()
  const [marca, setMarca] = useState()
  const [modelo, setModelo] = useState()
  const [serie, setSerie] = useState()
  const [observaciones, setObservaciones] = useState()
  const [espada, setEspada] = useState()
  const [cadena, setCadena] = useState()
  const [funda, setFunda] = useState()
  const [disco, setDisco] = useState()
  const [mantencion, setMantencion] = useState()
  const [revision, setRevision] = useState()
  const [mecanico, setMecanico] = useState()
  const [ingresoSistema, setIngresoSistema] = useState()
  const [presupuesto, setPresupuesto] = useState("")
  const [fechaRevision, setFechaRevision] = useState()
  const [horaRevision, setHoraRevision] = useState()
  const [diagnostico, setDiagnostico] = useState("")
  const [prioritaria, setPrioritaria] = useState()
  const [valorizacion, setValorizacion] = useState()
  const  navigate  = useNavigate();
  
  useEffect(() => {
    setTimeout(() => {
      setRender(!render)
    }, 500); 
  },[modal])

  function ArmadaHandle(n){
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
            diagnostico: diagnostico,
            comenzada: true,
            detalle_ppto: presupuesto,
            fecha_trabajo: fechaRevision,
            hora_trabajo: horaRevision,
            revisado: true,
            status: "Equipo Armado (sin reparar), listo para retiro",
            terminada: true,
            valorizacion: valorizacion,
            rechazado: true,
            prioritaria: prioritaria,
            cliente_notificado_ppto: true,
            armada: true,
            fecha_reparacion: date
        })
      })
      setRender(!render)
      setTimeout(() => {
        setModal("modal-inactive")
        navigate('/taller') 
      }, 500);
  }
  
  function GuardarHandle(n){
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
            diagnostico: diagnostico,
            comenzada: true,
            detalle_ppto: presupuesto,
            fecha_trabajo: date,
            hora_trabajo: clock,
            revisado: true,
            status: "Equipo en proceso armado (presupuesto rechazado).",
            terminada: true,
            valorizacion: valorizacion,
            rechazado: true,
            prioritaria: prioritaria,
            cliente_notificado_ppto: true,
        })
      })
      setRender(!render)
      setTimeout(() => {
        setModal("modal-inactive")
        navigate('/taller') 
      }, 500);
  }

  if (rechazadas !== 0) {
    return (
        <div className='frame'>
        <h1 className='title-component'>Ordenes de trabajo con presupuesto Rechazado:</h1>
        <div>
        {rechLista.map((x, index) => {
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
                  setDiagnostico(x.diagnostico)
                  setPresupuesto(x.detalle_ppto)
                  setFechaRevision(x.fecha_trabajo)
                  setHoraRevision(x.hora_trabajo)
                  setPrioritaria(x.prioritaria)
                  setValorizacion(x.valorizacion)
                  setIngresoSistema(x.ingreso_sistema) 
                }
                  }>Armar</button>         
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
                <p className='sub-detail'>Fecha de revision: <span className='data-modal-taller'>{fechaRevision}</span></p>
              </div>
            </div>
            <div className='detalle-observaciones'>
              Diagnóstico:
              <textarea className='diagnostico-field' value={diagnostico}/>
            </div>
            <div className='detalle-observaciones'>
              Detalle de reparación:
              <textarea className='detalle-field' value={presupuesto}/>
            </div>
            <div className='modal-buttons-notificaciones'>
              <div>
                <button className='button-list-rechazada' onClick={() => {
                  ArmadaHandle(id)
                  }}>Armada</button>
              </div>
              <div>
                <button className='button-list-guardar' onClick={() => {
                   GuardarHandle(id)
                  }}>Guardar y continuar después</button>
                <button className='button-list-volver' onClick={() => setModal("modal-inactive")}>Volver</button>
              </div>
            </div>
          </div>
        </div>  
      </div>
    )
  } else {
    return (
      <div className='frame'>
        <h1 className='title-component'>Ordenes de trabajo con presupuesto Rechazado:</h1>
        <div>
          <p className='not-exist'>No hay ordenes pendientes</p>
        </div>
        <NavLink to="/taller">Menú</NavLink>
      </div>
    )
  }
}

export default Rechazadas