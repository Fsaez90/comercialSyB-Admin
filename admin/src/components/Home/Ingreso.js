import React, {useState, useRef} from 'react';
import ReactDOMServer from 'react-dom/server';
import { NavLink, useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import SignaturePad from "react-signature-canvas";
import '../static/formularioIngreso.css';
import AddHomeIcon from '@mui/icons-material/AddHome';
import html2pdf from 'html2pdf.js';
import logo from "../static/img/syblogo.png"


function Ingreso({setRender, render, date, lastId}) {

  const  navigate  = useNavigate();
  const [loadMessage, setLoadMessage] =useState()
  const [isDisable, setIsDisable] = useState("buttons")
  const [imageURL, setImageURL] = useState(null)
  const [success, setSuccess] = useState("overlay")
  const [succesMsg, setSuccessMsg] = useState("success-msg")
  const [mecanico, setMecanico] =useState()
  const [name, setName] = useState()
  const [lastname, setLastname] = useState()
  const [rut, setRut] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState("+569")
  const [tipo, setTipo] = useState()
  const [modelo, setModelo] = useState()
  const [marca, setMarca] = useState()
  const [serie, setSerie] = useState()
  const [espada, setEspada] = useState(false)
  const [cadena, setCadena] = useState(false)
  const [funda, setFunda] = useState(false)
  const [disco, setDisco] = useState(false)
  const [observaciones, setObservaciones] = useState()
  const [mantenimiento, setMantenimiento] = useState(false)
  const [revision, setRevision] = useState(false)
  const [garantia, setGarantia] = useState(false)
  const [status, setStatus] = useState()
  const [categoria, setCategoria] = useState()
  const sigCanvas = useRef({})
  const signButton = useRef({})
  const clear = () => sigCanvas.current.clear();
  const save = () => setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"))

  const htmlString = ReactDOMServer.renderToStaticMarkup(
    <div style={{ padding: '80px', fontFamily: 'arial' }}>
      <div style={{ marginBottom: '20px', paddingTop: '1px', paddingRight: '1px', paddingBottom: '1px', paddingLeft: '1px' }}>
        <div style={{ marginBottom: '10px', fontSize: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1px' }}>
            <h1 style={{ fontSize: '24px', marginBottom: '3px'}}>Comercial S&B</h1>
            <p style={{ fontSize: '15px', marginBottom: '3px' }}>Servicio Técnico Autorizado</p>
            <p style={{ fontSize: '15px', marginBottom: '3px' }}>STIHL</p>
            <p style={{ fontSize: '15px', marginBottom: '3px' }}>Tres Carrera # 459, Los Andes</p>
            <p style={{ fontSize: '15px', marginBottom: '3px' }} >Fono: (34)229 54 12</p>
            <p>Email: comercialsyb@gmail.com</p>
          </div>
          <div>
            <img src={logo} style={{ width: '150px', marginBottom: '10px' }} />
          </div>
        </div>
        <div>
          <div style={{ marginBottom: '5px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
            <p style={{ marginLeft: '20px' }}>Nombre: {name} {lastname}</p>
            <p style={{ marginLeft: '20px' }}>RUT: {rut}</p>
            <p style={{ marginLeft: '20px', fontSize: '35', padding: '5px', borderRadius: '3px', color: 'white', backgroundColor: 'orange' }}>Orden Nº: {lastId + 1}</p>
          </div>
          <div style={{ marginTop: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
            {email?<p style={{ marginLeft: '20px' }}>Email: {email}</p>:<p style={{ marginLeft: '20px' }}>Email: Sin Correo</p>} 
            <p style={{ marginLeft: '20px' }}>Teléfono: {phone}</p>
            <p style={{ marginLeft: '20px' }}>Fecha: {date}</p>
          </div>
        </div>
        <div style={{ marginBottom: '10px', marginTop: '20px', fontSize: '6px' }}>
          <p>Las reparaciones se entregan en un plazo máximo de 10 días hábiles UNA VEZ APROBADO EL PRESUPUESTO.</p>
          <p>Las reparaciones tienen garantía de 30 días sobre el trabajo realizado según guía de servicio.</p>
          <p>NOTA:</p>
          <p>Las máquinas no retiradas durante 60 días serán enviadas a bodega y la empresa no se responsabiliza por deterioros producidos.</p>
          <p>Las máquinas no retiradas durante 1 año según el Artículo 42 de la ley de comercio, serán consideradas como abandonadas por sus propietarios, por lo que la empresa podrá disponer de ellas.</p>
          <p>El valor del presupuesto puede sufrir modificaciones si durante su proceso de reparación se detectan defectos no advertidos en el diagnóstico original que impliquen gastos adicionales. Esta variación, en el caso de reparación, será informada al cliente antes de continuar con la reparación del equipo.</p>
          <p>El presupuesto tiene una vigencia de 10 días desde la fecha de emisión.</p>
          <p>
            <strong>El presupuesto rechazado tendrá un costo de $10.000 pesos (IVA Inc.), Equipos mayores $20.000 pesos</strong>
            <strong>(IVA Inc.).</strong>
          </p>
        </div>
        <div style={{  marginBottom: '5px', display: "flex", flexDirection: "row", justifyContent: 'space-around', gap: '50px' }}>
          <div>
            <p>Tipo: {tipo}</p>
            <p>Modelo: {modelo}</p>
            <p>Marca: {marca}</p>
            <p>Serie: {serie}</p>
            <p>Categoría: {categoria}</p>
          </div>
          <div>
            {espada ? <p>Espada: Si</p> : null}
            {cadena ? <p>Cadena: Si</p> : null}
            {funda ? <p>Funda: Si</p> : null}
            {disco ? <p>Disco: Si</p> : null}
            <p>{mantenimiento ? 'Propósito: MANTENIMIENTO' : null}</p>
            <p>{revision ? 'Propósito: REVISION' : null}</p>
            <p>{garantia ? 'Propósito: GARANTIA' : null}</p>
            {garantia ? <p>GARANTÍA</p> : null}
          </div>
        </div>
        <p style={{ fontSize: '6px' }}>Observaciones: {observaciones}</p>
        <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={imageURL} style={{ width: '150px', height: '100px', borderBottom: '1px solid #000', marginBottom: '10px' }} />
          <p>Firma Cliente Sr/s: {name} {lastname}, Rut: {rut}</p>
        </div>
      </div>
    </div>
);

async function crearOrden(e) {
  e.preventDefault();
  if (!email || !email.trim()) {
    const requestData = {
      nombre: name,
      apellidos: lastname,
      rut: rut,
      email: email,
      telefono: phone,
      tipo: tipo,
      marca: marca,
      modelo: modelo,
      serie: serie,
      observaciones: observaciones,
      espada: espada,
      cadena: cadena,
      funda: funda,
      disco: disco,
      mantencion: mantenimiento,
      revision: revision,
      garantia: garantia,
      mecanico: mecanico,
      status: status,
      fecha_ingreso: date,
      categoria: categoria
    };
    try {
      const response = await fetch("https://comercialsyb-backend-production.up.railway.app/comercial/crear/", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const pdfBlob = await html2pdf().from(htmlString).output('blob');
        const pdfUrl = URL.createObjectURL(pdfBlob);
        html2pdf().from(htmlString).save(`comprobante_${name}_${lastname}.pdf`);
        window.open(pdfUrl);
        setLoadMessage("Orden ingresada exitosamente");
        setRender(!render);
        // Success
        setSuccess("overlay-active");
        setSuccessMsg("success-msg-active");
        setTimeout(() => {
          navigate("/");
        }, 2500);
      } else {
        throw new Error('Error creating order');
      }
    } catch (error) {
      console.log('Error:', error);
      setLoadMessage("Por favor, inténtelo nuevamente");
      setSuccess("overlay-active");
      setSuccessMsg("success-msg-active-error");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  } else {
    try {
       // Generate the PDF file using html2pdf
      const pdfBlob = await html2pdf().from(htmlString).output('blob');
      // Create a FormData object
      const formData = new FormData();
      formData.append('name', name);
      formData.append('lastname', lastname);
      formData.append('email', email);
      formData.append('file', pdfBlob, `comprobante_${name}_${lastname}.pdf`);

      const requestData = {
        nombre: name,
        apellidos: lastname,
        rut: rut,
        email: email,
        telefono: phone,
        tipo: tipo,
        marca: marca,
        modelo: modelo,
        serie: serie,
        observaciones: observaciones,
        espada: espada,
        cadena: cadena,
        funda: funda,
        disco: disco,
        mantencion: mantenimiento,
        revision: revision,
        garantia: garantia,
        mecanico: mecanico,
        status: status,
        fecha_ingreso: date,
        categoria: categoria
      };
  
      // Send the PDF file to the server using fetch
      const [ingresoResponse, Emailresponse] = await Promise.all([
        fetch("https://comercialsyb-backend-production.up.railway.app/comercial/email-ingreso/", {
        method: "POST",
        body: formData,
      }),
      fetch("https://comercialsyb-backend-production.up.railway.app/comercial/crear/", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData),
      })
      ])
      if (ingresoResponse.ok && Emailresponse.ok) {
        html2pdf().from(htmlString).save(`comprobante_${name}_${lastname}.pdf`);
        console.log('Email sent successfully');
        setLoadMessage("Orden ingresada exitosamente, comprobante enviado a correo");
        setRender(!render);
        setSuccess("overlay-active");
        setSuccessMsg("success-msg-active");
        setTimeout(() => {
          navigate("/");
        }, 2500);
      } else {
        throw new Error('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
      setLoadMessage("Por favor, inténtelo nuevamente");
      setSuccess("overlay-active");
      setSuccessMsg("success-msg-active-error");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }
}
 

  return (
    <div className='frame'>
      <h1 className='title-component'>Formulario Ingreso de equipo:</h1>
      <br />
      <form className='form' onSubmit={(e) => crearOrden(e)}>
        <div className='subtitulos'>Datos cliente</div>
         <br />
         <input className='form-field' type="text" placeholder='Nombre' onChange={(e) => setName(e.target.value)} required/>
          <input className='form-field' type="text" placeholder='Apellidos' onChange={(e) => setLastname(e.target.value)} required/>
            <br />
          <input className='form-field' type="text" placeholder='Rut' onChange={(e) => setRut(e.target.value)} required/>
          <input className='form-field'  type='text' placeholder='Teléfono' onChange={(e) => setPhone(e.target.value)} required/>
            <br />
          <input className='form-field' type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <br />
          <div className='subtitulos'>Datos del equipo</div>
            <br />
            <input className='form-field' type="text" placeholder='Tipo' onChange={(e) => setTipo(e.target.value)} required/>
            <input className='form-field' type="text" placeholder='Modelo' onChange={(e) => setModelo(e.target.value)} required/>
            <br />
            <input className='form-field' type="text" placeholder='Marca' onChange={(e) => setMarca(e.target.value)} required/>
            <input className='form-field' type="text" placeholder='Serie' onChange={(e) => setSerie(e.target.value)} required/>
            <br />
            <div className='accesorios'>
              <input type='checkbox' id="espada" onChange={(e) => setEspada(!espada)}/>
              <label className='label' for="espada">Espada</label><br />
              <input type='checkbox' id="cadena" onChange={(e) => setCadena(!cadena)}/>
              <label className='label' for="cadena">Cadena</label><br />
              <input type='checkbox' id="funda" onChange={(e) => setFunda(!funda)}/>
              <label className='label' for="funda">Funda</label><br />
              <input type='checkbox' id="disco" onChange={(e) => setDisco(!disco)}/>
              <label className='label' for="disco">Disco de Corte</label>
            </div>
            <br />
            <textarea className='observaciones' placeholder='Observaciones' onChange={(e) => setObservaciones(e.target.value)} value={observaciones}/>
            <br />
            <div>
              <label className='label' htmlFor="mantenimiento">Mantenimiento</label>
              <input type='radio' name='proposito' id="mantenimiento" onChange={(e) => {
                setMantenimiento(!mantenimiento)
                setRevision(false)
                setStatus("Equipo en espera de Mantención")
                }} value={mantenimiento} required/>
                <br />
              <label className='label' htmlFor="revision">Revisión</label>
              <input type='radio' name='proposito' id="revision" onChange={(e) => {
                setRevision(!revision)
                setMantenimiento(false)
                setStatus("Equipo en espera de Revision")
                }} value={revision}/>
              <br />
              <label className='label' htmlFor="garantia">Garantía</label>
              <input type='radio' name='proposito' id="garantia" onChange={(e) => {
                setGarantia(!garantia)
                setRevision(false)
                setMantenimiento(false)
                setStatus("Equipo en espera de Revision de Garantia")
                }} value={garantia}/>
            </div>
            <br />
            <label for="categoría">Categoría:</label>
          <select onChange={(e) => setCategoria(e.target.value)} id="categoria" required>
            <option value="" disabled selected>Seleccionar</option>
            <option value="Ocasional">Ocasional</option>
            <option value="Semiprofesional">Semiprofesional</option>
            <option value="Profesional">Profesional</option>
          </select>
          <br /><br />
          <label for="recepcion">Recepcionado por:</label>
          <select onChange={(e) => setMecanico(e.target.value)} id="recepcion" required>
          <option value="" disabled selected>Seleccionar</option>            <option value="1">Técnico 1</option>
            <option value="2">Técnico 2</option>
            <option value="Admin">Admin</option>
          </select>
        <br /><br />
      <Popup modal trigger={<div ref={signButton} className={isDisable} disabled={isDisable}>Firmar</div>} closeOnDocumentClick={false}>
        {close => (
          <div>
              <SignaturePad
                ref={sigCanvas} 
                canvasProps={{
                className: "SignaturePad",
                clearOnResize: false
                }}
              />
              <div className='signature-pad-buttons'>
                <button className='buttons' onClick={() => {
                      save();
                      setIsDisable("notEnable")
                      close();
                    }}>Ok</button>
                <button className='buttons' onClick={close}>Volver</button>
                <button className='buttons' onClick={clear}>Corregir</button>
              </div>
          </div>
        )}
      </Popup>
        <br /><br />
      {imageURL ? (
            <Popup modal trigger={<div className='buttons'>Ver comprobante</div>} closeOnDocumentClick={false}>
            {close => (
              <div className='comprobante'>
                <div>
                  <div className='encabezado'>
                    <div className='about'>
                      <h1>Comercial S&B</h1>
                      <p>Servicio Técnico Autorizado</p>
                      <p>STIHL</p>
                      <p>Tres Carrera # 459, Los Andes</p>
                      <p>Fono: (34)229 54 12</p>
                      <p>Email: comercialsyb@gmail.com</p>
                    </div>
                  </div>
                  <div>
                    <p>Orden Nº: {lastId + 1}</p>
                    <p>Nombre: {name} </p>
                    <p>Apellidos: {lastname}</p>
                    <p>RUT: {rut}</p>
                    <p>Email: {email} </p>
                    <p>Teléfono: {phone} </p>
                    <p>Fecha: {date}</p>
                  </div>
                  <div className='miselaneus'>
                      <p>Las reparaciones se entregan en un plazo máximo de 10 días hábiles UNA VEZ APROBADO EL PRESUPUESTO.</p>
                      <p>Las reparaciones tienen garantía de 30 días sobre el trabajo realizado según guía de servicio.</p>
                      <p>NOTA:</p>
                      <p>Las máquinas no retiradas durante 60 días serán enviadas a bodega y la empresa no se responsabiliza por deterioros producidos.</p>
                      <p>Las máquinas no retiradas durante 1 año segun el Articulo 42 de la ley de comercio, será considerada como abandonada por sus propietarios, por lo que la empresa podrá disponer de ella.</p>
                      <p>El valor del presupuesto puede sufrir modificaciones si durante su preceso de reparación se detectan defectos no advertidos en el diagnostico original que impliquen gastos adicionales. Esta variación, en el caso de reparación, será informada al cliente antes de continuar con la reparación del equipo.</p>
                      <p>El presupuesto tiene una vigencia de 10 días desde la fecha de emisión.</p>
                      <p><span>El presupuesto rechazado tendrá un costo de $10.000 pesos (IVA Inc.), Equipos mayores $20.000 pesos (IVA Inc.).</span></p>
                  </div>
                  <div>
                    <p>Tipo: {tipo} </p>
                    <p>Modelo: {modelo} </p>
                    <p>Marca: {marca} </p>
                    <p>Serie: {serie} </p>
                    {espada ? (<p>Espada: Si</p>): null}
                    {cadena ? (<p>Cadena: Si</p>): null}
                    {funda ? (<p>Funda: Si</p>): null}
                    {disco ? (<p>Disco: Si</p>): null}
                  </div>
                  <p>Observaciones: {observaciones}</p>
                  <br />
                  {mantenimiento? (<p>Equipo a Mantenimiento</p>): <p>Equipo a Revisión</p>}
                  <b/>
                  <p>Equipo recibido por: {mecanico}</p>
                  <div className='firma-area'>
                  <img
                    src={imageURL}
                    alt= "Firma" 
                    style={{
                      display: "block",
                      margin: "0 auto",
                      borderBottom: "1px solid black",
                      width: "150px"
                    }}
                  />
                  <br/>
                  <p>Firma Cliente Sr/s: {name} {lastname}, Rut: {rut}</p>
                  </div>
                </div>
                <button onClick={close}>Cerrar</button>
              </div>
            )}
          </Popup>
      ): null}
      <br /><br />
      {imageURL ? (<input type='submit' className='buttons-admin' onTouchEnd={(e) => crearOrden(e)} value="IMPRIMIR" />): null}
      </form>
      <div className="return-menu">
        <NavLink to="/app"><br /><AddHomeIcon style={{color: "rgb(33, 33, 240)", fontSize: "30px"}} ></AddHomeIcon></NavLink>      </div>
      <div id={success}>
        <p id={succesMsg}>{loadMessage}</p>
      </div>
    </div>
  )
}

export default Ingreso