import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../static/modalTaller.css"
import { Audio } from 'react-loader-spinner'

function MmtoRepListos({render, setRender, date, clock}) {
  const [lista, setLista] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [loading, setLoading] = useState(true);
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
  const [repMecanico, setRepMecanico] =useState("")
  const [observaciones, setObservaciones] = useState()
  const [espada, setEspada] = useState()
  const [ingresoSistema, setIngresoSistema] = useState()
  const [cadena, setCadena] = useState()
  const [funda, setFunda] = useState()
  const [disco, setDisco] = useState()
  const [mantencion, setMantencion] = useState()
  const [revision, setRevision] = useState() 
  const [mecanico, setMecanico] = useState()
  const [diagnostico, setDiagnostico] = useState()
  const [detallePpto, setDetallePpto] = useState()
  const [detallePptoGar, setDetallePptoGar] = useState()
  const [diagnosticoGar, setDiagnosticoGar] = useState()
  const [isGarantia, setIsGarantia] = useState() 
  const [msg, setMsg] = useState("msg-mecanic") 
  const [categoria, setCategoria] = useState()  
  const  navigate  = useNavigate();
  
useEffect(() => {
    getData()
},[refresh])

const getData = async () => {
  try {
    setLoading(true)
    const result = await fetch('https://comercialsyb-backend-production.up.railway.app/comercial/manrep_taller/')
    const data = await result.json();
    setLista(data.slice().sort((a, b) => a.id - b.id))
    setLoading(false)
  } catch (error) {
    console.error('Error fetching data:', error);
    setLoading(false); // Ensure loading indicator is hidden in case of an error
  }
}
  
async function mantenimientoHandle(n) {
  if (repMecanico === "1") {
    try {
      const [response1, response2] = await Promise.all([
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
            status: "Mantención completada, notificar cliente para retiro",
            terminada: true,
            solicitud_repuestos: true,
            mmto_completado: true,
            fecha_reparacion: date,
            reparada_por: repMecanico,
            categoria: categoria
          })
        }),
        fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/update-report1/`, {
          method: "PUT",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            lista_ordenes: id,
            garantias: null
          })
        })
      ]);

      if (response1.ok && response2.ok) {
        setRender(!render);
        setRefresh(!refresh)
        setModal("modal-inactive");
        setRepMecanico("")
        navigate('/mmto-rep-listos');
      }
    } catch (error) {
      console.error(error);
    }
  } else if (repMecanico === "2") {
    try {
      const [response1, response2] = await Promise.all([
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
            status: "Mantención completada, notificar cliente para retiro",
            terminada: true,
            solicitud_repuestos: true,
            mmto_completado: true,
            fecha_reparacion: date,
            reparada_por: repMecanico,
            categoria: categoria
          })
        }),
        fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/update-report2/`, {
          method: "PUT",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            lista_ordenes: id,
            garantias: null
          })
        })
      ]);

      if (response1.ok && response2.ok) {
        setRender(!render);
        setRefresh(!refresh)
        setModal("modal-inactive");
        setRepMecanico("")
        navigate('/mmto-rep-listos');
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    setMsg("msg-mecanic-act");
  }
}

async function garantiaTerminadaHandle(n) {
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
        hora_trabajo: clock,
        fecha_trabajo: date,
        status: "Garantía completada, notificar cliente para retiro",
        terminada: true,
        solicitud_repuestos: true,
        mmto_completado: true,
        fecha_reparacion: date,
        categoria: categoria
      })
    });

    if (response.ok) {
      setRender(!render);
      setRefresh(!refresh)
      setModal("modal-inactive");
      navigate('/mmto-rep-listos');
    }
  } catch (error) {
    console.error(error);
  }
}
   
    if (lista.length !== 0) {
      return (
        <div>
          {loading ? (
         <div className='frame'>
          <Audio
            height="70"
            width="70"
            radius="9"
            color="white"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
          ) : (
          <div className='frame'>
            <h1 className='title-component'>Solicitudes de repuestos para mantenciones: </h1>
            <div className='render-section'>
            {lista.map((x, index) => {
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
                      setDetallePpto(x.detalle_ppto)  
                      setIngresoSistema(x.ingreso_sistema)
                      setIsGarantia(x.garantia)
                      setDetallePptoGar(x.detalle_garantia)
                      setDiagnosticoGar(x.diagnostico_garantia)
                      setCategoria(x.categoria)
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
                    <p className='sub-detail'>Categoría:<span className='data-modal-taller'>{categoria}</span></p>
                  </div>
                  <div className='machine-detail-2'>
                    <p className='sub-detail'>Mecanico: <span className='data-modal-taller'>{mecanico}</span></p>
                    {isGarantia? <p className='sub-detail'>GARANTIA</p>: null}
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
                        Diagnóstico:
                        <textarea className='diagnostico-field' value={diagnosticoGar || diagnostico}/>
                      </div>
                      <div className='detalle-observaciones'>
                        Detalle repuestos:
                        <textarea className='detalle-field' onChange={(e) => setDetallePpto(e.target.value)} value={detallePptoGar || detallePpto}/>
                    </div>
                    <div className='modal-buttons'>
                      <button className='button-list' onClick={()=> {
                        setModal("modal-inactive")
                        setRepMecanico("")
                        }}>Volver</button>
                      <button className='button-list' onClick={() => {
                      garantiaTerminadaHandle(id) 
                      }}>Garantía Completada</button>
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
                    <div className='detalle-observaciones'>
                      Equipo reparado por:
                      <select onChange={(e) => setRepMecanico(e.target.value)}  value={repMecanico}>
                        <option value="">Seleccionar</option>
                        <option value="1">Técnico 1</option>
                        <option value="2">Técnico 2</option>
                        <option value="Admin">Admin</option>
                      </select>
                      <div className={msg}>Indicar mecánico que realiza reparación</div>
                    </div>
                    <div className='modal-buttons'>
                      <button className='button-list' onClick={()=> setModal("modal-inactive")}>Volver</button>
                      <button className='button-list' onClick={() => {
                        mantenimientoHandle(id)
                      }}>MMTO Completado</button>
                    </div>
                  </>    
                  }
              </div>
            </div>  
          </div>
          )}
        </div>
      )
    } else {
      return (
        <div>
          {loading ? (
         <div className='frame'>
          <Audio
            height="70"
            width="70"
            radius="9"
            color="white"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
          ) : (
          <div className='frame'>
            <h1 className='title-component'>Solicitures de repuestos para mantenciones:</h1>
            <div className='render-section'>
              <p className='not-exist'>No hay ordenes pendientes</p>
            </div>
            <NavLink to="/taller">Menú</NavLink>
          </div>
          )}
        </div>
      )
  }
}

export default MmtoRepListos