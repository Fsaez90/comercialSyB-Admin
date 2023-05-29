import React, { useState, useEffect } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom' 
import AddHomeIcon from '@mui/icons-material/AddHome';

function ListasRetiro({listasRetiro, render, setRender}) {
  useEffect(() => {
    setTimeout(() => {
      setRender(!render)
    }, 500); 
  },[])

  return (
    <div>
      <h1 className='title-component'>Ordenes listas para retiro: </h1>
      <div className='render-section'>
      {listasRetiro.map((x, index) => {
        return(
          <div className="list-section" key={index}>
              <p className='number-list'>Orden Nº {x.id}</p>
              {x.cliente_notificado_retiro?<CheckCircleIcon style={{color: "green"}}></CheckCircleIcon>: <CloseIcon style={{color: "red"}}></CloseIcon>}        
          </div> 
          )
      })}
      </div>
      <div className='menu-admin'>
            <NavLink to="/"><AddHomeIcon style={{color: "rgb(33, 33, 240)", fontSize: "30px"}} ></AddHomeIcon></NavLink>
      </div>
    </div>
  )
}

export default ListasRetiro