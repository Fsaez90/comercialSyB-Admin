import React, {useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import SignaturePad from "react-signature-canvas"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "../static/modalRetiro.css"


function ModuloCliente({orden, setModalFormaCliente, setModal, date, status}) {
  const [isDisable, setIsDisable] = useState("buttons")
  const [imageURL, setImageURL] = useState(null)
  const  navigate  = useNavigate();
  const sigCanvas = useRef({})
  const signButton = useRef({})
  const clear = () => sigCanvas.current.clear();
  const save = () => setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"))

 


  function EntregaHandle(n) {
    const uploadData = new FormData();
    uploadData.append('firma', imageURL)
    uploadData.append('fecha_retiro', date)
    uploadData.append('status', status)
    uploadData.append('entregada', true)
    fetch(`http://127.0.0.1:8000/comercial/foto-carnet/${n}/`, {
        method: 'POST',
        body: uploadData
    }).then( res => console.log(res))
    .catch(error => console.log(error))

    setTimeout(() => {
        setModal("modal-inactive")
        navigate("/")
      }, 1500); 
}
  return (
    <div>
        <h1 className='title-component'>Formulario de entrega a cliente:</h1>
        <div className='tercero-form'>
                <div className='tercero-form-block-header'>
                    <h2>Orden Nº {orden.id}</h2>
                    <h2>Fecha: {date}</h2>
                </div>
                <div className='tercero-form-block'>
                    <input type="text" value={orden.nombre} placeholder='Nombre'/>
                    <br /><br />
                    <input type="text" value={orden.apellidos} placeholder='Apellidos'/>
                </div>
                <div className='tercero-form-block'>
                    <input type="text" value={orden.rut} placeholder='Cédula Identidad'/>
                    <input type="text" value={orden.telefono} placeholder='Teléfono'/>
                </div>
                <div className='tercero-form-block'>
                    <p>Cliente confirma recepción de equipo reparado</p>
                </div>
                <div className='entrega-form-buttons'>
                <Popup modal trigger={<div ref={signButton} className={isDisable} disabled={isDisable}>Firmar</div>} closeOnDocumentClick={false}>
                {close => (
                <div>
                    <SignaturePad ref={sigCanvas} canvasProps={{className: "SignaturePad"}}/>
                    <div className='signature-pad-buttons'>
                        <button className='buttons' onClick={() => {save(); setIsDisable("notEnable"); close();}}>Ok</button>
                        <button className='buttons' onClick={close}>Volver</button>
                        <button className='buttons' onClick={clear}>Corregir</button>
                    </div>
                </div>)}
                </Popup>
                {imageURL?(<button onClick={() => {EntregaHandle(orden.id)}} className='buttons'>Entregar</button>): null}
                <button className='buttons' onClick={() => {setModalFormaCliente("modal-inactive"); setModal("modal"); setImageURL(null); setIsDisable("buttons")}}>Volver</button>
            </div>
        </div>
    </div>
  )
}

export default ModuloCliente