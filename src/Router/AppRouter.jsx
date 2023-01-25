import React from 'react'
import { Navigate, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { LoginPage } from '../Pages/LoginPage'
import { HeroesRoutes } from '../heroes/Routes/HeroesRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<PublicRoutes>
              <LoginPage/>
            </PublicRoutes>}/>
            <Route path='/*' element={<PrivateRoutes>
              <HeroesRoutes/>
            </PrivateRoutes>}/>
        </Routes>
    </>
  )
}
