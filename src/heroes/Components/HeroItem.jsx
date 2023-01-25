import React, { useMemo } from 'react'
import '../../assets/styles/hero.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'animate.css';

export const HeroItem= ({id,superhero,alter_ego,firts_ap,characters,LinkBar}) => {

  const heroImageUrl=`/public/heroes/${id}.jpg`;

  const navegacion=useNavigate();

  const LinkBar2=()=>{
    if(LinkBar===false){
      return <a onClick={RegresarPagina}>Regresar</a>
    }else{
      return <Link to={`/hero/${id}`}>Mas...</Link>
    }
  }

  //-1 en el useNavigate lo que hace es llevarnos a la pagina donde estabamos anteriormente

  const RegresarPagina=()=>{
    navegacion(-1);
  }


  return (
    <>
        <div className='box-heroe animate__animated animate__fadeIn'>
          <div className='box-imagen-heroe'>
            <img className='imagen-heroe' src={heroImageUrl} alt="" />
          </div>
          <div className='info-heroe'>
            <h2>{superhero}</h2>
            <h3>{alter_ego}</h3>
            {
              (alter_ego!=characters) && (<p>{characters}</p>)
            }
            <p>{firts_ap}</p>
            {
              LinkBar2()
            }
          </div>
        </div>
    </>
  )
}
