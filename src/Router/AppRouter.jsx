import React from 'react'
import { Navigate, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { LoginPage } from '../Pages/LoginPage'
import { HeroesRoutes } from '../heroes/Routes/HeroesRoutes'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/*' element={<HeroesRoutes/>}/>
        </Routes>
    </>
  )
}
