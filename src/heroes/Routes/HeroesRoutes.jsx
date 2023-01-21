import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { NavBar } from '../Components/NavBar'
import { MarvelPage } from '../Pages/MarvelPage'
import { DCPage } from '../Pages/DCPage'
import { Navigate } from 'react-router-dom'
import { Buscador } from '../Components/Buscador'

export const HeroesRoutes = () => {
  return (
    <>
        <NavBar/>
        <Routes>
            <Route path='marvel' element={<MarvelPage/>}/>
            <Route path='dc' element={<DCPage/>}/>
            <Route path='search' element={<Buscador/>}/>
            <Route path='/*' element={<Navigate to='/marvel'/>}/>
        </Routes>
    </>
  )
}
