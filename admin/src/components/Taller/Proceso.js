import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import BuildIcon from '@mui/icons-material/Build';

function Proceso({render, setRender, priComenzadas, revComenzadas, manComenzadas, garantiaCom,}) {
  
  useEffect(() => {
    setTimeout(() => {
      setRender(!render)
    }, 500); 
  },[])

  return (
    <div>
        <h1 className='title-component'>Ordenes comenzadas:</h1>
        <br/><br/>
        <div className='frame-menu not taller'>
          <NavLink className='menu-button' to="/proceso-prioridad">Prioritarias ({priComenzadas})</NavLink>
          <NavLink className='menu-button' to="/proceso-revision">Revision ({revComenzadas})</NavLink>
          <NavLink className='menu-button' to="/proceso-mantencion">Mantenciones ({manComenzadas})</NavLink>
          <NavLink className='menu-button' to="/proceso-garantia">Garantias ({garantiaCom})</NavLink>
          <NavLink to="/taller"><BuildIcon style={{color: "rgb(33, 33, 240)", fontSize: "30px"}} ></BuildIcon></NavLink>
        </div>
    </div>
  )
}

export default Proceso