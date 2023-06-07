import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate} from 'react-router-dom'

function Garantias({render, setRender, garantia, garantiaLista, date, clock}) {
  const [modalRev, setModalRev] = useState("modal-inactive-revision")
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
  const [diagnosticoGar, setDiagnosticoGar] = useState(null)
  const [detallePptoGar, setDetallePptoGar] = useState(null)
  const [aplGarantia, setAplGarantia] = useState()
  const [isGarantia, setIsGarantia] = useState()
  const [status, setStatus] = useState()
  const [trabajoPrevio, setTrabajoPrevio] = useState(false)
  const [repMecanico, setRepMecanico] = useState(null) 
  const [msg, setMsg] = useState("msg-mecanic") 

  const  navigate  = useNavigate();

  useEffect(() => {
    setRender(!render)
},[garantia, modalRev])

async function enProcesoHandleRev(n) {
  if((aplGarantia === "si" && status === "Equipo reingresado por garantía") && (!detallePptoGar || !diagnosticoGar.trim() || !detallePptoGar.trim() || !diagnosticoGar)) {
    setMsg("msg-mecanic-act")
  } else if ((aplGarantia === "si" && status !== "Equipo reingrsado por garantía") && (!detallePpto || !diagnostico || !detallePpto.trim() || !diagnostico.trim()) ) {
    setMsg("msg-mecanic-act")
  } else if ((aplGarantia === "no" && status === "Equipo reingresado por garantía") && (!detallePptoGar || !diagnosticoGar.trim() || !detallePptoGar.trim() || !diagnosticoGar)) {
    setMsg("msg-mecanic-act")
  } else if ((aplGarantia === "no" && status !== "Equipo reingresado por garantía") && (!detallePpto || !diagnostico.trim() || !detallePpto.trim() || !diagnostico)) {
    setMsg("msg-mecanic-act")
  } else {
    try {
      let response;
      if (aplGarantia === "si") {
        response = await fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/update/${n}/`, {
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
            status: "Equipo en Garantia en proceso de revisión",
            diagnostico: diagnostico,
            comenzada: true,
            detalle_ppto: detallePpto,
            hora_trabajo: clock,
            fecha_trabajo: date,
            validez_garantia: aplGarantia,
            entregada: false,
            terminada: false,
            revisado: false,
            reparada: false,
            diagnostico_garantia: diagnosticoGar,
            detalle_garantia: detallePptoGar
          })
        });
      } else {
        response = await fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/update/${n}/`, {
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
            status: "Equipo en Garantia en proceso de revisión",
            diagnostico: diagnostico,
            comenzada: true,
            detalle_ppto: detallePpto,
            hora_trabajo: clock,
            fecha_trabajo: date,
            validez_garantia: aplGarantia,
            entregada: false,
            terminada: false,
            revisado: false,
            reparada: false,
            diagnostico_garantia: diagnosticoGar,
            detalle_garantia: detallePptoGar
          })
        });
      }
      if (response.ok) {
        setRender(!render);
        setMsg("msg-mecanic")
        setTimeout(() => {
          setModalRev("modal-inactive-revision");
          setAplGarantia(null)
          setDiagnostico("")
          setDetallePpto("")
          setDetallePptoGar("")
          setDiagnosticoGar("")
          navigate('/garantia');
        }, 1500);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

async function solicitudRepuestosHandle(n) {
  if((aplGarantia === "si" && status === "Equipo reingresado por garantía") && (!detallePptoGar || !diagnosticoGar.trim() || !detallePptoGar.trim() || !diagnosticoGar)) {
    setMsg("msg-mecanic-act")
  } else if ((aplGarantia === "si" && status !== "Equipo reingrsado por garantía") && (!detallePpto || !diagnostico || !detallePpto.trim() || !diagnostico.trim()) ){
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
            status: "Trabajo Garantía en proceso",
            diagnostico: diagnostico,
            comenzada: true,
            detalle_ppto: detallePpto,
            hora_trabajo: clock,
            fecha_trabajo: date,
            revisado: true,
            terminada: true,
            reparada: false,
            entregada: false,
            cliente_notificado_retiro: false,
            cliente_noresponde: false,
            solicitud_repuestos: true,
            repuestos_entregados: false,
            espera_repuestos: false,
            cliente_notificado_ppto: false,
            validez_garantia: aplGarantia,
            diagnostico_garantia: diagnosticoGar,
            detalle_garantia: detallePptoGar
          })
        });
      if (response.ok) {
        setRender(!render);
        setMsg("msg-mecanic")
        setTimeout(() => {
          setModalRev("modal-inactive-revision");
          setAplGarantia(null)
          setDiagnostico("")
          setDetallePpto("")
          setDetallePptoGar("")
          setDiagnosticoGar("")
          navigate('/garantia');
        }, 1500);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

async function pptoHandle(n) {
  if((aplGarantia === "no" && status === "Equipo reingresado por garantía") && (!detallePptoGar || !diagnosticoGar.trim() || !detallePptoGar.trim() || !diagnosticoGar)) {
    setMsg("msg-mecanic-act")
  } else if ((aplGarantia === "no" && status !== "Equipo reingresado por garantía") && (!detallePpto || !diagnostico.trim() || !detallePpto.trim() || !diagnostico)) {
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
          revision: true,
          mecanico: mecanico,
          ingreso_sistema: ingresoSistema,
          status: "Garantía no válida, notificar presupuesto a cliente",
          diagnostico: diagnosticoGar,
          comenzada: true,
          garantia: false,
          detalle_ppto: detallePptoGar,
          validez_garantia: aplGarantia,
          hora_trabajo: clock,
          fecha_trabajo: date,
          revisado: true,
          terminada: true,
          reparada: false,
          entregada: false,
          cliente_notificado_ppto: false,
          cliente_noresponde: false,
          valorizacion: "", 
          diagnostico_garantia: diagnosticoGar,
          detalle_garantia: detallePptoGar
        })
      });
  
      if (response.ok) {
        setRender(!render);
        setMsg("msg-mecanic")
        setTimeout(() => {
          setModalRev("modal-inactive-revision");
          setAplGarantia(null)
          setDiagnostico("")
          setDetallePpto("")
          setDetallePptoGar("")
          setDiagnosticoGar("")
          navigate('/garantia');
        }, 1500);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

    if (garantia !== 0) {  
        return (
          <div className='frame'>
              <h1 className='title-component'>Ordenes de trabajo en Garantía:</h1>
              <div >
              {garantiaLista.map((x, index) => {
                return(
                  <div className="list-section" key={index}>
                      <p className='number-list'>Orden Nº {x.id}</p>
                      <button className='button-list' onClick={() => 
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
                        setDiagnostico(x.diagnostico)
                        setDetallePpto(x.detalle_ppto)
                        setIngresoSistema(x.ingreso_sistema)
                        setIsGarantia(x.garantia)
                        setStatus(x.status)
                        setRepMecanico(x.reparada_por)
                      }
                        }>Comenzar</button>
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
                    {isGarantia? <p className='sub-detail'>GARANTIA</p>: null}
                    {espada? <p className='sub-detail'>Espada:<span className='data-modal-taller'>Sí</span></p>: null}
                    {cadena? <p className='sub-detail'>Cadena:<span className='data-modal-taller'>Sí</span></p>: null}
                    {funda? <p className='sub-detail'>Funda:<span className='data-modal-taller'>Sí</span></p>: null}
                    {disco? <p className='sub-detail'>Disco de corte:<span className='data-modal-taller'>Sí</span></p>: null}
                  </div>
                </div>
                <div className='observaciones-taller'>
                  <p className='observaciones-taller-content'>Observaciones: <span className='data-modal-taller'>{observaciones || ''}</span></p>
                </div>
                {(status === "Equipo reingresado por garantía")?
                <>
                  <button onClick={() => setTrabajoPrevio(!trabajoPrevio)}>Ver trabajo previo</button>
                  {trabajoPrevio?
                    <>
                      <div className='detalle-observaciones'>
                        Diagnóstico previo:
                        <textarea className='diagnostico-field' onChange={(e) => setDiagnostico(e.target.value)}  value={diagnostico || ''}/>
                      </div>
                      <div className='detalle-observaciones'>
                        Detalle previo de repuestos:
                        <textarea className='detalle-field' onChange={(e) => setDetallePpto(e.target.value)} value={detallePpto || ''}/> 
                      </div>
                    </>: null}
                    <div className='detalle-observaciones'>
                        <label htmlFor='apl-garantia'>Aplica Garantía?</label>
                        <select id="apl-garantia" onChange={(e) => setAplGarantia(e.target.value)} value={aplGarantia || ""}>
                            <option value=''>Seleccionar</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>
                        </select> 
                    </div>
                    <div className='detalle-observaciones'>
                      Nuevo Diagnóstico:
                      <textarea className='diagnostico-field' onChange={(e) => setDiagnosticoGar(e.target.value)}  value={diagnosticoGar || ''}/>
                    </div>
                    <div className='detalle-observaciones'>
                      Nuevo Detalle de repuestos:
                      <textarea className='detalle-field' onChange={(e) => setDetallePptoGar(e.target.value)} value={detallePptoGar || ''}/> 
                    </div>
                </>:
                <>
                  <div className='detalle-observaciones'>
                    Diagnóstico:
                  <textarea className='diagnostico-field' onChange={(e) => setDiagnostico(e.target.value)}  value={diagnostico || ''}/>
                  </div>
                  <div className='detalle-observaciones'>
                    <label htmlFor='apl-garantia'>Aplica Garantía?</label>
                    <select id="apl-garantia" onChange={(e) => setAplGarantia(e.target.value)} value={aplGarantia || ""}>
                        <option value=''>Seleccionar</option>
                        <option value="si">Si</option>
                        <option value="no">No</option>
                    </select> 
                 </div>
                  <div className='detalle-observaciones'>
                    Detalle de repuestos:
                    <textarea className='detalle-field' onChange={(e) => setDetallePpto(e.target.value)} value={detallePpto || ''}/> 
                  </div>
                  <div className={msg}>Completar nuevo diagnóstico y nuevo detalle repuestos</div> 
                </>
                }
                <div className='modal-buttons'>
                    <button className='button-list' onClick={()=> {
                            setModalRev("modal-inactive-revision")
                            setAplGarantia(null)
                            setMsg("msg-mecanic")
                            setDiagnostico("")
                            setDetallePpto("")
                            setDetallePptoGar("")
                            setDiagnosticoGar("")
                            }}>Volver</button>
                    {(aplGarantia === "si")?
                    <>
                        <button className='button-list' onClick={() => {
                        enProcesoHandleRev(id)
                        }}>Guardar y continuar después</button>
                        <button className='button-list' onClick={() => {
                        solicitudRepuestosHandle(id)
                        }} >Solicitar Repuestos</button>
                    </>: (aplGarantia === "no")?
                    <>
                        <button className='button-list' onClick={() => {
                        enProcesoHandleRev(id)
                        }}>Guardar y continuar después</button>
                        <button className='button-list' onClick={() => {
                        pptoHandle(id)
                        }} >Enviar PPTO</button>
                    </>: null
                    }
                </div>
                </div>
              </div>
            </div>
          )
      } else {
          return (
            <div className='frame'>
              <h1 className='title-component'>Ordenes de trabajo con Garantía:</h1>
              <div>
                <p className='not-exist'>No hay ordenes pendientes</p>
              </div>
              <NavLink to="/taller">Menú</NavLink>
            </div>
          )
    }
    }

export default Garantias