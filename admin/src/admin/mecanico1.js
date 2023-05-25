import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom'; 
import BusquedaModalMec from './BusquedaModalMec';
import AddHomeIcon from '@mui/icons-material/AddHome';

function Mecanico1({reporteMensualIds1, reporteMensualIds1Gar, render, setRender, month}) {
    const [orden, setOrden] = useState({})
    const[notExist, setNotExist] = useState("")
    const [modal, setModal] = useState("modal-inactive")


    useEffect(() => {
        setTimeout(() => {
          setRender(!render) 
        }, 500);  
      },[render])

    function getOrdenData(x) {
        fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/orden/${x}/`)
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

      let mes = ""
    if (month === "January") {
        mes = "ENERO"
    } else if (month === "February") {
        mes = "FEBRERO"
    } else if (month === "March") {
        mes = "MARZO"
    } else if (month === "April") {
        mes = "ABRIL"
    } else if (month === "May") {
        mes = "MAYO"
    } else if (month === "June") {
        mes = "JUNIO"
    } else if (month === "July") {
        mes = "JULIO"
    } else if (month === "August") {
        mes = "AGOSTO"
    } else if (month === "September") {
        mes = "SEPTIEMBRE"
    } else if (month === "October") {
        mes = "OCTUBRE"
    }else if (month === "November") {
        mes = "NOVIEMBRE"
    } else {
        mes = "DICIEMBRE"
    }
  return (
    <div className='frame-admin'>
    <div className='busqueda-modal-admin'>
    <div className='subtitle-admin'>Reparaciones mecánico 1 - {mes}</div>
      <div className='cliente-data-admin'>
        {reporteMensualIds1?.map((x, index) => {
            const orderId = parseInt(x); 
            return (
                <div key={index} className='modal-elements-admin-mecanics' onClick={() => {
                    getOrdenData(orderId)
                    setModal("modal-admin")
                    }}>
                    <div className='title-consulta-admin-mecanics'>Orden Nº : {orderId}</div>
                </div>
            )
        })}
      </div>
      <div className={modal}>
        <BusquedaModalMec orden={orden} setModal={setModal}/>
      </div>      
    </div>
    <div className='busqueda-modal-admin'>
    <div className='subtitle-admin'>Garantías (-)</div>
      <div className='cliente-data-admin'>
        {reporteMensualIds1Gar?.map((x, index) => {
            const orderId = parseInt(x); 
            return (
                <div key={index} className='modal-elements-admin-mecanics' onClick={() => {
                    getOrdenData(orderId)
                    setModal("modal-admin")
                    }}>
                    <div className='title-consulta-admin-mecanics-gar'>Orden Nº : {orderId}</div>
                </div>
            )
        })}
      </div>
      <div className={modal}>
        <BusquedaModalMec orden={orden} setModal={setModal}/>
      </div>      
    </div>
    <br/><br/>
    <div className='menu-admin'>
        <NavLink to="/mecanicos"><AddHomeIcon style={{color: "rgb(33, 33, 240)", fontSize: "30px"}} ></AddHomeIcon></NavLink>
    </div>
    </div>
  )
}

export default Mecanico1