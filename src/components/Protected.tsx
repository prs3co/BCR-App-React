import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'


interface ProtectedProps {
  children: React.ReactElement
}

function Protected({ children }: ProtectedProps) {
  const user = useAuth()
  return (
    user ? (
      children
    ) : (
      <Navigate to={'/dashboard/login'} replace />
    )
  )
}

export default Protected