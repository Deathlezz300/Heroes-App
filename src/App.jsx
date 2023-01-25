import React from 'react'
import { AuthProvider } from './auth/Context/AuthProvider'
import { AppRouter } from './Router/AppRouter'

export const App = () => {
  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  )
}

