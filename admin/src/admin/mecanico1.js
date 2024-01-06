import React, {useState} from 'react';
import { NavLink } from 'react-router-dom'; 
import BusquedaModalMec from './BusquedaModalMec';
import AddHomeIcon from '@mui/icons-material/AddHome';

function Mecanico1({idReport1, idReport1Gar, month}) {
    const [orden, setOrden] = useState({})
    const [modal, setModal] = useState("modal-inactive")

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
        })
      }

      let mes = ""
    if (month === "January" || month === "Enero" || month === "enero") {
        mes = "ENERO"
    } else if (month === "February" || month === "Febrero" || month === "febrero") {
        mes = "FEBRERO"
    } else if (month === "March" || month === "Marzo" || month === "marzo") {
        mes = "MARZO"
    } else if (month === "April" || month === "Abril" || month === "abril") {
        mes = "ABRIL"
    } else if (month === "May" || month === "Mayo" || month === "mayo") {
        mes = "MAYO"
    } else if (month === "June" || month === "Junio" || month === "junio") {
        mes = "JUNIO"
    } else if (month === "July" || month === "Julio" || month === "julio" ) {
        mes = "JULIO"
    } else if (month === "August" || month === "Agosto" || month === "agosto") {
        mes = "AGOSTO"
    } else if (month === "September" || month === "Septiembre" || month === "septiembre") {
        mes = "SEPTIEMBRE"
    } else if (month === "October" || month === "Octubre" || month === "octubre") {
        mes = "OCTUBRE"
    }else if (month === "November" || month === "Noviembre" || month === "noviembre") {
        mes = "NOVIEMBRE"
    } else {
        mes = "DICIEMBRE"
    }
    
  return (
    <div className='frame-admin'>
    <div className='busqueda-modal-admin'>
    <div className='subtitle-admin'>Reparaciones mecánico 1 - {mes}</div>
      <div className='cliente-data-admin'>
        {idReport1?.map((x, index) => {
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
        {idReport1Gar?.map((x, index) => {
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