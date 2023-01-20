import React from 'react'
import '../../assets/styles/buscador.css'

export const Buscador = () => {
  return (
    <>
        <form className='container-form'>
            <h3>¿Qué heroe desea buscar?</h3>
            <input type="text" placeholder='Nombre Heroe' required className='input-buscador' />
        </form>
    </>
  )
}
