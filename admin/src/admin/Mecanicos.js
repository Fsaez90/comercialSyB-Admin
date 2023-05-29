import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom' 
import AddHomeIcon from '@mui/icons-material/AddHome';

function Mecanicos({render, setRender, reporteMensualTotal1, reporteMensualTotal2, month}) {
    
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
  return (
    <div className='frame-menu'>
        <h1 className='title-menu'>STIHL Los Andes - Admin</h1>
        <div> 
          <div className='subtitle-admin'>Cantidad de reparaciones en: {mes}</div>
        </div>
        <div className='menu'>
            <NavLink className='menu-button' to="/ingreso">Meses anteriores</NavLink>
        </div>
        <div className='menu'>
            <NavLink className='menu-button' to="/mecanico1">Mecánico1 {`Total: ${(reporteMensualTotal1 === null || reporteMensualTotal1 === undefined)? "0": reporteMensualTotal1}`}</NavLink>
            <NavLink className='menu-button' to="/mecanico2">Mecánico2 {`Total:  ${(reporteMensualTotal1 === null || reporteMensualTotal2 === undefined)? "0": reporteMensualTotal2}`}</NavLink>
        </div> 
        <br/>
        <div className='menu-admin'>
            <NavLink to="/"><AddHomeIcon style={{color: "rgb(33, 33, 240)", fontSize: "30px"}} ></AddHomeIcon></NavLink>
        </div>
    </div>
  )
} 

export default Mecanicos