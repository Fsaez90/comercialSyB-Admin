import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom' 
import BusquedaModalMec from './BusquedaModalMec';
import AddHomeIcon from '@mui/icons-material/AddHome';

function Mecanico2({reporteMensualIds2, reporteMensualIds2Gar, render, setRender, month}) {
    const [orden, setOrden] = useState({})
    const[notExist, setNotExist] = useState("")
    const [modal, setModal] = useState("modal-inactive")


    useEffect(() => {
        setTimeout(() => {
          setRender(!render) 
        }, 500);  
      },[render])
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
    <div className='subtitle-admin'>Reparaciones mecánico 2 - {mes}</div>
      <div className='cliente-data-admin'>
        {reporteMensualIds2?.map((x, index) => {
            return (
                <div key={index} className='modal-elements-admin-mecanics' onClick={() => {
                    getOrdenData(x[index])
                    setModal("modal-admin")
                    }}>
                    <div className='title-consulta-admin-mecanics'>Orden Nº : {x[index]}</div>
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
        {reporteMensualIds2Gar?.map((x, index) => {
            const orderId = parseInt(x[index]); 
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
            <NavLink to="/"><AddHomeIcon style={{color: "rgb(33, 33, 240)", fontSize: "30px"}} ></AddHomeIcon></NavLink>
        </div>
    </div>
  )
}

export default Mecanico2