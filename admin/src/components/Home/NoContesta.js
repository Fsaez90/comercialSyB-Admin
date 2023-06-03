import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import "../static/modalNotificaciones.css"

function NoContesta({render, setRender, noContestaretiro, noContestappto}) {
    
    useEffect(() => {
        setRender(!render)
      },[noContestaretiro, noContestappto])
    
      return (
        <div className='frame-menu'>
            <h1 className='title-menu'>Clientes inubicados pendientes de notificar</h1>
            <div className='menu'>
                <div>
                    <div className='frame-menu'>
                        <NavLink className='menu-button' to="/no-contesta-pptos">Presupuestos listos</NavLink>
                        {noContestappto > 0? <p id='not-count'>{noContestappto}</p>: null}
                    </div>
                    <br/><br/>
                    <div className='frame-menu'>
                        <NavLink className='menu-button' to="/no-contesta-retiro">Retiro de máquinas</NavLink>
                        {noContestaretiro > 0? <p id='not-count'>{noContestaretiro}</p>: null}
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