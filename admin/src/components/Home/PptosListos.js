import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


function PptosListos({render, setRender, pptoslistos, pptoslistosLista}) {
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
  const [observaciones, setObservaciones] = useState()
  const [espada, setEspada] = useState()
  const [cadena, setCadena] = useState()
  const [funda, setFunda] = useState()
  const [disco, setDisco] = useState()
  const [mantencion, setMantencion] = useState()
  const [revision, setRevision] = useState()
  const [mecanico, setMecanico] = useState()
  const [fechaRevision, setFechaRevision] = useState()
  const [horaRevision, setHoraRevision] = useState()
  const [diagnostico, setDiagnostico] = useState("")
  const [presupuesto, setPresupuesto] = useState("")
  const [ingresoSistema, setIngresoSistema] = useState()
  const [valorizacion, setValorizacion] = useState("$")
  const [prioritaria, setPrioritaria] = useState()
  const [esperaRepuesto, setEsperaRepuesto] = useState(false)
  const [repuestoField, setRepuestoField] = useState()
  const [isGarantia, setIsGarantia] = useState() 
  const [detallePptoGar, setDetallePptoGar] = useState()
  const [diagnosticoGar, setDiagnosticoGar] = useState()
  const [aplGarantia, setAplGarantia] = useState()

  const navigate  = useNavigate();

  useEffect(() => {
    setRender(!render)
},[pptoslistos, modal])

async function AprobadaHandle(n) {
  if (!valorizacion || !valorizacion.trim() || valorizacion.trim() === "$" || valorizacion.trim() === "$.") {
    setMsg("msg-mecanic-act");
  } else {
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
          ingreso_sistema: ingresoSistema,
          diagnostico: diagnostico,
          comenzada: true,
          detalle_ppto: presupuesto,
          revisado: true,
          status: "Presupuesto aprobado, en espera de reparación y ensamblaje",
          terminada: true,
          valorizacion: valorizacion,
          aprobada: true,
          prioritaria: prioritaria,
          cliente_notificado_ppto: true,
          espera_repuesto: esperaRepuesto
        })
      });

      if (response.ok) {
        setRender(!render);
        setTimeout(() => {
          setModal("modal-inactive");
          setPresupuesto("")
          setDiagnostico("")
          setValorizacion("$") 
          navigate('/pptos-listos');
        }, 500);
      }
    } catch (error) {
      // Handle the error here
      console.log(error);
    }
  }
}

async function AprobadaEsperaRepuestoHandle(n) {
  if (!repuestoField || !repuestoField.trim() || !valorizacion || !valorizacion.trim() || valorizacion.trim() === "$" || valorizacion.trim() === "$.") {
    setMsg("msg-mecanic-act");
  } else {
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
          ingreso_sistema: ingresoSistema,
          diagnostico: diagnostico,
          comenzada: true,
          detalle_ppto: presupuesto,
          revisado: true,
          status: "Presupuesto aprobado, en espera de repuesto",
          terminada: true,
          valorizacion: valorizacion,
          aprobada: true,
          prioritaria: prioritaria,
          cliente_notificado_ppto: true,
          espera_repuesto: esperaRepuesto,
          repuesto_faltante: repuestoField,
        })
      });

      if (response.ok) {
        setRender(!render);
        setTimeout(() => {
          setModal("modal-inactive");
          setPresupuesto("")
          setDiagnostico("")
          setValorizacion("$") 
          navigate('/pptos-listos');
        }, 500);
      }
    } catch (error) {
      // Handle the error here
      console.log(error);
    }
  }
}

async function RechazadaHandle(n) {
  if (!valorizacion || !valorizacion.trim() || valorizacion.trim() === "$" || valorizacion.trim() === "$.") {
    setMsg("msg-mecanic-act");
  } else {
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
          ingreso_sistema: ingresoSistema,
          diagnostico: diagnostico,
          comenzada: true,
          detalle_ppto: presupuesto,
          revisado: true,
          status: "Presupuesto rechazado, en espera de ensamblaje de equipo",
          terminada: true,
          valorizacion: valorizacion,
          rechazada: true,
          prioritaria: prioritaria,
          cliente_notificado_ppto: true,
        })
      });

      if (response.ok) {
        setRender(!render);
        setTimeout(() => {
          setModal("modal-inactive");
          setPresupuesto("")
          setDiagnostico("")
          setValorizacion("$") 
          navigate('/pptos-listos');
        }, 500);
      }
    } catch (error) {
      // Handle the error here
      console.log(error);
    }
  }
}

async function GuardarHandle(n) {
  if (!valorizacion || !valorizacion.trim() || valorizacion.trim() === "$" || valorizacion.trim() === "$.") {
    setMsg("msg-mecanic-act");
  } else if (esperaRepuesto === true && (!repuestoField || !repuestoField.trim() || !valorizacion || !valorizacion.trim() || valorizacion.trim() === "$" || valorizacion.trim() === "$.")) {
    setMsg("msg-mecanic-act")
  } else {
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
          ingreso_sistema: ingresoSistema,
          diagnostico: diagnostico,
          comenzada: true,
          detalle_ppto: presupuesto,
          revisado: true,
          status: "Presupuesto terminado, notificar cliente",
          terminada: true,
          valorizacion: valorizacion,
          prioritaria: prioritaria,
        })
      });

      if (response.ok) {
        setRender(!render);
        setTimeout(() => {
          setModal("modal-inactive");
          setPresupuesto("")
          setDiagnostico("")
          setValorizacion("$") 
          navigate('/pptos-listos');
        }, 500);
      }
    } catch (error) {
      // Handle the error here
      console.log(error);
    }
  }
}

