import React, {useState, useRef} from 'react'
import SignaturePad from "react-signature-canvas"
import { useNavigate } from 'react-router-dom'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "../static/modalRetiro.css"

function ModuloTercero({orden, anular, setModalFormaTercero, setModal, date, status}) {
    const [isDisable, setIsDisable] = useState("buttons")
    const [imageURL, setImageURL] = useState(null)
    const [nombre, setNombre] = useState()
    const [apellidos, setApellidos] = useState()
    const [rut, setRut] = useState()
    const [telefono, setTelefono] = useState()
    const [frontal, setFrontal] = useState()
    const [reverso, setReverso] = useState()
    const  navigate  = useNavigate();
    const sigCanvas = useRef({})
    const signButton = useRef({})
    const clear = () => sigCanvas.current.clear();
    const save = () => setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"))


    function EntregaHandle(n) {
        const uploadData = new FormData();
        uploadData.append('foto_carnet_frontal', frontal, frontal.name)
        uploadData.append('foto_carnet_reverso', reverso, reverso.name)
        uploadData.append('nombre_tercero', nombre)
        uploadData.append('apellidos_tercero', apellidos)
        uploadData.append('rut_tercero', rut)
        uploadData.append('telefono_tercero', telefono)
        uploadData.append('firma_tercero', imageURL)
        uploadData.append('fecha_retiro', date)
        uploadData.append('anulada', anular)
        uploadData.append('status', status)
        uploadData.append('entregada', true)
        fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/foto-carnet/${n}/`, {
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
            <h1 className='title-component'>Formulario de entrega via tercera persona:</h1>
            <form onSubmit={() => {EntregaHandle(orden.id)}}>
            <div className='tercero-form'>     
                <div className='tercero-form-block-header'>
                    <h2>Orden Nº {orden.id}</h2>
                    <h2>Fecha: {date}</h2>
                </div>
                <div className='tercero-form-block'>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder='Nombre' required/>
                    <input type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} placeholder='Apellidos' required/>
                </div>
                <div className='tercero-form-block'>
                    <input type="text" value={rut} onChange={(e) => setRut(e.target.value)}  placeholder='Cédula Identidad' required/>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)}  placeholder='Teléfono' required/>
                </div>
                <div className='tercero-form-block-carnet'>
                    <label className='label-carnet' for="foto-frontal">Frontal <i class='fa fa-camera'></i></label>
                    <input title='' id='foto-frontal' type="file" accept="image/*" capture onChange={(e) => setFrontal(e.target.files[0])} required/>
                    {frontal?<span className='foto-checked'><div className='ball-foto-checked'>&#x2713;</div></span>:<div className='pendiente'>Pendiente</div>}
                </div>
                <div className='tercero-form-block-carnet'>
                    <label className='label-carnet' for="foto-reverso">Reverso <i class='fa fa-camera'></i></label>
                    <input id='foto-reverso' type="file" accept="image/*" capture onChange={(e) => setReverso(e.target.files[0])} required/>
                    {reverso?<span className='foto-checked'><div className='ball-foto-checked'>&#x2713;</div></span>:<div className='pendiente'>Pendiente</div>}
                </div>
                
                <div className='entrega-form-buttons'>
                <Popup modal trigger={<div ref={signButton} className={isDisable} disabled={isDisable}>Firmar</div>} closeOnDocumentClick={false}>
                {close => (
                <div>
                    <SignaturePad ref={sigCanvas} canvasProps={{ className: "SignaturePad"}}/>
                    <div className='signature-pad-buttons'>
                        <button className='buttons' onClick={() => {save(); setIsDisable("notEnable"); close();}}>Ok</button>
                        <button className='buttons' onClick={close}>Volver</button>
                        <button className='buttons' onClick={clear}>Corregir</button>
                    </div>
                </div>)}
                </Popup>
                {imageURL?(<input type="submit" className='buttons' value="Entregar"/>): null}
                <button className='buttons' onClick={() => {setModalFormaTercero("modal-inactive"); setModal("modal"); setImageURL(null); setIsDisable("buttons")}}>Volver</button>
            </div>
            </div>
            </form> 
        </div>
    )
    }

export default ModuloTercero