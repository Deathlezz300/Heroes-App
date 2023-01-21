import React from 'react'
import { getHeroesByPublisher } from '../Helpers/getHeroesByPublisher'
import { HeroItem } from './HeroItem'
import '../../assets/styles/heroList.css'

export const HeroeList = ({publisher}) => {
  return (
    <>
    <section className='box-grid'>
        <div className='grid'>
            {getHeroesByPublisher(publisher).map(heroe=>{
                return <HeroItem key={heroe.id} id={heroe.id} superhero={heroe.superhero} alter_ego={heroe.alter_ego} firts_ap={heroe.first_appearance}
                characters={heroe.characters}/>
            })}
        </div>
    </section>
    </>
  )
}
