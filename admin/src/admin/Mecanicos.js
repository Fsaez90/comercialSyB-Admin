import React from 'react'
import { NavLink } from 'react-router-dom' 
import AddHomeIcon from '@mui/icons-material/AddHome';

function Mecanicos({reportMec1, reportMec2, month}) {
    
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
    <div className='frame-menu'>
        <h1 className='title-menu'>STIHL Los Andes - Admin</h1>
        <div> 
          <div className='subtitle-admin'>Cantidad de reparaciones en: {mes}</div>
        </div>
        <div className='menu'>
            <div className='menu-button'>Meses anteriores</div>
        </div>
        <div className='menu'>
            <NavLink className='menu-button' to="/mecanico1">Mecánico1 {`Total: ${(reportMec1 === null || reportMec1 === undefined)? "0": reportMec1}`}</NavLink>
            <NavLink className='menu-button' to="/mecanico2">Mecánico2 {`Total:  ${(reportMec2 === null || reportMec2 === undefined)? "0": reportMec2}`}</NavLink>
        </div> 
        <br/>
        <div className='menu-admin'>
            <NavLink to="/"><AddHomeIcon style={{color: "rgb(33, 33, 240)", fontSize: "30px"}} ></AddHomeIcon></NavLink>
        </div>
    </div>
  )
} 

export default Mecanicos