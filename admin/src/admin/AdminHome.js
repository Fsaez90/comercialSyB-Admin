import React from 'react'
import { NavLink } from 'react-router-dom'
import Busqueda from './Busqueda'
import AddHomeIcon from '@mui/icons-material/AddHome';
import BuildIcon from '@mui/icons-material/Build';
import { Audio } from 'react-loader-spinner';

function AdminHome({date, setAdminEsp, retiroTotal, pendientesTotal, esperarep, loading}) {
  
  return (
    <div>
      {loading ? (
        <div className="App">
          <div className='spinner'>
            <Audio
              height="50"
              width="50"
              radius="9"
              color="white"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
          </div>
        </div>
      ) : (
      <div className='frame-menu'>
        <h1 className='title-menu'>STIHL Los Andes - Admin</h1>
        <div>
          <div className='subtitle-admin'>Total equipos pendientes de revisión/mantención: {pendientesTotal}</div>
        </div>
        <div>
          <Busqueda date={date} />
        </div>
        <div className='menu'>
            <NavLink className='menu-button' to="/listas-retiro">Máquinas para retiro ({retiroTotal})</NavLink>
            <NavLink onClick={() => setAdminEsp(true)} className='menu-button' to="/espera-repuesto">O.T espera repuesto ({esperarep})</NavLink>
            <NavLink className='menu-button' to="/mecanicos">Mecánicos</NavLink>
        </div>
        <br/>
        <div className='menu-admin'>
            <NavLink to="/app"><AddHomeIcon style={{color: "rgb(33, 33, 240)", fontSize: "30px"}} ></AddHomeIcon></NavLink>
            <NavLink to="/taller"><BuildIcon style={{color: "rgb(33, 33, 240)", fontSize: "30px"}} ></BuildIcon></NavLink>
        </div>
      </div>
      )}
    </div>
  )
}

export default AdminHome