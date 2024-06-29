import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function DashboardLayout() {
  return (
    <div className='dashboard__container d-flex'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default DashboardLayout
