import React, { useState, useEffect } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom' 
import AddHomeIcon from '@mui/icons-material/AddHome';
import { Audio } from 'react-loader-spinner'

function ListasRetiro({render, setRender}) {

  const [lista, setLista] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [loading, setLoading] = useState(true);

  useEffect(() => {  
    getData();
  },[refresh])


  const getData = async () => {
    try {
      setLoading(true)
      const result = await fetch('https://comercialsyb-backend-production.up.railway.app/comercial/para_retiro/')
      const data = await result.json();
      setLista(data.slice().sort((a, b) => a.id - b.id))
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Ensure loading indicator is hidden in case of an error
    }
  }

  return (
    <div>
      {loading ? (
        <Audio
          height="70"
          width="70"
          radius="9"
          color="white"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        /> 
      ) : (
        <div>
        <h1 className='title-component'>Ordenes listas para retiro: </h1>
        <div className='render-section'>
        {lista.map((x, index) => {
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
      )}
    </div>
  )
}

export default ListasRetiro