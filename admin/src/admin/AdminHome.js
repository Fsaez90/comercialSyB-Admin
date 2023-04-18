import React from 'react'
import { NavLink } from 'react-router-dom'

function AdminHome() {
  return (
    <div>
        AdminHome
        <NavLink className='menu-button' to="/app">Recepción</NavLink>
    </div>
  )
}

export default AdminHome