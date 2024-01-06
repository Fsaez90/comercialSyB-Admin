import React from 'react'
import { NavLink } from 'react-router-dom'
import AddHomeIcon from '@mui/icons-material/AddHome';

function ClientesXnotificar({ pptosListos, mmtosListos, eqRep, eqArm, noContesta, solRep}) {
  
  return (
    <div className='frame-menu'>
    <h1 className='title-menu'>Notificaciones a Clientes por realizar:</h1>
    <div className='menu'>
      <div>
        <div className='frame-menu not'>
          <NavLink className='menu-button' to="/pptos-listos">Presupuestos Listos</NavLink>
          {pptosListos > 0? <p id='not-count'>{pptosListos}</p>: null}
        </div>
        <br />
        <div className='frame-menu not'>
          <NavLink className='menu-button' to="/mmto-solicitud-rep">Solicitud Repuestos Mantenciones</NavLink>
          {solRep > 0? <p id='not-count'>{solRep}</p>: null}
        </div>
        <br />
        <div className='frame-menu not'>
          <NavLink className='menu-button' to="/mantenciones-listas">Mantenciones/Garantías Listas</NavLink>
          {mmtosListos > 0? <p id='not-count'>{mmtosListos}</p>: null}
        </div>
        <div className='frame-menu not'>
          <NavLink className='menu-button' to="/equipos-reparados">Equipos Reparados</NavLink>
          {eqRep > 0? <p id='not-count'>{eqRep}</p>: null}
        </div>
        <br />
        <div className='frame-menu not'>
          <NavLink className='menu-button' to="/equipos-armados">Equipos Armados ({eqArm})</NavLink>
        </div>
        <br />
        <div className='frame-menu not'>
          <NavLink className='menu-button' to="/no-contesta">No Contesta ({noContesta})</NavLink>
          {/* {(noContestappto + noContestaretiro) > 0? <p id="not-count">{noContestappto + noContestaretiro}</p>: null} */}
        </div>
      </div>
    </div>
    <div>
      <NavLink to="/app"><AddHomeIcon style={{color: "rgb(33, 33, 240)", fontSize: "30px"}} ></AddHomeIcon></NavLink>
    </div>
</div>
  )
}

export default ClientesXnotificar