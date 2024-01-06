import React from 'react'
import { NavLink } from 'react-router-dom'
import BuildIcon from '@mui/icons-material/Build';

function Proceso({garCom, revCom, mantCom, prioridad_com}) {
  
  return (
    <div>
        <h1 className='title-component'>Ordenes comenzadas:</h1>
        <br/><br/>
        <div className='frame-menu not taller'>
          <NavLink className='menu-button' to="/proceso-prioridad">Prioritarias ({prioridad_com})</NavLink>
          <NavLink className='menu-button' to="/proceso-revision">Revision ({revCom})</NavLink>
          <NavLink className='menu-button' to="/proceso-mantencion">Mantenciones ({mantCom})</NavLink>
          <NavLink className='menu-button' to="/proceso-garantia">Garantias ({garCom})</NavLink>
          <NavLink to="/taller"><BuildIcon style={{color: "rgb(33, 33, 240)", fontSize: "30px"}} ></BuildIcon></NavLink>
        </div>
    </div>
  )
}

export default Proceso