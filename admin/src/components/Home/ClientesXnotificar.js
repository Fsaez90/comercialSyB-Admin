import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import AddHomeIcon from '@mui/icons-material/AddHome';

function ClientesXnotificar({render, setRender, pptoslistos, mmtoslistos, eqreparados, eqarmados, nocontestaTotal, solicitudRepuestos}) {

  useEffect(() => {
      setRender(!render)
  },[pptoslistos, mmtoslistos, eqreparados, eqarmados, nocontestaTotal, solicitudRepuestos])

  
  return (
    <div className='frame-menu'>
    <h1 className='title-menu'>Notificaciones a Clientes por realizar:</h1>
    <div className='menu'>
      <div>
        <div className='frame-menu not'>
          <NavLink className='menu-button' to="/pptos-listos">Presupuestos Listos</NavLink>
          {pptoslistos > 0? <p id='not-count'>{pptoslistos}</p>: null}
        </div>
        <br />
        <div className='frame-menu not'>
          <NavLink className='menu-button' to="/mmto-solicitud-rep">Solicitud Repuestos Mantenciones</NavLink>
          {solicitudRepuestos > 0? <p id='not-count'>{solicitudRepuestos}</p>: null}
        </div>
        <br />
        <div className='frame-menu not'>
          <NavLink className='menu-button' to="/mantenciones-listas">Mantenciones Listas</NavLink>
          {mmtoslistos > 0? <p id='not-count'>{mmtoslistos}</p>: null}
        </div>
        <div className='frame-menu not'>
          <NavLink className='menu-button' to="/equipos-reparados">Equipos Reparados</NavLink>
          {eqreparados > 0? <p id='not-count'>{eqreparados}</p>: null}
        </div>
        <br />
        <div className='frame-menu not'>
          <NavLink className='menu-button' to="/equipos-armados">Equipos Armados ({eqarmados})</NavLink>
        </div>
        <br />
        <div className='frame-menu not'>
          <NavLink className='menu-button' to="/no-contesta">No Contesta ({nocontestaTotal})</NavLink>
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