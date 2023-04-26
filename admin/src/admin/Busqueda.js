import React, {useState, useEffect} from 'react'
import BusquedaModal from './BusquedaModal'

function Busqueda() {
  
  const [param, setParam] = useState("")
  const [orden, setOrden] = useState(null)
  const[notExist, setNotExist] = useState("")
  const [modal, setModal] = useState("modal-inactive")
  const[modalData, setModalData] = useState({})


  function getOrdenData() {
    fetch(`http://127.0.0.1:8000/comercial/search-orden/${param}`)
        .then(response => {
        if(response.status === 200) { return response.json()}
        if(response.status === 404) { setNotExist("Orden no encontrada")}
        })
        .then(data => setOrden(data))
  }

  useEffect(() => {
    getOrdenData()
    },[param])
   
    if (orden && orden.length !== 0)  {
    
      return (
      <div className='frame-admin'>
        <input type="text" className='search-bar' placeholder='NºOrden/Nombre/RUT' onChange={(e) => {
          setParam(e.target.value)
          }} value={param}/>
        <div className='busqueda-modal-admin'>
          <div className='cliente-data-admin'>
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
            <BusquedaModal getOrdenData={getOrdenData} orden={modalData} setModal={setModal}/>
          </div>
          <button className='button-list-admin' onClick={() => {
                setOrden(null)
                setParam("")
                }}>Refresh</button>          
            </div>
        </div>
    )
  } else {

    return (
      <div className='frame'>
        <input type="text" className='search-bar' placeholder='NºOrden/Nombre/RUT' onChange={(e) => {
          setParam(e.target.value)
          setNotExist("")}} value={param} />
        <br/>
        <p>{orden}</p>
      </div>
    )
  } 
}

export default Busqueda