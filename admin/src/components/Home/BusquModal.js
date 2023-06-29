import React, { useState } from 'react'
import ComprobanteRetiro from './ComprobanteRetiro'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ModalEditar from './ModalEditar';

function BusquModal({orden, setModal, date, render, setRender}) {
    const [modalComprobanteRetiro, setModalComprobanteRetiro] = useState("modal-inactive")
    const [modalEditar, setModalEditar] = useState("modal-inactive")
    const [ok, setOk] = useState("prio-inactive")

    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [rut, setRut] = useState();
    const [telefono, setTelefono] = useState();
    const [email, setEmail] = useState();
    const [tipo, setTipo] = useState();
    const [marca, setMarca] = useState();
    const [modelo, setModelo] = useState();
    const [serie, setSerie] = useState();
    const [categoria, setCategoria] = useState();
    const [mecanico, setMecanico] = useState();
    const [revision, setRevision] = useState();
    const [mantenimiento, setMantenimiento] = useState()

    const dateOfToday = new Date();
    const date2 = new Date(dateOfToday);
    date2.setDate(dateOfToday.getDate() - 30);
    const dateOf30DaysAgo = date2.toLocaleDateString()

    function garantiaHandle (n) {
        fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/update-partial/${n}/`, {
          method: "PUT",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              garantia: true,
              mantencion: null,
              revision: null,
              mmto_completado: false,
              reparada: false,
              cliente_notificado_retiro: false,
              cliente_notificado_ppto: false,
              fecha_reingreso: date,
              fecha_reparacion: null,
              falla_encontrada: false,
              status: "Equipo reingresado por garantía",
              ppto_mecanico: null
          })
        })
        setOk("gar-active") 
    }

  return (
    <div>
        <div className='busqueda-modal-admin'>
          <div className='cliente-data-admin'>
            <div className='elements-admin'>
              <div className='title-consulta-modal'>Nombre:<span className='orden-data'>{orden.nombre} {orden.apellidos}</span></div>
              <div className='title-consulta-modal'>RUT:<span className='orden-data'>{orden.rut}</span></div>
            </div>
            <div className='elements-admin'>
              <div className='title-consulta-modal'>Teléfono:<span className='orden-data'>{orden.telefono}</span></div>
              <div className='title-consulta-modal'>Email:<span className='orden-data'>{orden.email}</span></div>
            </div>
          </div>
          <div className='cliente-data-admin'>
            <div className='elements-admin'>
              <div className='title-consulta-modal'>Tipo:<span className='orden-data'>{orden.tipo}</span></div>
              <div className='title-consulta-modal'>Modelo:<span className='orden-data'>{orden.modelo}</span></div>
            </div>
            <div className='cliente-data-admin'>
            <div className='elements-admin'>
              <div className='title-consulta-modal'>Marca:<span className='orden-data'>{orden.marca}</span></div>
              <div className='title-consulta-modal'>Serie:<span className='orden-data'>{orden.serie}</span></div>
              <div className='title-consulta-modal'>Categoría:<span className='orden-data'>{orden.categoria}</span></div>
            </div>
            </div>
          </div>
          <div className='cliente-data-admin'>
            <div className='elements-admin'>
              <div className='title-consulta-modal'>Observaciones:<span className='orden-data'>{orden.observaciones}</span></div>
              {orden.revision === true?<div className='title-consulta-modal'>Propósito:<span className='orden-data'>Revisión</span></div>:null}
              {orden.mantenimiento === true?<div className='title-consulta-modal'>Propósito:<span className='orden-data'>Mantenimiento</span></div>:null}
              {orden.garantia === true?<div className='title-consulta-modal'>Propósito:<span className='orden-data'>Garantia</span></div>:null}
            </div>
          </div>
            
          <div className='work-data-admin'> 
          <div className='elements-admin-fechas'>
              <div className='title-consulta-modal'>Fecha Ingreso:<span className='orden-data'>{orden.fecha_ingreso}</span></div>
              {orden.fecha_reingreso? <div className='title-consulta-modal'>Fecha ingreso garantía:<span className='orden-data'>{orden.fecha_reingreso}</span></div>: null}
              {orden.fecha_trabajo? <div className='title-consulta-modal'>Fecha Revisión/comienzo:<span className='orden-data'>{orden.fecha_trabajo}</span></div>: null}
              {orden.ppto_mecanico !== null?<div className='title-consulta-modal'>Ppto hecho por mec:<span className='orden-data'>{orden.ppto_mecanico}</span></div>: null }
              {orden.fecha_reparacion? <div className='title-consulta-modal'>Fecha Reparación/término:<span className='orden-data'>{orden.fecha_reparacion}</span></div>: null}
              {orden.fecha_retiro? <div className='title-consulta-modal'>Fecha Retiro:<span className='orden-data'>{orden.fecha_retiro}</span></div>: null}
              {orden.diagnostico? <div className='title-consulta-modal'>Diagnóstico:<span className='orden-diagnostico'>{orden.diagnostico}</span></div>: null}
              {orden.diagnostico_garantia? <div className='title-consulta-modal'>Diagnóstico garantía:<span className='orden-diagnostico'>{orden.diagnostico_garantia}</span></div>: null}
              {orden.valorizacion !== null && (orden.validez_garantia === "no" || orden.validez_garantia === null)? <div className='title-consulta-modal'>Valorización:<span className='orden-data'>{orden.valorizacion}</span></div>: null}
              {orden.validez_garantia === "si"?<div className='title-consulta-modal'>Valorización:<span className='orden-data'>Garantía válida</span></div>:null}
            </div>
            {orden.espera_repuesto?
            <div className='elements-admin'>
              <div>Repuestos</div>
              <textarea className='detalle-repuestos-modal' value={orden.repuesto_faltante} />
            </div>:null}
            <div className='elements-admin'>
              <p className='data-consulta-status-admin'>{orden.status}</p>
            </div>
            <br/>
            {(orden.fecha_retiro > dateOf30DaysAgo && orden.garantia === false && orden.entregada === true)? <div className='elements-admin-btn'><button className='buttons-admin' onClick={()=>garantiaHandle(orden.id)}>Garantía</button><div className={ok}><CheckCircleIcon style={{color: "green"}}></CheckCircleIcon></div></div>: null}
            {orden.entregada?
              <div className='elements-admin-btn'>
                <button className='buttons-admin' onClick={() => setModalComprobanteRetiro("modal-comprobante-admin")}>Ver comprobante Retiro</button>
              </div>: null}
            <div className='elements-admin-btn'>
              <button className="button-editar-main" onClick={() => {
                setModalEditar("modal")
                setName(orden.nombre)
                setLastname(orden.apellidos)
                setRut(orden.rut)
                setTelefono(orden.telefono)
                setEmail(orden.email)
                setTipo(orden.tipo)
                setMarca(orden.marca)
                setModelo(orden.modelo)
                setSerie(orden.serie)
                setCategoria(orden.categoria)
                setMecanico(orden.mecanico)
                setRevision(orden.revision)
                setMantenimiento(orden.mantencion)
                }}>Editar</button>
            </div>
          </div> 
          <button className='button-close' onClick={()=> setModal("modal-inactive")}>Cerrar</button>
        </div>
        <br/>
        <br/>
        <div className={modalEditar}>
              <ModalEditar 
                render={render}
                setRender={setRender}
                orden={orden} 
                setModalEditar={setModalEditar} 
                name={name} 
                setName={setName}
                lastname={lastname}
                setLastname={setLastname}
                rut={rut}
                setRut={setRut}
                telefono={telefono}
                setTelefono={setTelefono}
                email={email}
                setEmail={setEmail}
                tipo={tipo}
                setTipo={setTipo}
                marca={marca}
                setMarca={setMarca}
                serie={serie}
                setSerie={setSerie}
                modelo={modelo}
                setModelo={setModelo}
                categoria={categoria}
                setCategoria={setCategoria}
                mecanico={mecanico}
                setMecanico={setMecanico}
                revision={revision}
                setRevision={setRevision}
                mantenimiento={mantenimiento}
                setMantenimiento={setMantenimiento}
                />
        </div>
        <div className={modalComprobanteRetiro}>
              <ComprobanteRetiro orden={orden} setModalComprobanteRetiro={setModalComprobanteRetiro}/>
        </div>
    </div>
  )
}

export default BusquModal