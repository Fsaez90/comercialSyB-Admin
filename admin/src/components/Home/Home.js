import React from 'react'
import { NavLink } from 'react-router-dom'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';


function Home({not, nototal, esperarep, nextorden}) {

  return (
    <div className='frame-menu'>
        <h1 className='title-menu'>STIHL Los Andes</h1>
        <div className='menu'>
            <NavLink className='menu-button' to="/ingreso">Ingreso Equipo[{nextorden}]</NavLink>
            <div className='frame-menu not'>
              <NavLink className='menu-button' to="/notificaciones">Notificaciones</NavLink>
              {nototal > 0? <p id='not-count'>{nototal}</p>: null}
            </div>
            <div className='frame-menu not'>
              <NavLink className='menu-button' to="/otxingresar">Ingresos OT a PC</NavLink>
              {not > 0? <p id='not-count'>{not}</p>: null}
            </div>
            <NavLink className='menu-button' to="/estado">Estado de orden</NavLink>
            <NavLink className='menu-button' to="/espera-repuesto">Espera Repuesto ({esperarep})</NavLink>
            <NavLink className='menu-button' to="/entrega">Entrega Equipo</NavLink>
        </div>
        <br/>
        <div className='menu'>
            <NavLink to="/"><AdminPanelSettingsIcon style={{color: "rgb(33, 33, 240)", fontSize: "30px"}} ></AdminPanelSettingsIcon></NavLink>
        </div>
    </div>
  )
}

export default Home