async function NoRespondeHandle(n) {
  if (!valorizacion || !valorizacion.trim() || valorizacion.trim() === "$" || valorizacion.trim() === "$.") {
    setMsg("msg-mecanic-act");
  } else if (esperaRepuesto === true && (!repuestoField || !repuestoField.trim() || !valorizacion || !valorizacion.trim() || valorizacion.trim() === "$" || valorizacion.trim() === "$.")) {
    setMsg("msg-mecanic-act")
  } else {
    try {
      const [updateResponse, emailResponse] = await Promise.all([
        fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/update/${n}/`, {
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
            ingreso_sistema: ingresoSistema,
            diagnostico: diagnostico,
            comenzada: true,
            detalle_ppto: presupuesto,
            revisado: true,
            status: "Presupuesto terminado, cliente no contesta, email enviado",
            terminada: true,
            valorizacion: valorizacion,
            prioritaria: prioritaria,
            cliente_noresponde: true,
          })
        }),
        fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/email/`, {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: id,
            name: nombre,
            lastname: apellidos,
            email: email,
            tipo: tipo,
            modelo: modelo,
            diagnostico: diagnostico,
            valorizacion: valorizacion,
          })
        })
      ]);

      if (updateResponse.ok && emailResponse.ok) {
        setRender(!render);
        setTimeout(() => {
          setModal("modal-inactive");
          setPresupuesto("")
          setDiagnostico("")
          setValorizacion("$") 
          navigate('/pptos-listos');
        }, 500);
      }
    } catch (error) {
      // Handle the error here
      console.log(error);
    }
  }
}

  if (pptoslistos !== 0) {
    return (
      <div className='frame'>
      <h1 className='title-component'>Presupuesto listos por notificar y valorizar/ingresar a PC: </h1>
      <div className='render-section'>
      {pptoslistosLista.map((x, index) => {
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
                setIsGarantia(x.garantia)
                setDetallePptoGar(x.detalle_garantia)
                setDiagnosticoGar(x.diagnostico_garantia)
                setAplGarantia(x.validez_garantia)
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
                {aplGarantia === "no"? <p className='sub-detail'>GARANTIA NO VALIDA</p>: null}
                {mantencion? <p className='sub-detail'>Equipo a mantencion</p>: null}
                {revision? <p className='sub-detail'>Equipo a <span className='data-modal-taller'>Revisión</span></p>: null}
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
                  {(aplGarantia === "no")?
                  <div>
                    <input type="text" id="valorizacion" onChange={(e) => setValorizacion(e.target.value)}/>
                    <label for="valorizacion">Valorización de presupuesto</label>
                </div>:
                  <div>
                    <input type="text" id="valorizacion" onChange={(e) => setValorizacion(e.target.value)} value={"Garantía"}/>
                    <label for="valorizacion">Valorización de presupuesto</label>
                </div>
                  }
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
            <div className='opcion-presupuesto'>
                <input type="checkbox" id="espera_repuesto" onChange={(e) => setEsperaRepuesto(!esperaRepuesto)} value={esperaRepuesto}/>
                <label for="espera_repuesto">Repuesto faltante</label>
                {esperaRepuesto? <div className='detalle-observaciones'>
                  Indicar repuestos faltantes + código:
                <textarea className='diagnostico-field' onChange={(e) => setRepuestoField(e.target.value)} value={repuestoField}/>
              </div>: null} 
              <div className={msg}>{esperaRepuesto?"Indicar valorización más repuestos faltantes":"Indicar valorización del presupuesto"}</div>
            </div>
            {esperaRepuesto?
            <div className='modal-buttons-notificaciones'>
            <div>
              <button className='button-list-aprobada' onClick={() => {
                AprobadaEsperaRepuestoHandle(id) 
                }}>Aprobada</button>
              <button className='button-list-rechazada' onClick={() => {
                RechazadaHandle(id) 
                }}>Rechazada</button>
            </div>
            <div>
              <button className='button-list-guardar' onClick={() => {
                GuardarHandle(id) 
                }}>Guardar, notificar después</button>
              <button className='button-list-noResponde' onClick={() => {
                NoRespondeHandle(id) 
                }}>No responde</button>
              <button className='button-list-volver' onClick={()=> {
                 setModal("modal-inactive")
                 setPresupuesto("")
                 setDiagnostico("")
                 setValorizacion("$")
                 setMsg("msg-mecanic")
                }}>Volver</button>
            </div>
          </div>: 
          <div className='modal-buttons-notificaciones'>
          <div>
            <button className='button-list-aprobada' onClick={() => {
              AprobadaHandle(id) 
              }}>Aprobada</button>
            <button className='button-list-rechazada' onClick={() => {
              RechazadaHandle(id) 
              }}>Rechazada</button>
          </div>
          <div>
            <button className='button-list-guardar' onClick={() => {
              GuardarHandle(id) 
              }}>Guardar, notificar después</button>
            <button className='button-list-noResponde' onClick={() => {
              NoRespondeHandle(id) 
              }}>No responde</button>
            <button className='button-list-volver' onClick={()=> {
               setModal("modal-inactive")
               setPresupuesto("")
               setDiagnostico("")
               setValorizacion("$") 
               setMsg("msg-mecanic")
              }}>Volver</button>
          </div>
        </div>}
          </div>
        </div>   
    </div>
    )
  } else {
    return (
      <div className='frame'>
        <h1 className='title-component'>Presupuesto listos por notificar y valorizar/ingresar a PC:</h1>
        <div className='render-section'>
          <p className='not-exist'>No hay notificaciones pendientes</p>
        </div>
        <NavLink to="/notificaciones">Volver</NavLink>
      </div>
    )
  }
}

export default PptosListos