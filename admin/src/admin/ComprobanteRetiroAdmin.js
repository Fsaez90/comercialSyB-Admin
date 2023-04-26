import React from 'react'

function ComprobanteRetiroAdmin({orden, setModalComprobanteRetiro}) {
    
  return (
    <div className='busqueda-modal-admin'>  
    {orden.nombre_tercero?
        <div> 
            <div className='cliente-data-admin'>
                <div className='elements-admin'>
                    <div className='title-consulta-modal'>Orden Nº:<span className='orden-data'>{orden.id}</span></div>
                    <div className='title-consulta-modal'>Equipo:<span className='orden-data'>{orden.marca} {orden.modelo}</span></div>
                </div>
                <div className='elements-admin'>
                    <div className='title-consulta-modal'>Persona:<span className='orden-data'>Tercero</span></div>
                    <div className='title-consulta-modal'>Fecha retiro:<span className='orden-data'>{orden.fecha_retiro}</span></div>
                </div>
            </div>
            <div className='cliente-data-admin'>
                <div className='modal-elements-declaracion-admin'>
                    <div>**DECLARACION** Confirmo la recepción de equipo marca: {orden.marca} modelo: {orden.marca} y acuso conformidad y satiscacción de trabajos y servicios realizados por Comercial S & B, Stihl Los Andes.</div>
                </div>
            </div>
            <div className='cliente-data-firma-admin'>

                    <div className='firma-area-comprobante-admin'>
                        <img
                            src={`http://127.0.0.1:8000/` + orden.firma_tercero}
                            alt= "Firma" 
                            style={{
                            display: "block",
                            margin: "0 auto",
                            borderBottom: "2px solid black",
                            width: "120px"
                            }}
                        />
                        <br/>
                        <div>Firma Sr/s:<span className='orden-data'>{orden.nombre_tercero} {orden.apellidos_tercero}</span>, Rut: <span className='orden-data'>{orden.rut_tercero}</span>, Fono: <span className='orden-data'>{orden.telefono_tercero}</span></div>
                    </div>

            </div>
            <div className='cliente-data-admin-pics'>
                    <div className='title-consulta-modal'><img
                            src={`http://127.0.0.1:8000/` + orden.foto_carnet_frontal}
                            alt= "Firma" 
                            style={{
                            display: "block",
                            margin: "0 auto",
                            borderBottom: "2px solid black",
                            width: "150px",
                            height: "100px"
                            }}
                        /></div>
                    <div className='title-consulta-modal'><img
                            src={`http://127.0.0.1:8000/` + orden.foto_carnet_reverso}
                            alt= "Firma" 
                            style={{
                            display: "block",
                            margin: "0 auto",
                            borderBottom: "2px solid black",
                            width: "150px",
                            height: "100px",
                            }}
                        /></div>
             </div>
        </div>:
        <div> 
            <div className='cliente-data-admin'>
                <div className='elements-admin'>
                    <div className='title-consulta-modal'>Orden Nº:<span className='orden-data'>{orden.id}</span></div>
                    <div className='title-consulta-modal'>Equipo:<span className='orden-data'>{orden.marca} {orden.modelo}</span></div>
                </div>
                <div className='elements-admin'>
                    <div className='title-consulta-modal'>Persona:<span className='orden-data'>Cliente/Dueño</span></div>
                    <div className='title-consulta-modal'>Fecha retiro:<span className='orden-data'>{orden.fecha_retiro}</span></div>
                </div>
            </div>
            <div className='cliente-data-admin'>
                <div className='modal-elements-declaracion-admin'>
                    <div>**DECLARACION** Confirmo la recepción de equipo marca: {orden.marca} modelo: {orden.marca} y acuso conformidad y satiscacción de trabajos y servicios realizados por Comercial S & B, Stihl Los Andes.</div>
                </div>
            </div>
            <div className='cliente-data-firma-admin'>
                    <div className='firma-area-comprobante-admin'>
                        <img
                            src={`http://127.0.0.1:8000/` + orden.firma}
                            alt= "Firma" 
                            style={{
                            display: "block",
                            margin: "0 auto",
                            borderBottom: "2px solid black",
                            width: "120px"
                            }}
                        />
                        <br/>
                        <div>Firma Sr/s:<span className='orden-data'>{orden.nombre} {orden.apellidos}</span>, Rut: <span className='orden-data'>{orden.rut}</span>, Fono: <span className='orden-data'>{orden.telefono}</span></div>
                    </div>
            </div>
        </div>}
    <button className='button-close' onClick={() => setModalComprobanteRetiro("modal-inactive-comprobante")}>X</button>
</div>
  )
}

export default ComprobanteRetiroAdmin