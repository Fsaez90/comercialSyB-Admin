import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../static/modalTaller.css"

function Prioridad({clock, date, prioridad, render, setRender, prioLista}) {
  const [aPresupuesto, setApresupuesto] = useState(false)
  const [modalRev, setModalRev] = useState("modal-inactive-revision")
  const [modalMan, setModalMan] = useState("modal-inactive-mantencion")
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
  const [ingresoSistema, setIngresoSistema] = useState()
  const [funda, setFunda] = useState()
  const [disco, setDisco] = useState()
  const [mantencion, setMantencion] = useState()
  const [revision, setRevision] = useState()
  const [mecanico, setMecanico] = useState()
  const [diagnostico, setDiagnostico] = useState()
  const [detallePpto, setDetallePpto] = useState()
  const  navigate  = useNavigate();
  
  useEffect(() => {
    setTimeout(() => {
      setRender(!render)
    }, 500); 
},[modalRev, modalMan])

function enProcesoHandleMan(n) {
  fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/update/${n}/`, {
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
        status: "Equipo en proceso de Mantencion",
        diagnostico: diagnostico,
        comenzada: true,
        detalle_ppto: detallePpto,
        hora_trabajo: clock,
        fecha_trabajo: date,
        falla_encontrada: aPresupuesto,
        diagnostico: diagnostico,
        detalle_ppto: detallePpto 
    })
  })
  setRender(!render)
  setTimeout(() => {
    setModalMan("modal-inactive-mantencion")
    navigate('/taller') 
  }, 500);
}

function mantenimientopptoHandle(n) {
  fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/update/${n}/`, {
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
        detalle_ppto: detallePpto,
        hora_trabajo: clock,
        fecha_trabajo: date,
        falla_encontrada: aPresupuesto,
        status: "Falla encontrada, notificar PPTO a cliente",
        terminada: true
    })
  })
  setRender(!render)
  setTimeout(() => {
    setModalMan("modal-inactive-mantencion")
    navigate('/taller') 
  }, 500);
}

function mantenimientoHandle(n) {
  fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/update/${n}/`, {
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
        detalle_ppto: detallePpto,
        hora_trabajo: clock,
        fecha_trabajo: date,
        falla_encontrada: aPresupuesto,
        status: "Equipo en proceso de Mantención",
        terminada: true,
        solicitud_repuestos: true
    })
  })
  setRender(!render)
  setTimeout(() => {
    setModalMan("modal-inactive-mantencion")
    navigate('/taller') 
  }, 500);
}

function enProcesoHandleRev(n) {
  fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/update/${n}/`, {
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
          hora_trabajo: clock,
          fecha_trabajo: date
      })
    })
    setRender(!render)
    setTimeout(() => {
      setModalRev("modal-inactive-revision")
      navigate('/taller') 
    }, 500);
}

function revisionHandle(n) {
  fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/update/${n}/`, {
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
      setModalRev("modal-inactive-revision")
      navigate('/taller') 
    }, 500);
}

if (prioridad !== 0) {  
    return (
      <div className='frame'>
          <h1 className='title-component'>Ordenes de trabajo con prioridad:</h1>
          <div className='render-section'>
          {prioLista.map((x, index) => {
            return(
              <div className="list-section" key={index}>
                  <p className='number-list'>Orden Nº {x.id}</p>
                  {x.revision? <button className='button-list' onClick={() => 
                    {setModalRev("modal")
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
                    }>Comenzar</button>: <button className='button-list' onClick={() => 
                      {setModalMan("modal")
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
                    }
                      }>Comenzar</button> }
              </div>  
              )
          })}
          </div>
          <NavLink to="/taller">Menú</NavLink>
          <div className={modalRev}>
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
                {mantencion? <p className='sub-detail'>Equipo a mantencion</p>: null}
                {revision? <p className='sub-detail'>Equipo a Revisión</p>: null}
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
                <button className='button-list' onClick={()=> setModalRev("modal-inactive-revision")}>Volver</button>
                <button className='button-list' onClick={() => {
                enProcesoHandleRev(id)
                setModalRev("modal-inactive-revision") 
                }}>Guardar y continuar después</button>
                <button className='button-list' onClick={() => {
                revisionHandle(id)
                setModalRev("modal-inactive-revision") 
                }} >Enviar PPTO</button>
            </div>
            </div>
          </div>
          <div className={modalMan}>
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
                <p>Mecanico: <span className='data-modal-taller'>{mecanico}</span></p>
                {mantencion? <p className='sub-detail'>Equipo a mantencion</p>: null}
                {revision? <p className='sub-detail'>Equipo a Revisión</p>: null}
                {espada? <p className='sub-detail'>Espada:<span className='data-modal-taller'>Sí</span></p>: null}
                {cadena? <p className='sub-detail'>Cadena:<span className='data-modal-taller'>Sí</span></p>: null}
                {funda? <p className='sub-detail'>Funda:<span className='data-modal-taller'>Sí</span></p>: null}
                {disco? <p className='sub-detail'>Disco de corte:<span className='data-modal-taller'>Sí</span></p>: null}
              </div>
            </div>
            <div className='observaciones-taller'>
              <p className='observaciones-taller-content'>Observaciones: <span className='data-modal-taller'>{observaciones}</span></p>
            </div>
            <div className='opcion-presupuesto'>
              <input type="checkbox" id="a-presupuesto" onChange={(e) => setApresupuesto(!aPresupuesto)} value={aPresupuesto}/>
              <label for="a-presupuesto">Falla encontrada (realizar presupuesto)</label>
              {aPresupuesto? <div className='detalle-observaciones'>
                Indicar diagnóstico:
                <textarea className='diagnostico-field' onChange={(e) => setDiagnostico(e.target.value)} value={diagnostico}/>
              </div>: null} 
            </div>
            <div className='detalle-observaciones'>
              Indicar detalle de respuestos y mano de obra:
              <textarea className='detalle-field' onChange={(e) => setDetallePpto(e.target.value)} value={detallePpto}/>
            </div>
            {aPresupuesto? 
            <div className='modal-buttons'>
                <button className='button-list' onClick={()=> setModalMan("modal-inactive-mantencion")}>Volver</button>
                <button className='button-list' onClick={() => {
                enProcesoHandleMan(id)
                setModalMan("modal-inactive-mantencion") 
                }}>Guardar y continuar después</button>
                <button className='button-list' onClick={() => {
                mantenimientopptoHandle(id)
                setModalMan("modal-inactive-mantencion") 
                }}>Enviar Presupuesto</button>
            </div>: 
            <div className='modal-buttons'>
                <button className='button-list' onClick={()=> setModalMan("modal-inactive-mantencion")}>Volver</button>
                <button className='button-list' onClick={() => {
                enProcesoHandleMan(id)
                setModalMan("modal-inactive-mantencion") 
                }}>Guardar y continuar después</button>
                <button className='button-list' onClick={() => {
                mantenimientoHandle(id)
                setModalMan("modal-inactive-mantencion") 
                }}>Solicitar Repuestos</button>
            </div>}
          </div>
          </div>  
        </div>
      )
  } else {
      return (
        <div className='frame'>
          <h1 className='title-component'>Ordenes de trabajo con prioridad:</h1>
          <div className='render-section'>
            <p className='not-exist'>No hay ordenes pendientes</p>
          </div>
          <NavLink to="/taller">Menú</NavLink>
        </div>
      )
}
}

export default Prioridad