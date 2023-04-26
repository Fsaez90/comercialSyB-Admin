import React from 'react'
import "../static/busqueda.css"

function ComprobanteRetiro({orden, setModalComprobanteRetiro}) {
  return (
    <div>  
        {orden.nombre_tercero?
            <div className='busqueda-modal'> 
                <div className='cliente-data'>
                    <div className='modal-elements'>
                        <div className='title-consulta'>Orden Nº:<span className='orden-data'>{orden.id}</span></div>
                        <div className='title-consulta'>Equipo:<span className='orden-data'>{orden.marca} {orden.modelo}</span></div>
                    </div>
                    <div className='modal-elements'>
                        <div className='title-consulta'>Persona:<span className='orden-data'>Tercero</span></div>
                        <div className='title-consulta'>Fecha retiro:<span className='orden-data'>{orden.fecha_retiro}</span></div>
                    </div>
                </div>
                <div className='cliente-data'>
                    <div className='modal-elements-declaracion'>
                        <div>**DECLARACION** Confirmo la recepción de equipo marca: {orden.marca} modelo: {orden.marca} y acuso conformidad y satiscacción de trabajos y servicios realizados por Comercial S & B, Stihl Los Andes.</div>
                    </div>
                </div>
                <div className='cliente-data-firma'>

                        <div className='firma-area-comprobante'>
                            <img
                                src={`http://127.0.0.1:8000/` + orden.firma_tercero}
                                alt= "Firma" 
                                style={{
                                display: "block",
                                margin: "0 auto",
                                borderBottom: "2px solid black",
                                width: "250px"
                                }}
                            />
                            <br/>
                            <div>Firma Sr/s:<span className='orden-data'>{orden.nombre_tercero} {orden.apellidos_tercero}</span>, Rut: <span className='orden-data'>{orden.rut_tercero}</span>, Fono: <span className='orden-data'>{orden.telefono_tercero}</span></div>
                        </div>

                </div>
                <div className='cliente-data'>
                        <div className='title-consulta'><img
                                src={`http://127.0.0.1:8000/` + orden.foto_carnet_frontal}
                                alt= "Firma" 
                                style={{
                                display: "block",
                                margin: "0 auto",
                                borderBottom: "2px solid black",
                                width: "350px"
                                }}
                            /></div>
                        <div className='title-consulta'><img
                                src={`http://127.0.0.1:8000/` + orden.foto_carnet_reverso}
                                alt= "Firma" 
                                style={{
                                display: "block",
                                margin: "0 auto",
                                borderBottom: "2px solid black",
                                width: "350px"
                                }}
                            /></div>
                 </div>
            </div>:
            <div className='busqueda-modal'> 
                <div className='cliente-data'>
                    <div className='modal-elements'>
                        <div className='title-consulta'>Orden Nº:<span className='orden-data'>{orden.id}</span></div>
                        <div className='title-consulta'>Equipo:<span className='orden-data'>{orden.marca} {orden.modelo}</span></div>
                    </div>
                    <div className='modal-elements'>
                        <div className='title-consulta'>Persona:<span className='orden-data'>Cliente/Dueño</span></div>
                        <div className='title-consulta'>Fecha retiro:<span className='orden-data'>{orden.fecha_retiro}</span></div>
                    </div>
                </div>
                <div className='cliente-data'>
                    <div className='modal-elements-declaracion'>
                        <div>**DECLARACION** Confirmo la recepción de equipo marca: {orden.marca} modelo: {orden.marca} y acuso conformidad y satiscacción de trabajos y servicios realizados por Comercial S & B, Stihl Los Andes.</div>
                    </div>
                </div>
                <div className='cliente-data-firma'>
                        <div className='firma-area-comprobante'>
                            <img
                                src={`http://127.0.0.1:8000/` + orden.firma}
                                alt= "Firma" 
                                style={{
                                display: "block",
                                margin: "0 auto",
                                borderBottom: "2px solid black",
                                width: "250px"
                                }}
                            />
                            <br/>
                            <div>Firma Sr/s:<span className='orden-data'>{orden.nombre} {orden.apellidos}</span>, Rut: <span className='orden-data'>{orden.rut}</span>, Fono: <span className='orden-data'>{orden.telefono}</span></div>
                        </div>

                </div>
            </div>}
        
        <button onClick={() => setModalComprobanteRetiro("modal-inactive")}>Volver</button>
    </div>
  )
}

export default ComprobanteRetiro