import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/Context/AuthContexto'

//Con este componente lo que se hace es evaluar si el usuario no esta logeado, si no lo esta puede acceder al login,
//en caso de que lo este se le deshabilita el login y se le redirecciona a marvel

export const PublicRoutes = ({children}) => {
  
  const {user} = useContext(AuthContext);
  
    return (!user.logged) ? children : <Navigate to='/marvel'/>
}
