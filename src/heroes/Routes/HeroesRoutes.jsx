import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { NavBar } from '../Components/NavBar'
import { MarvelPage } from '../Pages/MarvelPage'
import { DCPage } from '../Pages/DCPage'
import { Navigate } from 'react-router-dom'
import { HeroPage } from '../Components/HeroPage'
import { BuscadorPage } from '../Pages/BuscadorPage'

export const HeroesRoutes = () => {
  return (
    <>
        <NavBar/>
        <Routes>
            <Route path='marvel' element={<MarvelPage/>}/>
            <Route path='dc' element={<DCPage/>}/>
            <Route path='search' element={<BuscadorPage/>}/>
            <Route path='hero/:id' element={<HeroPage/>}/>
            {/* colocar el /: despues del path y id preferiblemente o cualquier cosa hace que si se cargue 
            la ruta y el mismo detecte que lo que siga despues sigue llevandolo a esa pagina
            el internamente detecta ese heroId como una ruta nueva y ese será el identificador que tendrá
            al momento de obtener el parametro de la URL */}
            <Route path='/' element={<Navigate to='/marvel'/>}/>
        </Routes>
    </>
  )
}
