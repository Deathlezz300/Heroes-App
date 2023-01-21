import React from 'react'
import '../assets/styles/Login.css'
import { useForm } from '../Hooks/useForm'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

  const {form,InputChange}=useForm({usuario:'',clave:''});

  const navegacion=useNavigate();

  const validarCredenciales=(evento)=>{
    evento.preventDefault();
    if(form.usuario==='usuario12' && form.clave==='hola12345'){
      navegacion('/marvel',{
        replace:true
      });
    }
  }

  return (
    <>
        <section className='box-login'>
          <form id='form' className='login'>
            <h2>Inicio de sesion</h2>
            <input value={form.usuario} onChange={InputChange} name='usuario'  type="text" required placeholder='Usuario' />
            <input value={form.clave} onChange={InputChange} name='clave' type="password" required placeholder='Contraseña' />
            <button onClick={validarCredenciales} value={form} form='form'>Ingresar</button>
          </form>
        </section>
    </>
  )
}
