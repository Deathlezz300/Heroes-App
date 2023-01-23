import React from 'react'
import '../../assets/styles/buscador.css'
import { useForm } from '../../Hooks/useForm'
import { useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'


export const Buscador = () => {

  const ubicacion=useLocation();

  //npm install query string, con esta librearia y el hook useLocation podemos obtener los parametros
  //del url de forma mucho mas sencilla

  const {q=''}=queryString.parse(ubicacion.search);
  const {form,InputChange}=useForm({parametro:q});
  const navegacion=useNavigate();
  

  const cambiarBusqueda=(evento)=>{
    evento.preventDefault();
    navegacion(`?q=${form.parametro.toLowerCase()}`);
    //Con esta linea seteamos el valor ingresado en la url y lo trabajamos como parametro de busqueda
  }


  return (
    <>
        <form onSubmit={cambiarBusqueda} className='container-form'>
            <h3>¿Qué heroe desea buscar?</h3>
            <input type="text" placeholder='Nombre Heroe' onChange={InputChange} name='parametro' required className='input-buscador' value={form.parametro} />
        </form>
    </>
  )
}
