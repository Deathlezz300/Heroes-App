import React from 'react'
import '../../assets/styles/NavBar.css'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
        <header className='head'>
            <h1 className='titulo-head'>Heroes</h1>
            <ul className='lista'>
                <NavLink className={({isActive})=>`item-list ${isActive ? 'active':''}`} to=''>Asociados</NavLink>
                <NavLink className={({isActive})=>`item-list ${isActive ? 'active':''}`} to='/marvel'>Marvel</NavLink>
                <NavLink className={({isActive})=>`item-list ${isActive ? 'active':''}`} to='/dc'>DC</NavLink>
                <NavLink className={({isActive})=>`item-list ${isActive ? 'active':''}`} to='/search'>Buscador</NavLink>
                <NavLink className={({isActive})=>`item-list ${isActive ? 'active':''}`} to=''>Logout</NavLink>
            </ul>
        </header>
    </>
  )
}
