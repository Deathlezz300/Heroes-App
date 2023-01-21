import React from 'react'
import '../../assets/styles/hero.css';
import imagen from '../../assets/images/heroes/dc-arrow.jpg';

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
            <p>{firts_ap}</p>
            <p>{characters}</p>
          </div>
        </div>
    </>
  )
}
