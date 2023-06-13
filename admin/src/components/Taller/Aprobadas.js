import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../static/modalNotificaciones.css"

function Aprobadas({render, date, setRender, aprLista, aprobadas}) {
  
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
  const [presupuesto, setPresupuesto] = useState("")
  const [ingresoSistema, setIngresoSistema] = useState()
  const [fechaRevision, setFechaRevision] = useState()
  const [horaRevision, setHoraRevision] = useState()
  const [diagnostico, setDiagnostico] = useState("")
  const [prioritaria, setPrioritaria] = useState()
  const [valorizacion, setValorizacion] = useState()
  const [detallePptoGar, setDetallePptoGar] = useState()
  const [diagnosticoGar, setDiagnosticoGar] = useState()
  const [isGarantia, setIsGarantia] = useState()
  const [repMecanico, setRepMecanico] =useState("")
  const [msg, setMsg] = useState("msg-mecanic")
  const [categoria, setCategoria] = useState()    

  const navigate  = useNavigate();
  
  useEffect(() => {
    setRender(!render)
},[aprobadas, modal])

async function ReparadaHandle(n) {
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
              detalle_ppto: presupuesto,
              fecha_trabajo: fechaRevision,
              hora_trabajo: horaRevision,
              revisado: true,
              status: "Equipo reparado, notificar cliente.",
              terminada: true,
              valorizacion: valorizacion,
              aprobada: true,
              prioritaria: prioritaria,
              cliente_notificado_ppto: true,
              reparada: true,
              fecha_reparacion: date,
              reparada_por: repMecanico,
              categoria: categoria
          })
        }),
        fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/update-report1/`, {
          method: "PUT",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            lista_ordenes: `${n}`,
            garantias: null
          })
        })
      ]);

      if (response1.ok && response2.ok) {
        setRender(!render);
        setTimeout(() => {
          setModal("modal-inactive");
          setRepMecanico("")
          navigate('/aprobadas');
        }, 500);
      } else {
        // Handle error case
        console.error("Error updating data");
      }
    } catch (error) {
      // Handle network error
      console.error("Network error:", error);
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
              detalle_ppto: presupuesto,
              fecha_trabajo: fechaRevision,
              hora_trabajo: horaRevision,
              revisado: true,
              status: "Equipo reparado, notificar cliente.",
              terminada: true,
              valorizacion: valorizacion,
              aprobada: true,
              prioritaria: prioritaria,
              cliente_notificado_ppto: true,
              reparada: true,
              fecha_reparacion: date,
              categoria: categoria
          })
        }),
        fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/update-report2/`, {
          method: "PUT",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              lista_ordenes: `${n}`,
              garantias: null
          })
        })
      ]);

      if (response1.ok && response2.ok) {
        setRender(!render);
        setTimeout(() => {
          setModal("modal-inactive");
          setRepMecanico("")
          navigate('/aprobadas');
        }, 500);
      } else {
        // Handle error case
        console.error("Error updating data");
      }
    } catch (error) {
      // Handle network error
      console.error("Network error:", error);
    }
  } else {
    setMsg("msg-mecanic-act");
  }
}

async function GuardarHandle(n) {
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
          fecha_trabajo: fechaRevision,
          hora_trabajo: horaRevision,
          revisado: true,
          status: "Equipo en proceso final de reparación.",
          terminada: true,
          valorizacion: valorizacion,
          aprobada: true,
          prioritaria: prioritaria,
          cliente_notificado_ppto: true,
          categoria: categoria
      })
    });

    if (response.ok) {
      setRender(!render);
      setTimeout(() => {
        setModal("modal-inactive");
        setRepMecanico("")
        navigate('/aprobadas');
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

if (aprobadas !== 0) {
  return (
    <div className='frame'>
    <h1 className='title-component'>Ordenes de trabajo con presupuesto aprobado:</h1>
    <div>
    {aprLista.map((x, index) => {
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
              setCategoria(x.categoria)
            }
              }>Reparar</button>         
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
                {isGarantia? <p className='sub-detail'>Equipo a <span className='data-modal-taller'>Garantía</span></p>: null}
                <p className='sub-detail'>Fecha de revision: <span className='data-modal-taller'>{fechaRevision}</span></p>
              </div>
            </div>
            {isGarantia?
            <>
              <div className='detalle-observaciones'>
                  Diagnóstico:
                  <textarea className='diagnostico-field' value={diagnosticoGar}/>
              </div>
              <div className='detalle-observaciones'>
                  Detalle de reparación:
                  <textarea className='detalle-field' value={detallePptoGar}/>
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
              </div>
              <div className='detalle-observaciones'>
                  Equipo reparado por:
                  <select onChange={(e) => setRepMecanico(e.target.value)} >
                    <option value="1">Seleccionar</option>
                    <option value="1">Técnico 1</option>
                    <option value="2">Técnico 2</option>
                    <option value="Admin">Admin</option>
                  </select>
                  <div className={msg}>Indicar mecánico que realiza reparación</div>
                </div>
            </>
            }
            <div className='modal-buttons-notificaciones'>
              <div>
                <button className='button-list-aprobada' onClick={() => {
                  ReparadaHandle(id)
                  }}>Reparada</button>
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
        <h1 className='title-component'>Ordenes de trabajo con presupuesto aprobado:</h1>
        <div>
          <p className='not-exist'>No hay ordenes pendientes</p>
        </div>
        <NavLink to="/taller">Menú</NavLink>
      </div>
    )
  }
}

export default Aprobadas