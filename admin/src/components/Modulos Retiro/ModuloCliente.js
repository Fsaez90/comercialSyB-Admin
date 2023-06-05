import React, {useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import SignaturePad from "react-signature-canvas"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "../static/modalRetiro.css"


function ModuloCliente({orden, setModalFormaCliente, anular, setModal, date, status,  setRender, render}) {
  const [isDisable, setIsDisable] = useState("buttons")
  const [imageURL, setImageURL] = useState(null)
  const  navigate  = useNavigate();
  const sigCanvas = useRef({})
  const signButton = useRef({})
  const clear = () => sigCanvas.current.clear();
  const save = () => setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"))

  async function EntregaHandle(n) {
    const button = document.getElementById('btn-entrega-cliente'); 
    button.disabled = true;

    const uploadData = new FormData();
    uploadData.append('firma', imageURL)
    uploadData.append('fecha_retiro', date)
    uploadData.append('status', status)
    uploadData.append('entregada', true)
    uploadData.append('anulada', anular)
  
    try {
      const response = await fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/foto-carnet/${n}/`, {
        method: 'POST',
        body: uploadData
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  
    setTimeout(() => {
      setRender(!render)
      setModal("modal-inactive")
      navigate("/")
    }, 1500);
  }
  
  return (
    <div className='retiro-form'>
        <h1 className='title-component'>Formulario de entrega a cliente:</h1>
        <div className='tercero-form'>
                <div className='tercero-form-block-header'>
                    <h2>Orden Nº {orden.id}</h2>
                    <h2>Fecha: {date}</h2>
                </div>
                <div className='tercero-form-block'>
                    <input type="text" value={orden.nombre} placeholder='Nombre'/>
                    <input type="text" value={orden.apellidos} placeholder='Apellidos'/>
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
                {imageURL?(<button id="btn-entrega-cliente" onClick={() => {EntregaHandle(orden.id)}} className='buttons'>Entregar</button>): null}
                <button className='buttons' onClick={() => {setModalFormaCliente("modal-inactive"); setModal("modal"); setImageURL(null); setIsDisable("buttons")}}>Volver</button>
            </div>
        </div>
    </div>
  )
}

export default ModuloCliente