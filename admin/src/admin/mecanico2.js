import React, {useEffect, useState} from 'react'
import BusquedaModalMec from './BusquedaModalMec'
function Mecanico2({reporteMensualIds2, render, setRender}) {
    const [orden, setOrden] = useState({})
    const[notExist, setNotExist] = useState("")
    const [modal, setModal] = useState("modal-inactive")


    useEffect(() => {
        setTimeout(() => {
          setRender(!render) 
        }, 500);  
      },[render])

    function getOrdenData(x) {
        fetch(`http://127.0.0.1:8000/comercial/orden/${x}/`)
            .then(response => {
            if(response.status === 200) { return response.json()}
            if(response.status === 404) { setNotExist("Orden no encontrada")}
            })
            .then(data => setOrden(data))
      }

  return (
    <div className='frame-admin'>
    <div className='busqueda-modal-admin'>
      <div className='cliente-data-admin'>
        {reporteMensualIds2?.map((x, index) => {
            return (
                <div key={index} className='modal-elements-admin' onClick={() => {
                    getOrdenData(x[index])
                    setModal("modal-admin")
                    }}>
                    <div className='title-consulta-admin'>Orden Nº:{x[index]}</div>
                </div>
            )
        })}
      </div>
      <div className={modal}>
        <BusquedaModalMec orden={orden} setModal={setModal}/>
      </div>      
    </div>
    </div>
  )
}

export default Mecanico2