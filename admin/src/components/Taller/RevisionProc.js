import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../static/modalTaller.css"
import { Audio } from 'react-loader-spinner'

function RevisionProc({date, clock, setRender, render}) {
  const [lista, setLista] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState("modal-inactive")
  const [id, setId] = useState(lista.id)
  const [nombre, setNombre] = useState(lista.nombre)
  const [apellidos, setApellidos] = useState(lista.apellidos)
  const [telefono, setTelefono] = useState(lista.telefono)
  const [email, setEmail] = useState(lista.email)
  const [rut, setRut] = useState(lista.rut)
  const [tipo, setTipo] = useState(lista.tipo)
  const [marca, setMarca] = useState(lista.marca)
  const [modelo, setModelo] = useState(lista.modelo)
  const [serie, setSerie] = useState(lista.serie)
  const [ingresoSistema, setIngresoSistema] = useState()
  const [observaciones, setObservaciones] = useState(lista.observaciones)
  const [espada, setEspada] = useState(lista.espada)
  const [cadena, setCadena] = useState(lista.cadena)
  const [funda, setFunda] = useState(lista.funda)
  const [disco, setDisco] = useState(lista.disco)
  const [mantencion, setMantencion] = useState(lista.mantencion)
  const [revision, setRevision] = useState(lista.revision)
  const [mecanico, setMecanico] = useState(lista.mecanico)
  const [diagnostico, setDiagnostico] = useState(lista.diagnostico)
  const [detallePpto, setDetallePpto] = useState(lista.detalle_ppto)
  const [msg, setMsg] = useState("msg-mecanic")
  const [categoria, setCategoria] = useState()
  const [pptoMec, setPptoMec] = useState("seleccionar")
  const  navigate  = useNavigate();
  
  useEffect(() => {
    getData()
},[refresh])

const getData = async () => {
  try {
    setLoading(true)
    const result = await fetch('https://comercialsyb-backend-production.up.railway.app/comercial/proceso_revision/')
    const data = await result.json();
    setLista(data.slice().sort((a, b) => a.id - b.id))
    setLoading(false)
  } catch (error) {
    console.error('Error fetching data:', error);
    setLoading(false); // Ensure loading indicator is hidden in case of an error
  }
}

async function enProcesoHandle(n) {
  if (!detallePpto || !detallePpto.trim() || !diagnostico || !diagnostico.trim() || pptoMec === "seleccionar" || pptoMec === null) {
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
            status: "Equipo en proceso de revisión",
            diagnostico: diagnostico,
            comenzada: true,
            detalle_ppto: detallePpto,
            hora_trabajo: clock,
            fecha_trabajo: date,
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
        navigate('/proceso-revision');
      } else {
        throw new Error("Failed to update data.");
      }
    } catch (error) {
      console.error(error);
    }
  }
}


async function revisionHandle(n) {
  if (!detallePpto || !detallePpto.trim() || !diagnostico || !diagnostico.trim() || pptoMec === "seleccionar" || pptoMec === null) {
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
            status: "Presupuesto terminado, notificar cliente",
            diagnostico: diagnostico,
            comenzada: true,
            detalle_ppto: detallePpto,
            hora_trabajo: clock,
            fecha_trabajo: date,
            revisado: true,
            terminada: true,
            categoria: categoria,
            ppto_mecanico: pptoMec
        })
      });
  
      if (response.ok) {
        setRender(!render);
        setRefresh(!refresh)
        setMsg("msg-mecanic-act")
        setModal("modal-inactive");
        setDiagnostico("")
        setDetallePpto("")
        navigate('/proceso-revision');
      } else {
        throw new Error("Failed to update data.");
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
          <h1 className='title-component'>Ordenes de trabajo en espera de revision: </h1>
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
                  <p className='sub-detail'>Orden Nº:<span className='data-modal-taller'>{id}</span></p>
                  <p className='sub-detail'>Nombre:<span className='data-modal-taller'>{nombre} {apellidos} </span></p>
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
              <div className='detalle-observaciones'>
                Indicar diagnóstico:
                <textarea className='diagnostico-field' onChange={(e) => setDiagnostico(e.target.value)} value={diagnostico}/>
              </div>
              <div className='detalle-observaciones'>
                Indicar detalle de respuestos y mano de obra:
                <textarea className='detalle-field' onChange={(e) => setDetallePpto(e.target.value)} value={detallePpto}/>
              </div>
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
                      setModal("modal-inactive")
                      setDiagnostico("")
                      setDetallePpto("")
                      setMsg("msg-mecanic")
                      }}>Volver</button>
                  <button className='button-list' onClick={() => {
                  enProcesoHandle(id)
                  }}>Guardar y continuar después</button>
                  <button className='button-list' onClick={() => {
                  revisionHandle(id)
                  }}
                  >Enviar PPTO</button>
              </div>
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

export default RevisionProc