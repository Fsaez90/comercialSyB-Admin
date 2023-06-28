import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import "../static/busqueda.css"
import AddHomeIcon from '@mui/icons-material/AddHome';
import BusquModal from "./BusquModal";

function BusquedaConsulta({date, render, setRender}) {
    const [param, setParam] = useState("")
    const [orden, setOrden] = useState()
    const [modal, setModal] = useState("modal-inactive")
    const[modalData, setModalData] = useState({})
    const[notExist, setNotExist] = useState("")
  
    function getOrdenData() {
        fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/search-orden/${param}`)
            .then(response => {
            if(response.status === 200) { return response.json()}
            if(response.status === 404) { setNotExist("Orden no encontrada")}
            })
            .then(data => setOrden(data))
      }
    
      useEffect(() => {
        getOrdenData()
        },[param])
  
    if (orden && orden.length !== 0) {
      return (
        <div className='frame-admin'>
          <h1 className='title-component'>Consulta estado de orden</h1>
          <input type="text" placeholder='NºOrden/Rut/Nombre' onChange={(e) => {
            setParam(e.target.value)
            }} value={param} />
          <div className='busqueda-modal-admin'>
            <div className='cliente-data-render'>
            {orden.map((x) => {
                return (
                    <div key={x.id} className='modal-elements-admin' onClick={() => {
                        setModalData(x)
                        setModal("modal-admin")
                        }}>
                        <div className='title-consulta-admin'>Nº:<span className='orden-data'>{x.id}</span></div>
                        <div className='title-consulta-admin'>Nombre:<span className='orden-data'>{x.nombre} {x.apellidos}</span></div>
                    </div>
                )
            })}
            </div>
            <div className={modal}>
                <BusquModal render={render} setRender={setRender} orden={modalData} date={date} setModal={setModal}/>
            </div>        
          </div>
          <button className='button-list-admin' onClick={() => {
                  setOrden(null)
                  setParam("")
                  }}>Refresh</button>  
          <br/>
          <br/>
          <NavLink to="/"><AddHomeIcon style={{color: "rgb(33, 33, 240)", fontSize: "30px"}} ></AddHomeIcon></NavLink>
        </div>
      )
    } else {
  
      return (
        <div className='frame'>
          <h1 className='title-component'>Consulta estado de orden</h1>
          <input type="text" placeholder='NºOrden/Rut/Nombre' onChange={(e) => {
            setParam(e.target.value)
            setNotExist("")}} value={param} />
          <br/>
          <p className='not-exist'>{notExist}</p>
          <br/>
          <NavLink to="/"><AddHomeIcon style={{color: "rgb(33, 33, 240)", fontSize: "30px"}} ></AddHomeIcon></NavLink>
        </div>
      )
    } 
}

export default BusquedaConsulta