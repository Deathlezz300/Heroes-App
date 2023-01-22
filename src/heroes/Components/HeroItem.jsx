import React from 'react'
import '../../assets/styles/hero.css';
import { Link } from 'react-router-dom';

export const HeroItem= ({id,superhero,alter_ego,firts_ap,characters}) => {

  const heroImageUrl=`/src/assets/images/heroes/${id}.jpg`;


  return (
    <>
        <div className='box-heroe'>
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
            <Link to={`/hero/${id}`}>Mas...</Link>
          </div>
        </div>
    </>
  )
}
