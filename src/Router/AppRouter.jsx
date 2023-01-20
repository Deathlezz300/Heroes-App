import React from 'react'
import { Navigate, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { MarvelPage } from '../heroes/Pages/MarvelPage'
import { DCPage } from '../heroes/Pages/DCPage'
import { LoginPage } from '../Pages/LoginPage'
import { NavBar } from '../heroes/Components/NavBar'

export const AppRouter = () => {
  return (
    <>

        <NavBar/>
        <Routes>
            <Route path='marvel' element={<MarvelPage/>}/>
            <Route path='dc' element={<DCPage/>}/>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='/*' element={<Navigate to='/marvel'/>}/>
        </Routes>
    </>
  )
}
