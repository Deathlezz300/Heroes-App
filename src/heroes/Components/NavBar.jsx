import React from 'react'
import '../../assets/styles/NavBar.css'
import { NavLink } from 'react-router-dom'
import { CambiarMenu,cerrarMenu } from '../Helpers/menu'
import { useNavigate } from 'react-router-dom'
import { memo } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../auth/Context/AuthContexto'

export const NavBar = memo(() => {

    const navegacion=useNavigate();

    const {user,logout} = useContext(AuthContext);

    //Elreplace en true nos sirve para poder eliminar el acceso a la ruta anterior en la que estaba el usuario
  const onLogout=({target})=>{
    logout();
    navegacion('/',{
        replace:true
    });
  }

  return (
    <>
        <input className='check-menu' type="checkbox" id='menu-check' />
        <ul className='lista2'>
                <NavLink  onClick={cerrarMenu} className={({isActive})=>`item-list item-list2 ${isActive ? 'active':''}`} to=''>Asociados</NavLink>
                <NavLink  onClick={cerrarMenu} className={({isActive})=>`item-list item-list2 ${isActive ? 'active':''}`} to='/marvel'>Marvel</NavLink>
                <NavLink  onClick={cerrarMenu} className={({isActive})=>`item-list item-list2 ${isActive ? 'active':''}`} to='/dc'>DC</NavLink>
                <NavLink  onClick={cerrarMenu} className={({isActive})=>`item-list item-list2 ${isActive ? 'active':''}`} to='/search'>Buscador</NavLink>
                <button  onClick={onLogout} className='boton-salir item-list item-list2'>Logout</button>
            </ul>
        <header className='head'>
            <h1 className='titulo-head'>Heroes</h1>
            <ul className='lista'>
                <NavLink className={({isActive})=>`item-list ${isActive ? 'active':''}`} to='/marvel'>Marvel</NavLink>
                <NavLink className={({isActive})=>`item-list ${isActive ? 'active':''}`} to='/dc'>DC</NavLink>
                <NavLink className={({isActive})=>`item-list ${isActive ? 'active':''}`} to='/search'>Buscador</NavLink>
                <p>{user?.user}</p>
                <button onClick={onLogout} className='item-list boton-salir boton-salir2'>Logout</button>
            </ul>
            <label className='label-menu' htmlFor="menu-check" id='label-menu' onClick={CambiarMenu}>
                <div className='div'></div>
                <div className='div'></div>
                <div className='div'></div>
            </label>
        </header>
    </>
  )
})
