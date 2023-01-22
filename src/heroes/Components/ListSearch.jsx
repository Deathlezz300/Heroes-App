import React from 'react'
import { getHeroParameter } from '../Helpers/getHeroesByPublisher'
import { HeroItem } from './HeroItem'
import '../../assets/styles/heroList.css'
import { useMemo } from 'react'
import { useState } from 'react'

export const ListSearch = ({parametro}) => {

    const [data, setdata] = useState([]);

  useMemo(()=>{
     setdata(getHeroParameter(parametro));
     console.log(data);
  },[parametro]);

  return (
    <>
    <section className='box-grid'>
        <div className='grid'>
            {data.map(heroe=>{
                return <HeroItem key={heroe.id} id={heroe.id} superhero={heroe.superhero} alter_ego={heroe.alter_ego} firts_ap={heroe.first_appearance}
                characters={heroe.characters} LinkBar={true}/>
            })}
        </div>
    </section>
    </>
  )
}