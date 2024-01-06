import React from 'react'
import { NavLink } from 'react-router-dom'
import "../static/modalNotificaciones.css"

function NoContesta({noContRetiro, noContPpto}) {
    
      return (
        <div className='frame-menu'>
            <h1 className='title-menu'>Clientes inubicados pendientes de notificar</h1>
            <div className='menu'>
                <div>
                    <div className='frame-menu'>
                        <NavLink className='menu-button' to="/no-contesta-pptos">Presupuestos listos</NavLink>
                        {noContPpto > 0? <p id='not-count'>{noContPpto}</p>: null}
                    </div>
                    <br/><br/>
                    <div className='frame-menu'>
                        <NavLink className='menu-button' to="/no-contesta-retiro">Retiro de máquinas</NavLink>
                        {noContRetiro > 0? <p id='not-count'>{noContRetiro}</p>: null}
                    </div>
                </div>
            </div>
            <br/><br/><br/>
            <div>
                <NavLink to="/notificaciones">Volver</NavLink>
            </div>
        </div>
      )
}

export default NoContesta