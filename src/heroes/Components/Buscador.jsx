import React from 'react'
import '../../assets/styles/buscador.css'
import { useForm } from '../../Hooks/useForm'

export const Buscador = ({setParametro}) => {

  const {form,InputChange,ResetForm}=useForm({parametro:''});

  const cambiarBusqueda=(evento)=>{
    evento.preventDefault();
    ResetForm();
    setParametro(form.parametro);
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
