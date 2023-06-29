import React from 'react'
import { useNavigate } from 'react-router-dom';

function ModalEditar({orden, render, setRender, setModalEditar, name, setName, lastname, setLastname, rut, setRut, telefono, setTelefono, email, setEmail, tipo, setTipo, marca, setMarca, modelo, setModelo, serie, setSerie, categoria, setCategoria, mecanico, setMecanico, revision, setRevision, mantenimiento, setMantenimiento}) {

    const navigate = useNavigate()

    async function editarHandle(n) {
        const button = document.getElementById('btn-editar-id'); 
        button.disabled = true;
        try {
          const response = await fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/update-partial/${n}/`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              nombre: name,
              apellidos: lastname,
              rut: rut,
              email: email,
              telefono: telefono,
              tipo: tipo,
              marca: marca,
              modelo: modelo,
              serie: serie,
              mantencion: mantenimiento,
              revision: revision,
              categoria: categoria,
              mecanico: mecanico
            })
          });
          if (response.ok) {
            setRender(!render);
            setTimeout(() => {
              navigate('/estado');
            }, 1500);
          }
      
        } catch (error) {
          console.error(error);
        }
      }

  return (
    <div> 
            <div className='busqueda-modal-admin'>
                <form onSubmit={() => editarHandle(orden.id)}>
                <div className='cliente-data-admin'>
                    <div className='elements-admin-edit'>
                        <div className='title-consulta-modal'>Orden Nº:<span className='orden-data'>{orden.id}</span></div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5px' }}>
                            <div style={{ display: 'flex', flexDirection: "column", textAlign: 'left' }}>Nombre:
                            <span className='orden-data'>{orden.nombre}</span>
                            </div>
                            <input placeholder='Nuevo nombre' onChange={(e) => setName(e.target.value)} value={name} style={{ width: '65%' }} required/>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5px' }}>
                            <div style={{ display: 'flex', flexDirection: "column", textAlign: 'left' }}>Apellidos:
                            <span className='orden-data'>{orden.apellidos}</span>
                            </div>                            
                            <input placeholder='Nuevo apellido' onChange={(e) => setLastname(e.target.value)} value={lastname} style={{ width: '65%' }} required/>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5px' }}>
                            <div style={{ display: 'flex', flexDirection: "column", textAlign: 'left' }}>RUT:
                            <span className='orden-data'>{orden.rut}</span>
                            </div>                            
                            <input placeholder='Nuevo rut' onChange={(e) => setRut(e.target.value)} value={rut} style={{ width: '65%' }} required/>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5px' }}>
                            <div style={{ display: 'flex', flexDirection: "column", textAlign: 'left' }}>Teléfono:
                            <span className='orden-data'>{orden.telefono}</span>
                            </div>                            
                            <input placeholder='Nuevo teléfono' onChange={(e) => setTelefono(e.target.value)} value={telefono} style={{ width: '65%' }} required/>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5px' }}>
                            <div style={{ display: 'flex', flexDirection: "column", textAlign: 'left' }}>Email:
                            <span className='orden-data'>{orden.email}</span>
                            </div>                            
                            <input placeholder='Nuevo email' onChange={(e) => setEmail(e.target.value)} value={email} style={{ width: '65%' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5px' }}>
                            <div style={{ display: 'flex', flexDirection: "column", textAlign: 'left' }}>Tipo:
                            <span className='orden-data'>{orden.tipo}</span>
                            </div>                            
                            <input placeholder='Nuevo Tipo' onChange={(e) => setTipo(e.target.value)} value={tipo} style={{ width: '65%' }} required/>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5px' }}>
                            <div style={{ display: 'flex', flexDirection: "column", textAlign: 'left' }}>Marca:
                            <span className='orden-data'>{orden.marca}</span>
                            </div>                            
                            <input placeholder='Nueva marca' onChange={(e) => setMarca(e.target.value)} value={marca} style={{ width: '65%' }} required/>
                        </div> 
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5px' }}>
                            <div style={{ display: 'flex', flexDirection: "column", textAlign: 'left' }}>Modelo:
                            <span className='orden-data'>{orden.modelo}</span>
                            </div>                            
                            <input placeholder='Nuevo modelo' onChange={(e) => setModelo(e.target.value)} value={modelo} style={{ width: '65%' }} required/>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5px' }}>
                            <div style={{ display: 'flex', flexDirection: "column", textAlign: 'left' }}>Serie:
                            <span className='orden-data'>{orden.serie}</span>
                            </div>                            
                            <input placeholder='Nueva serie' onChange={(e) => setSerie(e.target.value)} value={serie} style={{ width: '65%' }} required/>
                        </div>
                        <br />
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5px' }}>
                            <div className='title-consulta-modal'>Propósito:{orden.revision === true?<span className='orden-data'>Revisión</span>:<span className='orden-data'>Mantenimiento</span>}</div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', flexDirection: 'row'}}>  
                                <label className='label' htmlFor="mantenimiento">Mantenimiento</label>
                                <input
                                    value={mantenimiento}
                                    checked={mantenimiento} 
                                    type='radio' 
                                    name='proposito' 
                                    id="mantenimiento" 
                                    onChange={(e) => {
                                        setMantenimiento(!mantenimiento)
                                        setRevision(false)
                                    }} 
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <label className='label' htmlFor="revision">Revisión</label>
                                <input
                                    value={revision}
                                    checked={revision} 
                                    type='radio' 
                                    name='proposito' 
                                    id="revision" 
                                    onChange={(e) => {
                                        setRevision(!revision)
                                        setMantenimiento(false)
                                    }} 
                                    />
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5px' }}>
                            <div className='title-consulta-modal'>Categoría:<span className='orden-data'>{orden.categoria}</span></div>
                            <select onChange={(e) => setCategoria(e.target.value)} value={categoria} id="categoria" required>
                                <option value="" disabled selected>Seleccionar</option>
                                <option value="Ocasional">Ocasional</option>
                                <option value="Semiprofesional">Semiprofesional</option>
                                <option value="Profesional">Profesional</option>
                            </select>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5px' }}>
                            <div className='title-consulta-modal'>Mecánico:<span className='orden-data'>{orden.mecanico}</span></div>
                            <select onChange={(e) => setMecanico(e.target.value)} value={mecanico} id="recepcion" required>
                                <option value="" disabled selected>Seleccionar</option>
                                <option value="1">Técnico 1</option>
                                <option value="2">Técnico 2</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                    </div>
                </div>
                <br />
                <button className='button-close' onClick={() => setModalEditar("modal-inactive")}>Cancelar</button>
                <input type='submit' id="btn-editar-id" className='button-editar' value="Editar" />
                </form> 
            </div>      
    </div>
  )
}

export default ModalEditar