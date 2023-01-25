import React from 'react'
import '../assets/styles/Login.css'
import { useForm } from '../Hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../auth/Context/AuthContexto'
import { useContext } from 'react'
import { types } from '../auth/Types/type'

export const LoginPage = () => {

  const {form,InputChange}=useForm({usuario:'',clave:''});

  const {login}=useContext(AuthContext);

  const navegacion=useNavigate();

  const lastPath=JSON.parse(localStorage.getItem('lastpath')) || '/marvel';

  const validarCredenciales=(evento)=>{
    evento.preventDefault();
    if(form.usuario!='' && form.clave!=''){
      login(form.usuario);
      console.log(lastPath);
      navegacion(lastPath,{
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
