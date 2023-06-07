import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../static/modalTaller.css"

function SolicitudRepuestos({render, setRender, solicitudRepuestos, solicitudRepuestosLista}) {
  const [msg, setMsg] = useState("msg-mecanic") 
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
  const [ingresoSistema, setIngresoSistema] = useState()
  const [observaciones, setObservaciones] = useState()
  const [espada, setEspada] = useState()
  const [cadena, setCadena] = useState()
  const [funda, setFunda] = useState()
  const [disco, setDisco] = useState()
  const [mantencion, setMantencion] = useState()
  const [revision, setRevision] = useState()
  const [mecanico, setMecanico] = useState()
  const [diagnostico, setDiagnostico] = useState()
  const [detallePpto, setDetallePpto] = useState()
  const [esperaRepuesto, setEsperaRepuesto] = useState(false)
  const [repuestoField, setRepuestoField] = useState()
  const [fechaRevision, setFechaRevision] = useState()
  const [horaRevision, setHoraRevision] = useState()
  const [detallePptoGar, setDetallePptoGar] = useState()
  const [isGarantia, setIsGarantia] = useState() 

  const  navigate  = useNavigate();
  
  useEffect(() => {
    setRender(!render)
},[solicitudRepuestos, modal])

async function EnesperaRepuesto(n) {
  if(!repuestoField || !repuestoField.trim()) {
    setMsg("msg-mecanic-act")
  } else {
    try {
      const response = await fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/update/${n}/`, {
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
            status: "Equipo en proceso de Mantencion/Garantia en Espera de Repuesto",
            diagnostico: diagnostico,
            comenzada: true,
            detalle_ppto: detallePpto,
            espera_repuesto: esperaRepuesto,
            repuesto_faltante: repuestoField 
        })
      });
      if (response.ok) {
        setRender(!render);
        setTimeout(() => {
          setModal("modal-inactive");
          navigate('/mmto-solicitud-rep');
        }, 500);
      } else {
        // Handle error case
        console.error("Error updating data");
      }
    } catch (error) {
      // Handle network error
      console.error("Network error:", error);
    }
  }
}

async function respuestosEnviadosHandle(n) {
  try {
    const response = await fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/update/${n}/`, {
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
          status: "Equipo en proceso de Mantencion/Garantia",
          terminada: true,
          solicitud_repuestos: true,
          repuestos_entregados: true,
      })
    });
    if (response.ok) {
      setRender(!render);
      setTimeout(() => {
        setModal("modal-inactive");
        navigate('/mmto-solicitud-rep');
      }, 500);
    } else {
      // Handle error case
      console.error("Error updating data");
    }
  } catch (error) {
    // Handle network error
    console.error("Network error:", error);
  }
}

  if (solicitudRepuestos != 0) {
    return (
      <div className='frame'>
        <h1 className='title-component'>Solicitudes de repuestos para mantenciones: </h1>
        <div className='render-section'>
        {solicitudRepuestosLista.map((x, index) => {
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
                  setIngresoSistema(x.ingreso_sistema)
                  setObservaciones(x.observaciones)
                  setMantencion(x.mantencion)
                  setRevision(x.revision)
                  setMecanico(x.mecanico)
                  setDiagnostico(x.diagnostico)
                  setDetallePpto(x.detalle_ppto)
                  setFechaRevision(x.fecha_trabajo)
                  setHoraRevision(x.hora_trabajo)
                  setDetallePptoGar(x.detalle_garantia)
                  setIsGarantia(x.garantia)
                }
                  }>Comenzar</button>         
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
                {isGarantia? <p className='sub-detail'>Trabajo de GARANTIA</p>: null}
                {mantencion? <p className='sub-detail'>Equipo a mantencion</p>: null}
                {revision? <p className='sub-detail'>Equipo a Revisión</p>: null}
                {espada? <p className='sub-detail'>Espada:<span className='data-modal-taller'>Sí</span></p>: null}
                {cadena? <p className='sub-detail'>Cadena:<span className='data-modal-taller'>Sí</span></p>: null}
                {funda? <p className='sub-detail'>Funda:<span className='data-modal-taller'>Sí</span></p>: null}
                {disco? <p className='sub-detail'>Disco de corte:<span className='data-modal-taller'>Sí</span></p>: null}
              </div>
            </div>
            {isGarantia?
            <>
              <div className='observaciones-taller'>
                <p className='observaciones-taller-content'>Observaciones: <span className='data-modal-taller'>GARANTIA</span></p>
              </div>
                <div className='detalle-observaciones'>
                  Repuestos solicitados:
                  <textarea className='detalle-field' onChange={(e) => setDetallePpto(e.target.value)} value={detallePptoGar}/>
              </div>
            </>:
            <>
              <div className='observaciones-taller'>
                <p className='observaciones-taller-content'>Observaciones: <span className='data-modal-taller'>{observaciones}</span></p>
              </div>
              <div className='detalle-observaciones'>
                Repuestos solicitados:
                <textarea className='detalle-field' onChange={(e) => setDetallePpto(e.target.value)} value={detallePpto}/>
              </div>
            </>    
            }
            <div className='opcion-presupuesto'>
                <input type="checkbox" id="espera_repuesto" onChange={(e) => setEsperaRepuesto(!esperaRepuesto)} value={esperaRepuesto}/>
                <label for="espera_repuesto">Repuesto faltante</label>
                {esperaRepuesto? <div className='detalle-observaciones'>
                  Indicar repuestos faltantes + código:
                <textarea className='diagnostico-field' onChange={(e) => setRepuestoField(e.target.value)} value={repuestoField}/>
              </div>: null}
              <div className={msg}>Indicar repuestos faltantes</div> 
            </div>
            {esperaRepuesto? 
            <div className='modal-buttons'>
                <button className='button-list' onClick={()=> {
                  setModal("modal-inactive")
                  setMsg("msg-mecanic")
                  }}>Volver</button>
                <button className='button-list' onClick={() => {
                EnesperaRepuesto(id)
                }}>Espera Repuesto</button>
            </div>: 
            <div className='modal-buttons'>
                <button className='button-list' onClick={()=> setModal("modal-inactive")}>Volver</button>
                <button className='button-list' onClick={() => {
                respuestosEnviadosHandle(id)
                }}>Enviar repuestos</button>
            </div>}
          </div>
        </div>  
      </div>
    )
  } else {
    return (
      <div className='frame'>
        <h1 className='title-component'>Solicitures de repuestos para mantenciones:</h1>
        <div className='render-section'>
          <p className='not-exist'>No hay ordenes pendientes</p>
        </div>
        <NavLink to="/notificaciones">Volver</NavLink>
      </div>
    )
}
}

export default SolicitudRepuestos