import React from 'react'
import { NavLink } from 'react-router-dom'
import Busqueda from './Busqueda'
import AddHomeIcon from '@mui/icons-material/AddHome';
import BuildIcon from '@mui/icons-material/Build';

function AdminHome() {
  return (
    <div className='frame-menu'>
        <h1 className='title-menu'>STIHL Los Andes - Admin</h1>
        <div>
          <div className='subtitle-admin'>Equipos en bodega:</div>
        </div>
        <div>
          <Busqueda />
        </div>
        <div className='menu'>
            <NavLink className='menu-button' to="/ingreso">O.T en proceso de reparación</NavLink>
            <NavLink className='menu-button' to="/notificaciones">Maquinas para retiro</NavLink>
            <NavLink className='menu-button' to="/otxingresar">O.T espera repuesto</NavLink>
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