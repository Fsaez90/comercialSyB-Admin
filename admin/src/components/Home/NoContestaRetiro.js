import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../static/modalNotificaciones.css"

function NoContestaRetiro({render, setRender, date, noContestaretiro, noContestaRetiroLista}) {
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
  const [ingresosSistema, setIngresoSistema] = useState()
  const [fechaRevision, setFechaRevision] = useState()
  const [horaRevision, setHoraRevision] = useState()
  const [diagnostico, setDiagnostico] = useState("")
  const [presupuesto, setPresupuesto] = useState("")
  const [valorizacion, setValorizacion] = useState("$")
  const [prioritaria, setPrioritaria] = useState()
  const [detallePptoGar, setDetallePptoGar] = useState()
  const [diagnosticoGar, setDiagnosticoGar] = useState()
  const [isGarantia, setIsGarantia] = useState()
  const navigate  = useNavigate();

  useEffect(() => {
    setRender(!render)
},[noContestaretiro, modal])

async function NotificadoHandle(n) {
  try {
    const response = await fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/update/${n}/`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
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
        ingreso_sistema: ingresosSistema,
        diagnostico: diagnostico,
        comenzada: true,
        detalle_ppto: presupuesto,
        revisado: true,
        status: "Equipo listo para retiro (Cliente notificado).",
        terminada: true,
        valorizacion: valorizacion,
        aprobada: true,
        prioritaria: prioritaria,
        cliente_notificado_ppto: true,
        reparada: true,
        cliente_noresponde: false,
        cliente_notificado_retiro: true
      })
    });

    if (response.ok) {
      setRender(!render);
      setTimeout(() => {
        setModal("modal-inactive");
        navigate('/no-contesta-retiro');
      }, 500);
    }
  } catch (error) {
    // Handle the error here
    console.log(error);
  }
}

async function NoRespondeHandle(n) {
  try {
    const response = await fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/update/${n}/`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
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
        ingreso_sistema: ingresosSistema,
        diagnostico: diagnostico,
        comenzada: true,
        detalle_ppto: presupuesto,
        revisado: true,
        status: "Cliente no contesta",
        terminada: true,
        valorizacion: valorizacion,
        prioritaria: prioritaria,
        cliente_noresponde: true,
        ultimo_llamado: date,
      })
    });

    if (response.ok) {
      setRender(!render);
      setTimeout(() => {
        setModal("modal-inactive");
        navigate('/no-contesta-retiro');
      }, 500);
    }
  } catch (error) {
    // Handle the error here
    console.log(error);
  }
}

  if (noContestaretiro !== 0) {
    return (
      <div className='frame'>
      <h1 className='title-component'>Clientes inubicados con equipo listo para retiro:</h1>
      <div className='render-section'>
      {noContestaRetiroLista.map((x, index) => {
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
                setValorizacion(x.valorizacion)
                setDiagnostico(x.diagnostico)
                setPresupuesto(x.detalle_ppto)
                setFechaRevision(x.fecha_trabajo)
                setHoraRevision(x.hora_trabajo)
                setPrioritaria(x.prioritaria)
                setIngresoSistema(x.ingreso_sistema)
                setDetallePptoGar(x.detalle_garantia)
                setDiagnosticoGar(x.diagnostico_garantia)
                setIsGarantia(x.garantia)
              }
                }>Notificar</button>         
          </div> 
          )
      })}
      </div>
      <NavLink to="/notificaciones">Volver</NavLink>
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
                {isGarantia? <p className='sub-detail'><span className='data-modal-taller'>GARANTIA</span></p>: null}
                {mantencion? <p className='sub-detail'><span className='data-modal-taller'>Mantención</span></p>: null}
                {revision? <p className='sub-detail'><span className='data-modal-taller'>Revisión</span></p>: null}
                <p className='sub-detail'>Fecha de revision: <span className='data-modal-taller'>{fechaRevision}</span></p>
              </div>
            </div>
            {isGarantia?
              <>
                <div className='detalle-observaciones'>
                  Diagnóstico:
                  <textarea className='diagnostico-field' value={diagnosticoGar || diagnostico}/>
                </div>
                <div className='detalle-observaciones'>
                  Detalle de reparación:
                  <textarea className='detalle-field' value={detallePptoGar || presupuesto}/>
                  <div>
                    <input type="text" id="valorizacion" onChange={(e) => setValorizacion(e.target.value)} value={"Garantía"}/>
                    <label for="valorizacion">Valorización de presupuesto</label>
                  </div>
                </div>
              </>:
              <>
                <div className='detalle-observaciones'>
                  Diagnóstico:
                  <textarea className='diagnostico-field' value={diagnostico}/>
                </div>
                <div className='detalle-observaciones'>
                  Detalle de reparación:
                  <textarea className='detalle-field' value={presupuesto}/>
                  <div>
                    <input type="text" id="valorizacion" onChange={(e) => setValorizacion(e.target.value)} value={valorizacion}/>
                    <label for="valorizacion">Valorización de presupuesto</label>
                  </div>
                </div>
              </>
              }
            <div className='modal-buttons-notificaciones'>
              <div>
                <button className='button-list-aprobada' onClick={() => {
                  NotificadoHandle(id) 
                  }}>Notificado</button>
              </div>
              <div>
                <button className='button-list-noResponde' onClick={() => {
                  NoRespondeHandle(id) 
                  }}>No responde</button>
                <button className='button-list-volver' onClick={()=> {
                   setModal("modal-inactive")
                  }}>Volver</button>
              </div>
            </div>
          </div>
        </div>   
    </div>
    )
  } else {
    return (
      <div className='frame'>
        <h1 className='title-component'>Clientes inubicados con equipo listo para retiro:</h1>
        <div className='render-section'>
          <p className='not-exist'>No hay notificaciones pendientes</p>
        </div>
        <NavLink to="/notificaciones">Volver</NavLink>
      </div>
    )
  }
}

export default NoContestaRetiro