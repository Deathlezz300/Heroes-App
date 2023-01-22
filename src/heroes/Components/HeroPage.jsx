import React from 'react'
import { useParams } from 'react-router-dom'
import { getHeroID } from '../Helpers/getHeroesByPublisher';
import { HeroItem } from './HeroItem';
import { Navigate } from 'react-router-dom';

export const HeroPage = () => {

    const {id}=useParams();
    const hero=getHeroID(id);
    
    //En caso de se ingrese una url que no existe redirige a lo que nosotros le coloquemos
    if(!hero){
        return <Navigate to='/marvel'/>
    }

  return (
    <>
        <HeroItem id={hero.id} superhero={hero.superhero} alter_ego={hero.alter_ego} firts_ap={hero.first_appearance}
        characters={hero.characters}/>
    </>
  )
}
