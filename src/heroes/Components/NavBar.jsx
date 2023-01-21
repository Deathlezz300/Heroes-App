import React from 'react'
import '../../assets/styles/NavBar.css'
import { NavLink } from 'react-router-dom'
import { CambiarMenu,cerrarMenu } from '../Helpers/menu'

export const NavBar = () => {

  

  return (
    <>
        <input className='check-menu' type="checkbox" id='menu-check' />
        <ul className='lista2'>
                <NavLink  onClick={cerrarMenu} className={({isActive})=>`item-list item-list2 ${isActive ? 'active':''}`} to=''>Asociados</NavLink>
                <NavLink  onClick={cerrarMenu} className={({isActive})=>`item-list item-list2 ${isActive ? 'active':''}`} to='/marvel'>Marvel</NavLink>
                <NavLink  onClick={cerrarMenu} className={({isActive})=>`item-list item-list2 ${isActive ? 'active':''}`} to='/dc'>DC</NavLink>
                <NavLink  onClick={cerrarMenu} className={({isActive})=>`item-list item-list2 ${isActive ? 'active':''}`} to='/search'>Buscador</NavLink>
                <NavLink  onClick={cerrarMenu} className={({isActive})=>`item-list item-list2 ${isActive ? 'active':''}`} to=''>Logout</NavLink>
            </ul>
        <header className='head'>
            <h1 className='titulo-head'>Heroes</h1>
            <ul className='lista'>
                <NavLink className={({isActive})=>`item-list ${isActive ? 'active':''}`} to=''>Asociados</NavLink>
                <NavLink className={({isActive})=>`item-list ${isActive ? 'active':''}`} to='/marvel'>Marvel</NavLink>
                <NavLink className={({isActive})=>`item-list ${isActive ? 'active':''}`} to='/dc'>DC</NavLink>
                <NavLink className={({isActive})=>`item-list ${isActive ? 'active':''}`} to='/search'>Buscador</NavLink>
                <NavLink className={({isActive})=>`item-list ${isActive ? 'active':''}`} to=''>Logout</NavLink>
            </ul>
            <label className='label-menu' htmlFor="menu-check" id='label-menu' onClick={CambiarMenu}>
                <div className='div'></div>
                <div className='div'></div>
                <div className='div'></div>
            </label>
        </header>
    </>
  )
}
