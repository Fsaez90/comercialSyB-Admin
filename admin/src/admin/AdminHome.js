import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Busqueda from './Busqueda'
import AddHomeIcon from '@mui/icons-material/AddHome';
import BuildIcon from '@mui/icons-material/Build';

function AdminHome({render, setRender, date, setAdminEsp, listasRetiroTotal, Eqpendientes, esperaRepuesto}) {

  useEffect(() => {
      setRender(!render)
  },[Eqpendientes, listasRetiroTotal, esperaRepuesto, setAdminEsp])
  
  return (
    <div className='frame-menu'>
        <h1 className='title-menu'>STIHL Los Andes - Admin</h1>
        <div>
          <div className='subtitle-admin'>Total equipos pendientes de revisión/mantención: {Eqpendientes}</div>
        </div>
        <div>
          <Busqueda date={date} />
        </div>
        <div className='menu'>
            <NavLink className='menu-button' to="/listas-retiro">Máquinas para retiro ({listasRetiroTotal})</NavLink>
            <NavLink onClick={() => setAdminEsp(true)} className='menu-button' to="/espera-repuesto">O.T espera repuesto ({esperaRepuesto})</NavLink>
            <NavLink className='menu-button' to="/mecanicos">Mecánicos</NavLink>
        </div>
        <br/>
        <div className='menu-admin'>
            <NavLink to="/app"><AddHomeIcon style={{color: "rgb(33, 33, 240)", fontSize: "30px"}} ></AddHomeIcon></NavLink>
            <NavLink to="/taller"><BuildIcon style={{color: "rgb(33, 33, 240)", fontSize: "30px"}} ></BuildIcon></NavLink>
        </div>
    </div>
  )
}

export default AdminHome