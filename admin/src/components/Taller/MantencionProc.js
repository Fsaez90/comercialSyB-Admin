import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../static/modalIngreso.css"
import { Audio } from 'react-loader-spinner'

function MantencionProc({ clock, date, setRender, render}) {
  const [lista, setLista] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("msg-mecanic") 
  const [aPresupuesto, setApresupuesto] = useState(false)
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
  const [ingresoSistema, setIngresoSistema] = useState()
  const [funda, setFunda] = useState()
  const [disco, setDisco] = useState()
  const [mantencion, setMantencion] = useState()
  const [revision, setRevision] = useState()
  const [mecanico, setMecanico] = useState()
  const [diagnostico, setDiagnostico] = useState(null)
  const [detallePpto, setDetallePpto] = useState(null)
  const [categoria, setCategoria] = useState()  
  const [pptoMec, setPptoMec] = useState("seleccionar")
  const  navigate  = useNavigate();

  useEffect(() => {
    getData()
},[refresh])

const getData = async () => {
  try {
    setLoading(true)
    const result = await fetch('https://comercialsyb-backend-production.up.railway.app/comercial/proceso_mantencion/')
    const data = await result.json();
    setLista(data.slice().sort((a, b) => a.id - b.id))
    setLoading(false)
  } catch (error) {
    console.error('Error fetching data:', error);
    setLoading(false); // Ensure loading indicator is hidden in case of an error
  }
}

  async function enProcesoHandle(n) {
    if(aPresupuesto === false && (!detallePpto || !detallePpto.trim())) {
      setMsg("msg-mecanic-act")
    } else if(aPresupuesto === true && (!diagnostico || !diagnostico.trim() || !detallePpto || !detallePpto.trim() || pptoMec === "seleccionar" || pptoMec === null)) {
      setMsg("msg-mecanic-act")
    } else {
      if(pptoMec === "seleccionar"){
        setPptoMec(null)
      }
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
            status: "Equipo en proceso de Mantencion",
            diagnostico: diagnostico,
            comenzada: true,
            detalle_ppto: detallePpto,
            hora_trabajo: "pendiente",
            fecha_trabajo: "pendiente",
            falla_encontrada: aPresupuesto,
            categoria: categoria
          })
        });
        if (response.ok) {
          setRender(!render);
          setMsg("msg-mecanic")
          setRefresh(!refresh)
          setModal("modal-inactive");
          setDiagnostico("")
          setDetallePpto("")
          setPptoMec("seleccionar")
          setApresupuesto(false)
          navigate('/mantenimiento');
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  async function mantenimientoHandle(n) {
    if(aPresupuesto === false && (!detallePpto || !detallePpto.trim())) {
      setMsg("msg-mecanic-act")
    } else if(aPresupuesto === true && (!diagnostico || !diagnostico.trim() || !detallePpto || !detallePpto.trim())) {
      setMsg("msg-mecanic-act")
    }else {
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
            falla_encontrada: aPresupuesto,
            status: "Equipo en proceso de Mantencion",
            terminada: true,
            solicitud_repuestos: true,
            categoria: categoria
          })
        });
        if (response.ok) {
          setRender(!render);
          setRefresh(!refresh)
          setMsg("msg-mecanic")
          setModal("modal-inactive");
          setDiagnostico("")
          setDetallePpto("")
          setApresupuesto(false)
          navigate('/mantenimiento');
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  async function mantenimientopptoHandle(n) {
    if(aPresupuesto === false && (!detallePpto || !detallePpto.trim())) {
      setMsg("msg-mecanic-act")
    } else if(aPresupuesto === true && (!diagnostico || !diagnostico.trim() || !detallePpto || !detallePpto.trim() || pptoMec === "seleccionar" || pptoMec === null)) {
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
            diagnostico: diagnostico,
            comenzada: true,
            detalle_ppto: detallePpto,
            hora_trabajo: clock,
            fecha_trabajo: date,
            mmto_completado: true,
            falla_encontrada: aPresupuesto,
            status: "Falla encontrada, notificar PPTO a cliente",
            terminada: true,
            categoria: categoria,
            ppto_mecanico: pptoMec
          })
        });
    
        if (response.ok) {
          setRender(!render);
          setRefresh(!refresh)
          setMsg("msg-mecanic")
          setModal("modal-inactive");
          setDiagnostico("")
          setDetallePpto("")
          setApresupuesto(false)
          navigate('/mantenimiento');
        }
      } catch (error) {
        console.error(error);
      }
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
          <h1 className='title-component'>Ordenes de trabajo comenzadas en espera de mantención: </h1>
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
                    setApresupuesto(x.falla_encontrada)
                    setIngresoSistema(x.ingreso_sistema)
                    setCategoria(x.categoria)
                    setPptoMec(x.ppto_mecanico)
                  }
                    }>Continuar</button>         
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
              <div className='opcion-presupuesto'> 
                <input type="checkbox" id="a-presupuesto" onClick={() => setApresupuesto(!aPresupuesto)} checked={aPresupuesto} value={aPresupuesto}/>
                <label for="a-presupuesto">Falla encontrada (realizar presupuesto)</label>
                {aPresupuesto? 
                  <div className='detalle-observaciones'>
                    Indicar diagnóstico:
                    <textarea className='diagnostico-field' onChange={(e) => setDiagnostico(e.target.value)} value={diagnostico}/>
                  </div>: null} 
              </div>
              <div className='detalle-observaciones'>
                Indicar detalle de respuestos y mano de obra:
                <textarea className='detalle-field' onChange={(e) => setDetallePpto(e.target.value)} value={detallePpto}/>
              </div>
              <div className={msg}>Completar diagnóstico y detalle repuestos</div> 
              {aPresupuesto? 
             <>
             <div className='detalle-observaciones'>
               Presupuesto hecho por:
               <select onChange={(e) => setPptoMec(e.target.value)}  value={pptoMec}>
                 <option value="seleccionar">Seleccionar</option>
                 <option value="1">Técnico 1</option>
                 <option value="2">Técnico 2</option>
                 <option value="Admin">Admin</option>
               </select>
             <div className={msg}>Indicar mecánico que realiza presupuesto + diagnóstico y repuestos</div>
             </div>
             <div className='modal-buttons'>
                 <button className='button-list' onClick={()=> {
                   setDiagnostico("")
                   setDetallePpto("")
                   setModal("modal-inactive")
                   setApresupuesto(false)
                   setMsg("msg-mecanic")
                   setPptoMec("seleccionar")
                   }}>Volver</button>
                 <button className='button-list' onClick={() => {
                   enProcesoHandle(id)
                 }}>Guardar y continuar después</button>
                 <button className='button-list' onClick={() => {
                   mantenimientopptoHandle(id)
                 }}>Enviar Presupuesto</button>
             </div> 
             </>: 
              <div className='modal-buttons'>
                  <button className='button-list' onClick={()=> {
                    setModal("modal-inactive")
                    setDiagnostico("")
                    setDetallePpto("")
                    setApresupuesto(false)
                    setMsg("msg-mecanico")
                    }}>Volver</button>
                  <button className='button-list' onClick={() => {
                  enProcesoHandle(id)
                  }}>Guardar y continuar después</button>
                  <button className='button-list' onClick={() => {
                  mantenimientoHandle(id)
                  }}>Solicitar Repuestos</button>
              </div>}
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
            <h1 className='title-component'>Ordenes de trabajo en espera de Revisión:</h1>
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

export default MantencionProc

