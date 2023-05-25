import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "../static/modalIngreso.css";
import AddHomeIcon from '@mui/icons-material/AddHome';

function OTxingresar({listaOt, render, setRender}) {

  const [modal, setModal] = useState("modal-inactive")
  const [id, setId] = useState()
  const [nombre, setNombre] = useState()
  const [apellidos, setApellidos] = useState()
  const [telefono, setTelefono] = useState()
  const [email, setEmail] = useState()
  const [rut, setRut] = useState()
  const [tipo, setTipo] = useState()
  const [marca, setMarca] = useState()
  const [modelo, setModelo] = useState()
  const [serie, setSerie] = useState()
  const [observaciones, setObservaciones] = useState()
  const [espada, setEspada] = useState()
  const [cadena, setCadena] = useState()
  const [funda, setFunda] = useState()
  const [disco, setDisco] = useState()
  const [mantencion, setMantencion] = useState()
  const [revision, setRevision] = useState()
  const [mecanico, setMecanico] = useState()
  const [isGarantia, setIsGarantia] = useState()
  const  navigate  = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setRender(!render)
    }, 500); 
},[modal])


function Ingresar (n) {
  fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/update/${n}/`, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        nombre: nombre,
        apellidos: apellidos,
        rut: rut,
        email: email,
        telefono: telefono,
        tipo: tipo,
        marca: marca,
        modelo: modelo,
        serie: serie,
        observaciones: observaciones,
        espada: espada,
        cadena: cadena,
        funda: funda,
        disco: disco,
        mantencion: mantencion,
        revision: revision,
        mecanico: mecanico,
        ingreso_sistema: true
    })
  })
  setTimeout(() => {
    setRender(!render)
    setModal("modal-inactive")
    navigate('/otxingresar') 
  }, 200);
}
  
  return (
    <div className='frame'>
      <h1 className='title-component'>Ordenes de trabajo por ingresar a PC: </h1>
      <div className='render-section'>
      {listaOt.map((x, index) => {
        return(
          <div className="list-section" key={index}>
              <p className='number-list'>Orden Nº {x.id}</p>
              <button className='button-list' onClick={() => 
                {setModal("modal")
                setId(x.id)
                setNombre(x.nombre)
                setApellidos(x.apellidos)
                setRut(x.rut)
                setTelefono(x.telefono)
                setEmail(x.email)
                setTipo(x.tipo)
                setMarca(x.marca)
                setModelo(x.modelo)
                setSerie(x.serie)
                setEspada(x.espada)
                setCadena(x.cadena)
                setFunda(x.funda)
                setDisco(x.disco)
                setObservaciones(x.observaciones)
                setMantencion(x.mantencion)
                setRevision(x.revision)
                setMecanico(x.mecanico)
                setIsGarantia(x.garantia)
              }
                }>Comenzar</button>         
          </div> 
          )
      })}
      </div>
      <NavLink to="/app"><AddHomeIcon style={{color: "rgb(33, 33, 240)", fontSize: "30px"}} ></AddHomeIcon></NavLink>
      <div className={modal}>
        <div className='modal-content'>
          <div className='modal-details'>
              <p>Nombre: <span className='data-modal'>{nombre}</span></p>
              <p>Apellidos: <span className='data-modal'>{apellidos}</span></p>
              <p>RUT: <span className='data-modal'>{rut}</span></p>
              <p>Telefono: <span className='data-modal'>{telefono}</span></p>
              <p>Email: <span className='data-modal'>{email}</span></p>
          </div>
          <div className='modal-machine-details'>
              <p>Tipo: <span className='data-modal'>{tipo}</span></p>
              <p>Modelo: <span className='data-modal'>{modelo}</span></p>
              <p>Marca: <span className='data-modal'>{marca}</span></p>
              <p>Serie: <span className='data-modal'>{serie}</span></p>
              {espada? <p>Espada: <span className='data-modal'>Sí</span></p>: null}
              {cadena? <p>Cadena: <span className='data-modal'>Sí</span></p>: null}
              {funda? <p>Funda: <span className='data-modal'>Sí</span></p>: null}
              {disco? <p>Disco de corte: <span className='data-modal'>Sí</span></p>: null}
              <p>Observaciones: <span className='data-modal'>{observaciones}</span></p>
              {mantencion? <p>Equipo a mantencion</p>: null}
              {revision? <p>Equipo a Revisión</p>: null}
              {isGarantia? <p>Equipo a Garantía</p>: null}
              <p>Mecanico: <span className='data-modal'>{mecanico}</span></p>
          </div>
          <div className='modal-buttons'>
              <button className='button-list' onClick={()=> setModal("modal-inactive")}>Volver</button>
              <button className='button-list' onClick={() => {
                Ingresar(id) 
                }}>Ingresar</button>
          </div>
        </div>
      </div>  
      
    </div>

  )
}

export default OTxingresar