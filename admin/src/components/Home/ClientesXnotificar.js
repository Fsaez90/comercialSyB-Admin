import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function ClientesXnotificar({render, setRender, pptoslistos, mmtoslistos, eqreparados, eqarmados, nocontestaTotal, solicitudRepuestos}) {

  useEffect(() => {
    setTimeout(() => {
      setRender(!render)
    }, 500); 
  },[])

  
  return (
    <div className='frame-menu'>
    <h1 className='title-menu'>Notificaciones a Clientes por realizar:</h1>
    <div className='menu'>
      <div>
        <div className='frame-menu'>
          <NavLink className='menu-button' to="/pptos-listos">Presupuestos Listos</NavLink>
          {pptoslistos > 0? <p id='not-count'>{pptoslistos}</p>: null}
        </div><br />
        <div className='frame-menu'>
          <NavLink className='menu-button' to="/mmto-solicitud-rep">Solicitud Repuestos Mantenciones</NavLink>
          {solicitudRepuestos > 0? <p id='not-count'>{solicitudRepuestos}</p>: null}
        </div>
        <br /><br />
        <div className='frame-menu'>
          <NavLink className='menu-button' to="/mantenciones-listas">Mantenciones Listas</NavLink>
          {mmtoslistos > 0? <p id='not-count'>{mmtoslistos}</p>: null}
        </div>
        <div className='frame-menu'>
          <NavLink className='menu-button' to="/equipos-reparados">Equipos Reparados</NavLink>
          {eqreparados > 0? <p id='not-count'>{eqreparados}</p>: null}
        </div>
        <br /><br />
        <NavLink className='menu-button' to="/equipos-armados">Equipos Armados ({eqarmados})</NavLink>
        <br /><br />
        <div className='frame-menu'>
          <NavLink className='menu-button' to="/no-contesta">No Contesta ({nocontestaTotal})</NavLink>
          {/* {(noContestappto + noContestaretiro) > 0? <p id="not-count">{noContestappto + noContestaretiro}</p>: null} */}
        </div>
      </div>
      
    </div>
    <br/><br/><br/>
    <div>
        <NavLink to="/">Menu</NavLink>
    </div>
</div>
  )
}

export default ClientesXnotificar