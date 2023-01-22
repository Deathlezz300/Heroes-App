import React from 'react'
import { Buscador } from '../Components/Buscador'
import { ListSearch } from '../Components/ListSearch' 
import { useState } from 'react'


export const BuscadorPage = () => {
    
    const [busqueda, setbusqueda] = useState('');
    
    const cambiarBusqueda=(parametro)=>{
        setbusqueda(parametro)
    }

    return (
    <>
        <Buscador setParametro={(parametro)=>cambiarBusqueda(parametro)}/>
        <ListSearch parametro={busqueda}/>
    </>
  )
}
