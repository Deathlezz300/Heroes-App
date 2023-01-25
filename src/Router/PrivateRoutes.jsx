import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/Context/AuthContexto'
import { useLocation } from 'react-router-dom';

export const PrivateRoutes = ({children}) => {
  
    //Se crear otro componente para las rutas privadas, el cual no se habilitará a menos que el usuario ya se encuentre logeado

  const {user} = useContext(AuthContext);
  
  //Con esta se recuerda la ultima ruta del usuario en el programa
  const {pathname,search}=useLocation();
  
  const lasthPathName=pathname+search;
  localStorage.setItem('lastpath',JSON.stringify(lasthPathName));

  return (user.logged) ? children : <Navigate to='/'/>
    
}
