import React from 'react'
import { useAuth } from '../../hooks/useAuth'

function Dashboard() {
  const { logout } = useAuth()
  return (
    <div>
      <h1>Ini Dashboard</h1>
      <button type='button'onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard
