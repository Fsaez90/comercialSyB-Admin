import React, {useEffect, useState} from 'react'
import BusquedaModalMec from './BusquedaModalMec'

function Mecanico1({reporteMensualIds1, render, setRender}) {
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
          if(response.status === 200) {
            return response.json()
          } else if(response.status === 404) {
            throw new Error("Orden no encontrada")
          } else {
            throw new Error(`Server error: ${response.status}`)
          }
        })
        .then(data => {
          console.log("Data received:", data)
          setOrden(data)
        })
        .catch(error => {
          console.error("Fetch error:", error)
          setNotExist(error.message)
        })
      }

  return (
    <div className='frame-admin'>
    <div className='busqueda-modal-admin'>
      <div className='cliente-data-admin'>
        {reporteMensualIds1?.map((x, index) => {
            const orderId = parseInt(x[index]); 
            return (
                <div key={index} className='modal-elements-admin' onClick={() => {
                    getOrdenData(orderId)
                    setModal("modal-admin")
                    }}>
                    <div className='title-consulta-admin'>Orden Nº:{orderId}</div>
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

export default Mecanico1