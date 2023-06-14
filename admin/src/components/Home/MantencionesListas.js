import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../static/modalNotificaciones.css"

function MantencionesListas({render, setRender, mmtoslistos, mmtoslistosLista}) {
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
  const [ingresoSistema, setIngresoSistema] = useState()
  const [fechaRevision, setFechaRevision] = useState()
  const [diagnostico, setDiagnostico] = useState("")
  const [presupuesto, setPresupuesto] = useState("")
  const [valorizacion, setValorizacion] = useState("$")
  const [aPresupuesto, setApresupuesto] = useState()
  const [prioritaria, setPrioritaria] = useState()
  const [esperaRepuesto, setEsperaRepuesto] = useState(false)
  const [repuestoField, setRepuestoField] = useState()
  const [status, setStatus] = useState()
  const [fechaReparacion, setFechaReparacion] = useState()
  const [isGarantia, setIsGarantia] = useState() 
  const [aplGarantia, setAplGarantia] = useState()
  const [detallePptoGar, setDetallePptoGar] = useState()
  const [diagnosticoGar, setDiagnosticoGar] = useState()
  const [categoria, setCategoria] = useState()


  const navigate  = useNavigate();
  
  useEffect(() => {
      setRender(!render)
  },[mmtoslistos, modal]) 

  async function NotificadoHandle(n){
    if(aplGarantia === "no" && (!valorizacion || !valorizacion.trim() || valorizacion.trim() === "$" || valorizacion.trim() === "$.")) {
      setMsg("msg-mecanic-act");
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
            diagnostico: diagnostico,
            comenzada: true,
            detalle_ppto: presupuesto,
            falla_encontrada: aPresupuesto,
            mmto_completado: true,
            status: "Cliente notificado para retiro de máquina",
            terminada: true,
            valorizacion: valorizacion,
            cliente_notificado_retiro: true,
            prioritaria: prioritaria,
            categoria: categoria
          })
        });
  
      if(response.ok) {
        setRender(!render);
        setTimeout(() => {
          setModal("modal-inactive");
          setRepuestoField("")
          setPresupuesto("")
          setDiagnostico("")
          setValorizacion("$")
          setMsg("msg-mecanic")
          navigate('/mantenciones-listas');
        }, 1500);
      }
      } catch (error) {
        console.log(error)
      }
    }
  }

  async function AprobadaHandle(n) {
    if (!valorizacion || !valorizacion.trim() || valorizacion.trim() === "$" || valorizacion.trim() === "$.") {
      setMsg("msg-mecanic-act");
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
            diagnostico: diagnostico,
            comenzada: true,
            detalle_ppto: presupuesto,
            falla_encontrada: aPresupuesto,
            // mmto_completado: true,
            status: "Presupuesto aprobado, en espera de reparación y ensamblaje",
            aprobada: true,
            terminada: true,
            valorizacion: valorizacion,
            cliente_notificado_ppto: true,
            prioritaria: prioritaria,
            categoria: categoria
          })
        });
      if (response.ok) {
        setRender(!render);
        setTimeout(() => {
          setModal("modal-inactive");
          setRepuestoField("")
          setPresupuesto("")
          setDiagnostico("")
          setValorizacion("$")
          setMsg("msg-mecanic")
          navigate('/mantenciones-listas');
        }, 1500);
      }
      } catch (error) {
        // Handle the error here
        console.log(error)
      }
    }    
  }
  
  async function AprobadaEsperaRepuestoHandle(n){
    if (!repuestoField || !repuestoField.trim() || !valorizacion || !valorizacion.trim() || valorizacion.trim() === "$" || valorizacion.trim() === "$.") {
      setMsg("msg-mecanic-act");
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
            diagnostico: diagnostico,
            comenzada: true,
            detalle_ppto: presupuesto,
            revisado: true,
            status: "*Falla Econtrada* Presupuesto aprobado, en espera de repuesto",
            terminada: true,
            valorizacion: valorizacion,
            aprobada: true,
            prioritaria: prioritaria,
            cliente_notificado_ppto: true,
            espera_repuesto: esperaRepuesto,
            repuesto_faltante: repuestoField,
            categoria: categoria
          })
        });
      if (response.ok) {
        setRender(!render);
        setTimeout(() => {
          setModal("modal-inactive");
          setRepuestoField("")
          setPresupuesto("")
          setDiagnostico("")
          setValorizacion("$")
          setMsg("msg-mecanic")
          navigate('/mantenciones-listas');
        }, 500);
      }
      } catch (error) {
        // Handle the error here
        console.log(error)
      }
    }   
  }
  
  async function RechazadaHandle(n){
    if (!valorizacion || !valorizacion.trim() || valorizacion.trim() === "$" || valorizacion.trim() === "$.") {
      setMsg("msg-mecanic-act");
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
            diagnostico: diagnostico,
            comenzada: true,
            detalle_ppto: presupuesto,
            falla_encontrada: aPresupuesto,
            // mmto_completado: true,
            status: "Presupuesto rechazado, en espera de ensamblaje",
            terminada: true,
            rechazada: true,
            valorizacion: valorizacion,
            cliente_notificado_ppto: true,
            prioritaria: prioritaria,
            categoria: categoria
          })
        });
      if (response.ok) {
        setRender(!render);
        setTimeout(() => {
          setModal("modal-inactive");
          setRepuestoField("")
          setPresupuesto("")
          setDiagnostico("")
          setValorizacion("$")
          setMsg("msg-mecanic")
          navigate('/mantenciones-listas');
        }, 1500);
      }
      } catch (error) {
        // Handle the error here
        console.log(error)
      }
    }
  }

  async function NoRespondePptoHandle(n){
    if (!valorizacion || !valorizacion.trim() || valorizacion.trim() === "$" || valorizacion.trim() === "$.") {
      setMsg("msg-mecanic-act");
    } else if (esperaRepuesto === true && (!repuestoField || !repuestoField.trim() || !valorizacion || !valorizacion.trim() || valorizacion.trim() === "$" || valorizacion.trim() === "$.")) {
      setMsg("msg-mecanic-act")
    } else {
      try {
        const response = await Promise.all([
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
              detalle_ppto: presupuesto,
              // mmto_completado: false,
              status: "Presupuesto terminado, cliente no conesta",
              terminada: true,
              valorizacion: valorizacion,
              prioritaria: prioritaria,
              cliente_noresponde: true,
              categoria: categoria
            })
          }),
          fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/email/`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
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
  
      if (response.ok) {
        setRender(!render);
        setTimeout(() => {
          setModal("modal-inactive");
          setRepuestoField("")
          setPresupuesto("")
          setDiagnostico("")
          setValorizacion("$")
          setMsg("msg-mecanic")
          navigate('/mantenciones-listas');
        }, 1500);
      }
      } catch (error) {
        // Handle the error here
        console.log(error)
      }
    }
  }
  
  // async function NoRespondeNotifHandle(n) {
  //   if (aplGarantia === "no" && (!valorizacion || !valorizacion.trim() || valorizacion.trim() === "$" || valorizacion.trim() === "$.")) {
  //     setMsg("msg-mecanic-act");
  //   } else {
  //     try {
  //       const response = await fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/update/${n}/`, {
  //         method: "POST",
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({
  //           nombre: nombre,
  //           apellidos: apellidos,
  //           rut: rut,
  //           email: email,
  //           telefono: telefono,
  //           tipo: tipo,
  //           marca: marca,
  //           modelo: modelo,
  //           serie: serie,
  //           observaciones: observaciones,
  //           espada: espada,
  //           cadena: cadena,
  //           funda: funda,
  //           disco: disco,
  //           mantencion: mantencion,
  //           revision: revision,
  //           mecanico: mecanico,
  //           ingreso_sistema: ingresoSistema,
  //           diagnostico: diagnostico,
  //           comenzada: true,
  //           detalle_ppto: presupuesto,
  //           mmto_completado: true,
  //           status: "Mantenimiento terminado, cliente no contesta",
  //           terminada: true,
  //           valorizacion: valorizacion,
  //           prioritaria: prioritaria,
  //           cliente_noresponde: true,
  //           cliente_notificado_ppto: true
  //         })
  //       });
  
  //       if (response.ok) {
  //         setRender(!render);
  //         setTimeout(() => {
  //           setModal("modal-inactive");
  //           setRepuestoField("")
  //           setPresupuesto("")
  //           setDiagnostico("")
  //           setValorizacion("$")
  //           setMsg("msg-mecanic")
  //           navigate('/mantenciones-listas');
  //         }, 500);
  //       }
  //     } catch (error) {
  //       // Handle the error here
  //       console.log(error);
  //     }
  //   }
  // }

  async function NoRespondeNotifHandl(n) {
    if (aplGarantia === "no" && (!valorizacion || !valorizacion.trim() || valorizacion.trim() === "$" || valorizacion.trim() === "$.")) {
      setMsg("msg-mecanic-act");
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
              mmto_completado: true,
              status: "Mantenimiento terminado, cliente no contesta",
              terminada: true,
              valorizacion: valorizacion,
              prioritaria: prioritaria,
              cliente_noresponde: true,
              cliente_notificado_ppto: true,
              categoria: categoria
            })
          }),
          fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/email-retiro/`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: id,
              name: nombre,
              lastname: apellidos,
              email: email,
              tipo: tipo,
              modelo: modelo,
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
          }, 1500);
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
            falla_encontrada: aPresupuesto,
            mmto_completado: true,
            status: "Mantenimiento terminado, notificar cliente",
            terminada: true,
            valorizacion: valorizacion,
            prioritaria: prioritaria,
            espera_repuesto: esperaRepuesto,
            repuesto_faltante: repuestoField,
            categoria: categoria
          })
        });
  
        if (response.ok) {
          setRender(!render);
          setTimeout(() => {
            setModal("modal-inactive");
            setRepuestoField("")
            setPresupuesto("")
            setDiagnostico("")
            setValorizacion("$")
            setMsg("msg-mecanic")
            navigate('/mantenciones-listas');
          }, 1500);
        }
      } catch (error) {
        // Handle the error here
        console.log(error);
      }
    }
  }
  

  if (mmtoslistos !== 0) {
    return (
      <div className='frame'>
      <h1 className='title-component'>Mantenciones listas para notificar: </h1>
      <div >
      {mmtoslistosLista.map((x, index) => {
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
                setApresupuesto(x.falla_encontrada)
                setPrioritaria(x.prioritaria)
                setIngresoSistema(x.ingreso_sistema)
                setFechaReparacion(x.fecha_reparacion)
                setIsGarantia(x.garantia)
                setAplGarantia(x.validez_garantia)
                setDetallePptoGar(x.detalle_garantia)
                setDiagnosticoGar(x.diagnostico_garantia)
                setEsperaRepuesto(false)
                setStatus(x.status)
                setCategoria(x.categoria)
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
                <p className='sub-detail'>Categoría:<span className='data-modal-taller'>{categoria}</span></p>
              </div>
              <div className='machine-detail-2'>
                <p className='sub-detail'>Mecanico: <span className='data-modal-taller'>{mecanico}</span></p>
                {isGarantia? <p className='sub-detail'>GARANTIA APLICADA</p>: null}
                {mantencion? <p className='sub-detail'><span className='data-modal-taller'>Mantención</span></p>: null}
                {revision? <p className='sub-detail'><span className='data-modal-taller'>Revisión</span></p>: null}
                <p className='sub-detail'>Fecha de revision: <span className='data-modal-taller'>{fechaRevision}</span></p>
                {aPresupuesto? null: <p className='sub-detail'>Fecha de mantención: <span className='data-modal-taller'>{fechaReparacion}</span></p>}
              </div>
            </div>
            
            {aPresupuesto? <div className='detalle-observaciones-falla'>**Falla encontrada**, informar a cliente sobre presupuesto</div>: null}
            
            {isGarantia?
              <>
                <div className='detalle-observaciones'>
                  Diagnóstico:
                  <textarea className='diagnostico-field' value={diagnosticoGar}/>
                </div>
                <div className='detalle-observaciones'>
                  Detalle de reparación:
                  <textarea className='detalle-field' value={detallePptoGar}/>
                  {(status === "Garantía completada, notificar cliente para retiro")? null:
                  <div className='opcion-presupuesto'>
                  <input type="checkbox" id="espera_repuesto" onChange={(e) => setEsperaRepuesto(!esperaRepuesto)} value={esperaRepuesto}/>
                  <label for="espera_repuesto">Repuesto faltante</label>
                  {esperaRepuesto? 
                    <div className='detalle-observaciones'>
                        Indicar repuestos faltantes + código:
                      <textarea className='diagnostico-field' onChange={(e) => setRepuestoField(e.target.value)} value={repuestoField}/>
                    </div>: null} 
                </div>}
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
                <div className={msg}>{esperaRepuesto?"Indicar valorización más repuestos faltantes":"Indicar valorización del presupuesto"}</div>
              </>
              }
              {aPresupuesto?
              <div className='opcion-presupuesto'>
                <input type="checkbox" id="espera_repuesto" onChange={(e) => setEsperaRepuesto(!esperaRepuesto)} checked={esperaRepuesto} value={esperaRepuesto}/>
                <label for="espera_repuesto">Repuesto faltante</label>
                {esperaRepuesto? 
                  <div className='detalle-observaciones'>
                    Indicar repuestos faltantes + código:
                    <textarea className='diagnostico-field' onChange={(e) => setRepuestoField(e.target.value)} value={repuestoField}/>
                  </div>: null} 
              </div>:null}
            <div className='modal-buttons-notificaciones'>
              {aPresupuesto?
              <div>
                {esperaRepuesto?
                <div>
                  <button className='button-list-aprobada' onClick={() => {
                    AprobadaEsperaRepuestoHandle(id) 
                    }}>Aprobada</button>
                  <button className='button-list-rechazada' onClick={() => {
                    RechazadaHandle(id) 
                    }}>Rechazada</button>
                </div>:
                <div>
                  <button className='button-list-aprobada' onClick={() => {
                    AprobadaHandle(id)
                    }}>Aprobada</button>
                  <button className='button-list-rechazada' onClick={() => {
                    RechazadaHandle(id)
                    }}>Rechazada</button>
                </div>
                } 
              <div>
                <button className='button-list-guardar' onClick={() => {
                  GuardarHandle(id)
                }}>Guardar, notificar después</button>
                <button className='button-list-noResponde' onClick={() => {
                  NoRespondePptoHandle(id)
                  }}>No responde</button>
                <button className='button-list-volver' onClick={()=> {
                   setModal("modal-inactive")
                   setEsperaRepuesto(false)
                   setRepuestoField("")
                   setPresupuesto("")
                   setDiagnostico("")
                   setValorizacion("$")
                   setMsg("msg-mecanic")
                   }}>Volver</button> 
              </div>
            </div>: 
              <div>
                <div>
                <button className='button-list-aprobada' onClick={() => {
                  NotificadoHandle(id) 
                  }}>Notificado</button>
                </div>
                <div>
                <button className='button-list-noResponde' onClick={() => {
                  NoRespondeNotifHandl(id) 
                  }}>No responde</button>
                <button className='button-list-volver' onClick={()=> {
                   setEsperaRepuesto(false)
                   setRepuestoField("")
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
      
    </div>
    )
  } else {
    return (
      <div className='frame'>
        <h1 className='title-component'>Presupuesto listos por notificar y valorizar/ingresar a PC:</h1>
        <div>
          <p className='not-exist'>No hay notificaciones pendientes</p>
        </div>
        <NavLink to="/notificaciones">Volver</NavLink>
      </div>
    )
  }
}


export default MantencionesListas